import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const KrishiSakhi = () => {
  const links = {
    github: "https://github.com/Dhruv-Boghani/Krishi-Saathi-AI.git",
  };

  const features = [
    "100% voice-first assistant — farmers speak naturally and receive instant spoken responses, with no typing required at any step.",
    "Multilingual support with real-time translation — regional language input is translated to English, processed, and translated back automatically.",
    "Fine-tuned Google Gemma 2B IT model, specialized on agricultural domain knowledge for accurate farming guidance.",
    "Two-tier architecture: a Business Server handling auth, API orchestration and speech processing, and an AI Server running Gemma 2B inference.",
    "Automated end-to-end pipeline — voice input to speech-to-text to translation to AI response to text-to-speech, with no manual intervention.",
    "Native mobile app interface designed for accessibility, built for non-literate and low digital-literacy users.",
    "Secured 9th position among 50+ teams as a Top 10 Finalist at the AI Innovation Challenge Gujarat (2026), organized by CSRBOX & IBM SkillsBuild.",
  ];

  const architecture = [
    {
      label: "Mobile App",
      detail: "Native interface for voice input capture and audio playback",
    },
    {
      label: "Business Server",
      detail:
        "User authentication, API orchestration, and real-time STT/TTS speech processing",
    },
    {
      label: "AI Server",
      detail: "Fine-tuned Gemma 2B model serving agricultural-domain inference",
    },
    {
      label: "Translation Layer",
      detail:
        "Real-time regional-language ↔ English conversion, invisible to the user",
    },
  ];

  const pipeline = [
    "Voice Input",
    "Speech-to-Text",
    "Translation to English",
    "Gemma AI Processing",
    "Translation Back",
    "Voice Response",
  ];

  const impact = [
    "Universal access — non-literate farmers can fully participate through voice alone.",
    "Works in the regional languages and dialects farmers actually speak, not just standard text-based languages.",
    "Complete hands-free operation, removing the digital-literacy barrier of typing.",
    "Real-time answers to pressing farming questions instead of delayed or generic advice.",
    "Aims to improve yields by enabling better, faster on-farm decisions.",
  ];

  const roadmap = [
    "Offline voice mode for areas without reliable internet connectivity.",
    "Image-based crop disease diagnosis from farmer-submitted photographs.",
    "Localized weather advisory forecasts and alerts.",
    "Personalized crop planning and scheduling recommendations.",
  ];

  const techStack = {
    "AI Engine": ["Google Gemma 2B IT (fine-tuned)"],
    Backend: ["FastAPI", "Custom Business Server"],
    "Language & Speech": [
      "Real-time Translation APIs",
      "Speech-to-Text",
      "Text-to-Speech",
    ],
    Mobile: ["Native Mobile App"],
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4 pr-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1f1f] dark:text-[#f5f7f7] tracking-tight mb-2">
              Krishi Saathi AI
            </h2>
            <p className="text-sm md:text-base text-[#0891b2] dark:text-[#22d3ee] font-mono tracking-widest font-bold">
              VOICE-FIRST • MULTILINGUAL AI ASSISTANT
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
        A fully voice-based, multilingual AI farming assistant built to remove
        the text and digital-literacy barriers that keep rural farmers from
        accessing expert agricultural guidance. Farmers speak naturally in their
        own language and get instant, spoken responses from a fine-tuned
        agricultural AI model — no typing, no app navigation, no language
        barrier.
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

      {/* Architecture */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-6">
          System Architecture
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {architecture.map((a, i) => (
            <div
              key={i}
              className="rounded-lg border border-black/5 dark:border-white/5 p-4 bg-black/[0.03] dark:bg-white/[0.03]"
            >
              <div className="text-sm font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-1">
                {a.label}
              </div>
              <div className="text-sm text-[#4b5f5f] dark:text-[#9db3b3]">
                {a.detail}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#4b5f5f] dark:text-[#9db3b3] mt-4 leading-relaxed">
          A two-tier server design keeps concerns separate: the Business Server
          owns auth, orchestration, and all speech processing, while a dedicated
          AI Server runs Gemma 2B inference — so the agricultural model stays
          isolated from user-facing request handling.
        </p>
      </div>

      {/* Pipeline */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-4">
          Voice Request Pipeline
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          {pipeline.map((step, i) => (
            <React.Fragment key={i}>
              <span className="px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg bg-black/5 dark:bg-white/5 text-[#0f1f1f] dark:text-[#f5f7f7]">
                {step}
              </span>
              {i < pipeline.length - 1 && (
                <ArrowRight className="w-4 h-4 text-[#0891b2] dark:text-[#22d3ee] flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="text-sm text-[#4b5f5f] dark:text-[#9db3b3] mt-4 leading-relaxed">
          Every farmer question moves through this automated pipeline end-to-end
          — from raw speech to a spoken, localized answer — with translation
          happening transparently on both ends of the AI call.
        </p>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-6">
          Impact & Benefits
        </h3>
        <ul className="space-y-4">
          {impact.map((o, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-[#4b5f5f] dark:text-[#9db3b3] text-sm md:text-base"
            >
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#0891b2] dark:text-[#22d3ee] flex-shrink-0 mt-0.5" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Roadmap */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-6">
          Future Roadmap
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {roadmap.map((r, i) => (
            <div
              key={i}
              className="rounded-lg border border-black/5 dark:border-white/5 p-4 bg-black/[0.03] dark:bg-white/[0.03] text-sm text-[#4b5f5f] dark:text-[#9db3b3]"
            >
              {r}
            </div>
          ))}
        </div>
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

export default KrishiSakhi;
