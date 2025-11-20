import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { InteractiveBackground } from '../components/InteractiveBackground';
import { Instagram, Github, Youtube, Linkedin } from 'lucide-react';

export function LandingPage() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-animate').forEach(el => {
            observerRef.current?.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observerRef.current?.disconnect();
        };
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-slate-950 text-white antialiased overflow-x-hidden relative">
            <InteractiveBackground />
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'}`} id="navbar">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                        <span className="font-bold">AI StudyBook</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                            Features
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <Link to="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                            Pricing
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                            About Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log In</Link>
                        <Link to="/register" className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/20 backdrop-blur-sm mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-sm text-blue-300 font-medium">New: AI-Powered Quiz Generation</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Master Any Subject with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Intelligent Study Tools</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Transform your learning experience with AI-generated summaries, interactive quizzes, and personalized study schedules tailored just for you.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Link to="/register" className="group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center gap-2">
                                Get Started Free
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                            </span>
                        </Link>
                        <a href="#demo" onClick={(e) => scrollToSection(e, 'demo')} className="px-8 py-4 rounded-xl bg-slate-800/50 border border-white/10 hover:bg-slate-800 transition-all duration-300 hover:scale-105 font-semibold backdrop-blur-sm flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Watch Demo
                        </a>
                    </div>
                </div>

                {/* Hero Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl hero-glow opacity-50 pointer-events-none"></div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 group scroll-animate">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Personalized Learning</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Our AI adapts to your unique learning style, creating custom study paths that maximize retention and understanding.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 group scroll-animate" style={{ transitionDelay: '100ms' }}>
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Interactive Study Groups</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Collaborate with peers in AI-moderated study sessions. Share notes, quiz each other, and learn together in real-time.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 group scroll-animate" style={{ transitionDelay: '200ms' }}>
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Smart Analytics</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Track your progress with detailed insights. Identify weak spots and optimize your study time for better results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="features" className="py-24 px-6 relative bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 scroll-animate">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Excel</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Powerful features designed to streamline your study process and boost your academic performance.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="card p-8 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-blue-500/30 transition-all duration-500 group scroll-animate">
                            <div className="relative overflow-hidden rounded-xl bg-slate-900/50 p-6 mb-6 border border-white/5 group-hover:border-blue-500/20 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <svg className="w-10 h-10 text-blue-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Instant Summaries</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Upload any document or paste text to get concise, accurate summaries in seconds. Save hours of reading time.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="card p-8 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-purple-500/30 transition-all duration-500 group scroll-animate" style={{ transitionDelay: '100ms' }}>
                            <div className="relative overflow-hidden rounded-xl bg-slate-900/50 p-6 mb-6 border border-white/5 group-hover:border-purple-500/20 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <svg className="w-10 h-10 text-purple-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">AI Quiz Generator</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Turn your study materials into interactive quizzes automatically. Test your knowledge and identify gaps instantly.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="card p-8 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group scroll-animate" style={{ transitionDelay: '200ms' }}>
                            <div className="relative overflow-hidden rounded-xl bg-slate-900/50 p-6 mb-6 border border-white/5 group-hover:border-cyan-500/20 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <svg className="w-10 h-10 text-cyan-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">Smart Flashcards</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Create digital flashcards with spaced repetition. The most efficient way to memorize complex terms and concepts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 scroll-animate">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Built on a foundation of innovation, integrity, and student success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 flex gap-6 items-start scroll-animate">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Innovation First</h3>
                                <p className="text-gray-400">We constantly push the boundaries of what's possible in EdTech, leveraging the latest AI advancements to improve learning.</p>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 flex gap-6 items-start scroll-animate" style={{ transitionDelay: '100ms' }}>
                            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Data Privacy</h3>
                                <p className="text-gray-400">Your study data is yours alone. We employ enterprise-grade encryption and never sell your personal information.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6 relative bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 scroll-animate">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">The passionate minds behind AI StudyBook.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Member 1 */}
                        <div className="text-center group scroll-animate">
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-blue-500 transition-colors duration-300">
                                <div className="absolute inset-0 bg-slate-800 animate-pulse"></div>
                                {/* Placeholder image if not found */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">SB</div>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Sanat Bogenbaev</h3>
                            <p className="text-blue-400 text-sm mb-3">CEO, Co-founder</p>
                            <p className="text-gray-500 text-sm">Visionary leader driving innovation.</p>
                        </div>

                        {/* Member 2 */}
                        <div className="text-center group scroll-animate" style={{ transitionDelay: '100ms' }}>
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-purple-500 transition-colors duration-300">
                                <div className="absolute inset-0 bg-slate-800 animate-pulse"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">OS</div>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Oralxhan Seilxhan</h3>
                            <p className="text-purple-400 text-sm mb-3">CTO, Co-founder</p>
                            <p className="text-gray-500 text-sm">Technical architect and AI expert.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900/50 border-t border-white/5 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
                        <div className="md:col-span-1">
                            <Link to="/" className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                                <span className="font-bold">AI StudyBook</span>
                            </Link>
                            <p className="text-sm text-gray-400 mb-6">Empowering students and professionals by transforming learning into an interactive experience.</p>
                            <div className="flex items-center gap-3">
                                {[
                                    { icon: Instagram, color: 'from-purple-600 to-orange-500' },
                                    { icon: Github, color: 'bg-gray-900' },
                                    { icon: Youtube, color: 'bg-red-600' },
                                    { icon: Linkedin, color: 'bg-blue-700' }
                                ].map((social, i) => (
                                    <a key={i} href="#" className="social-icon w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 group relative overflow-hidden">
                                        <div className={`absolute inset-0 ${social.color.startsWith('bg') ? social.color : `bg-gradient-to-br ${social.color}`} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                        <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white relative z-10 transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {[
                            { title: 'Product', links: ['Features', 'Pricing', 'API', 'Integrations'] },
                            { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Press Kit'] },
                            { title: 'Resources', links: ['Documentation', 'Tutorials', 'Support', 'Community'] },
                            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licenses'] }
                        ].map((column, i) => (
                            <div key={i}>
                                <h3 className="font-semibold mb-4">{column.title}</h3>
                                <ul className="space-y-3">
                                    {column.links.map((link, j) => (
                                        <li key={j}>
                                            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors relative group">
                                                {link}
                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>&copy; 2025 AI StudyBook. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-white transition-colors">Status</a>
                            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
