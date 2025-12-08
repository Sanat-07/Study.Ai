import { Upload, Library, BarChart3 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { storageService } from '@/shared/services/storage.service';

export function Sidebar() {
  const location = useLocation();
  const user = storageService.getUser();

  // Customizing to match the requested "Upload, Library, Progress" from user prompt text AND the mock visual style which shows "Study Sets, Podcast, Solve..."
  // User Prompt said: "upload, library, progres, profile"
  // Screenshot shows: "Study Sets, Podcast, Solve, Paper Grader, App"
  // I will prioritize the USER PROMPT textual request for the items, but use the LAYOUT of the mock.

  const finalNavItems = [
    { icon: Upload, label: 'Upload', path: '/upload' },
    { icon: Library, label: 'Library', path: '/library' },
    { icon: BarChart3, label: 'Progress', path: '/progress' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0A0A0A] border-r border-white/5 flex flex-col z-40">
      {/* Header / Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Link to="/library" className="text-xl font-bold text-[#0066FF] hover:opacity-80 transition-opacity">Study.ai</Link>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-4 space-y-1">
        {finalNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path);

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
          );
        })}
      </nav>

      {/* Bottom Profile */}
      <div className="p-4 border-t border-white/5 mt-auto">
        <Link to="/profile" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
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
