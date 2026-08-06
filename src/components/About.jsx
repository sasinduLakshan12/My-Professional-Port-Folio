import { motion } from "framer-motion"
import { Code2, Briefcase, Sparkles, MapPin, Mail, GraduationCap, Download } from "lucide-react"
import { useEffect, useState } from "react"
import {
    FaReact,
    FaJsSquare,
    FaGitAlt,
    FaNodeJs,
    FaGithub,
    FaLinkedin
} from "react-icons/fa"
import { 
    SiTailwindcss, 
    SiMysql,
    SiPython,
    SiCplusplus,
    SiMongodb,
    SiExpress,
    SiFirebase
} from "react-icons/si"
import profileImg from "../assets/Profile.jpg"

// COUNTER
const Counter = ({ value, suffix = "", trigger }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!trigger) return
        let start = 0
        const duration = 1200
        const step = Math.max(Math.floor(duration / value), 20)

        const timer = setInterval(() => {
            start += 1
            setCount(start)
            if (start >= value) clearInterval(timer)
        }, step)

        return () => clearInterval(timer)
    }, [trigger, value])

    return (
        <>
            {count}
            {suffix}
        </>
    )
}

const About = () => {
    const [animate, setAnimate] = useState(false)
    const [githubStats, setGithubStats] = useState({ repos: 3, followers: 0 })

    useEffect(() => {
        fetch("https://api.github.com/users/sasinduLakshan12")
            .then(res => res.json())
            .then(data => {
                if (data.public_repos !== undefined) {
                    setGithubStats({
                        repos: data.public_repos,
                        followers: data.followers
                    })
                }
            })
            .catch(err => console.error("GitHub fetch error:", err))
    }, [])

    return (
        <section
            id="about"
            className="py-32 bg-[#070B19] text-white relative overflow-hidden"
        >
            {/* GLOW EFFECT */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-[radial-gradient(circle,rgba(6,182,212,0.05)_0%,transparent_70%)] rounded-full blur-2xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    
                    {/* LEFT COLUMN: Profile & Fast Facts */}
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 bg-[#0B1120]/45 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center space-y-6 shadow-xl"
                    >
                        {/* Profile Image Wrap */}
                        <div className="relative w-48 h-48">
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 blur-md opacity-70 animate-spin-slow"></div>
                            <img
                                src={profileImg}
                                alt="Sasindu Lakshan"
                                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-[#070B19]"
                            />
                            <span className="absolute bottom-2 right-2 z-20 flex h-4.5 w-4.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-green-500 border-2 border-[#070B19]"></span>
                            </span>
                        </div>

                        {/* Title Info */}
                        <div>
                            <h3 className="text-2xl font-bold text-white">Sasindu Lakshan</h3>
                            <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mt-1">Full Stack Developer</p>
                        </div>

                        {/* Facts List */}
                        <div className="w-full space-y-4 pt-4 border-t border-white/5 text-left text-sm text-slate-300">
                            <div className="flex items-center gap-3">
                                <GraduationCap size={18} className="text-cyan-500 shrink-0" />
                                <div>
                                    <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">Education</span>
                                    <span className="text-slate-200 font-medium">University of Vavuniya</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-cyan-500 shrink-0" />
                                <div>
                                    <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">Location</span>
                                    <span className="text-slate-200 font-medium">Vavuniya, Sri Lanka</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-cyan-500 shrink-0" />
                                <div>
                                    <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">Email</span>
                                    <span className="text-slate-200 font-medium text-xs break-all">sasindu125lakshan@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full flex gap-3">
                            <a 
                                href="#contact" 
                                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold transition duration-300 shadow-lg shadow-cyan-500/20 text-sm"
                            >
                                <Mail size={16} /> Let's Talk
                            </a>
                            <a 
                                href="#projects" 
                                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition duration-300 text-sm font-bold bg-white/5"
                            >
                                <Briefcase size={16} /> My Work
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Bio, Core Competencies & Stats */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm uppercase tracking-widest text-cyan-500 font-semibold">Intro</span>
                            <h2 className="text-4xl font-extrabold text-white mt-2">
                                About <span className="text-cyan-500">Me</span>
                            </h2>
                            <p className="mt-5 text-slate-300 leading-relaxed">
                                I am a passionate computer science undergraduate at the University of Vavuniya, Sri Lanka. I specialize in web software architectures, building responsive and high-performance full-stack applications.
                            </p>
                            <p className="mt-4 text-slate-400 leading-relaxed text-sm">
                                Dedicated to clean code, interactive user interfaces, and modular backend APIs. I am continuously learning modern frameworks to deliver scalable, production-ready solutions.
                            </p>
                        </motion.div>

                        {/* CORE FOCUSES */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <motion.div 
                                whileHover={{ y: -3, borderColor: "rgba(6,182,212,0.2)" }}
                                className="bg-[#0B1120]/30 border border-white/5 p-5 rounded-2xl transition duration-300"
                            >
                                <Code2 className="text-cyan-500 mb-2 w-5 h-5" />
                                <h4 className="text-base font-bold text-white">Full Stack Engineering</h4>
                                <p className="text-xs text-slate-400 mt-2 leading-relaxed">Designing clean UI systems linked seamlessly with robust and scalable server logic.</p>
                            </motion.div>
                            
                            <motion.div 
                                whileHover={{ y: -3, borderColor: "rgba(168,85,247,0.2)" }}
                                className="bg-[#0B1120]/30 border border-white/5 p-5 rounded-2xl transition duration-300"
                            >
                                <Sparkles className="text-purple-400 mb-2 w-5 h-5" />
                                <h4 className="text-base font-bold text-white">Modern UI Development</h4>
                                <p className="text-xs text-slate-400 mt-2 leading-relaxed">Creating clean architectures using React, Tailwind CSS, and Framer Motion.</p>
                            </motion.div>
                        </div>

                        {/* COMPACT STATS GRID */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            onViewportEnter={() => setAnimate(true)}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                        >
                            <div className="bg-[#0B1120]/45 border border-white/5 p-4 rounded-2xl text-center">
                                <h3 className="text-xl font-bold text-cyan-400">
                                    <Counter value={3} suffix="+" trigger={animate} />
                                </h3>
                                <p className="text-xs text-slate-400 mt-1">Projects</p>
                            </div>
                            <div className="bg-[#0B1120]/45 border border-white/5 p-4 rounded-2xl text-center">
                                <h3 className="text-xl font-bold text-purple-400">
                                    <Counter value={3} suffix="+" trigger={animate} />
                                </h3>
                                <p className="text-xs text-slate-400 mt-1">Learning</p>
                            </div>
                            <div className="bg-[#0B1120]/45 border border-white/5 p-4 rounded-2xl text-center">
                                <h3 className="text-xl font-bold text-green-400">
                                    <Counter value={100} suffix="%" trigger={animate} />
                                </h3>
                                <p className="text-xs text-slate-400 mt-1">Passion</p>
                            </div>
                            <a 
                                href="https://github.com/sasinduLakshan12" 
                                target="_blank" 
                                rel="noreferrer"
                                className="block"
                            >
                                <div className="bg-[#0B1120]/45 border border-white/5 hover:border-cyan-500/30 p-4 rounded-2xl text-center transition-all duration-300">
                                    <h3 className="text-xl font-bold text-white flex items-center justify-center gap-1">
                                        {githubStats.repos} <span className="text-[10px] text-slate-400 font-normal">repos</span>
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-1">GitHub Live</p>
                                </div>
                            </a>
                        </motion.div>

                    </div>
                </div>

                {/* INFINITE AUTOSCROLLING SLIDER */}
                <div className="mt-24 relative w-full overflow-hidden py-4 border-y border-slate-200/30 dark:border-white/5 bg-[#0B1120]/30 backdrop-blur-sm">
                    <div className="animate-infinite-scroll flex gap-8 whitespace-nowrap">
                        {[
                            { name: "React", icon: <FaReact className="text-cyan-500" /> },
                            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
                            { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
                            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                            { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
                            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
                            { name: "Python", icon: <SiPython className="text-blue-500" /> },
                            { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
                            { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
                            { name: "Express", icon: <SiExpress className="text-gray-400" /> },
                            { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
                            { name: "GitHub", icon: <FaGithub className="text-white" /> }
                        ].concat([
                            { name: "React", icon: <FaReact className="text-cyan-500" /> },
                            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
                            { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
                            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                            { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
                            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
                            { name: "Python", icon: <SiPython className="text-blue-500" /> },
                            { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
                            { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
                            { name: "Express", icon: <SiExpress className="text-gray-400" /> },
                            { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
                            { name: "GitHub", icon: <FaGithub className="text-white" /> }
                        ]).map((item, idx) => (
                            <div 
                                key={idx} 
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm"
                            >
                                <span className="text-lg">{item.icon}</span>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
