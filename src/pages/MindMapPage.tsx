import React, { useState, useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  ReactFlowProvider,
  Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Download, Plus, Layout, Share2, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import MindMapNode from './mindmap/MindMapNode';
import { FloatingToolbar } from './mindmap/FloatingToolbar';
import { getLayoutedElements } from './mindmap/MindMapLayouts';
import { Link } from 'react-router-dom';

const initialNodes: Node[] = [
  { id: 'root', type: 'mindMap', data: { label: 'Psychology', isRoot: true, color: '#3b82f6' }, position: { x: 0, y: 0 } },
  { id: '1', type: 'mindMap', data: { label: 'History', color: '#8b5cf6' }, position: { x: -200, y: 100 } },
  { id: '2', type: 'mindMap', data: { label: 'Research', color: '#06b6d4' }, position: { x: 0, y: 100 } },
  { id: '3', type: 'mindMap', data: { label: 'Clinical', color: '#f59e0b' }, position: { x: 200, y: 100 } },
];

const initialEdges: Edge[] = [
  { id: 'e1-1', source: 'root', target: '1', animated: true, style: { stroke: '#8b5cf6' } },
  { id: 'e1-2', source: 'root', target: '2', animated: true, style: { stroke: '#06b6d4' } },
  { id: 'e1-3', source: 'root', target: '3', animated: true, style: { stroke: '#f59e0b' } },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const nodeTypes = useMemo(() => ({ mindMap: MindMapNode }), []);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges],
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNodeId(node.id);
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null);
  }, []);

  const onLayout = useCallback(
    (direction: string) => {
      const layouted = getLayoutedElements(nodes, edges, direction);
      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);
    },
    [nodes, edges, setNodes, setEdges],
  );

  // Function passed to nodes to add a child
  const onAddChild = useCallback((parentId: string) => {
    const parentNode = nodes.find((n) => n.id === parentId);
    if (!parentNode) return;

    const newId = `${parentId}-${Date.now()}`;
    const newNode: Node = {
      id: newId,
      type: 'mindMap',
      data: { label: 'New Node', color: parentNode.data.color }, // Inherit color
      position: {
        x: parentNode.position.x + 100,
        y: parentNode.position.y + 100,
      },
    };

    const newEdge: Edge = {
      id: `e${parentId}-${newId}`,
      source: parentId,
      target: newId,
      animated: true,
      style: { stroke: parentNode.data.color as string },
    };

    setNodes((nds) => nds.concat(newNode));
    setEdges((eds) => eds.concat(newEdge));

    // Auto layout after adding to keep it tidy? Optional.
    // onLayout('TB'); 
  }, [nodes, setNodes, setEdges]);

  // Inject the onAddChild function into node data
  const nodesWithHandlers = useMemo(() => {
    return nodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        onAddChild: onAddChild,
      },
    }));
  }, [nodes, onAddChild]);

  const handleColorChange = (color: string) => {
    if (!selectedNodeId) return;
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === selectedNodeId) {
          return {
            ...node,
            data: { ...node.data, color },
          };
        }
        return node;
      })
    );
    // Also update edge colors connected to this node?
  };

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodesWithHandlers}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        fitView
        className="bg-[#050505]"
      >
        <Background gap={16} size={1} color="rgba(255, 255, 255, 0.05)" />
        <Controls className="bg-[#111] border border-white/10 fill-white text-white" />

        {/* Top Controls Panel */}
        <Panel position="top-right" className="flex gap-2">
          <button
            onClick={() => onLayout('TB')}
            className="p-2 bg-[#111] border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium"
            title="Vertical Layout"
          >
            <Layout size={16} /> Tree
          </button>
          <button
            onClick={() => onLayout('LR')}
            className="p-2 bg-[#111] border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium"
            title="Horizontal Layout"
          >
            <Layout size={16} className="rotate-90" /> Flow
          </button>
        </Panel>
      </ReactFlow>

      <FloatingToolbar
        isVisible={!!selectedNodeId}
        onColorChange={handleColorChange}
      />
    </div>
  );
};

const MindMapPage: React.FC = () => {
  return (
    <PageTransition className="h-screen flex flex-col overflow-hidden bg-background">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-[#0A0A0A]">
        <div className="flex items-center gap-4">
          <Link to="/features" className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-white">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h2 className="text-lg font-bold font-heading text-white">Mind Map</h2>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Psychology 101</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Last edited just now</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-medium bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
            <Share2 size={16} /> Share
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 w-full h-full">
        <ReactFlowProvider>
          <Flow />
        </ReactFlowProvider>
      </div>
    </PageTransition>
  );
};

export default MindMapPage;