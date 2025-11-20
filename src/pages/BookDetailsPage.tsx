import { BookSidebar } from '../components/BookSidebar';
import { BookTopMenu } from '../components/BookTopMenu';
import { CheckCircle, FileText, ClipboardList, Network, MessageSquare, BookOpen, Clock, Award, Flame } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export function BookDetailsPage() {
  const { bookId } = useParams();

  const chapters = [
    { id: 1, title: 'Introduction to Psychology', pages: '1-24', completed: true },
    { id: 2, title: 'The Science of Mind', pages: '25-52', completed: true },
    { id: 3, title: 'Biological Psychology', pages: '53-89', completed: true },
    { id: 4, title: 'Sensation and Perception', pages: '90-134', completed: true },
    { id: 5, title: 'Learning and Memory', pages: '135-178', completed: true },
    { id: 6, title: 'Cognitive Psychology', pages: '179-223', completed: false },
    { id: 7, title: 'Human Development', pages: '224-267', completed: false },
    { id: 8, title: 'Social Psychology', pages: '268-312', completed: false },
  ];

  const keyConcepts = [
    'Scientific Method in Psychology',
    'Structuralism vs Functionalism',
    'Major Psychological Perspectives',
    'Correlation vs Causation',
    'Research Ethics',
  ];

  const quickActions = [
    { icon: FileText, label: 'Read Summary', path: `/book/${bookId}/summary`, color: 'blue', desc: 'AI-generated chapter summaries' },
    { icon: ClipboardList, label: 'Take Quiz', path: `/book/${bookId}/quiz`, color: 'purple', desc: 'Test your knowledge' },
    { icon: Network, label: 'Mind Map', path: `/book/${bookId}/mindmap`, color: 'cyan', desc: 'Visualize concepts' },
    { icon: MessageSquare, label: 'Ask AI', path: `/book/${bookId}/chat`, color: 'green', desc: 'Get instant answers' },
    { icon: BookOpen, label: 'Start Reading', path: `/book/${bookId}/reader`, color: 'orange', desc: 'Continue from page 156' },
  ];

  return (
    <>
      <BookSidebar bookId={bookId || '1'} chapters={chapters} />
      <div className="ml-64">
        <BookTopMenu bookId={bookId || '1'} />

        <main className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Book Header */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-8">
                <div className="w-40 h-52 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
                  <FileText className="w-20 h-20 text-white/50" />
                </div>

                <div className="flex-1">
                  <h1 className="text-5xl mb-3">Introduction to Psychology</h1>
                  <p className="text-xl text-gray-400 mb-6">by John Doe</p>

                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                    <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg">
                      <FileText className="w-4 h-4" />
                      PDF
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg">
                      12.4 MB
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg">
                      8 Chapters
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg">
                      312 Pages
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg">
                      <Clock className="w-4 h-4" />
                      Uploaded 2 hours ago
                    </span>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-400">Overall Progress</span>
                      <span className="text-blue-400 text-lg">75% Complete</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full shadow-lg shadow-blue-500/50" style={{ width: '75%' }} />
                    </div>
                    <div className="flex items-center justify-between mt-3 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        5 of 8 chapters completed
                      </span>
                      <span>156 / 312 pages read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl mb-1">4h 32m</div>
                    <div className="text-sm text-gray-400">Time Spent Reading</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl mb-1">87%</div>
                    <div className="text-sm text-gray-400">Average Quiz Score</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Flame className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-2xl mb-1">23</div>
                    <div className="text-sm text-gray-400">AI Questions Asked</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <h2 className="text-3xl mb-6">Continue Learning</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Link
                      key={index}
                      to={action.path}
                      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
                    >
                      <div className={`w-14 h-14 bg-${action.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-7 h-7 text-${action.color}-400`} />
                      </div>
                      <div className="text-center">
                        <div className="mb-1 group-hover:text-blue-400 transition-colors">{action.label}</div>
                        <div className="text-xs text-gray-500">{action.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Key Concepts */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl mb-6">Key Concepts from this Book</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {keyConcepts.map((concept, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200">{concept}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
