import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Zap, Brain, FileText, BarChart3, Users, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesPage() {
    const features = [
        {
            icon: Zap,
            title: "Personalized Study Plans",
            desc: "Tailor-made schedules based on your subjects, goals, and available time.",
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "group-hover:border-blue-200"
        },
        {
            icon: Brain,
            title: "Interactive Quizzes",
            desc: "Test your knowledge and reinforce learning with engaging exercises.",
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "group-hover:border-purple-200"
        },
        {
            icon: FileText,
            title: "AI Summaries",
            desc: "Quickly summarize lectures, notes, or articles for easier understanding.",
            color: "text-amber-600",
            bg: "bg-amber-50",
            border: "group-hover:border-amber-200"
        },
        {
            icon: BarChart3,
            title: "Progress Tracking",
            desc: "Monitor your performance and get actionable insights to improve.",
            color: "text-teal-600",
            bg: "bg-teal-50",
            border: "group-hover:border-teal-200"
        },
        {
            icon: Users,
            title: "Collaboration Tools",
            desc: "Share study sets with friends or classmates and learn together.",
            color: "text-rose-600",
            bg: "bg-rose-50",
            border: "group-hover:border-rose-200"
        },
        {
            icon: Sparkles,
            title: "Smart Suggestions",
            desc: "Get intelligent recommendations on what to study next based on weak areas.",
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            border: "group-hover:border-indigo-200"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-white font-body text-gray-900 overflow-hidden decoration-clone selection:bg-blue-100">
            <Header />

            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
            </div>

            <main className="relative pt-32 pb-20 px-4 md:px-6 container mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-[#0066FF] mb-6">
                        <Sparkles size={14} />
                        <span>AI-Powered Learning</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900">
                        Powerful Features<br />for Modern Students
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Everything you need to master your studies, condensed into one powerful platform driven by artificial intelligence.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                >
                    {features.map((f, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className={`group relative p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${f.border}`}
                        >
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${f.bg} ${f.color} ring-1 ring-inset ring-black/5 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                <f.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{f.title}</h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{f.desc}</p>

                            <div className="mt-6 flex items-center text-sm font-medium text-gray-400 group-hover:text-blue-600 transition-colors">
                                Learn more <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-95">
                        Get Started for Free
                    </button>
                    <p className="mt-4 text-sm text-gray-500">No credit card required</p>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
