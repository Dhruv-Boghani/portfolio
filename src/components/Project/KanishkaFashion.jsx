import React from "react";
import { CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const KanishkaFashion = () => {
  const links = {
    admin_panel: "https://e-commerce-admin-panel-mocha.vercel.app",
    mobile_app: "https://www.amazon.in/Kanishka-Fashion/dp/B0G9C2YYXX",
    github:
      "https://github.com/Dhruv-Boghani/ai-power-eCommerce-website-and-app",
  };

  const features = [
    "Full-stack, production-style e-commerce ecosystem for a fashion retail brand — 6 independently deployed microservices (Core API Gateway, Admin Dashboard, Customer App, AI Server, Chat Server, Image Server).",
    "Semantic search & personalized recommendations via vector embeddings (SentenceTransformers + Pinecone) — resolves intent-based queries like 'ethnic dress for summer wedding' that plain keyword search misses.",
    "Nena — a stateful conversational AI support agent built on LangGraph with human-in-the-loop correction for unanswered queries.",
    "Automated shipping-label pipeline using YOLOv8 + Pyzbar/EasyOCR + LLM Vision to extract structured address JSON from courier labels — no manual data entry.",
    "Redis-based 5-minute stock reservation (IRCTC-style) to eliminate overselling during concurrent checkouts; locks auto-release on failed/expired payment.",
    "Full coupon engine (Amazon/Flipkart-style flat & percentage discounts, targeted user limits) plus Google OAuth and Razorpay for secure checkout.",
    "Redis-backed real-time analytics — live user counts, 30-day sales graphs, product views/clicks — powering both the admin dashboard and personalization.",
    "Multi-admin governance: new admin accounts require approval from an existing verified admin, with every catalog/coupon mutation captured by audit-logger middleware.",
    "Architecture built and validated to scale to 10,000+ concurrent users, with each service independently containerized and deployable.",
  ];

  const architecture = [
    {
      label: "Client Layer",
      detail:
        "Customer Mobile App (React Native) & Admin Dashboard (React + Vite)",
    },
    {
      label: "Core Gateway",
      detail:
        "Node.js / Express — catalog, cart, stock locks, coupons, Razorpay checkout",
    },
    {
      label: "AI Server",
      detail:
        "Semantic search & recommendations (SentenceTransformers + Pinecone)",
    },
    {
      label: "Chat Server",
      detail: "Nena — LangGraph conversational support agent",
    },
    {
      label: "Image Server",
      detail: "Shipping-label pipeline — YOLOv8 + OCR + LLM Vision",
    },
    {
      label: "Data Layer",
      detail:
        "PostgreSQL (Neon) for transactions, Upstash Redis for caching/locks, Pinecone for vector search",
    },
  ];

  const flowExample = [
    "Search Query",
    "AI Server Creates Embedding",
    "Pinecone Vector Match",
    "Express Fetches Products",
    "Redis Locks Stock (5 min)",
    "Razorpay Payment",
  ];

  const challenges = [
    {
      title: "Cross-Service Consistency",
      detail:
        "Keeping data consistent across 6 independently deployed services.",
    },
    {
      title: "Race Conditions",
      detail:
        "Preventing double-selling of the same stock unit under concurrent checkouts.",
    },
    {
      title: "Agent Routing",
      detail:
        "Tuning LangGraph so Nena reliably decides when to search vs. answer directly.",
    },
    {
      title: "Label Variability",
      detail:
        "Getting reliable address extraction across inconsistent courier label formats.",
    },
  ];

  const outcomes = [
    "Working semantic search pipeline returning intent-matched results, validated against plain keyword search.",
    "Functional 5-minute Redis stock-lock system that prevents overselling during concurrent checkouts.",
    "Nena chatbot answers shop-specific queries end-to-end, with unanswered queries logged and correctable by admins.",
    "Image Server pipeline successfully extracts structured address JSON from real shipping-label photos.",
    "Architecture validated as horizontally scalable — each service is independently containerized and deployable.",
  ];

  const techStack = {
    Frontend: ["React", "Vite", "Redux Toolkit", "Tailwind CSS", "Recharts"],
    Mobile: ["React Native"],
    Backend: ["Node.js", "Express", "Prisma ORM"],
    "AI / ML": [
      "FastAPI",
      "LangGraph",
      "LangChain",
      "SentenceTransformers",
      "Qwen 2.5",
      "YOLOv8",
      "EasyOCR",
      "Pyzbar",
    ],
    Databases: ["PostgreSQL (Neon)", "Pinecone", "Upstash Redis"],
    "Third-Party / DevOps": [
      "Razorpay",
      "Cloudinary",
      "Firebase FCM",
      "Resend/Brevo",
      "Twilio",
      "Docker",
    ],
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4 pr-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1f1f] dark:text-[#f5f7f7] tracking-tight mb-2">
              Kanishka Fashion
            </h2>
            <p className="text-sm md:text-base text-[#0891b2] dark:text-[#22d3ee] font-mono tracking-widest font-bold">
              AI-POWERED • FULL-STACK E-COMMERCE PLATFORM
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          <a
            href={links.admin_panel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[#0891b2] dark:bg-[#22d3ee] text-white dark:text-[#0f1f1f] hover:opacity-90 transition-opacity"
          >
            Admin Panel <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={links.mobile_app}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[#0891b2] dark:bg-[#22d3ee] text-white dark:text-[#0f1f1f] hover:opacity-90 transition-opacity"
          >
            Mobile App <ExternalLink className="w-4 h-4" />
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
        A full-stack, production-style e-commerce ecosystem built for a fashion
        retail brand — combining traditional transactional commerce (catalog,
        checkout, payments) with three independent AI microservices for search,
        support, and logistics. Built as a 6-service, containerized architecture
        supporting a React Native shopper app, a React admin dashboard, and a
        backend engineered for 10,000+ concurrent users.
      </p>

      {/* Stat strip */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {[
          { value: "6", label: "Microservices" },
          { value: "3", label: "AI-Powered Servers" },
          { value: "10,000+", label: "Concurrent Users" },
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
          Client apps talk to a single Node.js gateway, which delegates AI-heavy
          work to three independent FastAPI microservices — each with its own
          data dependency — keeping the core order/payment path fast and
          isolated from ML workloads.
        </p>
      </div>

      {/* Request flow example */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-4">
          Example Flow: Semantic Search → Checkout
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          {flowExample.map((step, i) => (
            <React.Fragment key={i}>
              <span className="px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg bg-black/5 dark:bg-white/5 text-[#0f1f1f] dark:text-[#f5f7f7]">
                {step}
              </span>
              {i < flowExample.length - 1 && (
                <ArrowRight className="w-4 h-4 text-[#0891b2] dark:text-[#22d3ee] flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="text-sm text-[#4b5f5f] dark:text-[#9db3b3] mt-4 leading-relaxed">
          Stock is only ever committed after a successful payment callback — a
          failed or expired checkout releases the Redis lock automatically. Chat
          and search requests are routed independently, so a slow AI response
          never blocks core order processing.
        </p>
      </div>

      {/* Challenges */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-6">
          Challenges Solved
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {challenges.map((c, i) => (
            <div
              key={i}
              className="rounded-lg border border-black/5 dark:border-white/5 p-4 bg-black/[0.03] dark:bg-white/[0.03]"
            >
              <div className="text-sm font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-1">
                {c.title}
              </div>
              <div className="text-sm text-[#4b5f5f] dark:text-[#9db3b3]">
                {c.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outcomes */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-6">
          Delivered Outcomes
        </h3>
        <ul className="space-y-4">
          {outcomes.map((o, i) => (
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

export default KanishkaFashion;
