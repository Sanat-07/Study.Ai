import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const mockFlashcards = [
    { id: 1, front: "What is the primary focus of psychology as a scientific discipline?", back: "The scientific study of behavior and mental processes." },
    { id: 2, front: "Define 'Neuroplasticity'", back: "The brain's ability to reorganize itself by forming new neural connections throughout life." },
    { id: 3, front: "What is the 'Amygdala' responsible for?", back: "Processing emotions, particularly fear and aggression." },
    { id: 4, front: "What is Operant Conditioning?", back: "A method of learning that employs rewards and punishments for behavior." },
    { id: 5, front: "Who founded the first psychology laboratory?", back: "Wilhelm Wundt in 1879." }
];

const FlashcardPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % mockFlashcards.length);
        }, 150);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + mockFlashcards.length) % mockFlashcards.length);
        }, 150);
    };

    return (
        <PageTransition className="h-[calc(100vh-140px)] flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold font-heading">Introduction to Psychology - Flashcards</h2>
                    <p className="text-gray-400">{currentIndex + 1} of {mockFlashcards.length} cards</p>
                </div>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><X className="text-gray-400" /></button>
            </div>

            {/* Card Container */}
            <div className="relative w-full max-w-3xl aspect-[16/9] perspective-1000 cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
                <div className={`w-full h-full relative preserve-3d transition-transform duration-500 ease-out shadow-2xl ${isFlipped ? 'rotate-y-180' : ''}`}>
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-[#151515] border border-white/5 rounded-3xl p-12 flex flex-col items-center justify-center text-center">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Question</span>
                        <h3 className="text-3xl md:text-4xl font-medium leading-snug">{mockFlashcards[currentIndex].front}</h3>
                        <p className="text-xs text-gray-600 mt-auto pt-4">Click to flip</p>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0F1C2E] border border-blue-500/20 rounded-3xl p-12 flex flex-col items-center justify-center text-center">
                        <span className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">Answer</span>
                        <h3 className="text-3xl md:text-4xl font-medium leading-snug text-blue-100">{mockFlashcards[currentIndex].back}</h3>
                        <p className="text-xs text-blue-900/50 mt-auto pt-4">Click to flip back</p>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="mt-12 flex items-center gap-8">
                <button onClick={handlePrev} className="p-4 rounded-full bg-[#111] border border-white/10 hover:bg-white/5 transition-colors">
                    <ChevronLeft size={24} />
                </button>

                <div className="font-mono text-xl font-bold text-gray-500">
                    {currentIndex + 1} <span className="text-gray-700 mx-2">/</span> {mockFlashcards.length}
                </div>

                <button onClick={handleNext} className="p-4 rounded-full bg-[#111] border border-white/10 hover:bg-white/5 transition-colors">
                    <ChevronRight size={24} />
                </button>
            </div>
        </PageTransition>
    );
};

export default FlashcardPage;
