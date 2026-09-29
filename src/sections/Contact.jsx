import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full py-28 md:py-36 px-4 md:px-8 max-w-6xl mx-auto z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full rounded-[2.5rem] bg-white dark:bg-[#0f1f1f] border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl shadow-black/5 dark:shadow-none p-10 md:p-14 lg:p-20"
      >
        
        {/* Soft radial glow in the background right */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[140%] rounded-full bg-gradient-to-l from-[#0891b2]/20 to-transparent dark:from-[#22d3ee]/15 dark:to-transparent blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <p className="text-[#0891b2] dark:text-[#22d3ee] font-mono text-[13px] tracking-[0.2em] uppercase mb-8 font-bold">
            Have an idea?
          </p>
          
          <h2 className="text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-[#0f1f1f] dark:text-[#f5f7f7] leading-[1.05] mb-8">
            Let's build something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
              worth remembering.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#4b5f5f] dark:text-[#9db3b3] mb-12 max-w-2xl leading-relaxed font-medium">
            I'm open to full-stack projects, AI collaborations, and thoughtful conversations about things that do not exist yet.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <a 
              href="https://wa.me/919408564882?text=Hi%20Dhruv,%20let's%20build%20something!" 
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white dark:text-teal-950 bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee] transition-all duration-300 shadow-xl shadow-[#0891b2]/20 dark:shadow-[#22d3ee]/20 hover:scale-[1.02]"
            >
              Start a conversation
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </a>
            
            <a 
              href="#about" 
              className="inline-flex items-center gap-2 font-bold text-[#0f1f1f] dark:text-[#f5f7f7] hover:text-[#0891b2] dark:hover:text-[#22d3ee] transition-colors group"
            >
              More about me
              <ArrowRight size={18} strokeWidth={2.5} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
      </motion.div>
    </section>
  );
};

export default Contact;