import { useState } from 'react';
import { motion } from 'framer-motion';

interface FlashcardProps {
    front: string;
    back: string;
    id?: number | string;
}

export function Flashcard({ front, back }: FlashcardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className="w-full h-[400px] perspective-1000 cursor-pointer group"
            onClick={handleFlip}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden bg-slate-800 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl group-hover:border-blue-500/30 transition-colors">
                    <h3 className="text-2xl font-medium text-white">{front}</h3>
                    <p className="absolute bottom-6 text-sm text-gray-500 font-medium">Click to flip</p>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 backface-hidden bg-slate-900 border border-blue-500/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                    <h3 className="text-2xl font-medium text-blue-100">{back}</h3>
                </div>
            </motion.div>
        </div>
    );
}
