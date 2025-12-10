import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github, BarChart3, Clock, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { googleLogin, githubLogin } from "@/shared/api/endpoints/auth.api.ts";
import { setAuthToken } from "@/shared/api/axiosInstance.ts";
import Cookies from "js-cookie";
import { useGoogleLogin } from '@react-oauth/google';
import { storageService } from '@/shared/services/storage.service';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const MOCK_CHART_DATA = [
    { name: 'Mon', hours: 2.5 },
    { name: 'Tue', hours: 4.2 },
    { name: 'Wed', hours: 3.8 },
    { name: 'Thu', hours: 5.5 },
    { name: 'Fri', hours: 4.0 },
    { name: 'Sat', hours: 6.2 },
    { name: 'Sun', hours: 5.1 },
];

export function LoginPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network delay for smooth UX
        setTimeout(() => {
            const mockToken = 'mock_token_' + Date.now();
            setAuthToken(mockToken);
            Cookies.set('token', mockToken);
            storageService.saveUser({ id: '1', email, fullName: email.split('@')[0] });
            setIsLoading(false);
            navigate('/dashboard');
        }, 800);
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
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 font-sans bg-background">
            {/* Left Side - Login Form */}
            <div className="flex flex-col justify-center items-center p-6 sm:p-12 lg:p-16 relative">
                <div className="w-full max-w-md space-y-8">
                    {/* Header */}
                    <div className="space-y-2 text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-[#0066FF] flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <Sparkles size={18} className="text-white" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-[#0066FF]">Study AI</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome Back</h1>
                        <p className="text-muted-foreground text-base">Log in to access your Study Dashboard</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="pl-10 h-12 bg-gray-50 border-input/60 focus:bg-white text-gray-900 transition-all placeholder:text-muted-foreground/50"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="pl-10 pr-10 h-12 bg-gray-50 border-input/60 focus:bg-white text-gray-900 transition-all placeholder:text-muted-foreground/50"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" />
                                <label
                                    htmlFor="remember"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                                >
                                    Remember me
                                </label>
                            </div>
                            <Link
                                to="/forgot-password"
                                className="text-sm font-medium text-[#0066FF] hover:text-[#0066FF]/80 transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <Button className="w-full h-12 text-base shadow-lg shadow-blue-500/25 rounded-xl hover:scale-[1.02] transition-transform duration-200 bg-gradient-to-r from-[#0066FF] to-blue-600 hover:from-blue-600 hover:to-blue-700" type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <span className="animate-pulse">Logging in...</span>
                            ) : (
                                <span className="flex items-center">
                                    Log In <ArrowRight className="ml-2 w-4 h-4" />
                                </span>
                            )}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-muted" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-12 rounded-xl hover:bg-muted/50 transition-colors border-input/60" onClick={() => handleGoogleLogin()}>
                            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                <path fill="#4285F4" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                            </svg>
                            Google
                        </Button>
                        <Button variant="outline" className="h-12 rounded-xl hover:bg-muted/50 transition-colors border-input/60" onClick={handleGithubLogin}>
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </Button>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link to="/register" className="font-semibold text-[#0066FF] hover:text-[#0066FF]/80 transition-colors">
                            Register now
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-6 left-0 w-full text-center text-xs text-muted-foreground/60">
                    &copy; 2024 Study AI. All rights reserved.
                </div>
            </div>

            {/* Right Side - Visual Dashboard Mockup */}
            <div className="hidden lg:flex flex-col relative bg-muted/10 overflow-hidden items-center justify-center p-8">
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-[#0066FF]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-blue-800 opacity-90" />
                <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-20%] w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[100px]" />

                {/* Content Container */}
                <div className="relative z-10 w-full max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white mb-8 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-3 drop-shadow-md">Track Your Progress</h2>
                        <p className="text-white/90 text-lg drop-shadow-sm">Visualize your learning journey with advanced analytics.</p>
                    </motion.div>

                    {/* Dashboard Mockup - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                        className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl shadow-blue-900/40 overflow-hidden p-6 text-white"
                    >
                        {/* Top Stats Row */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-blue-500/30 rounded-lg">
                                        <Clock className="w-5 h-5 text-blue-100" />
                                    </div>
                                    <span className="text-sm font-medium text-white/80">Hours Studied</span>
                                </div>
                                <div className="text-2xl font-bold">24.5h</div>
                                <div className="text-xs text-green-300 mt-1 flex items-center font-medium">
                                    <TrendingUp className="w-3 h-3 mr-1" /> +12% from last week
                                </div>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-purple-500/30 rounded-lg">
                                        <CheckCircle2 className="w-5 h-5 text-purple-100" />
                                    </div>
                                    <span className="text-sm font-medium text-white/80">Tasks Done</span>
                                </div>
                                <div className="text-2xl font-bold">18/24</div>
                                <div className="text-xs text-white/60 mt-1">
                                    Keep up the good work!
                                </div>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-semibold text-white/90 flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4" /> Weekly Activity
                                </h3>
                                <div className="bg-white/10 text-[10px] px-2 py-1 rounded-full text-white/80 font-medium">Last 7 Days</div>
                            </div>
                            <div className="h-[180px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={MOCK_CHART_DATA}>
                                        <defs>
                                            <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#fff" stopOpacity={0.4} />
                                                <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px', color: '#fff' }}
                                            itemStyle={{ color: '#fff' }}
                                        />
                                        <Area type="monotone" dataKey="hours" stroke="#fff" strokeWidth={2} fillOpacity={1} fill="url(#colorHours)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

