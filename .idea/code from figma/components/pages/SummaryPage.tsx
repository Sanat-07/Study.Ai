import { useState } from 'react';
import { Download, Highlighter, BookmarkPlus, FileDown, FileText } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { BookSidebar } from '../components/BookSidebar';
import { BookTopMenu } from '../components/BookTopMenu';

export function SummaryPage() {
  const { bookId } = useParams();
  const [selectedChapter, setSelectedChapter] = useState(1);

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

  const summaryContent = {
    1: {
      title: 'Introduction to Psychology',
      keyPoints: [
        'Psychology is the scientific study of behavior and mental processes',
        'Modern psychology has roots in philosophy and physiology',
        'The field encompasses multiple perspectives and approaches'
      ],
      summary: `Psychology is fundamentally concerned with understanding human behavior and mental processes through scientific investigation. The discipline emerged in the late 19th century, drawing from both philosophical inquiry and physiological research.

The field encompasses several major perspectives: biological (focusing on the brain and nervous system), cognitive (examining mental processes), behavioral (studying observable behavior), psychodynamic (exploring unconscious processes), and humanistic (emphasizing personal growth and potential).

Contemporary psychology applies scientific methods to study a wide range of phenomena, from basic sensory processes to complex social behaviors. Psychologists work in diverse settings including research laboratories, clinical practices, schools, and organizations.

Key concepts introduced in this chapter include the scientific method as applied to psychological research, the importance of empirical evidence, and the distinction between correlation and causation. Understanding these foundational principles is essential for further study in psychology.`
    }
  };

  const content = summaryContent[selectedChapter as keyof typeof summaryContent] || summaryContent[1];

  return (
    <>
      <BookSidebar bookId={bookId || '1'} chapters={chapters} />
      <div className="ml-64">
        <BookTopMenu bookId={bookId || '1'} />

        <main className="p-8">
          <div className="max-w-5xl mx-auto">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              <div>
                <h1 className="text-4xl mb-2">{content.title}</h1>
                <p className="text-gray-400">AI-Generated Summary</p>
              </div>

              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg flex items-center gap-2 transition-colors">
                  <Highlighter className="w-4 h-4" />
                  Highlight
                </button>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg flex items-center gap-2 transition-colors">
                  <BookmarkPlus className="w-4 h-4" />
                  Bookmark
                </button>
                <div className="relative group">
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center gap-2 transition-colors">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-white/10 rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl">
                    <button className="w-full px-4 py-2 hover:bg-white/5 text-left flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Export as PDF
                    </button>
                    <button className="w-full px-4 py-2 hover:bg-white/5 text-left flex items-center gap-2">
                      <FileDown className="w-4 h-4" />
                      Export as TXT
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="mb-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h2 className="text-xl mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Key Points
              </h2>
              <ul className="space-y-3">
                {content.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-gray-200">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Summary Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {content.summary.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-200 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
              <button 
                onClick={() => setSelectedChapter(Math.max(1, selectedChapter - 1))}
                disabled={selectedChapter === 1}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous Chapter
              </button>
              <button 
                onClick={() => setSelectedChapter(Math.min(chapters.length, selectedChapter + 1))}
                disabled={selectedChapter === chapters.length}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next Chapter →
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
