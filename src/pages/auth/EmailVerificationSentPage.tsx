import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

export function EmailVerificationSentPage() {
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
                </div>
            </nav>

            <div className="w-full max-w-md mt-16">
                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-8 h-8 text-blue-500" />
                    </div>

                    <h1 className="text-2xl font-bold mb-4">Check Your Email</h1>

                    <div className="space-y-4 text-gray-300 mb-8">
                        <p>
                            We have sent a verification link to your email address.
                        </p>
                        <p className="text-sm text-gray-400">
                            Please check your inbox and click the link to verify your account.
                            If you don't see the email, please check your spam folder.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <Link
                            to="/login"
                            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            Return to Login
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        <button
                            type="button"
                            className="w-full py-3 px-4 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white font-medium rounded-lg transition-all duration-300"
                        >
                            Resend Verification Email
                        </button>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Secure SSL encrypted connection
                </div>
            </div>
        </div>
    );
}
