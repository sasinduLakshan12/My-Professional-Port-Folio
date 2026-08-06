import { motion } from "framer-motion"
import { useState } from "react"

// TECH ICONS (SAFE IMPORTS)
import {
    SiJavascript,
    SiPython,
    SiCplusplus,
    SiHtml5,
    SiCss3,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiFirebase,
    SiGithub,
    SiVercel,
    SiApollographql,
    SiReact,
    SiNodedotjs,
    SiExpress
} from "react-icons/si"

import { FaJava } from "react-icons/fa"
import { Code, Monitor, Database, Layers } from "lucide-react"

// Skill level label
const levelLabel = (level) => {
    if (level >= 80) return "Advanced"
    if (level >= 60) return "Intermediate"
    return "Beginner"
}

const skillCategories = [
    {
        title: "Programming Languages",
        filter: "backend",
        icon: <Code size={24} />,
        color: "from-cyan-500 to-teal-500",
        bg: "bg-cyan-500/5 dark:bg-cyan-500/5",
        skills: [
            { name: "JavaScript", level: 70, icon: <SiJavascript className="text-yellow-500" /> },
            { name: "Node.js", level: 70, icon: <SiNodedotjs className="text-green-500" /> },
            { name: "Express.js", level: 65, icon: <SiExpress className="text-slate-400" /> },
            { name: "Python", level: 50, icon: <SiPython className="text-blue-500" /> },
            { name: "C / C++", level: 50, icon: <SiCplusplus className="text-blue-600" /> },
        ],
    },
    {
        title: "Web Development",
        filter: "frontend",
        icon: <Monitor size={24} />,
        color: "from-cyan-500 to-teal-500",
        bg: "bg-cyan-500/5 dark:bg-cyan-500/5",
        skills: [
            { name: "HTML", level: 90, icon: <SiHtml5 className="text-orange-600" /> },
            { name: "CSS", level: 90, icon: <SiCss3 className="text-blue-600" /> },
            { name: "React", level: 80, icon: <SiReact className="text-cyan-400" /> },
        ],
    },
    {
        title: "Databases",
        filter: "backend",
        icon: <Database size={24} />,
        color: "from-cyan-500 to-teal-500",
        bg: "bg-cyan-500/5 dark:bg-cyan-500/5",
        skills: [
            { name: "MySQL", level: 70, icon: <SiMysql className="text-blue-700" /> },
            { name: "MongoDB", level: 50, icon: <SiMongodb className="text-green-600" /> },
            { name: "Firebase", level: 60, icon: <SiFirebase className="text-yellow-500" /> },
        ],
    },
    {
        title: "Others",
        filter: "tools",
        icon: <Layers size={24} />,
        color: "from-cyan-500 to-teal-500",
        bg: "bg-cyan-500/5 dark:bg-cyan-500/5",
        skills: [
            { name: "Git & GitHub", level: 70, icon: <SiGithub className="text-slate-300" /> },
            { name: "Vercel", level: 75, icon: <SiVercel className="text-white" /> },
        ],
    },
]

const filters = ["all", "frontend", "backend", "tools"]

const Skills = () => {
    const [activeFilter, setActiveFilter] = useState("all")

    return (
        <section id="skills" className="py-28 bg-slate-50 dark:bg-[#070B19] text-gray-900 dark:text-white relative">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-10">
                    My <span className="text-cyan-500">Skills</span>
                </h2>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${activeFilter === f
                                    ? "bg-cyan-500 text-slate-900 font-bold shadow-lg shadow-cyan-500/20"
                                    : "bg-white dark:bg-[#0B1530] border border-slate-200/50 dark:border-white/5 hover:bg-gray-200 dark:hover:bg-gray-800"
                                }`}
                        >
                            {f.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Skill Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {skillCategories
                        .filter(cat => activeFilter === "all" || cat.filter === activeFilter)
                        .map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className={`bg-white dark:bg-[#0C1220] rounded-3xl p-8 shadow-lg border border-slate-200/50 dark:border-white/5 shadow-slate-100/50 dark:shadow-black/20 ${
                                    activeFilter === "all" 
                                        ? (index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1") 
                                        : "md:col-span-3"
                                }`}
                            >

                                <div className="flex items-center gap-3 mb-8">
                                    <div className={`p-3 rounded-xl text-white bg-gradient-to-r ${category.color}`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                                </div>

                                {/* AUTO SORTED + CHIPS */}
                                <div className={`grid gap-4 ${
                                    activeFilter === "all" && (index === 0 || index === 3) 
                                        ? "grid-cols-2 sm:grid-cols-3" 
                                        : "grid-cols-1 sm:grid-cols-2"
                                }`}>
                                    {[...category.skills]
                                        .sort((a, b) => b.level - a.level)
                                        .map(skill => (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ 
                                                    scale: 1.03, 
                                                    borderColor: "rgba(6,182,212,0.4)",
                                                    boxShadow: "0 0 15px rgba(6,182,212,0.1)"
                                                }}
                                                className="flex items-center gap-3 bg-slate-50 dark:bg-[#080E1A] border border-slate-200 dark:border-white/5 rounded-xl p-4 cursor-pointer transition-all duration-300"
                                            >
                                                <span className="text-2xl">{skill.icon}</span>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{skill.name}</span>
                                                    <span className="text-xs text-slate-500">{levelLabel(skill.level)}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                </div>

                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
