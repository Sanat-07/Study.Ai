import { Check, X, Zap, Clock, Brain, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const comparisons = [
    {
        icon: Zap,
        feature: "Flashcard Creation",
        studyAi: "Auto-generated in seconds",
        traditional: "Manual creation (hours)",
        color: "text-blue-500"
    },
    {
        icon: Brain,
        feature: "Quiz Generation",
        studyAi: "AI-powered, adaptive questions",
        traditional: "Generic, one-size-fits-all",
        color: "text-purple-500"
    },
    {
        icon: Clock,
        feature: "Study Time",
        studyAi: "Optimized & efficient",
        traditional: "Time-consuming & repetitive",
        color: "text-green-500"
    },
    {
        icon: TrendingUp,
        feature: "Progress Tracking",
        studyAi: "Real-time analytics & insights",
        traditional: "Manual tracking or none",
        color: "text-orange-500"
    }
];

export function ComparisonSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                        <Zap size={14} />
                        <span>See The Difference</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
                        Study.ai vs <span className="text-muted-foreground">Traditional Methods</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Stop wasting time with outdated study techniques. See why thousands are switching to Study.ai.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Header Row */}
                    <div className="grid grid-cols-3 gap-4 mb-6 px-4">
                        <div className="text-center">
                            <p className="text-sm font-medium text-muted-foreground">Feature</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                                <Check className="w-4 h-4 text-primary" />
                                <span className="font-bold text-primary">Study.ai</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border">
                                <X className="w-4 h-4 text-muted-foreground" />
                                <span className="font-bold text-muted-foreground">Traditional</span>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Rows */}
                    <div className="space-y-3">
                        {comparisons.map((item, idx) => (
                            <Card
                                key={idx}
                                className="grid grid-cols-3 gap-4 p-4 md:p-6 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
                            >
                                {/* Feature */}
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg bg-background/80 ${item.color}`}>
                                        <item.icon size={20} />
                                    </div>
                                    <span className="font-semibold text-foreground text-sm md:text-base">
                                        {item.feature}
                                    </span>
                                </div>

                                {/* Study.ai */}
                                <div className="flex items-center justify-center text-center">
                                    <div className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-foreground font-medium">
                                            {item.studyAi}
                                        </span>
                                    </div>
                                </div>

                                {/* Traditional */}
                                <div className="flex items-center justify-center text-center">
                                    <div className="flex items-start gap-2">
                                        <X className="w-5 h-5 text-red-500/70 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-muted-foreground">
                                            {item.traditional}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex flex-col md:flex-row items-center gap-3 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                </div>
                                <span className="font-bold text-foreground text-lg">
                                    95% of users see better results
                                </span>
                            </div>
                            <span className="text-muted-foreground hidden md:inline">•</span>
                            <span className="text-sm text-muted-foreground">
                                Join thousands who've already upgraded their study game
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
