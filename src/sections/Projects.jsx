import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Terminal,
  LayoutDashboard,
  GitBranch,
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    num: "01",
    category: "E-COMMERCE · FULL-STACK",
    title: "Kanishka Fashion",
    description:
      "Industry-ready e-commerce ecosystem featuring a React admin dashboard and React Native mobile app, with a backend handling 10k+ concurrent users.",
    icon: (
      <LayoutDashboard
        size={40}
        className="text-[#14b8a6] dark:text-[#5eead4]"
        strokeWidth={1.5}
      />
    ),
    tags: ["React Native", "Node.js", "Redis", "Pinecone DB", "RAG"],
    link: "/projects",
  },
  {
    num: "02",
    category: "AI · COMPUTER VISION",
    title: "Railway Inspection AI",
    description:
      "Full-stack AI dashboard for automated train defect analysis. Features real-time WebSocket updates, wagon tracking, and risk percentage calculation.",
    icon: (
      <Terminal
        size={40}
        className="text-[#14b8a6] dark:text-[#5eead4]"
        strokeWidth={1.5}
      />
    ),
    tags: ["FastAPI", "React", "Python", "WebSocket", "Tailwind"],
    link: "/projects",
  },
  {
    num: "03",
    category: "DEVOPS · AGENTIC AI",
    title: "Autonomous CI/CD",
    description:
      "Automated deployment tool powered by a LangGraph RAG system that autonomously clones repositories, generates Dockerfiles, and scans code for errors.",
    icon: (
      <GitBranch
        size={40}
        className="text-[#14b8a6] dark:text-[#5eead4]"
        strokeWidth={1.5}
      />
    ),
    tags: ["LangGraph", "Python", "FastAPI", "Docker"],
    link: "/projects",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full py-24 md:py-32 px-4 max-w-7xl mx-auto z-10"
    >
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0891b2] dark:text-[#22d3ee] font-mono text-sm tracking-[0.2em] uppercase mb-6 font-bold"
          >
            Featured Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-[#0f1f1f] dark:text-[#f5f7f7] leading-[1.05]"
          >
            A few things brought <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
              to life.
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-sm lg:text-left flex flex-col items-start lg:items-start lg:ml-12 w-full lg:w-auto"
        >
          <p className="text-base md:text-lg text-[#4b5f5f] dark:text-[#9db3b3] mb-6 leading-relaxed font-medium">
            Selected case studies across full-stack systems, AI integrations,
            and developer infrastructure.
          </p>
          <div className="flex w-full justify-between items-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-bold text-[#0f1f1f] dark:text-[#f5f7f7] hover:text-[#0891b2] dark:hover:text-[#22d3ee] transition-colors group"
            >
              View All project
              <ArrowRight
                size={18}
                className="transform group-hover:translate-x-1 transition-transform"
                strokeWidth={2.5}
              />
            </Link>

            {/* Carousel Arrows (Visual Only for now) */}
            <div className="hidden md:flex items-center gap-3">
              <button className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-[#0f1f1f] dark:text-[#f5f7f7] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <ArrowLeft size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-[#0f1f1f] dark:text-[#f5f7f7] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className="group flex flex-col rounded-[2rem] bg-white dark:bg-[#0f1f1f] border border-black/5 dark:border-white/5 hover:border-[#0891b2]/30 dark:hover:border-[#22d3ee]/30 transition-all duration-500 overflow-hidden shadow-xl shadow-black/5 dark:shadow-none hover:shadow-2xl hover:shadow-[#0891b2]/10 dark:hover:shadow-[#22d3ee]/10"
          >
            {/* Project Graphic / Window Mockup */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#f8fcfc] to-[#eef6f6] dark:from-[#132626] dark:to-[#0a1414] p-6 flex flex-col border-b border-black/5 dark:border-white/5 overflow-hidden">
              {/* Window Controls */}
              <div className="flex gap-1.5 mb-8">
                <div className="w-2 h-2 rounded-full bg-black/10 dark:bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-black/10 dark:bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-black/10 dark:bg-white/20" />
              </div>

              {/* Abstract UI Representation */}
              <div className="flex-1 flex items-center justify-center relative">
                <div className="flex items-center gap-6 z-10 transition-transform duration-500 group-hover:scale-110">
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0f1f1f] shadow-lg border border-black/5 dark:border-white/5">
                    {project.icon}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="w-32 h-2.5 rounded-full bg-[#14b8a6]/20 dark:bg-[#5eead4]/20" />
                    <div className="w-24 h-2.5 rounded-full bg-black/5 dark:bg-white/10" />
                    <div className="w-20 h-2.5 rounded-full bg-black/5 dark:bg-white/10" />
                  </div>
                </div>
              </div>

              {/* Number */}
              <div className="absolute bottom-6 right-6 font-mono text-sm font-bold text-[#4b5f5f] dark:text-[#9db3b3]">
                {project.num}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 flex flex-col flex-1">
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#0891b2] dark:text-[#22d3ee] mb-4">
                {project.category}
              </span>

              <h3 className="text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-3">
                {project.title}
              </h3>

              <p className="text-[#4b5f5f] dark:text-[#9db3b3] text-[15px] leading-relaxed mb-8 flex-1 font-medium">
                {project.description}
              </p>

              {/* Footer: Tags & Link Icon */}
              <div className="flex items-end justify-between gap-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-black/5 dark:bg-white/5 text-[#4b5f5f] dark:text-[#9db3b3] border border-black/5 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={project.link}
                  className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 text-[#0f1f1f] dark:text-[#f5f7f7] hover:bg-[#0891b2] hover:text-white dark:hover:bg-[#22d3ee] dark:hover:text-[#0f1f1f] transition-colors"
                >
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
