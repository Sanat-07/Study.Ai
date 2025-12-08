import { StudyHeader } from '@/components/study/StudyHeader';
import {
    Bold, Italic, Underline, Strikethrough,
    List, ListOrdered, CheckSquare,
    Quote, Code, Terminal, Minus,
    Sigma,
    AlignLeft, AlignCenter,
    Link as LinkIcon, Table, Image as ImageIcon,
    ChevronDown, Palette, Send, Sparkles, Loader2, X
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Message {
    id: string;
    type: 'user' | 'ai';
    content: string;
    timestamp: Date;
}

export function NotesPage() {
    const [font] = useState('Sans Serif');
    const [heading] = useState('H1');
    const [showChat, setShowChat] = useState(true);

    // Chat State
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'ai',
            content: "I'm here to help you formatting your notes or explaining concepts from the text!",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

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
                content: "That's a great point! In the context of behavioral psychology, that relates strongly to operant conditioning principles.",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="h-screen transition-colors duration-300 flex flex-col overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
            {/* Main Header */}
            <StudyHeader
                title="Psychology of Learning"
                progress="Last updated 4 days ago"
                onBack={() => window.history.back()}
            />

            {/* Toolbar Area */}
            <div className="border-b border-white/10 bg-[#0A0A0A] z-30 px-4 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
                {/* Font Selector */}
                <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/5 rounded text-sm text-gray-300 min-w-max">
                    {font} <ChevronDown className="w-3 h-3 text-gray-500" />
                </button>
                <div className="w-px h-5 bg-white/10 mx-1" />

                {/* Formatting Group */}
                <div className="flex items-center gap-1">
                    <ToolbarBtn icon={Bold} tooltip="Bold" />
                    <ToolbarBtn icon={Italic} tooltip="Italic" />
                    <ToolbarBtn icon={Underline} tooltip="Underline" />
                    <ToolbarBtn icon={Strikethrough} tooltip="Strikethrough" />
                </div>
                <div className="w-px h-5 bg-white/10 mx-1" />

                {/* Heading Selector */}
                <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/5 rounded text-sm text-gray-300 min-w-max">
                    {heading} <ChevronDown className="w-3 h-3 text-gray-500" />
                </button>
                <div className="w-px h-5 bg-white/10 mx-1" />

                {/* Lists Group */}
                <div className="flex items-center gap-1">
                    <ToolbarBtn icon={ListOrdered} tooltip="Numbered List" />
                    <ToolbarBtn icon={List} tooltip="Bulleted List" />
                    <ToolbarBtn icon={CheckSquare} tooltip="Checklist" />
                </div>
                <div className="w-px h-5 bg-white/10 mx-1" />

                {/* Blocks Group */}
                <div className="flex items-center gap-1">
                    <ToolbarBtn icon={Quote} tooltip="Blockquote" />
                    <ToolbarBtn icon={Code} tooltip="Code Block" />
                    <ToolbarBtn icon={Terminal} tooltip="Inline Code" />
                    <ToolbarBtn icon={Minus} tooltip="Horizontal Rule" />
                </div>
                <div className="w-px h-5 bg-white/10 mx-1" />

                {/* Insert Group 1 */}
                <div className="flex items-center gap-1">
                    <ToolbarBtn icon={Palette} tooltip="Highlight" />
                    <ToolbarBtn icon={Sigma} tooltip="Equation" />
                </div>
                <div className="w-px h-5 bg-white/10 mx-1" />

                {/* Alignment Group */}
                <div className="flex items-center gap-1">
                    <ToolbarBtn icon={AlignLeft} tooltip="Align Left" />
                    <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors">
                        <AlignCenter className="w-4 h-4" />
                    </button>
                </div>
                <div className="w-px h-5 bg-white/10 mx-1" />

                {/* Insert Group 2 */}
                <div className="flex items-center gap-1">
                    <ToolbarBtn icon={LinkIcon} tooltip="Link" />
                    <ToolbarBtn icon={Table} tooltip="Table" />
                    <ToolbarBtn icon={ImageIcon} tooltip="Media" />
                </div>

                <div className="ml-auto w-px h-5 bg-white/10 mx-1" />
                <button
                    onClick={() => setShowChat(!showChat)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm transition-colors ${showChat ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-white/5 text-gray-300'}`}
                >
                    <Sparkles className="w-4 h-4" />
                    {showChat ? 'Hide Chat' : 'AI Chat'}
                </button>

            </div>

            {/* Split Content Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Editor Area */}
                <div className="flex-1 overflow-y-auto w-full px-8 py-12 scroll-smooth">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-invert max-w-none prose-lg">
                            <h1>The Psychology of Learning: Part 1</h1>
                            <p className="lead text-gray-300">
                                This is the first part of a two-part series exploring the psychology of learning. It focuses on foundational concepts, including unlearned behaviors and the principles of classical conditioning. The overarching ideas discussed are that all organisms are born with unlearned behaviors (instincts and reflexes), learning is a permanent change in behavior resulting from experience, and various psychological models explain how learning occurs.
                            </p>

                            <h2 className="flex items-center gap-3 mt-12 mb-6 text-2xl font-bold">
                                <span className="text-3xl">📜</span> Tabula Rasa Theory: The Blank Slate
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                The term "Tabula Rasa" means "blank slate." According to this theory, the mind is entirely blank at birth, and external factors like education, environment, and experiences shape a child's learning and development, leaving lasting effects on their personality and thinking. This perspective minimizes the influence of genetics and biology on learning and personality development, suggesting that anyone can become anything.
                            </p>

                            <h2 className="flex items-center gap-3 mt-12 mb-6 text-2xl font-bold">
                                <span className="text-3xl">🧬</span> Unlearned Behaviors: Reflexes & Instincts
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                Despite the Tabula Rasa theory, humans are born with unlearned behaviors known as reflexes and instincts. These are innate, genetically hardwired behaviors passed down through evolution to aid an organism's adaptation to its environment. They can be performed in response to a cue without prior experience.
                            </p>

                            <h3 className="flex items-center gap-3 mt-8 mb-4 text-xl font-bold text-yellow-400">
                                <span className="text-2xl">⚡</span> Reflexes
                            </h3>
                            <p className="text-gray-300">
                                Reflexes are motor or neural reactions to a specific stimulus in the environment. They tend to be simpler than instincts, involve the activity of specific body parts and systems, and involve more primitive centers of the central nervous system (e.g., the spinal cord and the medulla).
                            </p>
                        </div>

                        {/* Visual cursor placeholder to imply editability */}
                        <div className="h-32 mt-4 -ml-1 border-l-2 border-blue-500/0 hover:border-blue-500/50 transition-colors"></div>
                    </div>
                </div>

                {/* AI Chat Sidebar */}
                {showChat && (
                    <div className="w-[400px] border-l border-white/10 bg-[#0A0A0A] flex flex-col shrink-0">
                        <div className="p-4 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-blue-400">
                                <Sparkles className="w-4 h-4" />
                                <span className="font-bold">AI Companion</span>
                            </div>
                            <button onClick={() => setShowChat(false)} className="hover:text-white text-gray-400">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message) => (
                                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-white/5 border border-white/10 text-gray-300'
                                        }`}>
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                                        <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask about your notes..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isTyping}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-500 rounded-lg text-white hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function ToolbarBtn({ icon: Icon, tooltip }: { icon: any, tooltip: string }) {
    return (
        <button
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors group relative"
            title={tooltip}
        >
            <Icon className="w-4 h-4" />
        </button>
    )
}
