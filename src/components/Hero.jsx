import { motion } from "framer-motion"
import {
    ArrowRight,
    Download,
    Github,
    Linkedin,
    Mail,
    Briefcase,
    Code2,
    Server,
} from "lucide-react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import cvFile from "../assets/Sasindu-Lakshan-CV.pdf"
import profileImg from "../assets/Profile.jpg"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

const Home = () => {
    const [text] = useTypewriter({
        words: [
            "Full Stack Developer",
            "Frontend • React • Tailwind",
            "Backend • Node • APIs",
            "Building Scalable Web Apps",
            "Turning Ideas into Code",
        ],
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 80,
        deleteSpeed: 50,
    })

    return (
        <section
            id="home"
            className="
        relative min-h-screen flex items-center
        bg-gradient-to-b from-slate-50 via-white to-slate-100
        dark:from-[#070B19] dark:via-[#090F26] dark:to-[#0B1530]
        overflow-hidden
      "
        >
            {/* BACKGROUND GLOWS */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)] rounded-full" />
            <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_70%)] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 lg:col-span-7"
                >
                    {/* NAME + OPEN TO WORK */}
                    <div className="flex flex-col gap-4">
                        <span className="
              self-start
              inline-flex items-center gap-2
              px-4 py-1.5 rounded-full
              bg-green-100 dark:bg-green-900/30
              text-green-700 dark:text-green-400
              text-sm font-medium
              whitespace-nowrap
            ">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                            </span>
                            Open to Work
                        </span>

                        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white">
                            Hi, I’m{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                                Sasindu Lakshan
                            </span>
                        </h1>
                    </div>

                    {/* TYPING ROLE – MOVED DOWN */}
                    <div className="
            inline-block mt-2
            px-5 py-2
            rounded-full
            bg-cyan-500/10 dark:bg-cyan-500/20
            text-cyan-600 dark:text-cyan-400
            text-sm font-semibold tracking-wide
          ">
                        {text}
                        <Cursor cursorStyle="|" />
                    </div>

                    {/* DESCRIPTION */}
                    <p className="
            text-lg leading-relaxed
            text-gray-700 dark:text-gray-300
            max-w-xl
          ">
                        I’m a{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            Full Stack Developer
                        </span>{" "}
                        focused on building modern, scalable and user-friendly web
                        applications using{" "}
                        <span className="text-cyan-500 dark:text-cyan-400 font-medium">
                            Next.js, React, Tailwind CSS, Node.js
                        </span>{" "}
                        and APIs.
                    </p>

                    {/* TECH ROW */}
                    <div className="flex flex-wrap gap-8 pt-2 text-gray-700 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                            <Code2 size={20} className="text-cyan-500" />
                            <span className="text-sm font-medium">Frontend</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Server size={20} className="text-teal-500" />
                            <span className="text-sm font-medium">Backend</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Briefcase size={20} className="text-emerald-500" />
                            <span className="text-sm font-medium">Real Projects</span>
                        </div>
                    </div>

                    {/* CTA BUTTONS */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="
                inline-flex items-center gap-2
                px-7 py-3 rounded-2xl
                bg-cyan-500 text-slate-950 font-bold
                shadow-lg shadow-cyan-500/20
                hover:bg-cyan-400 hover:scale-[1.03]
                transition
              "
                        >
                            View Projects <ArrowRight size={18} />
                        </a>

                        <a
                            href={cvFile}
                            download="Sasindu-Lakshan-CV.pdf"
                            className="
                                inline-flex items-center gap-2
                                px-7 py-3 rounded-2xl
                                border border-gray-300 dark:border-white/10
                                text-gray-800 dark:text-gray-200
                                hover:border-cyan-500/50 hover:text-cyan-400
                                hover:scale-[1.03]
                                transition
                            "
                        >
                            Download CV <Download size={18} />
                        </a>
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="flex gap-6 pt-4 text-gray-600 dark:text-gray-400">
                        <a href="https://github.com/sasinduLakshan12" target="_blank" className="hover:text-black dark:hover:text-white transition">
                            <Github />
                        </a>
                        <a href="https://www.linkedin.com/in/sasindu-lakshan-5b404933a/" target="_blank" className="hover:text-cyan-400 transition">
                            <Linkedin />
                        </a>
                        <a href="mailto:sasindu125lakshan@gmail.com" className="hover:text-red-500 transition">
                            <Mail />
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT PROFILE AREA / CODE TERMINAL MOCKUP */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:flex justify-center lg:col-span-5 relative"
                >
                    <div className="relative w-full max-w-md">
                        {/* Glow effect background */}
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 blur-2xl opacity-20 dark:opacity-30" />
                        
                        {/* Terminal Box */}
                        <div className="
                            relative w-full rounded-2xl
                            bg-slate-950/90 dark:bg-black/80
                            backdrop-blur-xl
                            border border-slate-800/80 dark:border-gray-800/80
                            shadow-2xl overflow-hidden
                            font-mono text-sm leading-relaxed
                        ">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800/60">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/90" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/90" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/90" />
                                </div>
                                <span className="text-xs text-slate-400 font-medium">developer.js</span>
                                <div className="w-12" /> {/* Spacer */}
                            </div>

                            {/* Window Content */}
                            <div className="p-6 text-left space-y-2 text-slate-300">
                                <div>
                                    <span className="text-pink-500">const</span>{" "}
                                    <span className="text-blue-400">developer</span> = {"{"}
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-400">name:</span>{" "}
                                    <span className="text-amber-300">"Sasindu Lakshan"</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-400">role:</span>{" "}
                                    <span className="text-amber-300">"Full Stack Developer"</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-400">skills:</span> [
                                </div>
                                <div className="pl-8">
                                    <span className="text-amber-300">"React"</span>,{" "}
                                    <span className="text-amber-300">"Node.js"</span>,
                                </div>
                                <div className="pl-8">
                                    <span className="text-amber-300">"TailwindCSS"</span>,{" "}
                                    <span className="text-amber-300">"Next.js"</span>
                                </div>
                                <div className="pl-4">
                                    ],
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-400">hardWorker:</span>{" "}
                                    <span className="text-orange-400">true</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-400">passionate:</span>{" "}
                                    <span className="text-orange-400">true</span>
                                </div>
                                <div>{"}"}</div>
                            </div>
                        </div>

                        {/* Floating Tech Badges */}
                        {/* React Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 20px rgba(6,182,212,0.4)" }}
                            transition={{ 
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 0.2 },
                                rotate: { duration: 0.2 }
                            }}
                            className="absolute -top-4 -left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-gray-200/50 dark:border-white/5 flex items-center gap-2 cursor-pointer transition-colors hover:border-cyan-500/30"
                        >
                            <FaReact className="text-cyan-500 text-xl animate-spin-slow" />
                            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">React</span>
                        </motion.div>

                        {/* Node Badge */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}
                            transition={{ 
                                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 0.2 },
                                rotate: { duration: 0.2 }
                            }}
                            className="absolute -bottom-4 -right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-gray-200/50 dark:border-white/5 flex items-center gap-2 cursor-pointer transition-colors hover:border-green-500/30"
                        >
                            <FaNodeJs className="text-green-500 text-xl" />
                            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Node.js</span>
                        </motion.div>

                        {/* Tailwind Badge */}
                        <motion.div
                            animate={{ x: [0, 8, 0] }}
                            whileHover={{ scale: 1.1, rotate: 3, boxShadow: "0 0 20px rgba(56,189,248,0.4)" }}
                            transition={{ 
                                x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 0.2 },
                                rotate: { duration: 0.2 }
                            }}
                            className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-gray-200/50 dark:border-white/5 flex items-center gap-2 cursor-pointer transition-colors hover:border-sky-500/30"
                        >
                            <SiTailwindcss className="text-sky-400 text-lg" />
                            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Tailwind</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Home
