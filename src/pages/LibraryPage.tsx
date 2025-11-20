import { useState } from 'react';
import { Search, Grid, List, Clock, FileText, Download, Filter, ArrowUpDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Book {
  id: string;
  title: string;
  author: string;
  type: 'pdf' | 'epub' | 'txt' | 'docx' | 'pptx' | 'url' | 'github';
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

  const books: Book[] = [
    {
      id: '1',
      title: 'Introduction to Psychology',
      author: 'John Doe',
      type: 'pdf',
      size: '12.4 MB',
      uploadedAt: '2 hours ago',
      progress: 75,
      thumbnail: 'blue'
    },
    {
      id: '2',
      title: 'Quantum Physics Basics',
      author: 'Jane Smith',
      type: 'epub',
      size: '8.7 MB',
      uploadedAt: '1 day ago',
      progress: 40,
      thumbnail: 'purple'
    },
    {
      id: '3',
      title: 'Modern History',
      author: 'Robert Johnson',
      type: 'pdf',
      size: '15.2 MB',
      uploadedAt: '3 days ago',
      progress: 90,
      thumbnail: 'green'
    },
    {
      id: '4',
      title: 'Advanced Mathematics',
      author: 'Emily Davis',
      type: 'docx',
      size: '10.1 MB',
      uploadedAt: '1 week ago',
      progress: 25,
      thumbnail: 'orange'
    },
    {
      id: '5',
      title: 'Biology Fundamentals',
      author: 'Michael Brown',
      type: 'pdf',
      size: '18.9 MB',
      uploadedAt: '2 weeks ago',
      progress: 60,
      thumbnail: 'cyan'
    },
    {
      id: '6',
      title: 'World Literature',
      author: 'Sarah Wilson',
      type: 'epub',
      size: '22.3 MB',
      uploadedAt: '3 weeks ago',
      progress: 100,
      thumbnail: 'pink'
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500/30 to-blue-600/30',
    purple: 'from-purple-500/30 to-purple-600/30',
    green: 'from-green-500/30 to-green-600/30',
    orange: 'from-orange-500/30 to-orange-600/30',
    cyan: 'from-cyan-500/30 to-cyan-600/30',
    pink: 'from-pink-500/30 to-pink-600/30',
  };

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || book.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="ml-64 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-3">My Library</h1>
          <p className="text-gray-400">
            All your uploaded books and study materials
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl pl-11 pr-8 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
            >
              <option value="all" className="bg-gray-900">All Types</option>
              <option value="pdf" className="bg-gray-900">PDF</option>
              <option value="epub" className="bg-gray-900">EPUB</option>
              <option value="docx" className="bg-gray-900">DOCX</option>
              <option value="pptx" className="bg-gray-900">PPTX</option>
              <option value="url" className="bg-gray-900">URL</option>
              <option value="github" className="bg-gray-900">GitHub</option>
            </select>
          </div>

          {/* Sort */}
          <div className="relative">
            <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl pl-11 pr-8 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
            >
              <option value="date" className="bg-gray-900">Date Added</option>
              <option value="name" className="bg-gray-900">Name</option>
              <option value="progress" className="bg-gray-900">Progress</option>
            </select>
          </div>

          {/* View Mode */}
          <div className="flex gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-blue-500' : 'hover:bg-white/5'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-blue-500' : 'hover:bg-white/5'
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
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-blue-500/50 transition-all group"
              >
                {/* Thumbnail */}
                <div className={`h-48 bg-gradient-to-br ${colorClasses[book.thumbnail as keyof typeof colorClasses]} flex items-center justify-center relative`}>
                  <FileText className="w-20 h-20 text-white/50" />
                  {book.progress === 100 && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 rounded-full text-xs">
                      Completed
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs uppercase">
                    {book.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg mb-1 truncate group-hover:text-blue-400 transition-colors">{book.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">by {book.author}</p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Reading Progress</span>
                      <span className="text-blue-400">{book.progress}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-blue-500 h-full transition-all duration-300"
                        style={{ width: `${book.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-400">
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
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-blue-500/50 transition-all flex items-center gap-6"
              >
                {/* Thumbnail */}
                <div className={`w-16 h-20 rounded-lg bg-gradient-to-br ${colorClasses[book.thumbnail as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0`}>
                  <FileText className="w-8 h-8 text-white/50" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg truncate">{book.title}</h3>
                    <span className="px-2 py-0.5 bg-white/10 rounded text-xs uppercase flex-shrink-0">
                      {book.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">by {book.author}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{book.size}</span>
                    <span>•</span>
                    <span>{book.uploadedAt}</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="w-48 flex-shrink-0">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-blue-400">{book.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
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
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl mb-2">No books found</h3>
            <p className="text-gray-400 mb-6">
              {searchQuery ? 'Try adjusting your search or filters' : 'Upload your first book to get started'}
            </p>
            <Link
              to="/upload"
              className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              Upload Book
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
