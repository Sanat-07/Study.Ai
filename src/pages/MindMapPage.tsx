import { useState } from 'react';
import { ZoomIn, ZoomOut, Maximize2, Download } from 'lucide-react';
import { StudyHeader } from '@/components/study/StudyHeader';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  children?: string[];
  expanded?: boolean;
}

export function MindMapPage() {
  const [zoom, setZoom] = useState(1);

  const [nodes] = useState<Node[]>([
    { id: 'root', label: 'Introduction to\nPsychology', x: 400, y: 300, color: '#3b82f6', expanded: true },
    { id: 'history', label: 'History &\nFoundations', x: 200, y: 150, color: '#8b5cf6', expanded: true },
    { id: 'methods', label: 'Research\nMethods', x: 200, y: 300, color: '#06b6d4', expanded: true },
    { id: 'perspectives', label: 'Major\nPerspectives', x: 200, y: 450, color: '#10b981', expanded: true },
    { id: 'applications', label: 'Applications', x: 600, y: 300, color: '#f59e0b', expanded: true },

    // Children nodes
    { id: 'philosophical', label: 'Philosophical\nRoots', x: 50, y: 100, color: '#8b5cf6' },
    { id: 'wundt', label: 'Wilhelm\nWundt', x: 50, y: 180, color: '#8b5cf6' },

    { id: 'experimental', label: 'Experimental', x: 50, y: 280, color: '#06b6d4' },
    { id: 'observational', label: 'Observational', x: 50, y: 340, color: '#06b6d4' },

    { id: 'biological', label: 'Biological', x: 50, y: 420, color: '#10b981' },
    { id: 'cognitive', label: 'Cognitive', x: 50, y: 470, color: '#10b981' },
    { id: 'behavioral', label: 'Behavioral', x: 50, y: 520, color: '#10b981' },

    { id: 'clinical', label: 'Clinical', x: 750, y: 250, color: '#f59e0b' },
    { id: 'educational', label: 'Educational', x: 750, y: 310, color: '#f59e0b' },
    { id: 'organizational', label: 'Organizational', x: 750, y: 370, color: '#f59e0b' },
  ]);

  const connections = [
    { from: 'root', to: 'history' },
    { from: 'root', to: 'methods' },
    { from: 'root', to: 'perspectives' },
    { from: 'root', to: 'applications' },
    { from: 'history', to: 'philosophical' },
    { from: 'history', to: 'wundt' },
    { from: 'methods', to: 'experimental' },
    { from: 'methods', to: 'observational' },
    { from: 'perspectives', to: 'biological' },
    { from: 'perspectives', to: 'cognitive' },
    { from: 'perspectives', to: 'behavioral' },
    { from: 'applications', to: 'clinical' },
    { from: 'applications', to: 'educational' },
    { from: 'applications', to: 'organizational' },
  ];

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300" style={{ backgroundColor: '#0A0A0A' }}>
      <StudyHeader
        title="Mind Map"
        progress="Introduction to Psychology - Chapter 1"
        onBack={() => window.history.back()}
      />

      <div className="p-4 border-b border-white/10 flex items-center justify-end gap-3 sticky top-[65px] bg-[#0A0A0A] z-10">
        <button
          onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2 text-white"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="px-4 py-2 bg-white/5 rounded-lg min-w-[80px] text-center text-white font-mono">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={() => setZoom(Math.min(2, zoom + 0.1))}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2 text-white"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2 text-white">
          <Maximize2 className="w-4 h-4" />
          Fit
        </button>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 text-white shadow-lg shadow-blue-900/20">
          <Download className="w-4 h-4" />
          Export PNG
        </button>
      </div>

      {/* Mind Map Canvas */}
      <div className="flex-1 relative bg-[#0A0A0A] overflow-auto cursor-grab active:cursor-grabbing">
        <div
          className="min-w-full min-h-full flex items-center justify-center p-20"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center top' }}
        >
          <svg
            width="1000"
            height="800"
            viewBox="0 0 1000 800"
            className="overflow-visible"
          >
            {/* Connections */}
            {connections.map((conn, index) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              const midY = (fromNode.y + toNode.y) / 2;
              const dx = toNode.x - fromNode.x;
              const curve = Math.abs(dx) * 0.5;

              return (
                <g key={index}>
                  <path
                    d={`M ${fromNode.x} ${fromNode.y} Q ${fromNode.x + (dx > 0 ? curve : -curve)} ${midY}, ${toNode.x} ${toNode.y}`}
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                    fill="none"
                  />
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              const isRoot = node.id === 'root';
              const size = isRoot ? 140 : 120;
              const fontSize = isRoot ? '16' : '13';

              return (
                <g key={node.id} className="cursor-pointer hover:opacity-90 transition-opacity">
                  {/* Node circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={size / 2}
                    fill={node.color}
                    fillOpacity="0.2"
                    stroke={node.color}
                    strokeWidth="2"
                  />

                  {/* Text */}
                  <text
                    x={node.x}
                    y={node.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize={fontSize}
                    fontWeight={isRoot ? 'bold' : 'normal'}
                    style={{ pointerEvents: 'none' }}
                  >
                    {node.label.split('\n').map((line, i) => (
                      <tspan key={i} x={node.x} dy={i === 0 ? 0 : '1.2em'}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-xs">
          <h3 className="text-sm font-bold text-white mb-2">Interactive Mind Map</h3>
          <p className="text-xs text-gray-400">
            Click on nodes to expand and explore subtopics. Use the controls above to zoom and export.
          </p>
        </div>

        {/* Legend */}
        <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-4">
          <h3 className="text-sm font-bold text-white mb-3">Categories</h3>
          <div className="space-y-2 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>Main Topic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span>History</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
              <span>Methods</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Perspectives</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span>Applications</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}