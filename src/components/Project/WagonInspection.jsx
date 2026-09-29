import React from "react";
import { CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const WagonInspection = () => {
  const links = {
    live: "https://railway-inspection-lovat.vercel.app/documentation",
    backend: "https://dhruvboghani-wegon-inspaction-server.hf.space",
    ocr: "https://dhruvboghani-railway-inspection-try.hf.",
    github: "https://github.com/Dhruv-Boghani/railway-inspection",
  };

  const features = [
    "Dual camera pipelines — a 6-stage Side pipeline (LR/RL direction) and a 5-stage Top pipeline, run automatically based on the upload type.",
    "YOLOv12/v8 detection and counting for wagons, with ByteTrack used to track wagons across frames and avoid double-counting.",
    "MPRNet-based image enhancement that deblurs motion-blurred and low-light frames before analysis, with a side-by-side Blur vs Deblur compare tool.",
    "Door condition classification (Good/Damaged/Missing) via YOLOv12n detection + an EfficientNet few-shot classifier.",
    "Damage detection and segmentation (dents/scratches with severity levels) using YOLOv8-seg, on both side and roof (top-camera) views.",
    "Custom OCR pipeline — CRAFT text-region detection feeding into a Qwen2-VL-2B vision-language model — to read and validate 11-digit Indian Railway wagon numbers, including check-digit verification.",
    "Real-time WebSocket progress updates streamed from backend pipeline stages straight to the React frontend during processing.",
    "Interactive per-wagon analysis view with zoom, pan, and annotated images, plus downloadable PDF inspection reports with analytics.",
    "Built in a 5-member team (Team HackHustlers) during Adani Hack Innovate 2026.",
  ];

  const architecture = [
    {
      label: "Frontend",
      detail:
        "React 18 + Vite — Upload, Processing, Results, Analysis, Compare & Report pages",
    },
    {
      label: "Backend API",
      detail:
        "FastAPI + SQLAlchemy/SQLite — job orchestration, WebSocket progress, file serving",
    },
    {
      label: "Side Pipeline",
      detail:
        "Detection → Quality → Enhancement → Doors → Damage → OCR (6 stages)",
    },
    {
      label: "Top Pipeline",
      detail:
        "Detection → Quality → Enhancement → Damage → Aggregation (5 stages)",
    },
    {
      label: "OCR Server",
      detail:
        "Standalone FastAPI service running Qwen2-VL-2B (8-bit quantized) for wagon-number reading",
    },
    {
      label: "Model Weights",
      detail:
        "~1.4GB of pipeline models: MPRNet, CRAFT, YOLOv12/v8 detectors, EfficientNet classifier",
    },
  ];

  const pipeline = [
    "Video Upload",
    "Wagon Detection (YOLO)",
    "Quality Check",
    "MPRNet Deblur",
    "Door + Damage Detection",
    "CRAFT + Qwen2-VL OCR",
    "PDF Report",
  ];

  const techStack = {
    Frontend: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "Axios",
      "html2pdf.js",
    ],
    Backend: ["FastAPI", "Uvicorn", "SQLAlchemy", "WebSocket", "SQLite"],
    "AI / ML": [
      "PyTorch",
      "Ultralytics YOLO (v8, v12)",
      "MPRNet",
      "CRAFT",
      "Qwen2-VL-2B",
      "timm (EfficientNet)",
      "OpenCV",
    ],
    DevOps: ["Docker", "Docker Compose", "Hugging Face Spaces", "Vercel"],
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4 pr-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1f1f] dark:text-[#f5f7f7] tracking-tight mb-2">
              Railway Wagon Inspection System
            </h2>
            <p className="text-sm md:text-base text-[#0891b2] dark:text-[#22d3ee] font-mono tracking-widest font-bold">
              AI COMPUTER VISION • REAL-TIME WEBSOCKETS
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          <a
            href={links.live}
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
            href={links.ocr}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-black/10 dark:border-white/10 text-[#0f1f1f] dark:text-[#f5f7f7] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            OCR Server <ExternalLink className="w-4 h-4" />
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
        An AI-powered inspection system that replaces manual wagon checks at
        railway yards and depots. Side and top camera footage is processed
        through a multi-stage computer vision pipeline that counts wagons,
        assesses and enhances frame quality, classifies door conditions, detects
        damage, and reads 11-digit wagon numbers via OCR — turning raw video
        into a downloadable inspection report. Built by Team HackHustlers (5
        members) during Adani Hack Innovate 2026.
      </p>

      {/* Stat strip */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {[
          { value: "11", label: "AI Pipeline Stages" },
          { value: "8", label: "ML Models" },
          { value: "2", label: "Camera Angles" },
        ].map((s, i) => (
          <div
            key={i}
            className="rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 px-3 py-4 md:px-4 md:py-5 text-center"
          >
            <div className="text-xl md:text-2xl font-extrabold text-[#0891b2] dark:text-[#22d3ee]">
              {s.value}
            </div>
            <div className="text-xs md:text-sm text-[#4b5f5f] dark:text-[#9db3b3] mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>

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
          The FastAPI backend orchestrates jobs and streams live progress over
          WebSocket, while a dedicated OCR microservice runs the Qwen2-VL model
          in isolation — keeping the heavier vision-language inference off the
          main request path.
        </p>
      </div>

      {/* Pipeline */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-4">
          Side-Camera Inspection Pipeline
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
          The top-camera pipeline follows a shorter 5-stage path (detection →
          quality → enhancement → roof damage → aggregation), since wagon
          numbers and door status aren't visible from above.
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

export default WagonInspection;
