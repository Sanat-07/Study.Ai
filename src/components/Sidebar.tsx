import { Library, UploadCloud, BarChart2, Layers, BrainCircuit, FileText, Settings, LogOut, Sparkles } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { storageService } from '@/shared/services/storage.service';

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  // const user = storageService.getUser();

  // Helper to determine active state styling
  const getLinkClass = (isActive: boolean) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
      ? 'text-[#0066FF] font-medium bg-blue-500/5'
      : 'text-gray-400 hover:bg-white/5 hover:text-white'
    }`;

  const isStudyMode = location.pathname.includes('/book/') ||
    location.pathname.includes('/quiz') ||
    location.pathname.includes('/flashcards') ||
    location.pathname.includes('/mindmap') ||
    location.pathname.includes('/notes');

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#050505] border-r border-white/5 flex flex-col z-40">
      {/* Header / Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center">
          <Sparkles size={18} className="text-white" />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">Study.ai</span>
      </div>

      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Main</p>
        <NavLink to="/library" className={({ isActive }) => getLinkClass(isActive)}>
          <Library size={20} />
          <span>Library</span>
        </NavLink>
        <NavLink to="/upload" className={({ isActive }) => getLinkClass(isActive)}>
          <UploadCloud size={20} />
          <span>Upload</span>
        </NavLink>
        <NavLink to="/progress" className={({ isActive }) => getLinkClass(isActive)}>
          <BarChart2 size={20} />
          <span>Progress</span>
        </NavLink>
        <NavLink to="/statistics" className={({ isActive }) => getLinkClass(isActive)}>
          <Layers size={20} />
          <span>Statistics</span>
        </NavLink>

        {isStudyMode && (
          <div className="mt-8 space-y-2">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Study Mode</p>
            <NavLink to={location.pathname.replace(/\/(quiz|flashcards|mindmap|notes).*$/, '/quiz')} className={({ isActive }) => getLinkClass(isActive || location.pathname.endsWith('/quiz'))}>
              <BrainCircuit size={20} />
              <span>Quiz</span>
            </NavLink>
            <NavLink to={location.pathname.replace(/\/(quiz|flashcards|mindmap|notes).*$/, '/flashcards')} className={({ isActive }) => getLinkClass(isActive || location.pathname.endsWith('/flashcards'))}>
              <Layers size={20} />
              <span>Flashcards</span>
            </NavLink>
            <NavLink to={location.pathname.replace(/\/(quiz|flashcards|mindmap|notes).*$/, '/mindmap')} className={({ isActive }) => getLinkClass(isActive || location.pathname.endsWith('/mindmap'))}>
              <BrainCircuit size={20} />
              <span>Mind Map</span>
            </NavLink>
            <NavLink to={location.pathname.replace(/\/(quiz|flashcards|mindmap|notes).*$/, '/notes')} className={({ isActive }) => getLinkClass(isActive || location.pathname.endsWith('/notes'))}>
              <FileText size={20} />
              <span>Notes</span>
            </NavLink>
          </div>
        )}
      </nav>

      {/* Bottom Profile */}
      <div className="p-4 border-t border-white/5 mt-auto bg-[#050505]">
        <NavLink to="/profile" className={({ isActive }) => getLinkClass(isActive)}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all mt-2"
        >
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
