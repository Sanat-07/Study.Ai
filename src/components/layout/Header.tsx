import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Update isScrolled for glassmorphism effect
            setIsScrolled(currentScrollY > 10);

            // Hide header when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current) {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
                } ${isVisible ? "translate-y-0" : "-translate-y-full"
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
                        <span
                            key={item}
                            className="text-sm font-medium text-foreground/80 cursor-default"
                        >
                            {item}
                        </span>
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
                    <ThemeToggle />
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
                        <span
                            key={item}
                            className="text-sm font-medium text-foreground/80 cursor-default py-2"
                        >
                            {item}
                        </span>
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



function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-full border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
