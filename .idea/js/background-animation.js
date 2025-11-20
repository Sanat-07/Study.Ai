
class Blob {
    constructor(canvas, color, speed, sizeMultiplier) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.color = color;
        this.speed = speed;
        this.sizeMultiplier = sizeMultiplier;
        
        // Random initial position
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // Target position (starts at current)
        this.targetX = this.x;
        this.targetY = this.y;
        
        // Random movement offsets
        this.angle = Math.random() * Math.PI * 2;
        this.radius = (Math.random() * 150 + 100) * sizeMultiplier;
        
        // Floating parameters
        this.floatSpeed = Math.random() * 0.01 + 0.005;
        this.floatRadius = Math.random() * 50 + 20;
    }

    update(mouseX, mouseY) {
        // Natural floating movement
        this.angle += this.floatSpeed;
        const floatX = Math.cos(this.angle) * this.floatRadius;
        const floatY = Math.sin(this.angle) * this.floatRadius;

        // Gravity pull effect towards cursor
        // Calculate distance to mouse relative to screen center to create a parallax/pull effect
        // rather than just following the mouse directly which would clump them together
        
        // If mouse is active (not null)
        if (mouseX !== null) {
            // Calculate a target based on original relative position + mouse influence
            // This makes them "lean" towards the mouse without losing their spread
            const dx = mouseX - this.canvas.width / 2;
            const dy = mouseY - this.canvas.height / 2;
            
            this.targetX = (this.canvas.width / 2) + floatX + (dx * this.speed);
            this.targetY = (this.canvas.height / 2) + floatY + (dy * this.speed);
        } else {
            // If no mouse, just float around center/random spots
            this.targetX = (this.canvas.width / 2) + floatX + Math.cos(this.angle * 0.5) * 200;
            this.targetY = (this.canvas.height / 2) + floatY + Math.sin(this.angle * 0.5) * 200;
        }

        // Smooth easing (lerp)
        this.x += (this.targetX - this.x) * 0.05;
        this.y += (this.targetY - this.y) * 0.05;
    }

    draw() {
        this.ctx.beginPath();
        // Create gradient for soft glowing look
        const gradient = this.ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.radius
        );
        
        // Parse hex color to rgba for gradient
        const c = this.hexToRgb(this.color);
        
        gradient.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, 0.6)`);
        gradient.addColorStop(0.5, `rgba(${c.r}, ${c.g}, ${c.b}, 0.3)`);
        gradient.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);

        this.ctx.fillStyle = gradient;
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    }
}

class BackgroundAnimation {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.blobs = [];
        this.mouseX = null;
        this.mouseY = null;
        
        this.init();
    }

    init() {
        // Setup canvas
        this.canvas.id = 'bg-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';
        // Use screen blending for glowing effect
        this.canvas.style.mixBlendMode = 'screen'; 
        
        // Insert as first child of body
        document.body.insertBefore(this.canvas, document.body.firstChild);

        // Resize handler
        window.addEventListener('resize', () => this.resize());
        this.resize();

        // Mouse movement handler
        window.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        // Create blobs
        // Colors: #2563eb (blue-600), #1e3a8a (blue-900), #3b82f6 (blue-500)
        // Different speeds for parallax effect
        this.blobs.push(new Blob(this.canvas, '#2563eb', 0.8, 1.2)); // Fast, large
        this.blobs.push(new Blob(this.canvas, '#1e3a8a', 0.4, 1.5)); // Slow, very large (background)
        this.blobs.push(new Blob(this.canvas, '#3b82f6', 0.6, 1.0)); // Medium
        this.blobs.push(new Blob(this.canvas, '#60a5fa', 1.0, 0.8)); // Extra accent, fast, small

        // Start loop
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Optional: Dark background base if needed, but body usually handles it.
        // Since we use mix-blend-mode screen, we want a dark underlying bg.
        
        // Update and draw blobs
        this.blobs.forEach(blob => {
            blob.update(this.mouseX, this.mouseY);
            blob.draw();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new BackgroundAnimation();
});
