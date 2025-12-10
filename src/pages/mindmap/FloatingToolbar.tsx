import { Bold, Italic, Type } from 'lucide-react';

interface FloatingToolbarProps {
    isVisible: boolean;
    onColorChange: (color: string) => void;
}

const COLORS = [
    '#3b82f6', // Blue
    '#8b5cf6', // Violet
    '#06b6d4', // Cyan
    '#f59e0b', // Amber
    '#10b981', // Emerald
    '#ef4444', // Red
];

export function FloatingToolbar({ isVisible, onColorChange }: FloatingToolbarProps) {
    if (!isVisible) return null;

    return (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-[#111] border border-white/10 rounded-xl shadow-xl z-50 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-1 border-r border-white/10 pr-2">
                <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                    <Bold size={16} />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                    <Italic size={16} />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                    <Type size={16} />
                </button>
            </div>

            <div className="flex items-center gap-1.5 pl-2">
                {COLORS.map((color) => (
                    <button
                        key={color}
                        className="w-5 h-5 rounded-full hover:scale-110 transition-transform ring-1 ring-white/10"
                        style={{ backgroundColor: color }}
                        onClick={() => onColorChange(color)}
                    />
                ))}
            </div>
        </div>
    );
}
