import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingSnapshot } from "@/components/landing/PricingSnapshot";

export function PricingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground font-body">
            <Header />
            <main className="flex-grow pt-20">
                <div className="py-10">
                    <div className="container mx-auto px-4 text-center mb-10">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Plans & Pricing</h1>
                        <p className="text-xl text-muted-foreground">Choose the plan that fits your study needs.</p>
                    </div>
                    <PricingSnapshot />
                </div>
            </main>
            <Footer />
        </div>
    );
}
