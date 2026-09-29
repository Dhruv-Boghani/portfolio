import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Code2 } from "lucide-react";
import profilePhoto from "../assets/230430116008.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start space-y-8"
        >
          {/* Status & Eyebrow */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0891b2] dark:bg-[#22d3ee] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0891b2] dark:bg-[#22d3ee]"></span>
              </span>
              <span className="text-xs font-medium text-[#4b5f5f] dark:text-[#9db3b3]">
                Available for interesting work
              </span>
            </div>
            <p className="font-mono text-sm tracking-widest text-[#0891b2] dark:text-[#22d3ee] uppercase">
              Full-Stack / Backend / AI
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0f1f1f] dark:text-[#f5f7f7] leading-[1.1]">
            I build digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
              systems that
              <br />
              think.
            </span>
          </h1>

          {/* Bio */}
          <p className="text-lg md:text-xl text-[#4b5f5f] dark:text-[#9db3b3] max-w-xl leading-relaxed">
            I'm{" "}
            <strong className="font-semibold text-[#0f1f1f] dark:text-[#f5f7f7]">
              Dhruv Boghani
            </strong>
            , a full-stack developer exploring agentic AI and turning ambitious
            ideas into fast, useful, beautifully engineered products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white dark:text-teal-950 bg-[#0891b2] hover:bg-[#06b6d4] dark:bg-[#22d3ee] dark:hover:bg-[#5eead4] transition-all duration-300 shadow-lg shadow-[#0891b2]/20 dark:shadow-[#22d3ee]/20 hover:scale-[1.02]"
            >
              Explore featured work
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#0f1f1f] dark:text-[#f5f7f7] bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-md transition-all duration-300 border border-black/5 dark:border-white/5 hover:scale-[1.02]"
            >
              Let's talk
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-black/10 dark:border-white/10 w-full max-w-md">
            <div>
              <h4 className="text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7]">
                5+
              </h4>
              <p className="text-sm text-[#4b5f5f] dark:text-[#9db3b3] mt-1">
                Major Projects
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7]">
                15+
              </h4>
              <p className="text-sm text-[#4b5f5f] dark:text-[#9db3b3] mt-1">
                Technologies
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7]">
                Always
              </h4>
              <p className="text-sm text-[#4b5f5f] dark:text-[#9db3b3] mt-1">
                Learning
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-auto lg:h-[650px] flex items-center justify-center mt-10 lg:mt-0"
        >
          {/* Main Portrait Mask */}
          <div className="relative w-full max-w-md h-full max-h-[600px] rounded-t-[13rem] rounded-b-[2rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl z-10 bg-white/50 dark:bg-[#0a1414]/50">
            <img
              src={profilePhoto}
              alt="Dhruv Boghani"
              className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-500 hover:opacity-100"
            />
            {/* Inner glow/shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none rounded-[2rem]" />
          </div>

          {/* Floating Badges */}

          {/* Location Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 lg:-right-4 z-20 flex items-center gap-2 px-4 py-2 rounded-xl border shadow-lg dark:bg-white/5 backdrop-blur-lg border-white/20 bg-white/10"
          >
            <MapPin size={16} className="text-[#0891b2] dark:text-[#22d3ee]" />
            <span className="text-xs font-medium text-[#0f1f1f] dark:text-[#f5f7f7]">
              Surat - Remote ready
            </span>
          </motion.div>

          {/* Currently Building Badge */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-16 -left-4 lg:-left-12 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-lg dark:bg-white/5 backdrop-blur-lg border-white/20 bg-white/10"
          >
            <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5">
              <Code2 size={20} className="text-[#0891b2] dark:text-[#22d3ee]" />
            </div>
            <div>
              <p className="text-[10px] text-[#1a0f0feb] dark:text-[#9db3b3] uppercase tracking-wider font-semibold">
                Currently building
              </p>
              <p className="text-sm font-bold text-[#0f1f1f] dark:text-[#f5f7f7]">
                AI Inspection Systems
              </p>
            </div>
          </motion.div>

          {/* Tech Chips */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-1/3 left-[40px] z-20 flex items-center justify-center w-12 h-12 rounded-xl border shadow-lg font-bold text-[#0f1f1f] dark:text-[#f5f7f7] text-sm dark:bg-white/5 backdrop-blur-lg border-white/20 bg-white/10"
          >
            Re
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute top-2/3 right-15 z-20 flex items-center justify-center w-12 h-12 rounded-xl border shadow-lg font-bold text-[#0f1f1f] dark:text-[#f5f7f7] text-sm bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 "
          >
            Py
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
