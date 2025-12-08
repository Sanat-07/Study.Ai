import { useState } from 'react';
import { StudyHeader } from '@/components/study/StudyHeader';
import { ActivityCard } from '@/components/ui/ActivityCard';
import { Flashcard } from '@/components/study/Flashcard';
import { StudyControlBar } from '@/components/study/StudyControlBar';

const mockFlashcards = [
    {
        id: 1,
        front: "What is the primary focus of psychology as a scientific discipline?",
        back: "The scientific study of behavior and mental processes"
    },
    {
        id: 2,
        front: "Which perspective in psychology focuses on the role of the brain and nervous system?",
        back: "The biological perspective"
    },
    {
        id: 3,
        front: "What is the key difference between correlation and causation?",
        back: "Correlation shows a relationship but does not prove one variable causes the other"
    },
    {
        id: 4,
        front: "What is operant conditioning?",
        back: "A learning process through which behavior is modified by consequences (rewards or punishments)"
    },
    {
        id: 5,
        front: "What are the stages of memory?",
        back: "Encoding, Storage, and Retrieval"
    }
];

export function FlashcardPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < mockFlashcards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const currentCard = mockFlashcards[currentIndex];

    return (
        <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: '#121212' }}>
            <StudyHeader
                title="Introduction to Psychology - Flashcards"
                progress={`${currentIndex + 1} of ${mockFlashcards.length} cards`}
            />

            <div className="max-w-4xl mx-auto px-6 py-12">
                <ActivityCard className="mb-8">
                    <div className="flex items-center justify-center min-h-[500px]">
                        <Flashcard
                            front={currentCard.front}
                            back={currentCard.back}
                        />
                    </div>
                </ActivityCard>

                <StudyControlBar
                    current={currentIndex + 1}
                    total={mockFlashcards.length}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                />

                {/* Study Tips */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400">
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                        Press Space or click to flip the card
                    </div>
                </div>
            </div>
        </div>
    );
}
