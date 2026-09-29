import React from "react";
import { CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const BillingStockSystem = () => {
  const links = {
    live: "https://shop-manager-t98e.onrender.com",
    github: "https://github.com/Dhruv-Boghani/shop-manager.git",
  };

  const features = [
    "Unique QR/Barcode generation for every product, with a scan-to-bill workflow that builds an invoice directly from a scanned code.",
    "Auto-generated, downloadable PDF invoices for every billed transaction.",
    "Role-based access control across four roles — Admin, Manager, Seller, and User — each with a distinct permission scope.",
    "Manages 15+ shop locations from a single unified dashboard, rather than a separate system per store.",
    "Real-time stock tracking synced across shops as products are billed and inventory changes.",
    "Restricted data visibility by role, so sellers and users only see what's relevant to their scope.",
    "Optional WhatsApp bill delivery built in via Baileys — currently disabled at the client's request, ready to re-enable.",
    "Built and deployed for a real client (Kanishka Fashion), currently stable in production use.",
  ];

  const roles = [
    {
      role: "Admin",
      permissions:
        "Full access — user, shop, and product management, analytics, and reports",
    },
    {
      role: "Manager",
      permissions: "Manages assigned shop(s), products, and billing",
    },
    {
      role: "Seller",
      permissions: "Scans products, creates bills, limited stock view",
    },
    { role: "User", permissions: "Views personal billing history and profile" },
  ];

  const flow = [
    "Scan QR/Barcode",
    "Product Lookup",
    "Add to Bill",
    "Stock Auto-Updated",
    "Generate PDF Invoice",
    "(Optional) WhatsApp Delivery",
  ];

  const techStack = {
    Backend: ["Node.js", "Express.js", "MongoDB (Mongoose)"],
    Frontend: ["EJS", "HTML5", "CSS"],
    "Auth & Security": ["JWT", "bcrypt", "express-validator"],
    "QR & Barcode": ["qrcode", "bwip-js", "qrcode-terminal"],
    "PDF & Files": ["pdf-lib", "pdfkit", "archiver"],
    "Messaging & Email": ["Baileys (WhatsApp, disabled)", "nodemailer"],
    Other: ["node-cron", "dotenv", "axios"],
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4 pr-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1f1f] dark:text-[#f5f7f7] tracking-tight mb-2">
              Advanced Billing & Stock Management System
            </h2>
            <p className="text-sm md:text-base text-[#0891b2] dark:text-[#22d3ee] font-mono tracking-widest font-bold">
              MULTI-SHOP • QR/BARCODE BILLING
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
        A full-stack billing and inventory system built for Kanishka Fashion to
        run multi-shop retail operations from one dashboard. Every product gets
        a unique QR/barcode for scan-to-bill checkout, invoices generate as
        downloadable PDFs automatically, and role-based access keeps admins,
        managers, sellers, and users each scoped to exactly what they need.
        Currently live and stable in production across 15+ shop locations.
      </p>

      {/* Stat strip */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {[
          { value: "15+", label: "Shop Locations" },
          { value: "4", label: "Role Tiers" },
          { value: "1", label: "Unified Dashboard" },
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

      {/* Billing flow */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-4">
          Scan-to-Bill Flow
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
      </div>

      {/* Roles table */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0f1f1f] dark:text-[#f5f7f7] mb-6">
          Roles & Permissions
        </h3>
        <div className="flex flex-col gap-3">
          {roles.map((r, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 rounded-lg border border-black/5 dark:border-white/5 p-4 bg-black/[0.03] dark:bg-white/[0.03]"
            >
              <div className="text-sm font-bold text-[#0891b2] dark:text-[#22d3ee] sm:w-24 flex-shrink-0">
                {r.role}
              </div>
              <div className="text-sm text-[#4b5f5f] dark:text-[#9db3b3]">
                {r.permissions}
              </div>
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

export default BillingStockSystem;
