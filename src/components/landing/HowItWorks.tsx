import { Upload, Wand2, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
    const steps = [
        {
            step: 1,
            title: "Upload",
            desc: "Upload any PDF, notes, or video.",
            icon: Upload,
            color: "bg-blue-100 text-blue-600"
        },
        {
            step: 2,
            title: "AI Converts",
            desc: "We generate flashcards & quizzes instantly.",
            icon: Wand2,
            color: "bg-purple-100 text-purple-600"
        },
        {
            step: 3,
            title: "Practice",
            desc: "Study, track progress, and ace exams.",
            icon: GraduationCap,
            color: "bg-teal-100 text-teal-600"
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-secondary/30" id="how-it-works">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">How it Works</h2>
                <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
                    From raw notes to active recall in seconds. No more manual data entry.
                </p>

                <div className="grid md:grid-cols-3 gap-8 relative items-start">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

                    {steps.map((s) => (
                        <div key={s.step} className="flex flex-col items-center relative group">
                            <div className={`w-20 h-20 rounded-2xl ${s.color} flex items-center justify-center mb-6 shadow-sm border border-white/50 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                <s.icon size={32} />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-foreground text-background font-bold flex items-center justify-center text-sm shadow-md">
                                    {s.step}
                                </div>
                            </div>
                            <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                            <p className="text-muted-foreground text-sm max-w-[200px]">{s.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <Button size="lg" className="rounded-full px-8">
                        Try with your file <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
