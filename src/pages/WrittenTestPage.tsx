import { useState } from 'react';
import { StudyHeader } from '@/components/study/StudyHeader';
import { ActivityCard } from '@/components/ui/ActivityCard';
import { ChevronRight, ChevronLeft, Eye, CheckCircle } from 'lucide-react';

interface OpenQuestion {
    id: number;
    question: string;
    modelAnswer: string;
}

export function WrittenTestPage() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showModel, setShowModel] = useState(false);

    const questions: OpenQuestion[] = [
        {
            id: 1,
            question: "Explain the difference between Classical and Operant Conditioning.",
            modelAnswer: "Classical conditioning involves associating an involuntary response and a stimulus (e.g., Pavlov's dogs). Operant conditioning is about associating a voluntary behavior and a consequence (reward or punishment)."
        },
        {
            id: 2,
            question: "Describe the 'Nature vs. Nurture' debate in psychology.",
            modelAnswer: "The nature vs. nurture debate concerns the relative importance of an individual's innate qualities ('nature', i.e., genetics) versus personal experiences ('nurture', i.e., environment) in determining or causing individual differences in physical and behavioral traits."
        },
        {
            id: 3,
            question: "What is cognitive dissonance?",
            modelAnswer: "Cognitive dissonance is the mental discomfort (psychological stress) experienced by a person who holds two or more contradictory beliefs, ideas, or values. This discomfort is triggered by a situation in which a person's belief clashes with new evidence perceived by the person."
        }
    ];

    const currentQ = questions[currentIdx];

    const handleNext = () => {
        if (currentIdx < questions.length - 1) {
            setCurrentIdx(prev => prev + 1);
            setShowModel(false);
        }
    };

    const handlePrev = () => {
        if (currentIdx > 0) {
            setCurrentIdx(prev => prev - 1);
            setShowModel(false);
        }
    };

    return (
        <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: '#0A0A0A' }}>
            <StudyHeader
                title="Open Questions"
                progress={`Question ${currentIdx + 1} of ${questions.length}`}
                onBack={() => window.history.back()}
            />

            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-6 flex items-center justify-between">
                    <button
                        onClick={handlePrev}
                        disabled={currentIdx === 0}
                        className="p-2 rounded-lg bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <span className="text-gray-400 text-sm font-medium">
                        {currentIdx + 1} / {questions.length}
                    </span>
                    <button
                        onClick={handleNext}
                        disabled={currentIdx === questions.length - 1}
                        className="p-2 rounded-lg bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Question Card */}
                    <ActivityCard>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            {currentQ.question}
                        </h2>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 bg-[#0A0A0A]">
                            <textarea
                                value={answers[currentQ.id] || ''}
                                onChange={(e) => setAnswers(prev => ({ ...prev, [currentQ.id]: e.target.value }))}
                                className="w-full bg-transparent border-none focus:ring-0 text-white text-lg leading-relaxed placeholder-gray-600 resize-none h-48"
                                placeholder="Type your answer here..."
                            />
                        </div>
                    </ActivityCard>

                    {/* Controls & Feedback */}
                    <div className="flex flex-col gap-4">
                        {!showModel ? (
                            <button
                                onClick={() => setShowModel(true)}
                                className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all font-medium text-white flex items-center justify-center gap-2"
                            >
                                <Eye className="w-5 h-5" /> Reveal Model Answer
                            </button>
                        ) : (
                            <ActivityCard className="bg-green-500/5 border-green-500/20">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-green-400 font-bold mb-2">Model Answer</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {currentQ.modelAnswer}
                                        </p>
                                    </div>
                                </div>
                            </ActivityCard>
                        )}

                        {showModel && currentIdx < questions.length - 1 && (
                            <button
                                onClick={handleNext}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl transition-all font-bold text-white shadow-lg shadow-blue-900/20"
                            >
                                Next Question
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
