import React, { useState } from 'react';
import { ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { QuizQuestion } from '../types';

const mockQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: "What is the primary focus of psychology as a scientific discipline?",
    options: [
      { id: 'A', text: "The study of supernatural phenomena" },
      { id: 'B', text: "The scientific study of behavior and mental processes" },
      { id: 'C', text: "The analysis of economic systems" },
      { id: 'D', text: "The exploration of physical matter" }
    ],
    correctId: 'B'
  },
  {
    id: '2',
    question: "Which part of the brain is primarily responsible for memory formation?",
    options: [
      { id: 'A', text: "Cerebellum" },
      { id: 'B', text: "Hippocampus" },
      { id: 'C', text: "Frontal Lobe" },
      { id: 'D', text: "Occipital Lobe" }
    ],
    correctId: 'B'
  },
  {
    id: '3',
    question: "Who is known as the father of psychoanalysis?",
    options: [
      { id: 'A', text: "B.F. Skinner" },
      { id: 'B', text: "Carl Jung" },
      { id: 'C', text: "Sigmund Freud" },
      { id: 'D', text: "William James" }
    ],
    correctId: 'C'
  }
];

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const question = mockQuestions[currentQuestionIndex];

  const handleOptionSelect = (id: string) => {
    if (isSubmitted) return;
    setSelectedOption(id);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
    if (selectedOption === question.correctId) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  const getOptionClass = (id: string) => {
    if (!isSubmitted) {
      return id === selectedOption
        ? 'border-primary bg-primary/10 text-white'
        : 'border-white/10 hover:border-white/30 hover:bg-white/5 text-gray-300';
    }
    if (id === question.correctId) return 'border-green-500 bg-green-500/10 text-green-500';
    if (id === selectedOption) return 'border-red-500 bg-red-500/10 text-red-500';
    return 'border-white/10 opacity-50';
  };

  return (
    <PageTransition className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col justify-center">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold font-heading">Introduction to Psychology - Quiz</h2>
        <div className="text-gray-400">
          Question {currentQuestionIndex + 1} of {mockQuestions.length} • Score: {score}/{currentQuestionIndex + (isSubmitted ? 1 : 0)}
        </div>
      </div>

      <div className="bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Progress Bar Top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / mockQuestions.length) * 100}%` }}
          />
        </div>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Question {currentQuestionIndex + 1}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">{question.question}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map(opt => (
            <button
              key={opt.id}
              onClick={() => handleOptionSelect(opt.id)}
              className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 flex items-center gap-4 ${getOptionClass(opt.id)}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border font-bold shrink-0 ${isSubmitted && opt.id === question.correctId ? 'border-green-500 bg-green-500 text-white' :
                  isSubmitted && opt.id === selectedOption && opt.id !== question.correctId ? 'border-red-500 bg-red-500 text-white' :
                    opt.id === selectedOption ? 'border-primary bg-primary text-white' :
                      'border-white/20 text-gray-400'
                }`}>
                {opt.id}
              </div>
              <span className="font-medium text-lg">{opt.text}</span>
              {isSubmitted && opt.id === question.correctId && <CheckCircle className="ml-auto text-green-500" />}
              {isSubmitted && opt.id === selectedOption && opt.id !== question.correctId && <XCircle className="ml-auto text-red-500" />}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className="px-8 py-4 bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all flex items-center gap-2"
            >
              {currentQuestionIndex < mockQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'} <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default QuizPage;