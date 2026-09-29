import React from "react";
import { motion } from "framer-motion";
import { Layers, Smartphone, Bot, ArrowRight } from "lucide-react";

const capabilities = [
  {
    num: "01",
    title: "Full-Stack Web",
    description:
      "End-to-end web applications — from expressive React interfaces and Next.js apps to robust Node.js, Express, and FastAPI backends with PostgreSQL.",
    icon: <Layers size={26} strokeWidth={1.5} />,
    tags: ["Next.js", "React", "Node.js", "FastAPI", "PostgreSQL"],
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications with React Native. Delivering offline-first architectures, secure authentication, and native-feeling mobile interfaces.",
    icon: <Smartphone size={26} strokeWidth={1.5} />,
    tags: ["React Native", "Expo", "Redux", "Tailwind"],
  },
  {
    num: "03",
    title: "AI Integration",
    description:
      "Practical AI-powered features using LangChain, Hugging Face, and Vector DBs. Intelligent workflows, automated processes, and RAG systems woven into products.",
    icon: <Bot size={26} strokeWidth={1.5} />,
    tags: ["LangChain", "Pinecone", "Hugging Face", "Python", "RAG"],
  },
];

const Capabilities = ({ tag, title, description }) => {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 max-w-7xl mx-auto z-10">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0891b2] dark:text-[#22d3ee] font-mono text-sm tracking-[0.2em] uppercase mb-6 font-bold"
          >
            {tag}
          </motion.p>
          {title}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-sm lg:text-left flex flex-col items-start lg:items-start lg:ml-12"
        >
          <p className="text-base md:text-lg text-[#4b5f5f] dark:text-[#9db3b3] mb-6 leading-relaxed font-medium">
            {description}
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-bold text-[#0f1f1f] dark:text-[#f5f7f7] hover:text-[#0891b2] dark:hover:text-[#22d3ee] transition-colors group"
          >
            Read my story
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1 transition-transform"
              strokeWidth={2.5}
            />
          </a>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between p-8 md:p-10 rounded-[2rem] bg-white dark:bg-[#0f1f1f] border border-black/5 dark:border-white/5 hover:border-[#0891b2]/30 dark:hover:border-[#22d3ee]/30 transition-all duration-300 shadow-xl shadow-black/5 dark:shadow-none hover:shadow-2xl hover:shadow-[#0891b2]/10 dark:hover:shadow-[#22d3ee]/10 min-h-[420px]"
          >
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-sm text-[#4b5f5f] dark:text-[#9db3b3] font-bold">
                  {cap.num}
                </span>
                <div className="text-[#0891b2] dark:text-[#22d3ee]">
                  {cap.icon}
                </div>
              </div>
              <h3 className="text-[1.75rem] font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-5 tracking-tight">
                {cap.title}
              </h3>
              <p className="text-[#4b5f5f] dark:text-[#9db3b3] leading-relaxed text-[15px] font-medium">
                {cap.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-black/5 dark:border-white/5">
              {cap.tags.map((tag, j) => (
                <span
                  key={j}
                  className="px-3 py-1.5 text-[11px] uppercase tracking-wider font-mono font-bold rounded-lg bg-black/5 dark:bg-white/5 text-[#4b5f5f] dark:text-[#9db3b3] border border-transparent group-hover:border-black/10 dark:group-hover:border-white/10 group-hover:text-[#0891b2] dark:group-hover:text-[#22d3ee] transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
