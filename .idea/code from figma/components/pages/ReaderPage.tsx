import { useState } from 'react';
import { Type, Sun, Moon, Bookmark, Highlighter, MessageSquare, Maximize, Minimize } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { BookMenu } from '../components/BookMenu';

export function ReaderPage() {
  const { bookId } = useParams();
  const [fontSize, setFontSize] = useState(18);
  const [theme, setTheme] = useState<'light' | 'dark' | 'sepia'>('dark');
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [lineHeight, setLineHeight] = useState(1.8);

  const themeStyles = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-gray-100',
    sepia: 'bg-amber-50 text-amber-950'
  };

  return (
    <div className="ml-64 min-h-screen flex flex-col">
      {/* Toolbar */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center justify-between px-8 py-4">
          <div>
            <h1 className="text-lg">Introduction to Psychology</h1>
            <p className="text-sm text-gray-400">Chapter 1 • Page 5 of 24</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Font Size */}
            <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                className="px-3 py-2 hover:bg-white/10 rounded transition-colors"
              >
                A-
              </button>
              <span className="px-2 text-sm">{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                className="px-3 py-2 hover:bg-white/10 rounded transition-colors"
              >
                A+
              </button>
            </div>

            {/* Theme */}
            <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded transition-colors ${theme === 'light' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                title="Light theme"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded transition-colors ${theme === 'dark' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                title="Dark theme"
              >
                <Moon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTheme('sepia')}
                className={`p-2 rounded transition-colors ${theme === 'sepia' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                title="Sepia theme"
              >
                <div className="w-4 h-4 rounded-full bg-amber-600"></div>
              </button>
            </div>

            {/* Tools */}
            <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
              <Highlighter className="w-4 h-4" />
            </button>
            <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowAIPanel(!showAIPanel)}
              className={`p-2 rounded-lg transition-colors ${showAIPanel ? 'bg-blue-500' : 'bg-white/5 hover:bg-white/10'}`}
            >
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Reader Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main Reading Area */}
        <div className={`flex-1 overflow-y-auto transition-colors ${themeStyles[theme]}`}>
          <div className="max-w-4xl mx-auto px-12 py-16">
            <article style={{ fontSize: `${fontSize}px`, lineHeight }}>
              <h1 className="text-4xl mb-8">Chapter 1: Introduction to Psychology</h1>
              
              <p className="mb-6">
                Psychology is the scientific study of behavior and mental processes. This seemingly simple definition encompasses a vast and complex field that touches on nearly every aspect of human experience. From the moment we wake up in the morning to the time we fall asleep at night, psychology helps explain why we think, feel, and act the way we do.
              </p>

              <p className="mb-6">
                The word "psychology" comes from the Greek words "psyche," meaning mind or soul, and "logos," meaning study. Thus, psychology is literally the study of the mind. However, modern psychology has evolved far beyond this simple definition. Today's psychologists study not just the mind, but also behavior, emotions, personality, development, social interactions, and much more.
              </p>

              <h2 className="text-2xl mt-10 mb-6">The Scientific Nature of Psychology</h2>

              <p className="mb-6">
                What makes psychology a science? Like other sciences, psychology relies on systematic observation, careful measurement, and rigorous experimental methods. Psychologists form hypotheses, design experiments to test these hypotheses, and draw conclusions based on empirical evidence. This scientific approach distinguishes psychology from armchair speculation or common sense.
              </p>

              <p className="mb-6">
                Consider a simple question: Does playing violent video games make people more aggressive? Common sense might suggest yes, but a scientific psychologist wouldn't rely on intuition alone. Instead, they would design controlled experiments, measure aggression using standardized tests, control for confounding variables, and analyze the data statistically before reaching any conclusions.
              </p>

              <h2 className="text-2xl mt-10 mb-6">Historical Foundations</h2>

              <p className="mb-6">
                Psychology has deep roots in philosophy and physiology. Ancient Greek philosophers like Plato and Aristotle pondered questions about the nature of knowledge, memory, and perception—questions that remain central to psychology today. However, psychology as a formal, scientific discipline is relatively young.
              </p>

              <p className="mb-6">
                Most historians date the birth of psychology as a science to 1879, when Wilhelm Wundt established the first psychology laboratory at the University of Leipzig in Germany. Wundt's approach, called structuralism, focused on breaking down mental experiences into their basic components—much like a chemist might analyze a compound into its elements.
              </p>

              <p className="mb-6">
                Following Wundt, several schools of thought emerged. William James, often called the father of American psychology, developed functionalism, which focused on how mental processes help organisms adapt to their environment. Sigmund Freud introduced psychoanalysis, emphasizing unconscious processes and early childhood experiences. John Watson pioneered behaviorism, arguing that psychology should focus exclusively on observable behavior rather than mental processes.
              </p>

              <h2 className="text-2xl mt-10 mb-6">Modern Perspectives</h2>

              <p className="mb-6">
                Today, psychology is characterized by theoretical diversity. Rather than one dominant school of thought, the field embraces multiple perspectives, each offering unique insights into human behavior and mental processes. The biological perspective examines how the brain, nervous system, and genetics influence behavior. The cognitive perspective studies mental processes like thinking, memory, and problem-solving. The behavioral perspective focuses on learned behaviors and environmental influences.
              </p>

              <p className="mb-6">
                Other important perspectives include the psychodynamic approach (updated from Freud's original theories), the humanistic perspective (emphasizing personal growth and self-actualization), and the sociocultural perspective (examining how culture and social context shape behavior). Most contemporary psychologists adopt an eclectic approach, drawing insights from multiple perspectives as needed.
              </p>
            </article>
          </div>
        </div>

        {/* AI Assistant Panel */}
        {showAIPanel && (
          <div className="w-96 border-l border-white/10 bg-white/5 flex flex-col">
            <div className="p-4 border-b border-white/10">
              <h3 className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                AI Reading Assistant
              </h3>
              <p className="text-sm text-gray-400 mt-1">Ask questions about this chapter</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="bg-white/5 rounded-lg p-3 text-sm">
                <div className="text-blue-400 mb-1">Suggested Questions:</div>
                <button className="w-full text-left p-2 hover:bg-white/5 rounded transition-colors mb-1">
                  What is structuralism?
                </button>
                <button className="w-full text-left p-2 hover:bg-white/5 rounded transition-colors mb-1">
                  Who was Wilhelm Wundt?
                </button>
                <button className="w-full text-left p-2 hover:bg-white/5 rounded transition-colors">
                  What are the main perspectives?
                </button>
              </div>
            </div>

            <div className="p-4 border-t border-white/10">
              <input
                type="text"
                placeholder="Ask about this chapter..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="border-t border-white/10 bg-white/5">
        <div className="h-2 bg-blue-500" style={{ width: '21%' }}></div>
      </div>
    </div>
  );
}