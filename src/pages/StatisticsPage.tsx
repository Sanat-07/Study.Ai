import { BarChart as BarChartIcon, Clock, Award, TrendingUp } from 'lucide-react';

export function StatisticsPage() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] p-8 text-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <BarChartIcon className="w-8 h-8 text-blue-500" />
                    Statistics
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-[#111] p-6 rounded-xl border border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">12h 45m</div>
                                <div className="text-sm text-gray-400">Total Study Time</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#111] p-6 rounded-xl border border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                                <Award className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">85%</div>
                                <div className="text-sm text-gray-400">Average Score</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#111] p-6 rounded-xl border border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">15</div>
                                <div className="text-sm text-gray-400">Days Streak</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-8 text-center text-gray-400">
                    <p>Detailed statistics charts coming soon...</p>
                </div>
            </div>
        </div>
    );
}
