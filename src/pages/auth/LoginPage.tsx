import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github } from 'lucide-react';
import {login} from "@/shared/api/endpoints/auth.api.ts";
import {setAuthToken} from "@/shared/api/axiosInstance.ts";
import Cookies from "js-cookie";

export function LoginPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({email: email, password: password}).then(response => {
            if(response) {
                const { accessToken } = response;
                setAuthToken(accessToken);
                Cookies.set('token', accessToken);
                navigate('/dashboard');
            }
        })
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
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
                        <Link to="/register" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">Sign Up</Link>
                    </div>
                </div>
            </nav>

            <div className="w-full max-w-md mt-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Sign in to continue your learning journey</p>
                </div>

                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300">Email</label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300">Password</label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-12 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-slate-800 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900" />
                                <span className="text-sm text-gray-400">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            Sign In
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-slate-900/50 text-gray-400">or continue with</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button type="button" className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-3 border border-gray-200">
                            <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4" />
                                <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853" />
                                <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05" />
                                <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </button>
                        <button type="button" className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-3 border border-gray-200">
                            <Github className="w-5 h-5" />
                            Continue with GitHub
                        </button>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-400">
                        Don't have an account? <Link to="/register" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Sign up</Link>
                    </div>
                </div>

                <div className="mt-6 text-center text-xs text-gray-500">
                    By continuing, you agree to our <a href="#" className="text-gray-400 hover:text-gray-300">Terms</a> and <a href="#" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}
