import { FileText, ClipboardList, Network, MessageSquare, BookOpen, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BookTopMenuProps {
  bookId: string;
}

export function BookTopMenu({ bookId }: BookTopMenuProps) {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Overview', path: `/book/${bookId}` },
    { icon: FileText, label: 'Summary', path: `/book/${bookId}/summary` },
    { icon: ClipboardList, label: 'Quiz', path: `/book/${bookId}/quiz` },
    { icon: Network, label: 'Mind Map', path: `/book/${bookId}/mindmap` },
    // { icon: MessageSquare, label: 'AI Chat', path: `/book/${bookId}/chat` },
    { icon: BookOpen, label: 'Reader', path: `/book/${bookId}/reader` },
  ];

  return (
    <div className="ml-64 border-b border-white/10 bg-white/5 backdrop-blur-sm sticky top-0 z-10">
      <nav className="flex items-center gap-1 px-6 overflow-x-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-all whitespace-nowrap ${isActive
                  ? 'border-blue-500 text-white'
                  : 'border-transparent text-gray-400 hover:text-white hover:border-white/20'
                }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
