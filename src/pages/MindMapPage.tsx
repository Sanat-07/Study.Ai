import React, { useState } from 'react';
import { Download, Maximize, Plus, Minus } from 'lucide-react';
import PageTransition from '../components/PageTransition';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  children?: string[];
  type?: 'root' | 'main' | 'sub';
}

const initialNodes: Node[] = [
  // Root
  { id: 'root', label: 'Introduction to Psychology', x: 450, y: 350, color: '#3b82f6', type: 'root', children: ['hist', 'res', 'app', 'persp'] },

  // Level 1
  { id: 'hist', label: 'History & Foundations', x: 250, y: 150, color: '#8b5cf6', type: 'main', children: ['phil', 'wundt'] },
  { id: 'res', label: 'Research Methods', x: 250, y: 350, color: '#06b6d4', type: 'main' },
  { id: 'app', label: 'Applications', x: 650, y: 350, color: '#f59e0b', type: 'main', children: ['clin', 'edu', 'org'] },
  { id: 'persp', label: 'Major Perspectives', x: 250, y: 550, color: '#10b981', type: 'main', children: ['bio', 'cog', 'beh'] },

  // Level 2 (Left Side)
  { id: 'phil', label: 'Philosophical Roots', x: 100, y: 100, color: '#8b5cf6', type: 'sub' },
  { id: 'wundt', label: 'Wilhelm Wundt', x: 100, y: 200, color: '#8b5cf6', type: 'sub' },

  // Level 2 (Right Side)
  { id: 'clin', label: 'Clinical', x: 800, y: 250, color: '#f59e0b', type: 'sub' },
  { id: 'edu', label: 'Educational', x: 800, y: 350, color: '#f59e0b', type: 'sub' },
  { id: 'org', label: 'Organizational', x: 800, y: 450, color: '#f59e0b', type: 'sub' },

  // Level 2 (Bottom Left)
  { id: 'bio', label: 'Biological', x: 80, y: 480, color: '#10b981', type: 'sub' },
  { id: 'cog', label: 'Cognitive', x: 80, y: 560, color: '#10b981', type: 'sub' },
  { id: 'beh', label: 'Behavioral', x: 80, y: 640, color: '#10b981', type: 'sub' },

  // Extra nodes for Research methods (to match density of screenshot)
  { id: 'exp', label: 'Experimental', x: 80, y: 300, color: '#06b6d4', type: 'sub' },
  { id: 'obs', label: 'Observational', x: 80, y: 380, color: '#06b6d4', type: 'sub' },
];

// Add connections manually for extra nodes
const allNodes = [...initialNodes];
// Connect Research Methods to its children
const resNode = allNodes.find(n => n.id === 'res');
if (resNode) resNode.children = ['exp', 'obs'];


const MindMapPage: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Helper to draw bezier curves
  const drawPath = (start: Node, end: Node) => {
    const dx = end.x - start.x;
    // Calculate control points for smooth curves
    const controlPoint1 = { x: start.x + dx * 0.5, y: start.y };
    const controlPoint2 = { x: end.x - dx * 0.5, y: end.y };
    return `M ${start.x} ${start.y} C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${end.x} ${end.y}`;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <PageTransition className="h-[calc(100vh-100px)] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 px-6 pt-2">
        <div>
          <h2 className="text-xl font-bold font-heading text-white">Mind Map</h2>
          <p className="text-sm text-gray-400 mt-1">Introduction to Psychology - Chapter 1</p>
        </div>
        <div className="flex gap-4">
          <div className="flex bg-[#111] rounded-lg border border-white/10 p-1">
            <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded transition-colors shadow-lg shadow-blue-500/20">Map</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">Table</button>
          </div>
          <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-green-500/20">
            <Plus size={18} /> Add Node
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 bg-[#050505] border border-white/5 mx-6 mb-6 rounded-3xl relative overflow-hidden shadow-2xl">

        {/* Floating Toolbar */}
        <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
          <button onClick={() => setScale(s => Math.max(0.5, s - 0.1))} className="p-2.5 bg-[#111] border border-white/10 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <Minus size={20} />
          </button>
          <div className="px-4 py-2.5 bg-[#111] border border-white/10 rounded-xl font-mono text-sm font-bold text-white min-w-[4rem] text-center">
            {Math.round(scale * 100)}%
          </div>
          <button onClick={() => setScale(s => Math.min(2, s + 0.1))} className="p-2.5 bg-[#111] border border-white/10 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <Plus size={20} />
          </button>
          <div className="w-px h-8 bg-white/10 mx-2"></div>
          <button className="p-2.5 bg-[#111] border border-white/10 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <Maximize size={20} />
          </button>
          <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-white flex gap-2 items-center text-sm font-bold shadow-lg shadow-blue-500/20 transition-all ml-2">
            <Download size={18} /> Export PNG
          </button>
        </div>

        {/* Categories Legend */}
        <div className="absolute top-24 right-6 bg-[#111]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 z-20 w-48 shadow-xl">
          <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">CATEGORIES</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <span className="text-sm text-gray-300 font-medium">Main Topic</span>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div
          className="w-full h-full cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <svg className="w-full h-full" viewBox="0 0 900 700">
            <g transform={`translate(${offset.x}, ${offset.y}) scale(${scale})`} style={{ transformOrigin: 'center' }}>

              {/* Connections (Background) */}
              {allNodes.map(node => (
                node.children?.map(childId => {
                  const childNode = allNodes.find(n => n.id === childId);
                  if (!childNode) return null;
                  return (
                    <path
                      key={`${node.id}-${childId}`}
                      d={drawPath(node, childNode)}
                      fill="none"
                      stroke={node.color}
                      strokeWidth="2"
                      opacity="0.4"
                      className="transition-all duration-300"
                    />
                  );
                })
              ))}

              {/* Nodes */}
              {allNodes.map(node => (
                <g key={node.id} transform={`translate(${node.x}, ${node.y})`} className="group cursor-pointer">
                  {/* Outer Glow */}
                  <circle
                    r={node.type === 'root' ? 55 : 45}
                    fill="transparent"
                    stroke={node.color}
                    strokeWidth="1"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110"
                  />

                  {/* Main Circle */}
                  <circle
                    r={node.type === 'root' ? 45 : 35}
                    fill="#0A0A0A"
                    stroke={node.color}
                    strokeWidth="2"
                    className="transition-all duration-300 group-hover:stroke-[3px] shadow-2xl"
                  />

                  {/* Inner Tint */}
                  <circle
                    r={node.type === 'root' ? 45 : 35}
                    fill={node.color}
                    opacity="0.05"
                    className="group-hover:opacity-10 transition-opacity"
                  />

                  {/* Text Label */}
                  <foreignObject
                    x={node.type === 'root' ? -55 : -45}
                    y={node.type === 'root' ? -55 : -45}
                    width={node.type === 'root' ? 110 : 90}
                    height={node.type === 'root' ? 110 : 90}
                  >
                    <div className="w-full h-full flex items-center justify-center text-center p-2">
                      <p className={`font-medium leading-tight text-white/90 select-none ${node.type === 'root' ? 'text-xs font-bold' : 'text-[10px]'}`}>
                        {node.label}
                      </p>
                    </div>
                  </foreignObject>
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>
    </PageTransition>
  );
};

export default MindMapPage;