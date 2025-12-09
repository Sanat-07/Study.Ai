import { TrendingUp, Award, Clock, BookOpen, MoreHorizontal, ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { storageService } from '@/shared/services/storage.service';
import { useState, useEffect } from 'react';



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

  const [booksCompleted, setBooksCompleted] = useState(0);
  const [totalStudyHours, setTotalStudyHours] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const stats = storageService.getStats();
    setBooksCompleted(stats.booksUploaded);
    setTotalStudyHours(stats.studyHours);
    setStreak(stats.streak);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white p-8">
      <div className="max-w-7xl mx-auto pt-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Progress</h1>
          <p className="text-gray-500">Track your learning journey and achievements</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Books Completed */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 relative group hover:border-white/20 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                <BookOpen size={20} />
              </div>
              <ArrowUpRight className="text-green-500 w-4 h-4" />
            </div>
            <div className="text-3xl font-bold mb-1">{booksCompleted}</div>
            <div className="text-xs text-gray-500">Books Completed</div>
          </div>

          {/* Average Score */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 relative group hover:border-white/20 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 border border-purple-500/20">
                <Award size={20} />
              </div>
              <ArrowUpRight className="text-green-500 w-4 h-4" />
            </div>
            <div className="text-3xl font-bold mb-1">95%</div>
            <div className="text-xs text-gray-500">Average Score</div>
          </div>

          {/* Total Study Time */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 relative group hover:border-white/20 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                <Clock size={20} />
              </div>
              <ArrowUpRight className="text-green-500 w-4 h-4" />
            </div>
            <div className="text-3xl font-bold mb-1">{totalStudyHours}h</div>
            <div className="text-xs text-gray-500">Total Study Time</div>
          </div>

          {/* Day Streak */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 relative group hover:border-white/20 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
                <TrendingUp size={20} />
              </div>
              <ArrowUpRight className="text-green-500 w-4 h-4" />
            </div>
            <div className="text-3xl font-bold mb-1">{streak}</div>
            <div className="text-xs text-gray-500">Day Streak</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Weekly Activity */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gray-400" />
                Weekly Activity
              </h2>
              <button className="text-gray-500 hover:text-white">
                <MoreHorizontal size={20} />
              </button>
            </div>

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
                <Bar dataKey="hours" fill="#0066FF" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Overview */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Award className="w-4 h-4 text-gray-400" />
                Skills Overview
              </h2>
              <button className="text-gray-500 hover:text-white">
                <MoreHorizontal size={20} />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" stroke="#888" fontSize={12} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Score" dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
