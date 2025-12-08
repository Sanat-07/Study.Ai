import { useState } from 'react';
import { StudyHeader } from '@/components/study/StudyHeader';
import { ActivityCard } from '@/components/ui/ActivityCard';
import { CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface BlankQuestion {
    id: number;
    textBefore: string;
    blank: string;
    textAfter: string;
}

export function FillBlanksPage() {
    const { bookId } = useParams();
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const questions: BlankQuestion[] = [
        { id: 1, textBefore: "Psychology is the scientific study of", blank: "behavior", textAfter: "and mental processes." },
        { id: 2, textBefore: "The", blank: "biological", textAfter: "perspective focuses on the role of the brain and nervous system." },
        { id: 3, textBefore: "Ivan Pavlov is famous for his work on", blank: "classical", textAfter: "conditioning." },
        { id: 4, textBefore: "The variable that is manipulated in an experiment is called the", blank: "independent", textAfter: "variable." },
        { id: 5, textBefore: "Freud founded the", blank: "psychodynamic", textAfter: "approach to psychology." },
    ];

    const handleSubmit = () => {
        let newScore = 0;
        questions.forEach(q => {
            const userAnswer = answers[q.id]?.trim().toLowerCase();
            if (userAnswer === q.blank.toLowerCase()) {
                newScore++;
            }
        });
        setScore(newScore);
        setShowResults(true);
    };

    const handleRetry = () => {
        setAnswers({});
        setShowResults(false);
        setScore(0);
    };

    return (
        <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: '#0A0A0A' }}>
            <StudyHeader
                title="Fill in the Blanks"
                progress={showResults ? "Complete" : `${Object.keys(answers).length}/${questions.length} Answered`}
                onBack={() => window.history.back()}
            />

            <div className="max-w-4xl mx-auto px-6 py-12">
                {!showResults ? (
                    <div className="space-y-6">
                        {questions.map((q, index) => (
                            <ActivityCard key={q.id}>
                                <div className="flex items-baseline gap-2 text-lg md:text-xl leading-relaxed flex-wrap">
                                    <span className="text-gray-400 select-none mr-2">{index + 1}.</span>
                                    <span className="text-white">{q.textBefore}</span>
                                    <input
                                        type="text"
                                        value={answers[q.id] || ''}
                                        onChange={(e) => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                                        className="bg-white/5 border border-white/20 rounded-lg px-3 py-1 text-center min-w-[120px] focus:outline-none focus:border-blue-500 text-blue-400 font-medium placeholder-gray-600 focus:bg-white/10 transition-all"
                                        placeholder="type here..."
                                    />
                                    <span className="text-white">{q.textAfter}</span>
                                </div>
                            </ActivityCard>
                        ))}

                        <div className="pt-6">
                            <button
                                onClick={handleSubmit}
                                disabled={Object.keys(answers).length === 0}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold text-lg shadow-lg shadow-blue-900/20"
                            >
                                Check Answers
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Results Card */}
                        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 text-center">
                            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                            <h2 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
                            <div className="text-gray-400 mb-6">You scored</div>
                            <div className="text-6xl font-bold text-blue-400 mb-8">{Math.round((score / questions.length) * 100)}%</div>

                            <div className="flex gap-4 justify-center">
                                <Link to={`/book/${bookId}`} className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg font-medium transition-colors">
                                    Back to Book
                                </Link>
                                <button
                                    onClick={handleRetry}
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors flex items-center gap-2"
                                >
                                    <RefreshCw className="w-5 h-5" /> Retry
                                </button>
                            </div>
                        </div>

                        {/* Answers Review */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white px-2">Review</h3>
                            {questions.map((q) => {
                                const userAnswer = answers[q.id]?.trim().toLowerCase();
                                const isCorrect = userAnswer === q.blank.toLowerCase();

                                return (
                                    <ActivityCard key={q.id} className={isCorrect ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"}>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1">
                                                {isCorrect ? (
                                                    <CheckCircle className="w-6 h-6 text-green-400" />
                                                ) : (
                                                    <XCircle className="w-6 h-6 text-red-400" />
                                                )}
                                            </div>
                                            <div>
                                                <div className="flex items-baseline gap-2 text-lg flex-wrap mb-2">
                                                    <span className="text-gray-300">{q.textBefore}</span>
                                                    <span className={`font-bold border-b-2 px-1 ${isCorrect ? "text-green-400 border-green-500/50" : "text-red-400 border-red-500/50"}`}>
                                                        {answers[q.id] || '(empty)'}
                                                    </span>
                                                    <span className="text-gray-300">{q.textAfter}</span>
                                                </div>
                                                {!isCorrect && (
                                                    <div className="text-sm text-green-400 font-medium">
                                                        Correct answer: {q.blank}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </ActivityCard>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
