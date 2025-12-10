import { memo, useState, useRef, useEffect } from 'react';
import { Handle, Position, NodeProps, Node } from '@xyflow/react';
import { cn } from '@/lib/utils';
import { Plus, Minus } from 'lucide-react';

type MindMapNode = Node<{
    label: string;
    color?: string;
    isRoot?: boolean;
    onAddChild?: (id: string) => void;
    onCollapse?: (id: string, hidden: boolean) => void;
    collapsed?: boolean;
}, 'mindMap'>;

const MindMapNode = ({ id, data, selected }: NodeProps<MindMapNode>) => {
    const [isEditing, setIsEditing] = useState(false);
    const [label, setLabel] = useState(data.label);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        // Here you would typically bubble up the change to the parent flow state
        data.label = label;
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleBlur();
        }
    };

    const bgColor = data.color || '#3b82f6';
    const isRoot = data.isRoot;

    return (
        <div className="relative group">
            {/* Target Handle (Input) */}
            {!isRoot && (
                <Handle
                    type="target"
                    position={Position.Left}
                    className="w-1 h-1 !bg-transparent !border-none"
                />
            )}

            <div
                className={cn(
                    "rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-lg",
                    selected ? "ring-2 ring-white ring-offset-2 ring-offset-[#050505]" : "",
                    isRoot ? "w-[120px] h-[120px]" : "w-[90px] h-[90px]"
                )}
                style={{
                    backgroundColor: '#0A0A0A',
                    borderColor: bgColor,
                }}
                onDoubleClick={handleDoubleClick}
            >
                {/* Inner Tint */}
                <div
                    className="absolute inset-0 rounded-full opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none"
                    style={{ backgroundColor: bgColor }}
                />

                {/* Content */}
                <div className="px-2 text-center w-full">
                    {isEditing ? (
                        <input
                            ref={inputRef}
                            value={label}
                            onChange={(e) => setLabel(e.target.value)}
                            onBlur={handleBlur}
                            onKeyDown={handleKeyDown}
                            className="w-full bg-transparent text-center text-white outline-none text-sm font-medium"
                        />
                    ) : (
                        <span className={cn(
                            "text-white/90 block select-none",
                            isRoot ? "text-sm font-bold" : "text-xs font-medium"
                        )}>
                            {label}
                        </span>
                    )}
                </div>

                {/* Action Buttons (visible on hover/selected) */}
                <div className={cn(
                    "absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1 transition-opacity duration-200",
                    selected || isEditing ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}>
                    {/* Add Child Button */}
                    <button
                        onClick={() => data.onAddChild?.(id)}
                        className="p-1 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-lg"
                        title="Add Child (Tab)"
                    >
                        <Plus size={12} />
                    </button>
                    {/* Collapse Button (if has children logic implemented later) */}
                    <button
                        onClick={() => data.onCollapse?.(id, !data.collapsed)}
                        className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-lg"
                        title={data.collapsed ? "Expand" : "Collapse"}
                    >
                        {data.collapsed ? <Plus size={12} /> : <Minus size={12} />}
                    </button>
                </div>
            </div>

            {/* Source Handle (Output) */}
            <Handle
                type="source"
                position={Position.Right}
                className="w-1 h-1 !bg-transparent !border-none"
            />
        </div>
    );
};

export default memo(MindMapNode);
