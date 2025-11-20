import { TrendingUp, Award, Target, Book, Flame, Calendar } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function ProgressPage() {
  const weeklyData = [
    { day: 'Mon', minutes: 45 },
    { day: 'Tue', minutes: 60 },
    { day: 'Wed', minutes: 30 },
    { day: 'Thu', minutes: 75 },
    { day: 'Fri', minutes: 50 },
    { day: 'Sat', minutes: 90 },
    { day: 'Sun', minutes: 40 },
  ];

  const quizPerformance = [
    { chapter: 'Ch 1', score: 85 },
    { chapter: 'Ch 2', score: 92 },
    { chapter: 'Ch 3', score: 78 },
    { chapter: 'Ch 4', score: 88 },
    { chapter: 'Ch 5', score: 95 },
  ];

  const activityData = [
    { name: 'Reading', value: 35, color: '#3b82f6' },
    { name: 'Quizzes', value: 25, color: '#8b5cf6' },
    { name: 'AI Tutor', value: 20, color: '#06b6d4' },
    { name: 'Mind Maps', value: 20, color: '#10b981' },
  ];

  const books = [
    { title: 'Introduction to Psychology', progress: 75, chapters: '6/8' },
    { title: 'Quantum Physics Basics', progress: 40, chapters: '3/10' },
    { title: 'Modern History', progress: 90, chapters: '9/10' },
  ];

  return (
    <div className="ml-64 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-3">Your Progress</h1>
          <p className="text-gray-400">
            Track your learning journey and achievements
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Book className="w-6 h-6 text-blue-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl mb-1">12</div>
            <div className="text-sm text-gray-400">Books Completed</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl mb-1">87%</div>
            <div className="text-sm text-gray-400">Average Quiz Score</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Flame className="w-6 h-6 text-orange-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-3xl mb-1">14</div>
            <div className="text-sm text-gray-400">Day Streak</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <Calendar className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl mb-1">156h</div>
            <div className="text-sm text-gray-400">Total Study Time</div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Weekly Study Time */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl mb-6">Weekly Study Time</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="minutes" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Quiz Performance */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl mb-6">Quiz Performance Trend</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={quizPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="chapter" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Distribution & Book Progress */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Activity Distribution */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl mb-6">Activity Distribution</h2>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={activityData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  >
                    {activityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Reading Progress */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl mb-6">Current Reading Progress</h2>
            <div className="space-y-5">
              {books.map((book, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1 min-w-0 pr-4">
                      <div className="text-sm truncate">{book.title}</div>
                      <div className="text-xs text-gray-400">{book.chapters} chapters</div>
                    </div>
                    <div className="text-sm text-blue-400">{book.progress}%</div>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300"
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-400" />
            AI Recommendations
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-blue-400 mb-1">Focus Area</div>
              <div className="mb-2">Chapter 3 Review</div>
              <div className="text-sm text-gray-400">Your quiz score here was 78%. Spend more time on this chapter.</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-purple-400 mb-1">Study Tip</div>
              <div className="mb-2">Consistency Boost</div>
              <div className="text-sm text-gray-400">Try to maintain your 14-day streak! Study for at least 30 minutes today.</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-green-400 mb-1">Achievement</div>
              <div className="mb-2">Almost There!</div>
              <div className="text-sm text-gray-400">You're 10% away from completing Modern History. Keep going!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
