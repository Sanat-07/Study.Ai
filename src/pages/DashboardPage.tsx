import { Upload, FileText, Mic, MoreHorizontal, LayoutGrid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { storageService } from '@/shared/services/storage.service';
import { useEffect, useState } from 'react';

export function DashboardPage() {
  const [userName, setUserName] = useState('Student');
  const [recentFiles, setRecentFiles] = useState<any[]>([]);

  useEffect(() => {
    const user = storageService.getUser();
    if (user) {
      setUserName(user.fullName);
    }
    const files = storageService.getFiles();
    setRecentFiles(files);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
      <div className="max-w-5xl mx-auto pt-10">

        {/* Top Actions */}
        <div className="flex items-center justify-end gap-4 mb-12">
          <button className="text-gray-400 hover:text-white transition-colors">
            <LayoutGrid size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <List size={20} />
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hey {userName}, what do you<br />wanna master?
          </h1>
          <p className="text-gray-500 text-lg">
            Upload anything and get interactive notes, flashcards, quizzes, and more
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link to="/upload" className="block group">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 h-full hover:bg-white/5 transition-all">
              <div className="mb-4 text-gray-400 group-hover:text-white transition-colors">
                <Upload size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-1">Upload</h3>
              <p className="text-sm text-gray-500">Image, file, audio, video</p>
            </div>
          </Link>

          <button className="block text-left w-full group">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 h-full hover:bg-white/5 transition-all">
              <div className="mb-4 text-gray-400 group-hover:text-white transition-colors">
                <FileText size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-1">Paste</h3>
              <p className="text-sm text-gray-500">YouTube, website, text</p>
            </div>
          </button>

          <button className="block text-left w-full group">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 h-full hover:bg-white/5 transition-all">
              <div className="mb-4 text-gray-400 group-hover:text-white transition-colors">
                <Mic size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-1">Record</h3>
              <p className="text-sm text-gray-500">Record live lecture</p>
            </div>
          </button>
        </div>

        {/* Study Sets */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold border-l-4 border-white pl-3">All Study Sets</h2>
            <div className="flex bg-[#111] rounded-lg p-1 border border-white/10">
              <button className="p-1.5 rounded bg-white/10 text-white"><LayoutGrid size={16} /></button>
              <button className="p-1.5 rounded text-gray-500 hover:text-white"><List size={16} /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentFiles.length === 0 ? (
              <div className="col-span-full text-center py-10 text-gray-500">
                No study sets yet. Upload a file to get started!
              </div>
            ) : (
              recentFiles.map((file, index) => (
                <Link to={`/book/${file.id || 'default-id'}`} key={index} className="block group">
                  <div className="bg-[#111] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all relative h-full">
                    <div className="absolute top-4 right-4 text-gray-500 hover:text-white cursor-pointer z-10">
                      <MoreHorizontal size={20} />
                    </div>
                    <h3 className="font-semibold text-lg mb-4 pr-6 truncate text-white group-hover:text-blue-400 transition-colors">{file.name}</h3>

                    <div className="space-y-2">
                      <div className="bg-[#1A1A1A] rounded px-3 py-2 text-sm text-red-400/80 border-l-2 border-red-500/50 flex items-center gap-2">
                        <span className="w-6 inline-block text-right text-gray-500 font-mono">199</span> Unfamiliar
                      </div>
                      <div className="bg-[#1A1A1A] rounded px-3 py-2 text-sm text-orange-400/80 border-l-2 border-orange-500/50 flex items-center gap-2">
                        <span className="w-6 inline-block text-right text-gray-500 font-mono">0</span> Learning
                      </div>
                      <div className="bg-[#1A1A1A] rounded px-3 py-2 text-sm text-blue-400/80 border-l-2 border-blue-500/50 flex items-center gap-2">
                        <span className="w-6 inline-block text-right text-gray-500 font-mono">0</span> Familiar
                      </div>
                      <div className="bg-[#1A1A1A] rounded px-3 py-2 text-sm text-green-400/80 border-l-2 border-green-500/50 flex items-center gap-2">
                        <span className="w-6 inline-block text-right text-gray-500 font-mono">0</span> Mastered
                      </div>
                    </div>
                  </div>
                </Link>
              )))}

            {/* Mock Item for visually checking layout if no files */}
            {recentFiles.length === 0 && (
              <div className="bg-[#111] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all relative opacity-50 pointer-events-none">
                <div className="absolute top-4 right-4 text-gray-500">
                  <MoreHorizontal size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-4 pr-6">Psychology of Learning</h3>

                <div className="space-y-2">
                  <div className="bg-[#1A1A1A] rounded px-3 py-2 text-sm text-red-400/80 border-l-2 border-red-500/50 flex items-center gap-2">
                    <span className="w-6 inline-block text-right text-gray-500 font-mono">199</span> Unfamiliar
                  </div>
                  <div className="bg-[#1A1A1A] rounded px-3 py-2 text-sm text-orange-400/80 border-l-2 border-orange-500/50 flex items-center gap-2">
                    <span className="w-6 inline-block text-right text-gray-500 font-mono">0</span> Learning
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}