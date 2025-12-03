// React import removed
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export function Testimonials() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

    const testimonials = [
        {
            name: "Almas S.",
            uni: "ENU",
            quote: "Study.ai saved my finals week. The auto-flashcards cut my study prep time in half.",
            tag: "Biology"
        },
        {
            name: "Aigerim K.",
            uni: "NU",
            quote: "The quiz generator is uncannily accurate. It feels like having a TA in my pocket.",
            tag: "Economics"
        },
        {
            name: "Serik B.",
            uni: "KBTU",
            quote: "Finally a tool that handles complex engineering PDFs without messing up the formulas.",
            tag: "Engineering"
        },
        {
            name: "Dana M.",
            uni: "KIMEP",
            quote: "I love the spaced repetition features. I actually remember things now instead of just cramming.",
            tag: "Business"
        }
    ];

    return (
        <section className="py-20 bg-secondary/20 border-y relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What students say</h2>
                    <p className="text-muted-foreground">Real students. Real results.</p>
                </div>

                <div className="max-w-4xl mx-auto" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((t, i) => (
                            <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-4">
                                <Card className="border-0 shadow-lg bg-card h-full">
                                    <CardContent className="p-8 flex flex-col h-full">
                                        <Quote className="text-primary/20 w-10 h-10 mb-4" />
                                        <p className="text-lg font-medium leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
                                        <div className="flex items-center gap-4 mt-auto">
                                            <Avatar>
                                                <AvatarImage src={`https://api.dicebear.com/7.x/notionists/svg?seed=${t.name}`} />
                                                <AvatarFallback>{t.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-bold text-sm">{t.name}</p>
                                                <p className="text-xs text-muted-foreground">{t.uni} • {t.tag}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
