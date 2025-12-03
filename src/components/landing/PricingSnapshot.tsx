import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingSnapshot() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "/forever",
            desc: "Perfect for getting started.",
            features: ["5 PDF uploads / month", "Basic flashcards", "Community support"],
            cta: "Get Started Free",
            popular: false
        },
        {
            name: "Student",
            price: "$9",
            period: "/month",
            desc: "Unlock your full potential.",
            features: ["Unlimited uploads", "Export to Anki/PDF", "Priority support", "Advanced Analytics"],
            cta: "Start Free Trial",
            popular: true
        },
        {
            name: "Pro",
            price: "$19",
            period: "/month",
            desc: "For power users & teams.",
            features: ["Everything in Student", "Team collaboration", "API Access", "Early access to new features"],
            cta: "Go Pro",
            popular: false
        }
    ];

    return (
        <section className="py-20 md:py-32" id="pricing">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
                    <p className="text-muted-foreground">Start for free, upgrade when you need more power.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl p-8 border bg-card flex flex-col ${plan.popular ? 'shadow-2xl scale-105 border-primary z-10' : 'shadow-lg hover:shadow-xl transition-shadow'}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold">{plan.price}</span>
                                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">{plan.desc}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full ${plan.popular ? 'default' : 'variant="outline"'}`}
                                variant={plan.popular ? 'default' : 'outline'}
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
