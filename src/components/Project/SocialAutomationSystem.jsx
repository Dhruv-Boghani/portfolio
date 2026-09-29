import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const SocialAutomationSystem = () => {
  const links = {
    github: "https://github.com/Dhruv-Boghani/movie-clip.git",
  };

  const features = [
    "Takes a full-length movie or long-form video as input and automatically cuts it into short, platform-ready clips.",
    "Applies automated edits to each clip — including horizontal-to-vertical reformatting and text overlays — with no manual editing step required.",
    "FFmpeg-driven video processing pipeline handles clip extraction, reformatting, and overlay rendering.",
    "Cron-based scheduling engine uploads clips automatically at set times, rather than requiring a person to post manually.",
    "Built to publish across multiple platforms — Instagram, YouTube, and Facebook — from a single automated pipeline.",
    "Uses the Instagram API to handle authenticated posting directly, removing manual upload work entirely.",
    "End-to-end automation: once a source video is provided, clip generation, editing, scheduling, and posting all run without intervention.",
  ];

  const flow = [
    "Full Video Input",
    "FFmpeg Clip Extraction",
    "Reformat + Text Overlays",
    "Cron Scheduler",
    "Auto-Upload (IG / YouTube / FB)",
  ];

  const techStack = {
    Core: ["Node.js", "Python", "Automation Scripts", "Cron Scheduling"],
    Media: ["FFmpeg", "Video Processing"],
    Integrations: ["Instagram API"],
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4 pr-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1f1f] dark:text-[#f5f7f7] tracking-tight mb-2">
              Social Media Automation System
            </h2>
            <p className="text-sm md:text-base text-[#0891b2] dark:text-[#22d3ee] font-mono tracking-widest font-bold">
              VIDEO PROCESSING • AUTOMATION
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-black/10 dark:border-white/10 text-[#0f1f1f] dark:text-[#f5f7f7] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <FaGithub className="w-4 h-4" /> Source
          </a>
        </div>
      </div>

      {/* Intro */}
      <p className="text-base md:text-lg text-[#4b5f5f] dark:text-[#9db3b3] leading-relaxed">
        An automation system that turns a full movie or long-form video into a
        stream of short, reformatted clips — complete with text overlays — and
        publishes them across Instagram, YouTube, and Facebook on a set
        schedule, with no manual editing or posting. Built on an FFmpeg-driven
        processing pipeline to remove the repetitive work of cutting,
        formatting, and uploading clips one by one.
      </p>

      {/* Key Features */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-6">
          Key Features
        </h3>
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-[#4b5f5f] dark:text-[#9db3b3] text-sm md:text-base"
            >
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#0891b2] dark:text-[#22d3ee] flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pipeline */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-4">
          Automation Pipeline
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          {flow.map((step, i) => (
            <React.Fragment key={i}>
              <span className="px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg bg-black/5 dark:bg-white/5 text-[#0f1f1f] dark:text-[#f5f7f7]">
                {step}
              </span>
              {i < flow.length - 1 && (
                <ArrowRight className="w-4 h-4 text-[#0891b2] dark:text-[#22d3ee] flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="text-sm text-[#4b5f5f] dark:text-[#9db3b3] mt-4 leading-relaxed">
          The entire process runs unattended once a source video is dropped in —
          FFmpeg extracts and reformats clips, overlays are rendered in, and the
          scheduler queues and posts them at set times without further input.
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-6">
          Tech Stack
        </h3>
        <div className="flex flex-col gap-4">
          {Object.entries(techStack).map(([category, items], i) => (
            <div key={i}>
              <div className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#0891b2] dark:text-[#22d3ee] font-bold mb-2">
                {category}
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {items.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-lg bg-black/5 dark:bg-white/5 text-[#0f1f1f] dark:text-[#f5f7f7] border border-black/5 dark:border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialAutomationSystem;
