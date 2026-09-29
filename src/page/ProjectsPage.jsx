import React, { useState } from "react";
import PageHero from "../components/PageHero";
import { motion } from "framer-motion";
import {
  Bot,
  CloudCog,
  ArrowUpRight,
  Terminal,
  QrCode,
  Clapperboard,
  Smartphone,
} from "lucide-react";
import Footer from "../components/Footer";
import Fixdivider from "../components/Fixdivider";
import ProjectModal from "../components/ProjectModal";
import KanishkaFashion from "../components/Project/KanishkaFashion";
import WagonInspection from "../components/Project/WagonInspection";
import AutonomousCICD from "../components/Project/AutonomousCICD";
import KrishiSakhi from "../components/Project/KrishiSakhi";
import BillingStockSystem from "../components/Project/BillingStockSystem";
import SocialAutomationSystem from "../components/Project/SocialAutomationSystem";

const projects = [
  {
    num: "01",
    tag: "FULL-STACK • E-COMMERCE",
    title: "Kanishka Fashion",
    desc: "Industry-ready e-commerce ecosystem handling 10k+ concurrent users, featuring Redis-powered analytics, Google OAuth, Razorpay, and RAG-based search.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Redis", "Pinecone"],
    icon: <Smartphone size={32} strokeWidth={2} />,
  },
  {
    num: "02",
    tag: "AI • WEBSOCKETS",
    title: "Wagon Inspection System",
    desc: "Full-stack AI dashboard for automated train defect analysis. Processes multi-angle footage and streams real-time WebSocket updates to the frontend.",
    tech: ["FastAPI", "React", "Python", "Tailwind CSS"],
    icon: <Bot size={32} strokeWidth={2} />,
  },
  {
    num: "03",
    tag: "DEVOPS • AGENTS",
    title: "Autonomous CI/CD Pipeline",
    desc: "Automated deployment tool powered by a LangGraph RAG system that autonomously clones repositories, creates Dockerfiles, and scans code for errors.",
    tech: ["LangGraph", "Python", "FastAPI", "Docker"],
    icon: <Terminal size={32} strokeWidth={2} />,
  },
  {
    num: "04",
    tag: "AI/ML • NLP",
    title: "Krishi Sakhi Assistant",
    desc: "AI-powered personal farming assistant delivering personalized agricultural advice and proactive guidance, supporting 20+ local languages for smallholder farmers.",
    tech: ["AI/ML", "NLP", "Python"],
    icon: <CloudCog size={32} strokeWidth={2} />,
  },
  {
    num: "05",
    tag: "MULTI-SHOP • BILLING",
    title: "Billing & Stock Management",
    desc: "Full-stack billing and inventory system managing 15+ shop locations with QR/barcode scan-to-bill checkout, auto-generated PDF invoices, and role-based access.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    icon: <QrCode size={32} strokeWidth={2} />,
  },
  {
    num: "06",
    tag: "VIDEO • AUTOMATION",
    title: "Social Media Automation",
    desc: "Automation tool that cuts full-length videos into short clips, applies simple edits, and auto-uploads them to Instagram, YouTube, and Facebook on a set schedule.",
    tech: ["Node.js", "Video Processing", "Cron Scheduling", "Instagram API"],
    icon: <Clapperboard size={32} strokeWidth={2} />,
  },
];

const projectComponents = {
  "01": <KanishkaFashion />,
  "02": <WagonInspection />,
  "03": <AutonomousCICD />,
  "04": <KrishiSakhi />,
  "05": <BillingStockSystem />,
  "06": <SocialAutomationSystem />,
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="PROJECTS"
        title={
          <>
            Systems, products, <br />
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
              experiments.
            </span>
          </>
        }
        description="Case studies spanning full-stack products, agentic AI, applied ML, automation, and developer operations."
        watermark="PR"
      />

      <section className="w-full pb-24 md:pb-32 px-4 md:px-12 max-w-[1400px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project.num)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full rounded-[2rem] bg-white/50 dark:bg-[#0a1414]/80 border border-black/5 dark:border-white/5 shadow-xl overflow-hidden group flex flex-col hover:border-[#0891b2]/30 dark:hover:border-[#22d3ee]/30 transition-colors cursor-pointer"
            >
              {/* Window Chrome Mockup */}
              <div className="w-full h-48 md:h-56 bg-black/[0.03] dark:bg-white/[0.02] border-b border-black/5 dark:border-white/5 relative p-6 flex flex-col justify-between overflow-hidden">
                {/* Dots */}
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20"></div>
                </div>

                {/* Center Graphics */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6 w-3/4 max-w-sm">
                  <div className="text-[#0891b2] dark:text-[#22d3ee] flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <div className="w-full h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                      <div className="h-full bg-[#0891b2]/40 dark:bg-[#22d3ee]/40 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
                    </div>
                    <div className="w-2/3 h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                      <div className="h-full bg-[#0891b2]/40 dark:bg-[#22d3ee]/40 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-100 ease-out"></div>
                    </div>
                  </div>
                </div>

                {/* Number */}
                <div className="self-end mt-auto font-mono text-xs font-bold text-[#4b5f5f] dark:text-[#9db3b3]">
                  {project.num}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="font-mono text-[10px] md:text-xs tracking-widest text-[#0891b2] dark:text-[#22d3ee] uppercase mb-4 font-bold">
                  {project.tag}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-4 tracking-tight group-hover:text-[#0891b2] dark:group-hover:text-[#22d3ee] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-[#4b5f5f] dark:text-[#9db3b3] leading-relaxed font-medium mb-12 flex-grow">
                  {project.desc}
                </p>

                {/* Footer: Tech pills & Arrow */}
                <div className="flex items-end justify-between mt-auto pt-6 border-t border-black/5 dark:border-white/5">
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium rounded-md bg-black/5 dark:bg-white/5 text-[#0f1f1f] dark:text-[#f5f7f7] border border-black/5 dark:border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-[#4b5f5f] dark:text-[#9db3b3] group-hover:text-[#0f1f1f] dark:group-hover:text-[#f5f7f7] transition-colors flex-shrink-0 ml-4">
                    <ArrowUpRight size={20} strokeWidth={2} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && projectComponents[selectedProject]}
      </ProjectModal>

      <Fixdivider />
      <Footer />
    </>
  );
};

export default ProjectsPage;
