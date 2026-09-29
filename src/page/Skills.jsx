import React from "react";
import PageHero from "../components/PageHero";
import { motion } from "framer-motion";
import { Terminal, Sparkles, Code, Layers, Bot, Database, CloudCog } from "lucide-react";
import Footer from "../components/Footer";
import Fixdivider from "../components/Fixdivider";

const Skills = () => {
  return (
    <>
      <PageHero 
        eyebrow="SKILLS"
        title={
          <>
            Broad enough to <br />
            build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">Deep enough <br className="hidden md:block" /> to care.</span>
          </>
        }
        description="A practical toolkit across the product lifecycle, paired with the judgment to choose fewer tools when fewer tools are better."
        watermark="SK"
      />

      {/* Engineering Range Section */}
      <section className="w-full py-12 md:py-24 px-4 md:px-12 max-w-[1400px] mx-auto z-10 relative">
        <div className="w-full rounded-[2.5rem] bg-white dark:bg-[#0a1414] border border-black/5 dark:border-white/5 shadow-2xl overflow-hidden p-8 md:p-16 lg:p-24 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[300px] md:max-w-sm mx-auto aspect-square flex items-center justify-center my-8 lg:my-0"
            >
              {/* Concentric rings */}
              <div className="absolute w-full h-full rounded-full border border-black/5 dark:border-white/5" />
              <div className="absolute w-2/3 h-2/3 rounded-full border border-black/10 dark:border-white/10" />
              <div className="absolute w-1/3 h-1/3 rounded-full border border-black/10 dark:border-white/10" />

              {/* Satellites */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-white dark:bg-[#0f1f1f] border border-black/10 dark:border-white/10 text-xs font-mono font-bold text-[#0891b2] dark:text-[#22d3ee] shadow-lg">
                UI
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-white dark:bg-[#0f1f1f] border border-black/10 dark:border-white/10 text-xs font-mono font-bold text-[#0891b2] dark:text-[#22d3ee] shadow-lg">
                API
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-4 py-1.5 rounded-full bg-white dark:bg-[#0f1f1f] border border-black/10 dark:border-white/10 text-xs font-mono font-bold text-[#0891b2] dark:text-[#22d3ee] shadow-lg">
                AI
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-white dark:bg-[#0f1f1f] border border-black/10 dark:border-white/10 text-xs font-mono font-bold text-[#0891b2] dark:text-[#22d3ee] shadow-lg">
                OPS
              </div>

              {/* Center Core */}
              <div className="relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee] shadow-[0_0_60px_rgba(8,145,178,0.4)] dark:shadow-[0_0_60px_rgba(34,211,238,0.2)] flex flex-col items-center justify-center text-white dark:text-teal-950 gap-1 border-4 border-white dark:border-[#0a1414]">
                <Terminal size={28} strokeWidth={2.5} />
                <span className="font-mono text-[10px] md:text-xs font-extrabold tracking-widest mt-1 uppercase">Build</span>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-mono text-xs tracking-[0.2em] text-[#0891b2] dark:text-[#22d3ee] uppercase mb-6 font-bold">
                ENGINEERING RANGE
              </p>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f1f1f] dark:text-[#f5f7f7] leading-[1.1] mb-6">
                Not a pile of tools. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
                  A connected system.
                </span>
              </h2>

              <p className="text-sm md:text-base text-[#4b5f5f] dark:text-[#9db3b3] leading-relaxed font-medium mb-10 max-w-xl">
                Frontend choices affect APIs. Vector databases dictate AI quality. Infrastructure affects everything. I build across these boundaries.
              </p>

              {/* Active Learning Track Box */}
              <div className="w-full rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 p-6 md:p-8 flex items-start gap-4 hover:border-[#0891b2]/30 dark:hover:border-[#22d3ee]/30 transition-colors">
                <div className="flex-shrink-0 pt-1 text-[#0891b2] dark:text-[#22d3ee]">
                  <Sparkles size={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-mono text-[10px] md:text-xs tracking-widest text-[#4b5f5f] dark:text-[#9db3b3] font-bold uppercase mb-2">
                    Active Learning Track
                  </p>
                  <p className="text-[#0f1f1f] dark:text-[#f5f7f7] font-bold text-sm md:text-base">
                    LangGraph Orchestration • Retrieval Systems • Applied ML
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skill Categories Section */}
      <section className="w-full pb-24 md:pb-32 px-4 md:px-12 max-w-[1400px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {[
            {
              num: "01",
              title: "Frontend",
              desc: "Responsive interfaces with React, Next.js, and Tailwind CSS. Focused on accessible, fluid motion and clean hierarchy.",
              icon: <Code size={24} strokeWidth={2} />,
              colSpan: "md:col-span-1 lg:col-span-4",
            },
            {
              num: "02",
              title: "Backend",
              desc: "Scalable APIs and business logic using Node.js, Express, and FastAPI. Architecting maintainable and robust service layers.",
              icon: <Layers size={24} strokeWidth={2} />,
              colSpan: "md:col-span-1 lg:col-span-4",
            },
            {
              num: "03",
              title: "Agentic AI",
              desc: "Tool-using agents, retrieval-augmented generation (RAG), and orchestration with LangChain, Hugging Face, and Pinecone.",
              icon: <Bot size={24} strokeWidth={2} />,
              colSpan: "md:col-span-1 lg:col-span-4",
            },
            {
              num: "04",
              title: "Data",
              desc: "Relational and document databases including PostgreSQL and MongoDB. Efficient caching with Redis and optimized schema design.",
              icon: <Database size={24} strokeWidth={2} />,
              colSpan: "md:col-span-1 lg:col-span-6",
            },
            {
              num: "05",
              title: "DevOps",
              desc: "Docker containerization, CI/CD pipelines with GitHub Actions, and repeatable deployments on Vercel and Render.",
              icon: <CloudCog size={24} strokeWidth={2} />,
              colSpan: "md:col-span-2 lg:col-span-6",
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`w-full ${category.colSpan} rounded-[2rem] bg-white/50 dark:bg-[#0a1414]/80 border border-black/5 dark:border-white/5 shadow-xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] group hover:border-[#0891b2]/30 dark:hover:border-[#22d3ee]/30 transition-colors`}
            >
              {/* Top: Num & Icon */}
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-xs md:text-sm font-bold text-[#4b5f5f] dark:text-[#9db3b3]">
                  {category.num}
                </span>
                <div className="text-[#0891b2] dark:text-[#22d3ee] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {category.icon}
                </div>
              </div>

              {/* Bottom: Title & Desc */}
              <div>
                <h3 className="text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-4 tracking-tight">
                  {category.title}
                </h3>
                <p className="text-sm md:text-base text-[#4b5f5f] dark:text-[#9db3b3] leading-relaxed font-medium">
                  {category.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Working Toolkit Section */}
      <section className="w-full py-24 md:py-32 px-4 md:px-12 max-w-[1400px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <p className="font-mono text-xs tracking-[0.2em] text-[#0891b2] dark:text-[#22d3ee] uppercase mb-6 font-bold">
              WORKING TOOLKIT
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f1f1f] dark:text-[#f5f7f7] leading-[1.1] mb-6">
              Tools I know and <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
                tools I am growing into.
              </span>
            </h2>
            <p className="text-sm md:text-base text-[#4b5f5f] dark:text-[#9db3b3] leading-relaxed font-medium max-w-md">
              A comprehensive breakdown of my technical stack, featuring the technologies I use in production to build scalable backends, full-stack applications, and AI-driven systems.
            </p>
          </motion.div>

          {/* Right Column - Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 w-full rounded-[2.5rem] bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/5 p-6 md:p-12 shadow-xl"
          >
            <div className="flex flex-col w-full">
              {[
                {
                  num: "01",
                  category: "Frontend",
                  items: ["React", "Next.js", "Redux", "Tailwind CSS", "Framer Motion"],
                },
                {
                  num: "02",
                  category: "Backend",
                  items: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs"],
                },
                {
                  num: "03",
                  category: "AI & Agents",
                  items: ["LangChain", "LangGraph", "Hugging Face", "Pinecone", "RAG"],
                },
                {
                  num: "04",
                  category: "Databases",
                  items: ["PostgreSQL", "MongoDB", "Redis"],
                },
                {
                  num: "05",
                  category: "DevOps",
                  items: ["Docker", "GitHub Actions", "Vercel", "Render", "Git"],
                }
              ].map((row, index, array) => (
                <div 
                  key={index} 
                  className={`flex flex-col sm:flex-row sm:items-center py-6 md:py-8 gap-4 sm:gap-6 ${
                    index !== array.length - 1 ? "border-b border-black/10 dark:border-white/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-6 sm:w-1/3 flex-shrink-0">
                    <span className="font-mono text-xs font-bold text-[#0891b2] dark:text-[#22d3ee]">
                      {row.num}
                    </span>
                    <span className="font-bold text-[#0f1f1f] dark:text-[#f5f7f7] text-base">
                      {row.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 flex-grow">
                    {row.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="text-sm text-[#4b5f5f] dark:text-[#9db3b3] font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </section>

      <Fixdivider />
      <Footer />
    </>
  );
};

export default Skills;
