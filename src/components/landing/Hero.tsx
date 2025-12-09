import React, { useState } from 'react';
import { ArrowRight, Sparkles, Zap, CheckCircle2, Play } from 'lucide-react';
import { generateFlashcard, FlashcardData } from '@/services/gemini';
import { Link } from 'react-router-dom';

export function Hero() {
    const [demoTopic, setDemoTopic] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [flashcard, setFlashcard] = useState<FlashcardData | null>(null);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!demoTopic.trim()) return;

        setIsLoading(true);
        setFlashcard(null);
        setIsFlipped(false);

        try {
            const result = await generateFlashcard(demoTopic);
            setFlashcard(result);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
                <div className="absolute top-[10%] right-[0%] w-[50%] h-[60%] bg-purple-100/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-indigo-100/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#0066FF] font-semibold text-sm mb-8 border border-blue-100/50 shadow-sm">
                            <Sparkles className="w-4 h-4" />
                            <span>New: Gemini 2.5 AI Model</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                            Study smarter.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-blue-500">Learn faster.</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Convert your notes, PDFs, and videos into flashcards, quizzes, and practice tests — instantly. Stop wasting time making materials and start learning.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                            <Link to="/register" className="bg-[#0066FF] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
                                Get Started Free
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                                <Play className="w-5 h-5 fill-current" />
                                See demo
                            </button>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" /> No credit card required
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" /> 7-day free trial
                            </div>
                        </div>
                    </div>

                    {/* Interactive Demo UI - Redesigned to match screenshot */}
                    <div className="relative w-full max-w-lg mx-auto lg:max-w-full">
                        <div className="relative bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 p-2 animate-float">
                            {/* Browser Header */}
                            <div className="px-6 py-4 border-b border-slate-100/50 flex items-center justify-between mb-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm"></div>
                                </div>
                                <div className="text-xs font-medium text-slate-400 select-none">Study.ai - Flashcard Generator</div>
                                <div className="w-10"></div> {/* Spacer for centering */}
                            </div>

                            {/* Card Body */}
                            <div className="p-4 sm:p-6 bg-slate-50/50 rounded-2xl min-h-[400px] flex flex-col">
                                <div className="mb-6 space-y-3">
                                    <label className="block text-sm font-semibold text-slate-700 ml-1">
                                        Try it now: What do you want to study?
                                    </label>

                                    <form onSubmit={handleGenerate} className="flex gap-3">
                                        <input
                                            type="text"
                                            value={demoTopic}
                                            onChange={(e) => setDemoTopic(e.target.value)}
                                            placeholder="e.g., Mitosis, World War II, Calculus..."
                                            className="flex-1 px-5 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/50 shadow-sm"
                                        />
                                        <button
                                            type="submit"
                                            disabled={isLoading || !demoTopic}
                                            className="bg-[#0066FF] hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-4 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5 aspect-square flex items-center justify-center"
                                        >
                                            {isLoading ? (
                                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <Zap className="w-6 h-6 fill-current" />
                                            )}
                                        </button>
                                    </form>
                                </div>

                                {/* Result Area */}
                                <div className="flex-1 perspective-1000 relative group">
                                    {!flashcard && !isLoading && (
                                        <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-200/80 rounded-3xl bg-white/50">
                                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 text-[#0066FF] animate-pulse-slow">
                                                <Sparkles className="w-8 h-8" />
                                            </div>
                                            <p className="text-slate-500 font-medium max-w-[200px]">
                                                Enter a topic above to generate an instant flashcard with Gemini AI.
                                            </p>
                                        </div>
                                    )}

                                    {isLoading && (
                                        <div className="h-full flex flex-col items-center justify-center gap-4 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <div className="relative">
                                                <div className="w-16 h-16 border-4 border-blue-50 border-t-[#0066FF] rounded-full animate-spin"></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Sparkles className="w-6 h-6 text-[#0066FF] animate-pulse" />
                                                </div>
                                            </div>
                                            <p className="text-slate-500 font-medium animate-pulse">Generating study materials...</p>
                                        </div>
                                    )}

                                    {flashcard && (
                                        <div
                                            className={`relative w-full h-full min-h-[260px] cursor-pointer transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                                            onClick={() => setIsFlipped(!isFlipped)}
                                            style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                                        >
                                            {/* Front Card */}
                                            <div
                                                className="absolute inset-0 bg-white border border-slate-100 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center text-center backface-hidden hover:shadow-2xl transition-shadow"
                                                style={{ backfaceVisibility: 'hidden' }}
                                            >
                                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                                    <span className="font-bold text-[#0066FF]">Q</span>
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">{flashcard.question}</h3>
                                                <div className="absolute bottom-6 flex items-center gap-2 text-sm font-semibold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">
                                                    Click to flip <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>

                                            {/* Back Card */}
                                            <div
                                                className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center text-center backface-hidden"
                                                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                                            >
                                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4">
                                                    <span className="font-bold text-white">A</span>
                                                </div>
                                                <h3 className="text-lg md:text-xl font-medium text-white/90 leading-relaxed">{flashcard.answer}</h3>
                                                <div className="absolute bottom-6 flex items-center gap-2 text-sm font-semibold text-slate-500 bg-slate-800 px-3 py-1.5 rounded-full">
                                                    Click to flip <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* 3D Decorative Elements */}
                        <div className="absolute -right-12 bottom-12 w-32 h-32 bg-[#FFD700] rounded-[2rem] -rotate-12 opacity-20 -z-10 blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
                        <div className="absolute -left-12 -top-12 w-40 h-40 bg-[#0066FF] rounded-full opacity-10 -z-10 blur-2xl animate-float" style={{ animationDelay: '0.8s' }}></div>
                    </div>

                </div>
            </div>
        </section>
    );
};
