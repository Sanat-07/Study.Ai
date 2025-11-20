import { useEffect, useRef } from 'react';

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Create gradient blobs
    const blobs = [
      { x: 0.2, y: 0.3, vx: 0.0005, vy: 0.0003, radius: 400, color: 'rgba(59, 130, 246, 0.15)' },
      { x: 0.7, y: 0.4, vx: -0.0003, vy: 0.0004, radius: 350, color: 'rgba(139, 92, 246, 0.12)' },
      { x: 0.5, y: 0.7, vx: 0.0004, vy: -0.0002, radius: 300, color: 'rgba(14, 165, 233, 0.1)' },
    ];

    let animationFrameId: number;

    const animate = () => {
      if (!canvas || !ctx) return;

      // Smooth cursor following
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.05;

      // Clear canvas with dark background
      ctx.fillStyle = '#0a0e1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach((blob) => {
        // Autonomous movement
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off edges
        if (blob.x < 0 || blob.x > 1) blob.vx *= -1;
        if (blob.y < 0 || blob.y > 1) blob.vy *= -1;

        // Calculate position influenced by mouse
        const mouseInfluence = 0.00008;
        const blobScreenX = blob.x * canvas.width;
        const blobScreenY = blob.y * canvas.height;
        const dx = mouseRef.current.x - blobScreenX;
        const dy = mouseRef.current.y - blobScreenY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let finalX = blobScreenX;
        let finalY = blobScreenY;

        if (distance > 0 && distance < 800) {
          const force = (800 - distance) * mouseInfluence;
          finalX += dx * force;
          finalY += dy * force;
        }

        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          finalX,
          finalY,
          0,
          finalX,
          finalY,
          blob.radius
        );

        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Add cursor glow effect
      const cursorGradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        200
      );
      cursorGradient.addColorStop(0, 'rgba(96, 165, 250, 0.08)');
      cursorGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cursorGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
