import { useNavigate } from 'react-router-dom';
import { ChevronLeft, X } from 'lucide-react';

interface StudyHeaderProps {
    title: string;
    progress?: string;
    onBack?: () => void;
    className?: string;
}

export function StudyHeader({ title, progress, onBack, className = '' }: StudyHeaderProps) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate(-1);
        }
    };

    return (
        <div className={`sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between ${className}`}>
            <div className="flex items-center gap-4">
                <button
                    onClick={handleBack}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div>
                    <h1 className="text-lg font-bold text-white leading-tight">{title}</h1>
                    {progress && <p className="text-sm text-gray-400">{progress}</p>}
                </div>
            </div>

            <div className="flex items-center gap-2">
                {/* Utility buttons can go here if needed, or close button */}
                <button
                    onClick={() => navigate('/dashboard')}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                    title="Exit Study Mode"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
