import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, FileText, GraduationCap, Video, Search, Filter, Download, ExternalLink, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ResourcesPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Guides", "Practice", "Videos", "Templates"];

    const resources = [
        {
            icon: BookOpen,
            category: "Guides",
            title: "Comprehensive Study Library",
            desc: "Access a wide range of study materials across subjects including Math, Science, and History.",
            color: "text-blue-600",
            bg: "bg-blue-50",
            tags: ["PDF", "eBook"]
        },
        {
            icon: FileText,
            category: "Guides",
            title: "Effective Note-Taking",
            desc: "Master the Cornell method and other strategies to take better notes during lectures.",
            color: "text-purple-600",
            bg: "bg-purple-50",
            tags: ["Article", "5 min read"]
        },
        {
            icon: GraduationCap,
            category: "Practice",
            title: "Mock Exam Simulator",
            desc: "Simulate real exam conditions with timed tests to boost your confidence.",
            color: "text-green-600",
            bg: "bg-green-50",
            tags: ["Interactive", "Hard"]
        },
        {
            icon: Video,
            category: "Videos",
            title: "Calculus Fundamentals",
            desc: "Visual step-by-step explanations of limits, derivatives, and integrals.",
            color: "text-red-600",
            bg: "bg-red-50",
            tags: ["Video", "15 mins"]
        },
        {
            icon: Download,
            category: "Templates",
            title: "Notion Study Planner",
            desc: "A ready-to-use Notion template to organize your semester and assignments.",
            color: "text-amber-600",
            bg: "bg-amber-50",
            tags: ["Template", "Free"]
        },
        {
            icon: FileText,
            category: "Guides",
            title: "Active Recall Guide",
            desc: "Learn why simply re-reading is inefficient and how to test yourself properly.",
            color: "text-teal-600",
            bg: "bg-teal-50",
            tags: ["Guide", "Essential"]
        }
    ];

    const filteredResources = activeCategory === "All"
        ? resources
        : resources.filter(r => r.category === activeCategory);

    return (
        <div className="min-h-screen bg-white font-body text-gray-900 selection:bg-purple-100">
            <Header />

            <main className="pt-32 pb-20 px-4 md:px-6 container mx-auto">
                <div className="text-center mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900">
                            Student <span className="text-[#0066FF]">Resources</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Curated tools, guides, and materials to supercharge your learning journey.
                        </p>
                    </motion.div>

                    {/* Search & Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#0066FF]/30 rounded-full blur opacity-50 group-hover:opacity-60 transition-opacity" />
                            <div className="relative bg-white border border-gray-200 rounded-full flex items-center p-2 shadow-lg">
                                <Search className="ml-4 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search resources..."
                                    className="flex-1 bg-transparent border-none text-gray-900 px-4 py-2 focus:outline-none placeholder:text-gray-400"
                                />
                                <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors">
                                    <Filter size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="flex flex-wrap justify-center gap-2 mt-8">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                        ? "bg-gray-900 text-white shadow-lg scale-105"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {filteredResources.map((r, idx) => (
                        <motion.div
                            key={`${r.title}-${idx}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${r.bg} ${r.color}`}>
                                    <r.icon size={24} />
                                </div>
                                <div className="flex gap-2">
                                    {r.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 rounded-md bg-gray-100 text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">{r.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                                {r.desc}
                            </p>

                            <button className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
                                {r.category === 'Videos' ? <PlayCircle size={16} /> : <ExternalLink size={16} />}
                                <span>Access Resource</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
