import { useState } from 'react';
import { CheckCircle, XCircle, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { BookSidebar } from '../components/BookSidebar';
import { BookTopMenu } from '../components/BookTopMenu';

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
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <BookSidebar bookId={bookId || '1'} chapters={chapters} />
      <div className="ml-64">
        <BookTopMenu bookId={bookId || '1'} />
        
        <main className="p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-4xl mb-2">Psychology Quiz</h1>
                  <p className="text-gray-400">Chapter 1: Introduction to Psychology</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>12:45</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
                  <span className="text-gray-400">Score: {score}/{questions.length}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
              <h2 className="text-2xl mb-8 leading-relaxed">{question.question}</h2>

              <div className="space-y-3">
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
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                        showCorrect
                          ? 'bg-green-500/10 border-green-500 text-green-300'
                          : showIncorrect
                          ? 'bg-red-500/10 border-red-500 text-red-300'
                          : isSelected
                          ? 'bg-blue-500/20 border-blue-500'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/50'
                      } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-3">
                          <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm ${
                            showCorrect
                              ? 'border-green-500 bg-green-500/20'
                              : showIncorrect
                              ? 'border-red-500 bg-red-500/20'
                              : isSelected
                              ? 'border-blue-500 bg-blue-500/20'
                              : 'border-white/30'
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </span>
                          {option}
                        </span>
                        {showCorrect && <CheckCircle className="w-6 h-6 text-green-400" />}
                        {showIncorrect && <XCircle className="w-6 h-6 text-red-400" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {showFeedback && (
                <div className={`mt-6 p-5 rounded-xl border-2 ${
                  selectedAnswer === question.correctAnswer
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
                      <h3 className={`mb-2 ${
                        selectedAnswer === question.correctAnswer ? 'text-green-300' : 'text-red-300'
                      }`}>
                        {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
                      </h3>
                      <p className="text-gray-300">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              {!showFeedback ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={currentQuestion === questions.length - 1}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  Next Question
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Completion Message */}
            {showFeedback && currentQuestion === questions.length - 1 && (
              <div className="mt-8 text-center p-8 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                <h3 className="text-2xl mb-2">Quiz Complete!</h3>
                <p className="text-gray-400 mb-4">You scored {score} out of {questions.length}</p>
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                  View Detailed Results
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}