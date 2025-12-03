import { useState } from 'react';
import { Download, Highlighter, BookmarkPlus, ArrowLeft } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

export function SummaryPage() {
  const { bookId } = useParams();
  const [selectedChapter, setSelectedChapter] = useState(1);

  const chapters = [
    { id: 1, title: 'Introduction to Psychology' },
    { id: 2, title: 'The Science of Mind' },
    { id: 3, title: 'Biological Psychology' },
    { id: 4, title: 'Sensation and Perception' },
    { id: 5, title: 'Learning and Memory' },
    { id: 6, title: 'Cognitive Psychology' },
    { id: 7, title: 'Human Development' },
    { id: 8, title: 'Social Psychology' },
  ];

  const summaryContent = {
    1: {
      title: 'Introduction to Psychology',
      keyPoints: [
        'Psychology is the scientific study of behavior and mental processes',
        'Modern psychology has roots in philosophy and physiology',
        'The field encompasses multiple perspectives and approaches',
        'Scientific method is fundamental to psychological research',
        'Understanding correlation vs causation is essential'
      ],
      summary: `Psychology is fundamentally concerned with understanding human behavior and mental processes through scientific investigation. The discipline emerged in the late 19th century, drawing from both philosophical inquiry and physiological research.

The field encompasses several major perspectives: biological (focusing on the brain and nervous system), cognitive (examining mental processes), behavioral (studying observable behavior), psychodynamic (exploring unconscious processes), and humanistic (emphasizing personal growth and potential).

Contemporary psychology applies scientific methods to study a wide range of phenomena, from basic sensory processes to complex social behaviors. Psychologists work in diverse settings including research laboratories, clinical practices, schools, and organizations.

Key concepts introduced in this chapter include the scientific method as applied to psychological research, the importance of empirical evidence, and the distinction between correlation and causation. Understanding these foundational principles is essential for further study in psychology.`
    }
  };

  const content = summaryContent[selectedChapter as keyof typeof summaryContent] || summaryContent[1];

  return (
    <div className="ml-64 min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          to={`/book/${bookId}`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Book
        </Link>

        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
          <div>
            <h1 className="text-4xl font-bold mb-2">{content.title}</h1>
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
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Chapter Selector */}
        <div className="mb-8">
          <label className="text-sm text-gray-400 mb-3 block">Select Chapter</label>
          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(Number(e.target.value))}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
          >
            {chapters.map(ch => (
              <option key={ch.id} value={ch.id} className="bg-gray-900">
                Chapter {ch.id}: {ch.title}
              </option>
            ))}
          </select>
        </div>

        {/* Key Points */}
        <div className="mb-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
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
    </div>
  );
}
