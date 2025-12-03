import { Check } from "lucide-react";

export function FeatureDeepDive() {
    const features = [
        {
            title: "Auto Flashcards",
            subtitle: "Turn lectures into learning.",
            desc: "Don't waste hours rewriting notes. Our AI analyzes your uploads (PDFs, Videos, Docs) and automatically generates flashcards with key concepts and definitions.",
            points: ["Extracts from any text or video", "Smart concept grouping", "Easy to edit and customize"],
            image: "bg-blue-50" // Placeholder class for image area
        },
        {
            title: "Smart Quizzes",
            subtitle: "Test your knowledge, fast.",
            desc: "Generate practice tests that mimic real exams. Choose multiple choice, short answer, or fill-in-the-blank.",
            points: ["Adaptive difficulty", "Instant grading and feedback", "Focus on weak areas"],
            image: "bg-purple-50",
            reverse: true
        },
        {
            title: "Spaced Repetition",
            subtitle: "Never forget what you learn.",
            desc: "Our algorithm schedules reviews at the optimal time to ensure long-term retention.",
            points: ["Scientifically proven method", "Daily streak tracking", "Visual progress mastery"],
            image: "bg-amber-50"
        }
    ];

    return (
        <section className="py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 space-y-24">
                {features.map((f, i) => (
                    <div key={i} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${f.reverse ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2">
                            <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border ${f.image} flex items-center justify-center group`}>
                                <span className="text-muted-foreground/30 font-bold text-lg">Feature Demo: {f.title}</span>
                                {/* Overlay effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-semibold mb-6">
                                {f.subtitle}
                            </div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">{f.title}</h2>
                            <p className="text-lg text-muted-foreground mb-8 text-balance">
                                {f.desc}
                            </p>
                            <ul className="space-y-4">
                                {f.points.map((p, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-foreground/90 font-medium">{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
