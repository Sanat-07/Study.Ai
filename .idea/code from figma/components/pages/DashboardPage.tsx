import { FileText, ClipboardList, Network, MessageSquare, BarChart3, Library, TrendingUp, Book, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DashboardPage() {
  const stats = [
    { label: 'Books Uploaded', value: '12', icon: Book, color: 'blue' },
    { label: 'Quizzes Taken', value: '48', icon: ClipboardList, color: 'purple' },
    { label: 'Study Hours', value: '156', icon: Clock, color: 'blue' },
    { label: 'Current Streak', value: '7 days', icon: TrendingUp, color: 'green' },
  ];

  const features = [
    {
      icon: FileText,
      title: 'AI Summaries',
      description: 'Get instant, comprehensive summaries of your uploaded books with key concepts highlighted',
      color: 'blue',
      path: '/library'
    },
    {
      icon: ClipboardList,
      title: 'Smart Quizzes',
      description: 'Test your knowledge with AI-generated quizzes tailored to your reading material',
      color: 'purple',
      path: '/library'
    },
    {
      icon: Network,
      title: 'Mind Maps',
      description: 'Visualize complex concepts with interactive mind maps generated from your books',
      color: 'cyan',
      path: '/library'
    },
    {
      icon: MessageSquare,
      title: 'AI Tutor',
      description: 'Ask questions about your books and get instant, intelligent answers from our AI',
      color: 'blue',
      path: '/library'
    },
    {
      icon: BarChart3,
      title: 'Progress Analytics',
      description: 'Track your learning journey with detailed analytics and performance insights',
      color: 'green',
      path: '/progress'
    },
    {
      icon: Library,
      title: 'Your Library',
      description: 'Access all your uploaded books and study materials in one organized place',
      color: 'purple',
      path: '/library'
    },
  ];

  const recentActivity = [
    { title: 'Completed Quiz: Chapter 5', time: '2 hours ago', type: 'quiz' },
    { title: 'Generated Mind Map: Physics Basics', time: '5 hours ago', type: 'mindmap' },
    { title: 'Uploaded: Introduction to AI.pdf', time: '1 day ago', type: 'upload' },
    { title: 'Asked AI Tutor 3 questions', time: '2 days ago', type: 'tutor' },
  ];

  return (
    <div className="ml-64 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-3">Welcome back, Student! 👋</h1>
          <p className="text-gray-400">
            Here's what's happening with your learning today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className={`w-12 h-12 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
                <div className="text-3xl mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6">Learning Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.path}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <div className={`w-14 h-14 bg-${feature.color}-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 text-blue-400 text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Get Started →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-2xl mb-6">Recent Activity</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl divide-y divide-white/10">
            {recentActivity.map((activity, index) => (
              <div key={index} className="p-5 hover:bg-white/5 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-1">{activity.title}</div>
                    <div className="text-sm text-gray-400">{activity.time}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs ${
                    activity.type === 'quiz' ? 'bg-purple-500/20 text-purple-400' :
                    activity.type === 'mindmap' ? 'bg-cyan-500/20 text-cyan-400' :
                    activity.type === 'upload' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {activity.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}