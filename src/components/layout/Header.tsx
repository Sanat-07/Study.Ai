import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    {/* Placeholder for Logo if needed, mostly text for now as per brief "Left: logo" */}
                    <div className="font-heading font-bold text-2xl text-primary tracking-tight">
                        Study<span className="text-foreground">.ai</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Features", "How it Works", "Pricing", "Resources"].map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTAs */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Log in
                    </Link>
                    <Link to="/register">
                        <Button>Get Started</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {["Features", "How it Works", "Pricing", "Resources"].map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-2 border-t pt-4">
                        <Link to="/login" className="text-center text-sm font-medium py-2">
                            Log in
                        </Link>
                        <Button className="w-full">Get Started</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
