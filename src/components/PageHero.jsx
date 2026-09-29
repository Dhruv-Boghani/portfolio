import React from "react";
import { motion } from "framer-motion";

const PageHero = ({ eyebrow, title, description, watermark }) => {
  return (
    <section className="relative w-full h-screen min-h-[650px] flex flex-col justify-center px-4 md:px-12 max-w-[1400px] mx-auto z-10 overflow-hidden mb-[80px]">
      {/* Right side circular graphic */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%] md:translate-x-[25%] w-[400px] h-[400px] md:w-[650px] md:h-[650px] pointer-events-none opacity-[0.15] dark:opacity-20">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full stroke-[#4b5f5f] dark:stroke-[#9db3b3]"
          fill="none"
          strokeWidth="0.15"
        >
          <circle cx="50" cy="50" r="15" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="60" />
          <line x1="0" y1="50" x2="100" y2="50" strokeDasharray="1 2" />
          <line x1="50" y1="0" x2="50" y2="100" strokeDasharray="1 2" />
        </svg>
      </div>

      {/* Massive Background Watermark */}
      <div className="absolute bottom-[-5%] md:bottom-[-10%] right-[-2%] text-[35vw] md:text-[22vw] font-extrabold text-[#0891b2] dark:text-[#22d3ee] opacity-[0.03] dark:opacity-[0.04] leading-none select-none pointer-events-none tracking-tighter">
        {watermark}
      </div>

      {/* Top right coordinates */}
      <div className="absolute top-32 right-4 md:right-12 text-right flex flex-col items-end opacity-60">
        <p className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-[#4b5f5f] dark:text-[#9db3b3] uppercase mb-1.5 font-bold">
          PORTFOLIO / {eyebrow}
        </p>
        {/* <p className="text-[10px] md:text-[11px] font-mono tracking-[0.1em] text-[#4b5f5f] dark:text-[#9db3b3] font-bold">
          21.1702° N • 72.8311° E
        </p> */}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl relative z-10"
      >
        <p className="font-mono text-[11px] md:text-sm tracking-[0.25em] text-[#0891b2] dark:text-[#22d3ee] uppercase mb-6 md:mb-10 font-bold">
          {eyebrow}
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.03em] text-[#0f1f1f] dark:text-[#f5f7f7] leading-[1.05] mb-8 md:mb-10">
          {title}
        </h1>

        <p className="text-sm md:text-base text-[#4b5f5f] dark:text-[#9db3b3] max-w-xl leading-relaxed font-medium">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default PageHero;
