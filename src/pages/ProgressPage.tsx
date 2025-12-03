import { TrendingUp, Award, Target, Book, Flame, Calendar, Trophy, Zap, Star } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { storageService } from '@/shared/services/storage.service';
import { useState, useEffect } from 'react';

interface Book {
  title: string;
  progress: number;
  chapters: string;
}

export function ProgressPage() {
  const weeklyData = [
    { name: 'Mon', hours: 2.5 },
    { name: 'Tue', hours: 3.2 },
    { name: 'Wed', hours: 1.8 },
    { name: 'Thu', hours: 4.1 },
    { name: 'Fri', hours: 2.9 },
    { name: 'Sat', hours: 5.2 },
    { name: 'Sun', hours: 3.5 },
  ];

  const skillData = [
    { subject: 'Math', score: 85 },
    { subject: 'Science', score: 92 },
    { subject: 'History', score: 78 },
    { subject: 'Literature', score: 88 },
    { subject: 'Languages', score: 75 },
  ];

  const [books, setBooks] = useState<Book[]>([]);
  const [booksCompleted, setBooksCompleted] = useState(0);
  const [totalStudyHours, setTotalStudyHours] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const stats = storageService.getStats();
    const files = storageService.getFiles();

    setBooksCompleted(stats.booksUploaded);
    setTotalStudyHours(stats.studyHours);
    setStreak(stats.streak);

    const booksProgress = files.slice(0, 3).map(file => ({
      title: file.name.replace(/\.[^/.]+$/, ''),
      progress: Math.floor(Math.random() * 100),
      chapters: `${Math.floor(Math.random() * 10)}/10`
    }));
    setBooks(booksProgress);
  }, []);

  return (
    <div className="ml-64 min-h-screen p-8 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Your Progress
          </h1>
          <p className="text-gray-400 text-lg">Track your learning journey and achievements</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Book className="w-6 h-6 text-blue-400" />
                </div>
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-4xl font-bold mb-1">{booksCompleted}</div>
              <div className="text-sm text-gray-400">Books Completed</div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <Trophy className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-4xl font-bold mb-1">95%</div>
              <div className="text-sm text-gray-400">Average Score</div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-400" />
                </div>
                <Flame className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-4xl font-bold mb-1">{totalStudyHours}h</div>
              <div className="text-sm text-gray-400">Total Study Time</div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <Star className="w-5 h-5 text-orange-400" />
              </div>
              <div className="text-4xl font-bold mb-1">{streak}</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Weekly Activity */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              Weekly Activity
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#9ca3af' }}
                />
                <Bar dataKey="hours" fill="url(#blueGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Radar */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-purple-400" />
              Skills Overview
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={skillData}>
                <PolarGrid stroke="#ffffff20" />
                <PolarAngleAxis dataKey="subject" stroke="#9ca3af" />
                <PolarRadiusAxis stroke="#9ca3af" />
                <Radar name="Score" dataKey="score" stroke="#a855f7" fill="#a855f7" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Current Reading */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Book className="w-6 h-6 text-green-400" />
            Current Reading Progress
          </h2>
          <div className="space-y-4">
            {books.length > 0 ? books.map((book, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-lg">{book.title}</div>
                    <div className="text-sm text-gray-400">{book.chapters} chapters</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">{book.progress}%</div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${book.progress}%` }}
                  ></div>
                </div>
              </div>
            )) : (
              <div className="text-center py-8 text-gray-400">
                No books in progress. Upload a book to get started!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
