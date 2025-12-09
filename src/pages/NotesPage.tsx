import React, { useState } from 'react';
import { Bold, Italic, Underline, List, Send, Sparkles, X, ChevronLeft, Layout, Quote, Code, Minus, MessageSquare, Link, Table, Image } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { chatWithAI } from '../services/geminiService';
import { useNavigate } from 'react-router-dom';

const NotesPage: React.FC = () => {
    const navigate = useNavigate();
    const [isChatOpen, setIsChatOpen] = useState(true);
    const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
        { role: 'ai', text: "I'm here to help you formatting your notes or explaining concepts from the text!" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;
        const userMsg = inputValue;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInputValue('');
        setIsLoading(true);

        const aiResponse = await chatWithAI(userMsg, "The user is studying Psychology notes about Tabula Rasa and Unlearned Behaviors.");
        setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
        setIsLoading(false);
    };

    return (
        <PageTransition className="flex flex-col h-screen overflow-hidden bg-[#0A0A0A]">
            {/* Top Header */}
            <div className="h-16 border-b border-white/5 bg-[#000000] flex items-center justify-between px-6 shrink-0">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                        <ChevronLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-lg font-bold text-white leading-tight">Psychology of Learning</h1>
                        <p className="text-xs text-gray-500">Last updated 4 days ago</p>
                    </div>
                </div>
                <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white">
                    <X size={20} />
                </button>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Toolbar */}
                    <div className="h-12 border-b border-white/5 bg-[#0A0A0A] flex items-center px-4 gap-1 overflow-x-auto no-scrollbar shrink-0">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-300 px-3 py-1.5 hover:bg-white/10 rounded">
                            Sans Serif <span className="text-[10px] ml-1">▼</span>
                        </button>
                        <div className="w-px h-4 bg-white/10 mx-2"></div>

                        <div className="flex items-center gap-0.5">
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><Bold size={16} /></button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><Italic size={16} /></button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><Underline size={16} /></button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><div className="line-through text-xs">S</div></button>
                        </div>

                        <div className="w-px h-4 bg-white/10 mx-2"></div>

                        <button className="flex items-center gap-1 text-sm font-medium text-gray-300 px-3 py-1.5 hover:bg-white/10 rounded">
                            H1 <span className="text-[10px] ml-1">▼</span>
                        </button>

                        <div className="w-px h-4 bg-white/10 mx-2"></div>

                        <div className="flex items-center gap-0.5">
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><List size={16} /></button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><Layout size={16} /></button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><Quote size={16} /></button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><Code size={16} /></button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><div className="font-mono text-xs">&gt;_</div></button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><Minus size={16} /></button>
                        </div>

                        <div className="w-px h-4 bg-white/10 mx-2"></div>

                        <div className="flex items-center gap-0.5">
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><Link size={16} /></button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><Table size={16} /></button>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded"><Image size={16} /></button>
                        </div>

                        <div className="ml-auto flex items-center gap-2">
                            <button
                                onClick={() => setIsChatOpen(!isChatOpen)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${isChatOpen ? 'bg-blue-500/10 text-blue-400' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                            >
                                {isChatOpen ? (
                                    <>Hide Chat <MessageSquare size={14} /></>
                                ) : (
                                    <>AI Copilot <Sparkles size={14} /></>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Text Editor Content */}
                    <div className="flex-1 p-8 lg:px-16 overflow-y-auto outline-none text-gray-200" contentEditable>
                        <p className="text-lg leading-loose mb-8">
                            <span className="font-bold text-white">The Psychology of Learning: Part 1</span><br />
                            This is the first part of a two-part series exploring the psychology of learning. It focuses on foundational concepts, including unlearned behaviors and the principles of classical conditioning. The overarching ideas discussed are that all organisms are born with unlearned behaviors (instincts and reflexes), learning is a permanent change in behavior resulting from experience, and various psychological models explain how learning occurs.
                        </p>

                        <h2 className="text-2xl font-bold text-[#e6d5b0] mt-12 mb-6 flex items-center gap-3">
                            <span className="text-3xl">📜</span> Tabula Rasa Theory: The Blank Slate
                        </h2>
                        <p className="text-lg leading-loose mb-8 text-gray-300">
                            The term "Tabula Rasa" means "blank slate." According to this theory, the mind is entirely blank at birth, and external factors like education, environment, and experiences shape a child's learning and development, leaving lasting effects on their personality and thinking. This perspective minimizes the influence of genetics and biology on learning and personality development, suggesting that anyone can become anything.
                        </p>

                        <h2 className="text-2xl font-bold text-[#b0c4e6] mt-12 mb-6 flex items-center gap-3">
                            <span className="text-3xl">🧬</span> Unlearned Behaviors: Reflexes & Instincts
                        </h2>
                        <p className="text-lg leading-loose mb-8 text-gray-300">
                            Despite the Tabula Rasa theory, humans are born with unlearned behaviors known as reflexes and instincts. These are innate, genetically hardwired behaviors passed down through evolution to aid an organism's adaptation to its environment. They can be performed in response to a cue without prior experience.
                        </p>
                    </div>
                </div>

                {/* AI Companion Sidebar */}
                {isChatOpen && (
                    <div className="w-[350px] bg-[#050505] border-l border-white/5 flex flex-col shrink-0 animate-in slide-in-from-right duration-300">
                        <div className="h-12 border-b border-white/5 flex items-center justify-between px-4">
                            <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                                <Sparkles size={16} /> AI Companion
                            </div>
                            <button onClick={() => setIsChatOpen(false)} className="text-gray-500 hover:text-white">
                                <X size={16} />
                            </button>
                        </div>

                        <div className="flex-1 p-4 space-y-6 overflow-y-auto">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[90%] rounded-2xl p-4 text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-[#1A1A1A] text-gray-300 border border-white/5'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-[#1A1A1A] rounded-2xl p-4 flex gap-1 border border-white/5">
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="p-4 border-t border-white/5 bg-[#050505]">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder="Ask about your notes..."
                                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-4 pr-10 py-3 text-sm text-gray-300 placeholder-gray-600 focus:border-blue-500/50 outline-none focus:ring-1 focus:ring-blue-500/20 transition-all"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={isLoading}
                                    className="absolute right-2 top-2 p-1.5 text-gray-400 hover:text-blue-400 transition-colors disabled:opacity-50"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </PageTransition>
    );
};

export default NotesPage;
