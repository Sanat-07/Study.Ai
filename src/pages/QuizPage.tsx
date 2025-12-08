import { useState } from 'react';
import { CheckCircle, XCircle, Trophy } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { StudyHeader } from '@/components/study/StudyHeader';
import { ActivityCard } from '@/components/ui/ActivityCard';
import { StudyControlBar } from '@/components/study/StudyControlBar';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export function QuizPage() {
  const { bookId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      question: 'What is the primary focus of psychology as a scientific discipline?',
      options: [
        'The study of supernatural phenomena',
        'The scientific study of behavior and mental processes',
        'The analysis of economic systems',
        'The exploration of physical matter'
      ],
      correctAnswer: 1,
      explanation: 'Psychology is fundamentally the scientific study of behavior and mental processes, using empirical methods to understand how people think, feel, and act.'
    },
    {
      id: 2,
      question: 'Which perspective in psychology focuses on the role of the brain and nervous system?',
      options: [
        'Humanistic perspective',
        'Behavioral perspective',
        'Biological perspective',
        'Psychodynamic perspective'
      ],
      correctAnswer: 2,
      explanation: 'The biological perspective examines how the brain, nervous system, and other biological factors influence behavior and mental processes.'
    },
    {
      id: 3,
      question: 'What is the key difference between correlation and causation?',
      options: [
        'There is no difference',
        'Correlation implies causation',
        'Correlation shows a relationship but does not prove one variable causes the other',
        'Causation is easier to prove than correlation'
      ],
      correctAnswer: 2,
      explanation: 'Correlation indicates that two variables are related or associated, but it does not prove that one variable causes changes in the other. Causation requires experimental evidence.'
    }
  ];

  const handleAnswerSelect = (index: number) => {
    if (!showFeedback) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowFeedback(true);
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const question = questions[currentQuestion];
  const isQuizComplete = showFeedback && currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: '#121212' }}>
      <StudyHeader
        title="Introduction to Psychology - Quiz"
        progress={`Question ${currentQuestion + 1} of ${questions.length} • Score: ${score}/${questions.length}`}
        onBack={() => window.history.back()}
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <ActivityCard className="mb-8">
          <div className="min-h-[600px] flex flex-col">
            {/* Question */}
            <div className="mb-8">
              <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-medium mb-4">
                Question {currentQuestion + 1}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                {question.question}
              </h2>
            </div>

            {/* Options Grid - 2x2 on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrect = showFeedback && isCorrect;
                const showIncorrect = showFeedback && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    className={`group relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${showCorrect
                        ? 'bg-green-500/10 border-green-500 shadow-lg shadow-green-900/20'
                        : showIncorrect
                          ? 'bg-red-500/10 border-red-500 shadow-lg shadow-red-900/20'
                          : isSelected
                            ? 'bg-blue-500/20 border-blue-500 shadow-lg shadow-blue-900/30 scale-[1.02]'
                            : 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 hover:border-blue-500/50 hover:scale-[1.02]'
                      } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Letter Badge */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-all ${showCorrect
                          ? 'border-green-500 bg-green-500/20 text-green-300'
                          : showIncorrect
                            ? 'border-red-500 bg-red-500/20 text-red-300'
                            : isSelected
                              ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                              : 'border-slate-600 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-400'
                        }`}>
                        {String.fromCharCode(65 + index)}
                      </div>

                      {/* Option Text */}
                      <span className="flex-1 text-base md:text-lg font-medium text-gray-200 leading-relaxed">
                        {option}
                      </span>

                      {/* Check/X Icons */}
                      {showCorrect && <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />}
                      {showIncorrect && <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-6 rounded-xl border-2 ${selectedAnswer === question.correctAnswer
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-red-500/10 border-red-500/30'
                }`}>
                <div className="flex items-start gap-3">
                  {selectedAnswer === question.correctAnswer ? (
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h3 className={`mb-2 font-bold text-lg ${selectedAnswer === question.correctAnswer ? 'text-green-300' : 'text-red-300'
                      }`}>
                      {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{question.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            {!showFeedback && (
              <div className="mt-auto pt-6">
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-700 transition-all font-semibold text-lg shadow-lg shadow-blue-900/30 active:scale-[0.98]"
                >
                  Submit Answer
                </button>
              </div>
            )}
          </div>
        </ActivityCard>

        {/* Navigation */}
        {showFeedback && !isQuizComplete && (
          <StudyControlBar
            current={currentQuestion + 1}
            total={questions.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}

        {/* Completion Message */}
        {isQuizComplete && (
          <div className="mt-8 text-center">
            <ActivityCard className="max-w-2xl mx-auto">
              <div className="py-8">
                <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-4xl font-bold mb-3">Quiz Complete!</h3>
                <p className="text-gray-400 mb-2 text-xl">You scored</p>
                <p className="text-5xl font-bold text-blue-400 mb-8">{score}/{questions.length}</p>
                <div className="flex gap-4 justify-center">
                  <Link
                    to={bookId ? `/book/${bookId}` : '/dashboard'}
                    className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors font-medium"
                  >
                    Back to Book
                  </Link>
                  <button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setSelectedAnswer(null);
                      setShowFeedback(false);
                      setScore(0);
                    }}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors font-medium shadow-lg shadow-blue-900/30"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            </ActivityCard>
          </div>
        )}
      </div>
    </div>
  );
}