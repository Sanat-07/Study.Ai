import { Share2, Download, Play, Clock, Award, Flame, Target, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export function BookDetailsPage() {
  const { bookId } = useParams();

  return (
    <div className="min-h-screen p-8 bg-[#0A0A0A] text-white">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          to="/library"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Library
        </Link>

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0F111A] border border-white/5 p-8 mb-6">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex gap-8">
            {/* Book Cover */}
            <div className="w-56 h-72 bg-gradient-to-b from-[#1E2335] to-[#161927] rounded-2xl flex items-center justify-center border border-white/5 flex-shrink-0 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-20 mx-auto mb-4 border-2 border-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-1 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h1 className="text-5xl font-bold text-white mb-2 leading-tight">
                    Introduction to<br />
                    <span className="text-[#8B9CFF]">Psychology</span>
                  </h1>
                  <div className="flex gap-2">
                    <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-gray-400 hover:text-white">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-gray-400 hover:text-white">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <p className="text-xl text-gray-400 mb-6">by John Doe</p>

                <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
                  <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">PDF</span>
                  <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">12.4 MB</span>
                  <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">312 Pages</span>
                  <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Uploaded 2h ago
                  </span>
                </div>
              </div>

              {/* Progress Section */}
              <div className="bg-[#151823]/80 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-300 font-medium">Overall Progress</span>
                  <span className="text-3xl font-bold text-[#6384FF]">75%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 mb-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#6384FF] to-[#D946EF] rounded-full"
                    style={{ width: '75%' }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>156 of 312 pages read</span>
                  <span>5 of 8 chapters completed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              to={`/book/${bookId}/reader`}
              className="px-8 py-4 bg-gradient-to-r from-[#4F6BFF] to-[#9E51FF] hover:opacity-90 rounded-xl font-bold text-white transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <Play className="w-5 h-5 fill-current" />
              Continue Reading - Page 156
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#11131F] border border-white/5 rounded-2xl p-6 hover:bg-[#161927] transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1E2538] rounded-xl flex items-center justify-center group-hover:bg-[#252D42] transition-colors">
                <Clock className="w-6 h-6 text-[#6384FF]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4h 32m</div>
                <div className="text-sm text-gray-400">Time Reading</div>
              </div>
            </div>
          </div>

          <div className="bg-[#11131F] border border-white/5 rounded-2xl p-6 hover:bg-[#161927] transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2D1F36] rounded-xl flex items-center justify-center group-hover:bg-[#382645] transition-colors">
                <Award className="w-6 h-6 text-[#D946EF]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">87%</div>
                <div className="text-sm text-gray-400">Avg Quiz Score</div>
              </div>
            </div>
          </div>

          <div className="bg-[#11131F] border border-white/5 rounded-2xl p-6 hover:bg-[#161927] transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2D241F] rounded-xl flex items-center justify-center group-hover:bg-[#3A2E26] transition-colors">
                <Flame className="w-6 h-6 text-[#F97316]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">23</div>
                <div className="text-sm text-gray-400">AI Questions</div>
              </div>
            </div>
          </div>

          <div className="bg-[#11131F] border border-white/5 rounded-2xl p-6 hover:bg-[#161927] transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#162925] rounded-xl flex items-center justify-center group-hover:bg-[#1C352F] transition-colors">
                <Target className="w-6 h-6 text-[#22C55E]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">5/8</div>
                <div className="text-sm text-gray-400">Chapters Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
