import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Github } from 'lucide-react';
import { googleLogin, signup } from "@/shared/api/endpoints/auth.api.ts";
import { setAuthToken } from "@/shared/api/axiosInstance.ts";
import Cookies from "js-cookie";
import { useGoogleLogin } from '@react-oauth/google';

export function RegisterPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreed) {
            alert('Please agree to the Terms of Service and Privacy Policy');
            return;
        }
        signup({ email: email, password: password, fullName: fullname }).then(response => {
            if (response) {
                const { accessToken } = response;
                setAuthToken(accessToken);
                Cookies.set('token', accessToken);
                navigate('/dashboard');
            }
        })
    };


    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const response = await googleLogin(tokenResponse.access_token);
                if (response) {
                    const { accessToken } = response;
                    setAuthToken(accessToken);
                    Cookies.set('token', accessToken);
                    navigate('/dashboard');
                }
            } catch (error) {
                console.error('Google login failed:', error);
            }
        },
        onError: () => {
            console.error('Google login failed');
        }
    });

    const handleGithubLogin = () => {
        const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;
        const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:email`;
        window.location.href = githubUrl;
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-body relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            {/* Simple Auth Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-heading font-bold text-primary tracking-tight">
                        Study.ai
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground hidden sm:inline">Already have an account?</span>
                        <Link to="/login" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Log in</Link>
                    </div>
                </div>
            </nav>

            <div className="flex-1 flex items-center justify-center p-6 pt-24 relative z-10">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-heading font-extrabold tracking-tight">Create Account</h1>
                        <p className="text-muted-foreground mt-2 text-lg">Start your learning journey today</p>
                    </div>

                    <div className="bg-white/80 dark:bg-card/80 backdrop-blur-md border border-white/20 dark:border-border rounded-2xl p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium">Full Name</label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        value={fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                        placeholder="John Doe"
                                        className="w-full pl-10 pr-4 py-2.5 bg-background/50 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium">Email</label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full pl-10 pr-4 py-2.5 bg-background/50 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium">Password</label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full pl-10 pr-10 py-2.5 bg-background/50 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    required
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="mt-1 w-4 h-4 rounded border-input bg-input text-primary focus:ring-primary"
                                />
                                <span className="text-sm text-muted-foreground">
                                    I agree to the <a href="#" className="text-primary hover:underline font-medium">Terms of Service</a> and <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a>
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                Create Account
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border/50"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-transparent text-muted-foreground bg-white/50 dark:bg-card/50 backdrop-blur-sm rounded">or continue with</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="w-full flex justify-center mb-0">
                                <button
                                    type="button"
                                    onClick={() => handleGoogleLogin()}
                                    className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 text-slate-700 font-medium rounded-xl transition-all flex items-center justify-center gap-3 border border-border shadow-sm hover:shadow-md"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    Sign up with Google
                                </button>
                            </div>
                            <button type="button" onClick={handleGithubLogin} className="w-full py-2.5 px-4 bg-[#24292F] hover:bg-[#24292F]/90 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md">
                                <Github className="w-5 h-5" />
                                Sign up with GitHub
                            </button>
                        </div>
                    </div>

                    <p className="text-center text-xs text-muted-foreground">
                        Secure SSL encrypted connection
                    </p>
                </div>
            </div>
        </div>
    );
}
