import {
    CheckSquare,
    Layers,
    BrainCircuit,
    Edit3,
    HelpCircle,
    FileText,
    Home,
    Sparkles
} from 'lucide-react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { storageService } from '@/shared/services/storage.service';

export function StudySidebar() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const user = storageService.getUser();

    const getLinkClass = (isActive: boolean) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
            ? 'text-[#0066FF] font-medium bg-blue-500/5'
            : 'text-gray-400 hover:bg-white/5 hover:text-white'
        }`;

    const menuItems = [
        { icon: FileText, label: 'Notes', path: `/book/${bookId}/notes-mode` },
        { icon: CheckSquare, label: 'Multiple Choice', path: `/book/${bookId}/quiz` },
        { icon: Layers, label: 'Flashcards', path: `/book/${bookId}/flashcards` },
        { icon: BrainCircuit, label: 'Mind Map', path: `/book/${bookId}/mindmap` },
        { icon: Edit3, label: 'Fill in the Blanks', path: `/book/${bookId}/fill-blanks` },
        { icon: HelpCircle, label: 'Open Questions', path: `/book/${bookId}/open-questions` },
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#050505] border-r border-white/5 flex flex-col z-40">
            {/* Header / Logo */}
            <div className="p-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center">
                        <Sparkles size={18} className="text-white" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Study.ai</span>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => getLinkClass(isActive)}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}

                <div className="my-4 border-t border-white/5 mx-2"></div>

                <button
                    onClick={() => navigate('/library')}
                    className={getLinkClass(false)}
                >
                    <Home size={20} />
                    <span>Home</span>
                </button>
            </nav>

            {/* Bottom Profile */}
            <div className="p-4 border-t border-white/5 mt-auto bg-[#050505]">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-[#111] border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0">
                        {user?.fullName?.[0] || 'T'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{user?.fullName || 'Test User'}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email || 'test@gmail.com'}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
