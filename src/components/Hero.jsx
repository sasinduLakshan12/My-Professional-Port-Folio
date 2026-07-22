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
        bg-gradient-to-b from-white via-gray-50 to-gray-100
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
        overflow-hidden
      "
        >
            {/* BACKGROUND GLOWS */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

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

                        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight">
                            Hi, I’m{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Sasindu Lakshan
                            </span>
                        </h1>
                    </div>

                    {/* TYPING ROLE – MOVED DOWN */}
                    <div className="
            inline-block mt-2
            px-5 py-2
            rounded-full
            bg-blue-100/70 dark:bg-blue-900/30
            text-blue-700 dark:text-blue-300
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
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                            Next.js, React, Tailwind CSS, Node.js
                        </span>{" "}
                        and APIs.
                    </p>

                    {/* TECH ROW */}
                    <div className="flex flex-wrap gap-8 pt-2 text-gray-700 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                            <Code2 size={20} className="text-blue-600" />
                            <span className="text-sm font-medium">Frontend</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Server size={20} className="text-purple-600" />
                            <span className="text-sm font-medium">Backend</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Briefcase size={20} className="text-green-600" />
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
                bg-blue-600 text-white font-medium
                shadow-lg shadow-blue-600/30
                hover:bg-blue-700 hover:scale-[1.03]
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
                                border border-gray-300 dark:border-gray-700
                                text-gray-800 dark:text-gray-200
                                hover:bg-gray-100 dark:hover:bg-gray-800
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
                        <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-600 transition">
                            <Linkedin />
                        </a>
                        <a href="mailto:youremail@gmail.com" className="hover:text-red-500 transition">
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
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 flex items-center gap-2"
                        >
                            <FaReact className="text-cyan-500 text-xl animate-spin-slow" />
                            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">React</span>
                        </motion.div>

                        {/* Node Badge */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 flex items-center gap-2"
                        >
                            <FaNodeJs className="text-green-500 text-xl" />
                            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Node.js</span>
                        </motion.div>

                        {/* Tailwind Badge */}
                        <motion.div
                            animate={{ x: [0, 8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 flex items-center gap-2"
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
