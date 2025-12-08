import { FileText, CheckSquare, Layers, Edit3, HelpCircle, Network, BarChart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { storageService } from '@/shared/services/storage.service';

export function StudySidebar() {
    const location = useLocation();
    const user = storageService.getUser();

    // Manually extract bookId from path since this component is rendered outside <Routes>
    // Format: /book/:bookId/...
    const pathParts = location.pathname.split('/');
    const bookId = pathParts[1] === 'book' ? pathParts[2] : '';

    const menuItems = [
        { icon: BarChart, label: 'Statistics', path: `/book/${bookId}/statistics` },
        { icon: FileText, label: 'Notes', path: `/book/${bookId}/notes-mode` },
        { icon: CheckSquare, label: 'Multiple Choice', path: `/book/${bookId}/quiz` },
        { icon: Layers, label: 'Flashcards', path: `/book/${bookId}/study` },
        { icon: Network, label: 'Mind Map', path: `/book/${bookId}/mindmap` },
        { icon: Edit3, label: 'Fill in the Blanks', path: `/book/${bookId}/fill-blanks` },
        { icon: HelpCircle, label: 'Open Questions', path: `/book/${bookId}/written-test` },
    ];

    // Identify active item
    const getIsActive = (path: string) => location.pathname === path;

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0A0A0A] border-r border-white/5 flex flex-col z-40">
            {/* Header / Logo */}
            <div className="p-6">
                <div className="flex items-center gap-2 mb-10 px-2">
                    <span className="text-xl font-bold text-[#0066FF]">Study.ai</span>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1 mt-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = getIsActive(item.path);

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${isActive
                                ? 'bg-white/10 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom Profile */}
            <div className="p-4 border-t border-white/5 mt-auto">
                <Link to={`/book/${bookId}/profile`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                        {user?.fullName?.[0] || 'S'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{user?.fullName || 'Student'}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email || 'student@example.com'}</p>
                    </div>
                </Link>
            </div>
        </aside>
    );
}
