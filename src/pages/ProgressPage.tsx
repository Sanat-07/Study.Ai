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
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
      <div className="max-w-7xl mx-auto pt-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Your Progress</h1>
          <p className="text-gray-500 text-lg">Track your learning journey and achievements</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                <Book className="w-6 h-6 text-blue-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
            </div>
            <div className="text-3xl font-bold mb-1">{booksCompleted}</div>
            <div className="text-sm text-gray-500">Books Completed</div>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <Trophy className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" />
            </div>
            <div className="text-3xl font-bold mb-1">95%</div>
            <div className="text-sm text-gray-500">Average Score</div>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20">
                <Calendar className="w-6 h-6 text-green-400" />
              </div>
              <Flame className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors" />
            </div>
            <div className="text-3xl font-bold mb-1">{totalStudyHours}h</div>
            <div className="text-sm text-gray-500">Total Study Time</div>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <Star className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors" />
            </div>
            <div className="text-3xl font-bold mb-1">{streak}</div>
            <div className="text-sm text-gray-500">Day Streak</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Weekly Activity */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-gray-400" />
              Weekly Activity
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                />
                <Bar dataKey="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Radar */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-gray-400" />
              Skills Overview
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={skillData}>
                <PolarGrid stroke="#222" />
                <PolarAngleAxis dataKey="subject" stroke="#888" fontSize={12} />
                <PolarRadiusAxis stroke="#444" angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Score" dataKey="score" stroke="#a855f7" fill="#a855f7" fillOpacity={0.2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Current Reading */}
        <div className="bg-[#111] border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Book className="w-5 h-5 text-gray-400" />
            Current Reading Progress
          </h2>
          <div className="space-y-4">
            {books.length > 0 ? books.map((book, index) => (
              <div key={index} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-lg text-white mb-1">{book.title}</div>
                    <div className="text-sm text-gray-500">{book.chapters} chapters</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-400 font-mono">{book.progress}%</div>
                </div>
                <div className="w-full bg-[#222] rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${book.progress}%` }}
                  ></div>
                </div>
              </div>
            )) : (
              <div className="text-center py-8 text-gray-500">
                No books in progress. Upload a book to get started!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
