import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-100/50 supports-[backdrop-filter]:bg-white/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer gap-2.5 group">
                        <span className="text-2xl font-extrabold text-slate-900 tracking-tight">Study<span className="text-[#0066FF]">.ai</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {['Features', 'How it Works', 'Pricing', 'Resources'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-sm font-medium text-slate-600 hover:text-[#0066FF] transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-50 transition-all">
                            Log in
                        </Link>
                        <Link to="/register" className="bg-[#0066FF] hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-2">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {['Features', 'How it Works', 'Pricing', 'Resources'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-[#0066FF] hover:bg-blue-50/50"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="pt-4 flex flex-col space-y-3 px-2">
                            <Link to="/login" className="w-full text-center py-3 text-slate-600 font-semibold hover:bg-slate-50 rounded-xl transition-colors">Log in</Link>
                            <Link to="/register" className="w-full text-center bg-[#0066FF] text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
