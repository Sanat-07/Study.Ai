import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Sparkles } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { BookTopMenu } from '../components/BookTopMenu';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export function TutorPage() {
  const { bookId } = useParams();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm your AI Tutor for Introduction to Psychology. I've read your entire book and I'm here to help you understand any concept. What would you like to learn about today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState('all');
  const [detailLevel, setDetailLevel] = useState(50);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "Explain the difference between correlation and causation",
    "What are the main perspectives in psychology?",
    "Summarize the key points of Chapter 1",
    "How does the scientific method apply to psychology?"
  ];

  const chapters = [
    { id: 'all', name: 'All Chapters' },
    { id: '1', name: 'Chapter 1: Introduction' },
    { id: '2', name: 'Chapter 2: Science of Mind' },
    { id: '3', name: 'Chapter 3: Biological Psychology' },
    { id: '4', name: 'Chapter 4: Sensation & Perception' },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (question: string): string => {
    if (question.toLowerCase().includes('correlation') && question.toLowerCase().includes('causation')) {
      return "Great question! The key difference is:\n\n**Correlation** means two variables are related or associated - when one changes, the other tends to change too. For example, ice cream sales and drowning incidents are correlated (both increase in summer).\n\n**Causation** means one variable directly causes changes in another. To establish causation, we need controlled experiments, not just observations.\n\nThe ice cream example shows correlation without causation - hot weather causes both, but ice cream doesn't cause drowning. This is why psychologists emphasize 'correlation does not imply causation.'";
    } else if (question.toLowerCase().includes('perspective')) {
      return "Psychology has several major perspectives:\n\n1. **Biological** - Focuses on how the brain, nervous system, and genetics influence behavior\n2. **Cognitive** - Studies mental processes like thinking, memory, and problem-solving\n3. **Behavioral** - Examines observable behaviors and how they're learned\n4. **Psychodynamic** - Explores unconscious processes and early experiences\n5. **Humanistic** - Emphasizes personal growth and self-actualization\n\nEach perspective offers unique insights, and modern psychologists often integrate multiple perspectives.";
    } else {
      return "Based on the book content, here's what I can explain: Psychology is a scientific discipline that studies behavior and mental processes. It uses empirical methods to understand how people think, feel, and act. The field has evolved from philosophical roots to become a rigorous science with diverse applications in clinical, educational, and organizational settings.\n\nWould you like me to elaborate on any specific aspect?";
    }
  };

  return (
    <div className="ml-64 min-h-screen flex">
      {/* Left Panel - Controls */}
      <aside className="w-80 border-r border-white/10 bg-white/5 p-6">
        <h2 className="text-xl mb-6">Chat Settings</h2>

        {/* Book Selection */}
        <div className="mb-6">
          <label className="text-sm text-gray-400 mb-2 block">Current Book</label>
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-3">
            <BookTopMenu bookId={bookId || ''} />
            <div>
              <div className="text-sm">Introduction to Psychology</div>
              <div className="text-xs text-gray-400">by John Doe</div>
            </div>
          </div>
        </div>

        {/* Chapter Selection */}
        <div className="mb-6">
          <label className="text-sm text-gray-400 mb-2 block">Focus on Chapter</label>
          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500"
          >
            {chapters.map(chapter => (
              <option key={chapter.id} value={chapter.id} className="bg-gray-900">
                {chapter.name}
              </option>
            ))}
          </select>
        </div>

        {/* Detail Level */}
        <div className="mb-6">
          <label className="text-sm text-gray-400 mb-2 block">
            Detail Level: {detailLevel > 66 ? 'Detailed' : detailLevel > 33 ? 'Moderate' : 'Brief'}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={detailLevel}
            onChange={(e) => setDetailLevel(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Brief</span>
            <span>Detailed</span>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <h3 className="text-sm mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Tips for Better Answers
          </h3>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• Be specific in your questions</li>
            <li>• Ask for examples or clarifications</li>
            <li>• Request comparisons between concepts</li>
            <li>• Ask "why" and "how" questions</li>
          </ul>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${message.type === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 border border-white/10'
                    }`}
                >
                  {message.type === 'ai' && (
                    <div className="flex items-center gap-2 mb-2 text-sm text-blue-400">
                      <Sparkles className="w-4 h-4" />
                      <span>AI Tutor</span>
                    </div>
                  )}
                  <div className="whitespace-pre-line leading-relaxed">
                    {message.content}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                    <span className="text-sm text-gray-400">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-white/10 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Suggested Prompts */}
            {messages.length === 1 && (
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-3">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => setInput(prompt)}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Box */}
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything about your book..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="px-6 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}