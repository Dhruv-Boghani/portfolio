import React from "react";
import { CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const AutonomousCICD = () => {
  const links = {
    github: "https://github.com/Rajyagur-Nayan/Next-ps.git",
    backend: "https://dhruvboghani-rift.hf.space",
    Live: "https://rift-ci-cd.vercel.app",
  };

  const features = [
    "Autonomous auto-healing loop — clones a repository, runs its test suite, and on failure analyzes the error with Google Gemini to generate and apply a fix automatically.",
    "Retries the fix-and-test cycle up to 5 times, only stopping once tests pass or the retry limit is hit — full CI, error diagnosis, and remediation with no manual debugging.",
    "Strict branching convention (e.g. TEAM_LEADER_AI_Fix) — every AI-generated fix is committed and pushed to a dedicated branch, never directly to main.",
    "LangGraph-based state machine orchestration for robust, resumable error-analysis and fix-retry loops rather than a linear script.",
    "Verifies or generates a Dockerfile for the target project and runs it inside Docker, so the healing loop tests code in an isolated, reproducible environment.",
    "Real-time React dashboard (with Chart.js) to monitor the healing process as it clones, tests, diagnoses, and fixes live.",
    "Zero-cost LLM integration using Gemini's free tier via LangChain, making the agent runnable without paid API usage.",
    "Built for senior developers in a 4-member team during the RIFT Hackathon (PW Vidyapeeth) — a synchronized multi-city coding challenge.",
  ];

  const architecture = [
    {
      label: "Trigger",
      detail:
        "Repository link + GitHub/Vercel tokens submitted via the React dashboard",
    },
    {
      label: "Orchestrator",
      detail:
        "LangGraph state machine coordinating the clone → test → fix → retry loop",
    },
    {
      label: "AI Reasoning",
      detail:
        "Google Gemini Pro (via LangChain) analyzes failing tests and generates code fixes",
    },
    {
      label: "Execution",
      detail:
        "FastAPI backend + GitPython + Docker — runs tests, applies fixes, commits, and pushes",
    },
  ];

  const flow = [
    "Clone Repo",
    "Run Tests",
    "Fail?",
    "Gemini Analyzes Error",
    "Generate Fix",
    "Commit & Push",
    "Retry (max 5)",
  ];

  const techStack = {
    Frontend: ["React", "Vite", "Tailwind CSS", "Chart.js"],
    Backend: ["Python", "FastAPI", "LangGraph", "GitPython"],
    AI: ["Google Gemini Pro", "LangChain"],
    DevOps: ["Docker", "GitHub API", "Vercel API"],
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4 pr-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1f1f] dark:text-[#f5f7f7] tracking-tight mb-2">
              Autonomous CI/CD Healing Agent
            </h2>
            <p className="text-sm md:text-base text-[#0891b2] dark:text-[#22d3ee] font-mono tracking-widest font-bold">
              DEVOPS • AUTONOMOUS AGENTS
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          <a
            href={links.Live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[#0891b2] dark:bg-[#22d3ee] text-white dark:text-[#0f1f1f] hover:opacity-90 transition-opacity"
          >
            Live Demo <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={links.backend}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-black/10 dark:border-white/10 text-[#0f1f1f] dark:text-[#f5f7f7] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            Backend API <ExternalLink className="w-4 h-4" />
          </a>
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
        An AI-powered DevOps agent that autonomously heals broken code: given a
        repository link and access tokens, it clones the repo, runs the test
        suite, and whenever tests fail, uses Google Gemini to diagnose the
        error, generate a fix, and push it to a dedicated branch — repeating the
        loop until tests pass or a retry limit is reached. Built for senior
        developers in a 4-member team during the RIFT Hackathon.
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
      </div>

      {/* Healing loop */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-4">
          Auto-Healing Loop
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
          On a passing test run the loop ends immediately; on failure, Gemini
          analyzes the error, proposes a fix, and the agent commits it to a
          strictly-named fix branch before re-running tests — up to 5 attempts
          before giving up.
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

export default AutonomousCICD;
