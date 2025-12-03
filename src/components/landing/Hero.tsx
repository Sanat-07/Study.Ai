// Link removed
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, FileText, CheckCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left: Content */}
                    <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground mb-6">
                            Study smarter. <br className="hidden lg:block" />
                            <span className="text-primary">Learn faster.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
                            Convert your notes, PDFs, and videos into flashcards, quizzes and practice tests — instantly.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                            <Button size="lg" className="w-full sm:w-auto text-base font-semibold h-12 px-8">
                                Get Started — Free
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 group">
                                See it in action
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">
                            No credit card • 7-day free trial
                        </p>
                    </div>

                    {/* Right: Interactive Mockup */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-full">
                        <div className="relative rounded-2xl border bg-background shadow-2xl overflow-hidden aspect-[4/3] lg:aspect-square flex flex-col">
                            {/* Fake Browser Header */}
                            <div className="bg-muted/50 border-b px-4 py-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="mx-auto w-1/2 h-2 rounded-full bg-muted" />
                            </div>

                            {/* Mockup Animation Area */}
                            <div className="flex-1 p-6 flex flex-col items-center justify-center relative bg-slate-50/50 dark:bg-slate-900/50">
                                {/* Animated Elements */}
                                <div className="animate-pulse-slow absolute inset-0 flex items-center justify-center">
                                    {/* Step 1: Upload */}
                                    <div className="absolute animate-fade-in-out-1 bg-white dark:bg-card p-4 rounded-xl shadow-lg border flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary">
                                            <Upload size={24} />
                                        </div>
                                        <span className="text-sm font-semibold">Uploading PDF...</span>
                                    </div>

                                    {/* Step 2: Processing */}
                                    <div className="absolute animate-fade-in-out-2 bg-white dark:bg-card p-4 rounded-xl shadow-lg border flex flex-col items-center gap-2 opacity-0">
                                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 animate-spin-slow">
                                            <FileText size={24} />
                                        </div>
                                        <span className="text-sm font-semibold">Generating Flashcards...</span>
                                    </div>

                                    {/* Step 3: Success */}
                                    <div className="absolute animate-fade-in-out-3 bg-white dark:bg-card p-4 rounded-xl shadow-lg border flex flex-col items-center gap-2 opacity-0">
                                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                                            <CheckCircle size={24} />
                                        </div>
                                        <span className="text-sm font-semibold">Quiz Ready!</span>
                                    </div>
                                </div>

                                {/* Placeholder graphic if animation not playing/fallback */}
                                <div className="w-full h-full grid grid-cols-2 gap-4 opacity-20">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="bg-muted rounded-lg h-24 w-full" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <div className="absolute -left-4 top-1/2 bg-white dark:bg-card p-3 rounded-lg shadow-xl border animate-bounce-slow">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">⚡️</span>
                                <div>
                                    <p className="text-xs text-muted-foreground">Speed</p>
                                    <p className="text-sm font-bold">In seconds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
