import React from "react";
import PageHero from "../components/PageHero";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/photo.png"; // reusing your existing portrait
import Footer from "../components/Footer";
import Fixdivider from "../components/Fixdivider";
import Capabilities from "../sections/Capabilities";

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        title={
          <>
            A builder shaped <br />
            by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
              curiosity.
            </span>
          </>
        }
        description="I move comfortably between product thinking, frontend craft, backend engineering, AI exploration, and the infrastructure that keeps it all running."
        watermark="AB"
      />

      {/* My Story Section */}
      <section className="w-full py-24 md:py-32 px-4 md:px-12 max-w-[1400px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-lg mx-auto lg:mx-0"
          >
            {/* The arch image container */}
            <div className="relative w-full aspect-[4/5] rounded-t-[15rem] rounded-b-[2.5rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-white/50 dark:bg-[#0a1414]/50">
              <img
                src={profilePhoto}
                alt="Dhruv Boghani"
                className="w-full h-full object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
              />
              {/* Inner shadow */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none rounded-t-[15rem] rounded-b-[2.5rem]" />

              {/* Floating glassmorphism badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/80 dark:bg-[#0f1f1f]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-xl">
                <p className="text-xs text-[#4b5f5f] dark:text-[#9db3b3] mb-1 font-semibold uppercase tracking-wider">
                  Current focus
                </p>
                <p className="text-sm md:text-base font-bold text-[#0f1f1f] dark:text-white">
                  AI-driven Backend Systems
                </p>
              </div>
            </div>

            {/* Subtle background glow for image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-[#0891b2]/5 dark:bg-[#22d3ee]/5 blur-[100px] -z-10 pointer-events-none" />
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            <p className="font-mono text-xs tracking-[0.2em] text-[#0891b2] dark:text-[#22d3ee] uppercase mb-6 font-bold">
              MY STORY
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f1f1f] dark:text-[#f5f7f7] leading-[1.1] mb-8">
              Engineering systems that <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
                scale and think.
              </span>
            </h2>

            <div className="space-y-6 text-[#4b5f5f] dark:text-[#9db3b3] text-sm md:text-base leading-relaxed font-medium mb-8">
              <p>
                My journey began with full-stack development, architecting
                robust backend systems and live web apps. Whether it's handling
                10,000+ concurrent users for an e-commerce platform or building
                automated CI/CD pipelines, I thrive on the deep technical
                decisions that turn complex requirements into seamless products.
              </p>
              <p>
                Today, my focus is bridging backend engineering with modern AI.
                I'm actively building applied machine learning solutions, RAG
                servers, and multi-agent systems using tools like LangGraph and
                Pinecone. I'm driven by solving real-world, industrial
                problems—from automated railway inspections to multilingual
                farming assistants.
              </p>
            </div>

            <Link
              to="/skills"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#0891b2] dark:text-[#22d3ee] hover:text-[#06b6d4] dark:hover:text-[#5eead4] transition-colors mb-12 w-fit"
            >
              Explore my toolkit
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>

            {/* Divider */}
            <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-8" />

            {/* Footer Stats/Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h4 className="text-[#0f1f1f] dark:text-[#f5f7f7] font-bold text-base mb-2">
                  Backend & Scale
                </h4>
                <p className="text-[#4b5f5f] dark:text-[#9db3b3] text-sm font-medium">
                  Node.js, FastAPI, PostgreSQL
                </p>
              </div>
              <div>
                <h4 className="text-[#0f1f1f] dark:text-[#f5f7f7] font-bold text-base mb-2">
                  AI learner
                </h4>
                <p className="text-[#4b5f5f] dark:text-[#9db3b3] text-sm font-medium">
                  Agents, RAG, applied ML
                </p>
              </div>
              <div>
                <h4 className="text-[#0f1f1f] dark:text-[#f5f7f7] font-bold text-base mb-2">
                  DevOps
                </h4>
                <p className="text-[#4b5f5f] dark:text-[#9db3b3] text-sm font-medium">
                  Docker, Linux, delivery
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Fixdivider />
      <Capabilities
        tag="What I do"
        title={
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-[#0f1f1f] dark:text-[#f5f7f7] leading-[1.05]"
          >
            Different layers.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
              of engineering.
            </span>
          </motion.h2>
        }
        description="Full-stack and systems expertise across product, backend, and AI."
      />

      {/* How I Work Section */}
      <section className="w-full py-24 md:py-32 px-4 md:px-12 max-w-[1400px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <p className="font-mono text-xs tracking-[0.2em] text-[#0891b2] dark:text-[#22d3ee] uppercase mb-6 font-bold">
              HOW I WORK
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f1f1f] dark:text-[#f5f7f7] leading-[1.1] mb-6">
              Clear thinking. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
                Robust execution.
              </span>
            </h2>
          </motion.div>

          {/* Right Column - Steps */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-8 flex flex-col w-full"
          >
            {[
              {
                num: "01",
                title: "Architect",
                desc: "Design scalable data models, strict concurrency controls (Redis), and vector schemas (Pinecone) before writing code.",
              },
              {
                num: "02",
                title: "Build",
                desc: "Develop fast APIs (Node.js, FastAPI) and robust full-stack slices, natively integrating RAG and applied ML models.",
              },
              {
                num: "03",
                title: "Automate",
                desc: "Engineer automated CI/CD pipelines using Docker and LangGraph to ensure safe, autonomous deployments.",
              },
              {
                num: "04",
                title: "Scale",
                desc: "Monitor real-time analytics and proactively optimize infrastructure to handle 10,000+ concurrent users seamlessly.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start py-8 md:py-10 border-t border-black/10 dark:border-white/10 group"
              >
                {/* Number */}
                <div className="w-12 md:w-16 flex-shrink-0 pt-0.5">
                  <span className="font-mono text-xs md:text-sm font-bold text-[#0891b2] dark:text-[#22d3ee]">
                    {step.num}
                  </span>
                </div>
                {/* Title & Desc Container (stacks on mobile, side-by-side on md+) */}
                <div className="flex flex-col md:flex-row flex-grow gap-4 md:gap-8">
                  <div className="md:w-1/3 flex-shrink-0">
                    <h4 className="text-[#0f1f1f] dark:text-[#f5f7f7] font-bold text-base md:text-lg">
                      {step.title}
                    </h4>
                  </div>
                  <div className="flex-grow pr-4 md:pr-8">
                    <p className="text-[#4b5f5f] dark:text-[#9db3b3] text-sm md:text-base leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {/* Icon */}
                <div className="flex-shrink-0 pt-1 opacity-20 dark:opacity-10 group-hover:opacity-100 transition-opacity duration-300 text-[#0891b2] dark:text-[#22d3ee]">
                  <CheckCircle2 size={20} strokeWidth={2} />
                </div>
              </div>
            ))}
            {/* Bottom Border */}
            <div className="border-t border-black/10 dark:border-white/10 w-full" />
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
