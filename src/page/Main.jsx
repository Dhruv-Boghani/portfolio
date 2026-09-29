import React from "react";
import Hero from "../sections/Hero";
import SkillsMarquee from "../components/SkillsMarquee";
import Capabilities from "../sections/Capabilities";
import Projects from "../sections/Projects";
import KineticMarquee from "../components/KineticMarquee";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Fixdivider from "../components/Fixdivider";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Hero />
      <SkillsMarquee />
      <Capabilities
        tag="Featured Capabilities"
        title={
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-[#0f1f1f] dark:text-[#f5f7f7] leading-[1.05]"
          >
            One developer.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
              Three connected disciplines.
            </span>
          </motion.h2>
        }
        description="Product engineering from interface to infrastructure, with an expanding focus on useful AI systems."
      />
      <Fixdivider />
      <Projects />
      <KineticMarquee />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
