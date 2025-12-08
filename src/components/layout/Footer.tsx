import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background pt-16 pb-8 border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block font-heading font-bold text-2xl text-primary tracking-tight mb-4">
                            <span className="text-xl font-bold font-heading text-foreground">Study.ai</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            Convert your notes, PDFs, and videos into flashcards, quizzes and practice tests — instantly. Study smarter, not harder.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            {[Twitter, Facebook, Instagram, Linkedin, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors social-icon"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Product</h4>
                        <ul className="space-y-3">
                            {["Features", "Pricing", "Enterprise", "Changelog", "Roadmap"].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
                        <ul className="space-y-3">
                            {["Blog", "Community", "Help Center", "Guides", "API Status"].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Company</h4>
                        <ul className="space-y-3">
                            {["About", "Careers", "Contact", "Privacy", "Terms"].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Study.ai. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                            Terms of Service
                        </Link>
                        <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
