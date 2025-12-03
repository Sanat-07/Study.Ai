import {
  FileText, Clock, Award, Flame, BookOpen, Target,
  Bookmark, StickyNote, Share2, Download,
  CheckCircle, Circle, Lightbulb, Play, ArrowLeft, Calendar,
  TrendingUp, MessageSquare, Network, ClipboardList,
  Star, Trophy, Zap
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

export function BookDetailsPage() {
  const { bookId } = useParams();
  const [activeTab, setActiveTab] = useState<'overview' | 'chapters' | 'progress' | 'notes'>('overview');
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const chapters = [
    { id: 1, title: 'Introduction to Psychology', pages: '1-24', completed: true, duration: '45 min', progress: 100, quizScore: 92, timeSpent: '45m' },
    { id: 2, title: 'The Science of Mind', pages: '25-52', completed: true, duration: '52 min', progress: 100, quizScore: 88, timeSpent: '52m' },
    { id: 3, title: 'Biological Psychology', pages: '53-89', completed: true, duration: '68 min', progress: 100, quizScore: 95, timeSpent: '68m' },
    { id: 4, title: 'Sensation and Perception', pages: '90-134', completed: true, duration: '72 min', progress: 100, quizScore: 90, timeSpent: '72m' },
    { id: 5, title: 'Learning and Memory', pages: '135-178', completed: true, duration: '65 min', progress: 100, quizScore: 87, timeSpent: '65m' },
    { id: 6, title: 'Cognitive Psychology', pages: '179-223', completed: false, duration: '58 min', progress: 45, quizScore: 0, timeSpent: '26m' },
    { id: 7, title: 'Human Development', pages: '224-267', completed: false, duration: '60 min', progress: 0, quizScore: 0, timeSpent: '0m' },
    { id: 8, title: 'Social Psychology', pages: '268-312', completed: false, duration: '55 min', progress: 0, quizScore: 0, timeSpent: '0m' },
  ];

  const notes = [
    { id: 1, chapter: 'Chapter 3', text: 'Neurotransmitters play crucial role in brain function', time: '2 hours ago', color: 'yellow' },
    { id: 2, chapter: 'Chapter 4', text: 'Gestalt principles help understand perception', time: '5 hours ago', color: 'blue' },
    { id: 3, chapter: 'Chapter 5', text: 'Memory consolidation happens during sleep', time: '1 day ago', color: 'green' },
  ];

  const bookmarks = [
    { id: 1, chapter: 'Chapter 5', page: 156, text: 'Memory consolidation during sleep' },
    { id: 2, chapter: 'Chapter 4', page: 112, text: 'Visual perception theories' },
    { id: 3, chapter: 'Chapter 3', page: 78, text: 'Neurotransmitter functions' },
  ];

  const weeklyActivity = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.2 },
    { day: 'Wed', hours: 1.8 },
    { day: 'Thu', hours: 4.1 },
    { day: 'Fri', hours: 2.9 },
    { day: 'Sat', hours: 5.2 },
    { day: 'Sun', hours: 3.5 },
  ];

  const maxHours = Math.max(...weeklyActivity.map(d => d.hours));

  return (
    <div className="ml-64 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/library"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Library
        </Link>

        {/* Book Header */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-40 h-52 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center border-2 border-blue-500/30 flex-shrink-0 shadow-xl">
              <FileText className="w-20 h-20 text-white/70" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Introduction to Psychology
                  </h1>
                  <p className="text-xl text-gray-400 mb-4">by John Doe</p>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="px-3 py-1.5 bg-white/10 rounded-lg">PDF</span>
                    <span className="px-3 py-1.5 bg-white/10 rounded-lg">12.4 MB</span>
                    <span className="px-3 py-1.5 bg-white/10 rounded-lg">312 Pages</span>
                    <span className="px-3 py-1.5 bg-white/10 rounded-lg flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Uploaded 2h ago
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-300">Overall Progress</span>
                  <span className="text-3xl font-bold text-blue-400">75%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden mb-2">
                  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full transition-all shadow-lg" style={{ width: '75%' }}></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>156 of 312 pages read</span>
                  <span>5 of 8 chapters completed</span>
                </div>
              </div>

              <div className="mt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30">
                  <Play className="w-5 h-5" />
                  Continue Reading - Page 156
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <div className="text-3xl font-bold">4h 32m</div>
                <div className="text-sm text-gray-400">Time Reading</div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Award className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <div className="text-3xl font-bold">87%</div>
                <div className="text-sm text-gray-400">Avg Quiz Score</div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Flame className="w-7 h-7 text-orange-400" />
              </div>
              <div>
                <div className="text-3xl font-bold">23</div>
                <div className="text-sm text-gray-400">AI Questions</div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <div className="text-3xl font-bold">5/8</div>
                <div className="text-sm text-gray-400">Chapters Done</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-white/5 p-2 rounded-xl border border-white/10">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${activeTab === 'overview'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
          >
            <BookOpen className="w-5 h-5" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('chapters')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${activeTab === 'chapters'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
          >
            <FileText className="w-5 h-5" />
            Chapters
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${activeTab === 'progress'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
          >
            <TrendingUp className="w-5 h-5" />
            Progress
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${activeTab === 'notes'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
          >
            <StickyNote className="w-5 h-5" />
            Notes & Bookmarks
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Learning Tools */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Learning Tools</h2>
              <div className="grid grid-cols-5 gap-4">
                <Link to={`/book/${bookId}/summary`} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/50 hover:scale-105 transition-all text-center group">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="font-bold mb-1">Summary</div>
                  <div className="text-xs text-gray-400">AI-generated</div>
                </Link>
                <Link to={`/book/${bookId}/quiz`} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 hover:scale-105 transition-all text-center group">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <ClipboardList className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="font-bold mb-1">Quiz</div>
                  <div className="text-xs text-gray-400">Test yourself</div>
                </Link>
                <Link to={`/book/${bookId}/mindmap`} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-500/50 hover:scale-105 transition-all text-center group">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Network className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="font-bold mb-1">Mind Map</div>
                  <div className="text-xs text-gray-400">Visualize</div>
                </Link>
                <Link to={`/book/${bookId}/chat`} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-green-500/50 hover:scale-105 transition-all text-center group">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="font-bold mb-1">Ask AI</div>
                  <div className="text-xs text-gray-400">Get answers</div>
                </Link>
                <Link to={`/book/${bookId}/reader`} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-orange-500/50 hover:scale-105 transition-all text-center group">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="font-bold mb-1">Reader</div>
                  <div className="text-xs text-gray-400">Page 156</div>
                </Link>
              </div>
            </div>

            {/* Reading Goal */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-green-400" />
                Reading Goal
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Finish by</label>
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-lg">
                    <Calendar className="w-4 h-4 text-green-400" />
                    <span>Dec 31, 2025</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Daily target</label>
                  <div className="px-4 py-3 bg-white/10 rounded-lg">
                    <span className="text-lg font-bold">30 pages/day</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Days remaining</label>
                  <div className="px-4 py-3 bg-white/10 rounded-lg">
                    <span className="text-lg font-bold text-green-400">42 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Suggestions */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                AI Study Suggestions
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Zap className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Review Chapter 3 concepts before moving to Chapter 6</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Zap className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Take a quiz on memory consolidation to reinforce learning</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Zap className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Create a mind map connecting Chapters 3, 4, and 5</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'chapters' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">All Chapters</h2>
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className={`bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer ${selectedChapter === chapter.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                onClick={() => setSelectedChapter(selectedChapter === chapter.id ? null : chapter.id)}
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 flex-shrink-0 relative">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-white/20"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 36}`}
                        strokeDashoffset={`${2 * Math.PI * 36 * (1 - chapter.progress / 100)}`}
                        className={chapter.completed ? 'text-green-400' : 'text-blue-400'}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold">{chapter.progress}%</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{chapter.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>Pages {chapter.pages}</span>
                          <span>•</span>
                          <span>{chapter.duration}</span>
                          <span>•</span>
                          <span>Time spent: {chapter.timeSpent}</span>
                        </div>
                      </div>
                      {chapter.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-500" />
                      )}
                    </div>

                    {selectedChapter === chapter.id && chapter.completed && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white/5 rounded-lg p-4">
                            <div className="text-sm text-gray-400 mb-1">Quiz Score</div>
                            <div className="text-2xl font-bold text-purple-400">{chapter.quizScore}%</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4">
                            <div className="text-sm text-gray-400 mb-1">Time Spent</div>
                            <div className="text-2xl font-bold text-blue-400">{chapter.timeSpent}</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4">
                            <div className="text-sm text-gray-400 mb-1">Status</div>
                            <div className="text-2xl font-bold text-green-400">✓ Done</div>
                          </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                          <Link to={`/book/${bookId}/summary`} className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-center transition-colors">
                            View Summary
                          </Link>
                          <Link to={`/book/${bookId}/quiz`} className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-center transition-colors">
                            Retake Quiz
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-6">
            {/* Weekly Activity */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Weekly Reading Activity</h3>
              <div className="flex items-end justify-between gap-4 h-64">
                {weeklyActivity.map((day, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="text-sm text-gray-400">{(day.hours).toFixed(1)}h</div>
                    <div className="w-full bg-white/10 rounded-t-lg relative" style={{ height: `${(day.hours / maxHours) * 100}%`, minHeight: '20px' }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg"></div>
                    </div>
                    <div className="text-sm font-semibold">{day.day}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                Achievements
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="font-bold mb-1">First Chapter</div>
                  <div className="text-xs text-gray-400">Completed</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Flame className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="font-bold mb-1">5 Day Streak</div>
                  <div className="text-xs text-gray-400">Achieved</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="font-bold mb-1">Quiz Master</div>
                  <div className="text-xs text-gray-400">90%+ Score</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 text-center opacity-50">
                  <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="font-bold mb-1">Book Complete</div>
                  <div className="text-xs text-gray-400">Locked</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="grid grid-cols-2 gap-6">
            {/* Notes */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <StickyNote className="w-6 h-6 text-yellow-400" />
                  My Notes ({notes.length})
                </h3>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm transition-colors">
                  + Add Note
                </button>
              </div>
              <div className="space-y-3">
                {notes.map((note) => (
                  <div key={note.id} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors border-l-4 border-yellow-400">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-400">{note.chapter}</div>
                      <div className="text-xs text-gray-500">{note.time}</div>
                    </div>
                    <div className="text-sm">{note.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bookmarks */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Bookmark className="w-6 h-6 text-blue-400" />
                  Bookmarks ({bookmarks.length})
                </h3>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm transition-colors">
                  + Add Bookmark
                </button>
              </div>
              <div className="space-y-3">
                {bookmarks.map((bookmark) => (
                  <div key={bookmark.id} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer border-l-4 border-blue-400">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-400">{bookmark.chapter}</div>
                      <div className="text-xs text-gray-500 px-2 py-1 bg-white/10 rounded">Page {bookmark.page}</div>
                    </div>
                    <div className="text-sm">{bookmark.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
