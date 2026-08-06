import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const timelineData = [
    {
        type: "education",
        title: "University of Vavuniya",
        subtitle: "Undergraduate Student",
        description: "Pursuing studies in Computer Science and Software Development, focusing on web architectures, databases, and algorithms.",
        date: "2023 - Present",
        icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
    },
    {
        type: "experience",
        title: "Independent Full Stack Developer",
        subtitle: "Self-Project Implementations",
        description: "Building modern responsive systems (e.g. Booking systems, IT Center portals) using React, Tailwind CSS, Express, and Node.js.",
        date: "2024 - Present",
        icon: <Briefcase className="w-5 h-5 text-teal-400" />
    },
    {
        type: "education",
        title: "G.C.E. Advanced Level (A/L)",
        subtitle: "Technology Stream",
        description: "Completed secondary education focusing on Engineering Technology (ET), Science for Technology (SFT), and Information & Communication Technology (ICT).",
        date: "2020 - 2022",
        icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
    }
]

const Experience = () => {
    return (
        <section id="experience" className="py-28 bg-[#070B19] text-white relative overflow-hidden">
            {/* GLOW EFFECT BACKGROUND */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)] rounded-full" />
            <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(20,184,166,0.06)_0%,transparent_70%)] rounded-full" />

            <div className="relative max-w-5xl mx-auto px-6">
                
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <p className="text-sm uppercase tracking-widest text-cyan-500 font-semibold">
                        Journey
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mt-3">
                        Education & <span className="text-cyan-500">Experience</span>
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                        My academic qualifications and independent full stack engineering roadmap.
                    </p>
                </motion.div>

                {/* TIMELINE CONTAINER */}
                <div className="relative border-l border-slate-800 dark:border-white/10 ml-4 md:ml-32 space-y-12">
                    
                    {timelineData.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* CONNECTOR CIRCLE NODE */}
                            <span className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-slate-755 dark:border-white/10 group shadow-md shadow-cyan-500/10">
                                <div className="absolute -inset-1 rounded-full bg-cyan-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                {item.icon}
                            </span>

                            {/* DATE CARD (ON THE LEFT FOR DESKTOP) */}
                            <div className="md:absolute md:-left-36 md:top-2 md:w-28 text-slate-400 font-semibold text-sm flex items-center gap-1.5 mb-2 md:mb-0">
                                <Calendar size={14} className="text-cyan-500" />
                                {item.date}
                            </div>

                            {/* MAIN DETAIL CARD */}
                            <motion.div 
                                whileHover={{ y: -4, borderColor: "rgba(6,182,212,0.3)", boxShadow: "0 4px 20px rgba(6,182,212,0.05)" }}
                                className="bg-[#0B1120]/45 backdrop-blur-xl rounded-2xl p-6 border border-white/5 transition-all duration-300 shadow-lg shadow-black/20"
                            >
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/10">
                                    {item.type}
                                </span>
                                
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {item.title}
                                </h3>
                                
                                <h4 className="text-sm font-semibold text-cyan-500 mb-3">
                                    {item.subtitle}
                                </h4>
                                
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>

                        </motion.div>
                    ))}
                    
                </div>

            </div>
        </section>
    )
}

export default Experience
