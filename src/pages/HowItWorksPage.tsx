import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UserPlus, Sparkles, BookOpenCheck, BarChart2, Repeat } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorksPage() {
    const steps = [
        {
            icon: UserPlus,
            title: "Sign In & Set Goals",
            desc: "Enter your subjects, level, and learning objectives to kickoff your journey.",
            color: "text-blue-600",
            bg: "bg-blue-100",
            border: "border-blue-200"
        },
        {
            icon: Sparkles,
            title: "Generate Study Plan",
            desc: "Study.ai creates a personalized plan with recommended materials and exercises.",
            color: "text-purple-600",
            bg: "bg-purple-100",
            border: "border-purple-200"
        },
        {
            icon: BookOpenCheck,
            title: "Engage with Resources",
            desc: "Use notes, flashcards, quizzes, and videos to study efficiently.",
            color: "text-amber-600",
            bg: "bg-amber-100",
            border: "border-amber-200"
        },
        {
            icon: BarChart2,
            title: "Track Progress",
            desc: "AI monitors your performance and adapts your plan for maximum results.",
            color: "text-teal-600",
            bg: "bg-teal-100",
            border: "border-teal-200"
        },
        {
            icon: Repeat,
            title: "Revise & Improve",
            desc: "Regularly review weak areas and strengthen knowledge with AI-guided repetition.",
            color: "text-rose-600",
            bg: "bg-rose-100",
            border: "border-rose-200"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-body text-gray-900 selection:bg-teal-100">
            <Header />

            <main className="pt-32 pb-32 px-4 md:px-6 container mx-auto">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900">
                            How It <span className="text-[#0066FF]">Works</span>
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            A simple, proven process to achieve your academic goals.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[38px] md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-[#0066FF]/20" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative flex items-center md:items-start mb-16 md:mb-24 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Icon Marker */}
                            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-20 h-20 rounded-full border-[6px] border-white bg-white flex items-center justify-center z-10 shadow-xl">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.bg} shadow-sm`}>
                                    <step.icon size={24} className={step.color} />
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className={`ml-24 md:ml-0 md:w-[calc(50%-40px)] p-8 rounded-3xl border bg-white hover:bg-gray-50 transition-colors relative group ${step.border} border-opacity-50 hover:border-opacity-100 shadow-sm hover:shadow-md`}>
                                {/* Arrow Pointer (CSS triangle) */}
                                <div className={`hidden md:block absolute top-10 w-4 h-4 bg-white border-t border-l rotate-45 transition-colors group-hover:bg-gray-50 ${step.border} border-opacity-50 group-hover:border-opacity-100 ${idx % 2 === 0 ? '-right-2.5 border-b-0 border-l-0 border-t border-r' : '-left-2.5'}`} />

                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-500 mb-4`}>
                                    Step 0{idx + 1}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-lg">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-[#0066FF] rounded-full text-white font-bold text-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all"
                    >
                        Start Your Journey
                    </motion.button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
