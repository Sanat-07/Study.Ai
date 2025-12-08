import { Zap, Brain, Calendar, BarChart3 } from "lucide-react";

export function FeaturesSnapshot() {
    const features = [
        {
            icon: Zap,
            title: "Auto Flashcards",
            desc: "Instantly extract Q&A from any material.",
            color: "text-blue-400 bg-blue-500/10"
        },
        {
            icon: Brain,
            title: "Smart Quizzes",
            desc: "Adaptive quizzes that focus on weak spots.",
            color: "text-purple-400 bg-purple-500/10"
        },
        {
            icon: Calendar,
            title: "Spaced Review",
            desc: "Memory-driven scheduling for retention.",
            color: "text-amber-400 bg-amber-500/10"
        },
        {
            icon: BarChart3,
            title: "Progress Analytics",
            desc: "Track mastery and time spent.",
            color: "text-teal-400 bg-teal-500/10"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, idx) => (
                        <div key={idx} className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color} group-hover:scale-110 transition-transform`}>
                                <f.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                            <p className="text-sm text-muted-foreground">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
