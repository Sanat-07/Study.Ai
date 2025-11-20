import { Link } from 'react-router-dom';
import { Check, Info, Instagram, Github, Youtube, Linkedin } from 'lucide-react';

export function PricingPage() {
    return (
        <div className="bg-slate-950 text-white antialiased min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                        <span className="font-bold">AI StudyBook</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Features</Link>
                        <Link to="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link>
                        <Link to="/#about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link>
                        <Link to="/#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
                        <Link to="/login" className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors">Log In</Link>
                        <Link to="/register" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">Sign Up</Link>
                    </div>
                </div>
            </nav>

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/20 backdrop-blur-sm mb-6">
                            <Info className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300 font-medium">Simple, Transparent Pricing</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-4">Choose Your Plan</h1>
                        <p className="text-xl text-gray-400">Start free and scale as you grow. Pro plan includes a 14-day free trial.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Free Plan */}
                        <div className="pricing-card relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500/10 group">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center mb-6 shadow-lg shadow-gray-600/20">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Free</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold">$0</span>
                                <span className="text-gray-400"> / forever</span>
                            </div>
                            <p className="text-gray-400 mb-6">Perfect for trying out AI StudyBook</p>
                            <Link to="/register" className="block w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 mb-6 text-center">
                                Get Started
                            </Link>
                            <ul className="space-y-3">
                                {['5 document uploads per month', 'Basic summaries', 'Limited Q&A interactions', '10 flashcards per document', 'Community support'].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-gray-400">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-600 to-gray-800 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                        </div>

                        {/* Pro Plan */}
                        <div className="pricing-card relative bg-slate-900/50 backdrop-blur-xl border-2 border-blue-500/50 rounded-2xl p-10 hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform scale-105 group">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold shadow-lg">Most Popular</span>
                            </div>
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Pro</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold">$12</span>
                                <span className="text-gray-400"> / per month</span>
                            </div>
                            <p className="text-gray-400 mb-6">For serious learners and students</p>
                            <Link to="/register" className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 mb-6 text-center">
                                Start Free Trial
                            </Link>
                            <ul className="space-y-3">
                                {[
                                    'Unlimited document uploads',
                                    'Advanced AI summaries',
                                    'Unlimited Q&A conversations',
                                    'Unlimited flashcards & quizzes',
                                    'Priority support',
                                    'Export to PDF',
                                    'Custom study schedules',
                                    'Advanced analytics'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                        </div>

                        {/* Business Plan */}
                        <div className="pricing-card relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 opacity-75 cursor-not-allowed group">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold shadow-lg">Coming Soon</span>
                            </div>
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Business</h3>
                            <div className="mb-6">
                                <span className="text-2xl font-bold text-gray-400">Coming Soon</span>
                            </div>
                            <p className="text-gray-400 mb-6">For teams and organizations</p>
                            <button disabled className="w-full py-3 px-4 bg-slate-800 text-gray-500 font-semibold rounded-lg cursor-not-allowed mb-6">
                                Join Waitlist
                            </button>
                            <ul className="space-y-3">
                                {[
                                    'Everything in Pro',
                                    'Team collaboration tools',
                                    'Admin dashboard',
                                    'SSO & advanced security',
                                    'Custom integrations',
                                    'Dedicated account manager',
                                    'SLA guarantee',
                                    'Custom AI training'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-gray-400">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

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
