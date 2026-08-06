import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Github,
    ExternalLink,
    Filter,
    Server,
    Layout,
    Layers
} from "lucide-react"

const projectsData = [
    {
        title: "RideSmart – Smart Transport System",
        description:
            "A full stack smart transport and ride management system with modern UI and RESTful APIs.",
        image: "/projects/ridesmart.jpg",
        tech: ["React", "Tailwind", "Node.js", "REST API"],
        category: "fullstack",
        github: "https://github.com/sasinduLakshan12/Bus-Booking-System",
        live: null,
    },
    {
        title: "Personal Portfolio Website",
        description:
            "A modern and responsive portfolio showcasing my projects, skills and experience.",
        image: "/projects/portfolio.jpg",
        tech: ["React", "Tailwind", "Framer Motion"],
        category: "frontend",
        github: "https://github.com/sasinduLakshan12/My-Professional-Port-Folio",
        live: "https://my-professional-port-folio.vercel.app/",
    },
    {
        title: "IT Center Management System",
        description:
            "A comprehensive management system for IT centers, streamlining student registrations, course management, and administrative tasks.",
        image: "/projects/ITCenter.png",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        category: "fullstack",
        github: "https://github.com/sasinduLakshan12/IT-Center-Management-System",
        live: "https://it-center-frontend.vercel.app",
    },
]

const filters = [
    { label: "All", value: "all", icon: Filter },
    { label: "Frontend", value: "frontend", icon: Layout },
    { label: "Full Stack", value: "fullstack", icon: Layers },
    { label: "Backend", value: "backend", icon: Server },
]

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all")

    const filteredProjects =
        activeFilter === "all"
            ? projectsData
            : projectsData.filter(p => p.category === activeFilter)

    return (
        <section
            id="projects"
            className="
        relative py-28
        bg-gradient-to-b from-slate-50 via-white to-slate-100
        dark:from-[#070B19] dark:via-[#090F26] dark:to-[#0B1530]
      "
        >
            {/* BACKGROUND GLOW */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm uppercase tracking-widest text-cyan-500 font-semibold">
                        My Work
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-3">
                        Selected Projects
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A curated collection of frontend, backend and full stack
                        projects demonstrating my technical skills and problem-solving
                        approach.
                    </p>
                </motion.div>

                {/* FILTERS */}
                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    {filters.map(filter => {
                        const Icon = filter.icon
                        return (
                            <button
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                className={`
                  inline-flex items-center gap-2
                  px-5 py-2 rounded-full text-sm font-medium
                  border transition
                  ${activeFilter === filter.value
                                        ? "bg-cyan-500 text-slate-900 font-bold border-cyan-500 shadow-lg shadow-cyan-500/20"
                                        : "bg-white/70 dark:bg-gray-900/70 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }
                `}
                            >
                                <Icon size={16} />
                                {filter.label}
                            </button>
                        )
                    })}
                </div>

                {/* COUNT */}
                <p className="text-center text-sm text-gray-500 mb-12">
                    Showing {filteredProjects.length} project(s)
                </p>

                {/* GRID */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="
                                    group rounded-3xl
                                    bg-white/70 dark:bg-slate-900/40
                                    backdrop-blur-xl
                                    border border-slate-200/50 dark:border-white/5
                                    overflow-hidden
                                    shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-purple-500/20
                                    hover:border-blue-500/45 dark:hover:border-purple-500/45
                                    hover:-translate-y-2
                                    transition-all duration-300
                                "
                            >
                                {/* IMAGE */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)] space-y-4">
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-400 transition duration-200">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* TECH */}
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-cyan-950/20 text-slate-700 dark:text-cyan-400 border border-slate-200 dark:border-cyan-500/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* LINKS */}
                                    <div className="flex items-center gap-3 pt-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-white/10 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition duration-200"
                                        >
                                            <Github size={16} /> View Code
                                        </a>

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                className="inline-flex items-center justify-center p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition duration-200"
                                                title="Live Preview"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
