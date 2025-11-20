import { Brain, CheckCircle, Circle, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Chapter {
  id: number;
  title: string;
  pages: string;
  completed: boolean;
}

interface BookSidebarProps {
  bookId: string;
  chapters: Chapter[];
}

export function BookSidebar({ bookId, chapters }: BookSidebarProps) {
  // const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white/5 backdrop-blur-sm border-r border-white/10 overflow-y-auto">
      {/* Header */}
      <Link to="/dashboard" className="flex items-center gap-2 p-6 mb-2 border-b border-white/10">
        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
          <Brain className="w-5 h-5" />
        </div>
        <span className="text-lg">AI StudyBook</span>
      </Link>

      {/* Back to Library */}
      <div className="px-6 py-4 border-b border-white/10">
        <Link
          to="/library"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Library
        </Link>
      </div>

      {/* Book Title */}
      <div className="px-6 py-4 border-b border-white/10">
        <h2 className="mb-1 truncate">Introduction to Psychology</h2>
        <p className="text-sm text-gray-400">by John Doe</p>
      </div>

      {/* Chapters */}
      <div className="p-3">
        <div className="text-xs text-gray-400 px-3 mb-2">CHAPTERS</div>
        <nav className="space-y-1">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/book/${bookId}/reader?chapter=${chapter.id}`}
              className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
            >
              {chapter.completed ? (
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              ) : (
                <Circle className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1 min-w-0">
                <div className="text-sm truncate group-hover:text-white transition-colors">
                  {chapter.id}. {chapter.title}
                </div>
                <div className="text-xs text-gray-500">Pages {chapter.pages}</div>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
