import { useState } from 'react';
import { ZoomIn, ZoomOut, Maximize2, Download, Table as TableIcon, LayoutGrid, Trash2, Plus, Save, X } from 'lucide-react';
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
  const [viewMode, setViewMode] = useState<'map' | 'table'>('map');
  const [zoom, setZoom] = useState(1);

  const [nodes, setNodes] = useState<Node[]>([
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

  // Edits state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Node>>({});

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

  // CRUD Operations
  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this node?')) {
      setNodes(nodes.filter(n => n.id !== id));
    }
  };

  const handleAddNode = () => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      label: 'New Node',
      x: 400,
      y: 300,
      color: '#ffffff',
      expanded: true
    };
    setNodes([...nodes, newNode]);
    // Automatically start editing the new node
    setEditingId(newNode.id);
    setEditForm(newNode);
  };

  const startEditing = (node: Node) => {
    setEditingId(node.id);
    setEditForm({ ...node });
  };

  const saveEdit = () => {
    if (editingId && editForm) {
      setNodes(nodes.map(n => n.id === editingId ? { ...n, ...editForm } as Node : n));
      setEditingId(null);
      setEditForm({});
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300" style={{ backgroundColor: '#0A0A0A' }}>
      <StudyHeader
        title="Mind Map"
        progress="Introduction to Psychology - Chapter 1"
        onBack={() => window.history.back()}
      />

      {/* Control Bar */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between sticky top-[65px] bg-[#0A0A0A] z-10">

        {/* Left: View Toggles & Add */}
        <div className="flex items-center gap-3">
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1.5 rounded flex items-center gap-2 text-sm transition-colors ${viewMode === 'map' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <LayoutGrid size={16} />
              Map
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded flex items-center gap-2 text-sm transition-colors ${viewMode === 'table' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <TableIcon size={16} />
              Table
            </button>
          </div>

          <button
            onClick={handleAddNode}
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white text-sm flex items-center gap-2 transition-colors font-medium ml-2"
          >
            <Plus size={16} />
            Add Node
          </button>
        </div>

        {/* Right: Zoom & Export */}
        <div className="flex items-center gap-3">
          {viewMode === 'map' && (
            <>
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
            </>
          )}
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 text-white shadow-lg shadow-blue-900/20">
            <Download className="w-4 h-4" />
            Export PNG
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 relative bg-[#0A0A0A] overflow-hidden">

        {viewMode === 'map' ? (
          /* MAP VIEW */
          <div className="w-full h-full overflow-auto cursor-grab active:cursor-grabbing">
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
                    <g key={node.id} className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => startEditing(node)}>
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
          </div>
        ) : (
          /* TABLE VIEW */
          <div className="w-full h-full p-8 overflow-auto">
            <div className="max-w-6xl mx-auto bg-[#111] rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-gray-400 text-sm">
                    <th className="p-4 font-medium">Node Label</th>
                    <th className="p-4 font-medium">Color</th>
                    <th className="p-4 font-medium">X Position</th>
                    <th className="p-4 font-medium">Y Position</th>
                    <th className="p-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {nodes.map(node => (
                    <tr key={node.id} className="hover:bg-white/5 transition-colors group">
                      {editingId === node.id ? (
                        <>
                          <td className="p-4">
                            <input
                              type="text"
                              value={editForm.label || ''}
                              onChange={e => setEditForm({ ...editForm, label: e.target.value })}
                              className="w-full bg-[#222] border border-white/20 rounded px-2 py-1 text-white focus:outline-none focus:border-blue-500"
                            />
                          </td>
                          <td className="p-4">
                            <input
                              type="color"
                              value={editForm.color || '#000000'}
                              onChange={e => setEditForm({ ...editForm, color: e.target.value })}
                              className="bg-transparent border-none w-8 h-8 cursor-pointer"
                            />
                          </td>
                          <td className="p-4">
                            <input
                              type="number"
                              value={editForm.x || 0}
                              onChange={e => setEditForm({ ...editForm, x: Number(e.target.value) })}
                              className="w-24 bg-[#222] border border-white/20 rounded px-2 py-1 text-white focus:outline-none focus:border-blue-500"
                            />
                          </td>
                          <td className="p-4">
                            <input
                              type="number"
                              value={editForm.y || 0}
                              onChange={e => setEditForm({ ...editForm, y: Number(e.target.value) })}
                              className="w-24 bg-[#222] border border-white/20 rounded px-2 py-1 text-white focus:outline-none focus:border-blue-500"
                            />
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button onClick={saveEdit} className="p-2 text-green-400 hover:bg-green-500/10 rounded-lg transition-colors" title="Save">
                                <Save size={18} />
                              </button>
                              <button onClick={cancelEdit} className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" title="Cancel">
                                <X size={18} />
                              </button>
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="p-4 font-medium text-white">
                            <div className="whitespace-pre-line">{node.label}</div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: node.color }}></div>
                              <span className="text-gray-500 text-xs font-mono">{node.color}</span>
                            </div>
                          </td>
                          <td className="p-4 text-gray-400 font-mono">{node.x}</td>
                          <td className="p-4 text-gray-400 font-mono">{node.y}</td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => startEditing(node)}
                                className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-md transition-colors"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(node.id)}
                                className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                title="Delete"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
              {nodes.length === 0 && (
                <div className="p-12 text-center text-gray-500">
                  No nodes found. Click "Add Node" to create one.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Legend (Only in Map View) */}
        {viewMode === 'map' && (
          <>
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-xs pointer-events-none">
              <h3 className="text-sm font-bold text-white mb-2">Interactive Mind Map</h3>
              <p className="text-xs text-gray-400">
                Click on nodes to edit or drag (dragging not implemented). Switch to Table view for full control.
              </p>
            </div>

            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 pointer-events-none">
              <h3 className="text-sm font-bold text-white mb-3">Categories</h3>
              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Main Topic</span>
                </div>
                {/* ... other legend items ... */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}