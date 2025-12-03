import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { TrustRow } from "@/components/landing/TrustRow";
import { FeaturesSnapshot } from "@/components/landing/FeaturesSnapshot";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeatureDeepDive } from "@/components/landing/FeatureDeepDive";
import { Testimonials } from "@/components/landing/Testimonials";
import { PricingSnapshot } from "@/components/landing/PricingSnapshot";

export function LandingPage() {
    return (
        <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/20 selection:text-primary">
            <Header />

            <main>
                <Hero />
                <TrustRow />
                <FeaturesSnapshot />
                <HowItWorks />
                <FeatureDeepDive />
                <Testimonials />
                <PricingSnapshot />
            </main>

            <Footer />
        </div>
    );
}
