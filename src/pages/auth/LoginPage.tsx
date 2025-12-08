import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { googleLogin, githubLogin } from "@/shared/api/endpoints/auth.api.ts";
import { setAuthToken } from "@/shared/api/axiosInstance.ts";
import Cookies from "js-cookie";
import { useGoogleLogin } from '@react-oauth/google';
import { storageService } from '@/shared/services/storage.service';
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

export function LoginPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login - no backend needed
        const mockToken = 'mock_token_' + Date.now();
        setAuthToken(mockToken);
        Cookies.set('token', mockToken);
        storageService.saveUser({ id: '1', email, fullName: email.split('@')[0] });
        navigate('/dashboard');
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
        const clientId = "Ov23lieKTVcp8Gu4LbHy";
        const redirectUri = "http://localhost:5173/login";
        const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:email`;
        window.location.href = githubUrl;
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            githubLogin(code).then(response => {
                if (response) {
                    const { accessToken } = response;
                    setAuthToken(accessToken);
                    Cookies.set('token', accessToken);
                    navigate('/dashboard');
                }
            }).catch(error => {
                console.error('GitHub login failed:', error);
            });
        }
    }, []);

    return (
        <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/20 selection:text-primary overflow-hidden relative">
            <Header />

            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none -z-10">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="flex items-center justify-center min-h-screen pt-20 px-4">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="font-heading font-bold text-4xl mb-2 tracking-tight">Welcome Back</h1>
                        <p className="text-muted-foreground text-lg">Sign in to continue your learning journey</p>
                    </div>

                    <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-foreground/80">Email</label>
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
                                        className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-foreground/80">Password</label>
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
                                        className="w-full pl-11 pr-12 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
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

                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded border-input bg-background/50 text-primary focus:ring-primary focus:ring-offset-background" />
                                    <span className="text-sm text-muted-foreground">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">Forgot password?</a>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20"
                            >
                                Sign In
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </form>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-transparent text-muted-foreground bg-card/50">or continue with</span>
                            </div>
                        </div>

                        <div className="space-y-3 relative z-10">
                            <button type="button" onClick={() => handleGoogleLogin()} className="w-full py-3 px-4 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-3 border border-gray-200">
                                <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4" />
                                    <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853" />
                                    <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05" />
                                    <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335" />
                                </svg>
                                Continue with Google
                            </button>
                            <button type="button" onClick={handleGithubLogin} className="w-full py-3 px-4 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-3 border border-gray-200">
                                <Github className="w-5 h-5" />
                                Continue with GitHub
                            </button>
                        </div>

                        <div className="mt-6 text-center text-sm text-muted-foreground">
                            Don't have an account? <Link to="/register" className="text-primary hover:text-primary/80 font-medium transition-colors">Sign up</Link>
                        </div>
                    </div>

                    <div className="mt-6 text-center text-xs text-muted-foreground/80">
                        By continuing, you agree to our <a href="#" className="hover:text-foreground transition-colors">Terms</a> and <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
