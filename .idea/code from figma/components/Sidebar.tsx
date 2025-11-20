import { Brain, Upload, LayoutDashboard, Library, BarChart3, User, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { icon: Upload, label: 'Upload', path: '/upload' },
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Library, label: 'Library', path: '/library' },
    { icon: BarChart3, label: 'Progress', path: '/progress' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white/5 backdrop-blur-sm border-r border-white/10 overflow-y-auto">
      <Link to="/dashboard" className="flex items-center gap-2 p-6 mb-2">
        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
          <Brain className="w-5 h-5" />
        </div>
        <span className="text-lg">AI StudyBook</span>
      </Link>

      <nav className="px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all group ${
                isActive 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? '' : 'group-hover:scale-110 transition-transform'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
