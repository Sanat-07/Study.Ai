import { useState, useEffect } from 'react';
import { Search, Grid, List, Clock, FileText, Download, Filter, ArrowUpDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { storageService } from '@/shared/services/storage.service';

interface Book {
  id: string;
  title: string;
  author: string;
  type: 'pdf' | 'epub' | 'txt' | 'docx' | 'pptx' | 'url' | 'github' | 'image';
  size: string;
  uploadedAt: string;
  progress: number;
  thumbnail: string;
}

export function LibraryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Load books from localStorage
    const files = storageService.getFiles();
    const booksFromStorage: Book[] = files.map((file, index) => ({
      id: file.id,
      title: file.name.replace(/\.[^/.]+$/, ''), // Remove file extension
      author: 'Unknown', // We don't have author info yet
      type: file.type,
      size: file.size,
      uploadedAt: file.uploadedAt,
      progress: 0, // Default progress
      thumbnail: ['blue', 'purple', 'green', 'orange', 'cyan', 'pink'][index % 6] as any
    }));
    setBooks(booksFromStorage);
  }, []);

  const colorClasses = {
    blue: 'from-blue-500/20 to-blue-600/5',
    purple: 'from-purple-500/20 to-purple-600/5',
    green: 'from-green-500/20 to-green-600/5',
    orange: 'from-orange-500/20 to-orange-600/5',
    cyan: 'from-cyan-500/20 to-cyan-600/5',
    pink: 'from-pink-500/20 to-pink-600/5',
  };

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || book.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
      <div className="max-w-7xl mx-auto pt-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">My Library</h1>
          <p className="text-gray-500">
            All your uploaded books and study materials
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-white/20 transition-colors text-white placeholder-gray-600"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-[#111] border border-white/10 rounded-xl pl-11 pr-8 py-3 focus:outline-none focus:border-white/20 transition-colors appearance-none text-white cursor-pointer"
            >
              <option value="all" className="bg-[#111]">All Types</option>
              <option value="pdf" className="bg-[#111]">PDF</option>
              <option value="epub" className="bg-[#111]">EPUB</option>
              <option value="docx" className="bg-[#111]">DOCX</option>
              <option value="pptx" className="bg-[#111]">PPTX</option>
              <option value="url" className="bg-[#111]">URL</option>
              <option value="github" className="bg-[#111]">GitHub</option>
            </select>
          </div>

          {/* Sort */}
          <div className="relative">
            <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#111] border border-white/10 rounded-xl pl-11 pr-8 py-3 focus:outline-none focus:border-white/20 transition-colors appearance-none text-white cursor-pointer"
            >
              <option value="date" className="bg-[#111]">Date Added</option>
              <option value="name" className="bg-[#111]">Name</option>
              <option value="progress" className="bg-[#111]">Progress</option>
            </select>
          </div>

          {/* View Mode */}
          <div className="flex gap-2 bg-[#111] border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'
                }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'
                }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Books Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <Link
                key={book.id}
                to={`/book/${book.id}`}
                className="bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:bg-white/5 hover:border-white/20 transition-all group"
              >
                {/* Thumbnail */}
                <div className={`h-48 bg-gradient-to-br ${colorClasses[book.thumbnail as keyof typeof colorClasses]} flex items-center justify-center relative border-b border-white/5`}>
                  <FileText className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors" />
                  {book.progress === 100 && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/20 rounded-full text-xs font-medium">
                      Completed
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs uppercase font-medium border border-white/10 text-gray-300">
                    {book.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1 truncate text-white group-hover:text-blue-400 transition-colors">{book.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">by {book.author}</p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-500">Reading Progress</span>
                      <span className="text-blue-400 font-mono">{book.progress}%</span>
                    </div>
                    <div className="w-full bg-[#222] rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-blue-500 h-full transition-all duration-300"
                        style={{ width: `${book.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {book.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {book.uploadedAt}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-3">
            {filteredBooks.map((book) => (
              <Link
                key={book.id}
                to={`/book/${book.id}`}
                className="bg-[#111] border border-white/10 rounded-xl p-4 hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-6 group"
              >
                {/* Thumbnail */}
                <div className={`w-12 h-16 rounded bg-gradient-to-br ${colorClasses[book.thumbnail as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0`}>
                  <FileText className="w-6 h-6 text-white/30" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors truncate">{book.title}</h3>
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] uppercase text-gray-400 flex-shrink-0">
                      {book.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>by {book.author}</span>
                    <span>•</span>
                    <span>{book.size}</span>
                    <span>•</span>
                    <span>{book.uploadedAt}</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="w-48 flex-shrink-0 flex flex-col items-end">
                  <span className="text-blue-400 text-sm font-mono mb-1">{book.progress}%</span>
                  <div className="w-32 bg-[#222] rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-blue-500 h-full transition-all duration-300"
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-20 bg-[#111] border border-white/5 rounded-2xl mt-8">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">No books found</h3>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
              {searchQuery ? 'Try adjusting your search or filters to find what you\'re looking for.' : 'Upload your first book to get started with your learning journey.'}
            </p>
            <Link
              to="/upload"
              className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold transition-colors"
            >
              Upload Book
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
