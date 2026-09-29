import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#eef6f6] dark:bg-[#0a1414] py-12 px-6 border-t border-black/5 dark:border-white/5 z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start max-w-[280px] text-center md:text-left">
          <h3 className="text-xl font-extrabold text-[#0f1f1f] dark:text-[#f5f7f7] mb-3 tracking-tight">
            Dhruv Boghani
          </h3>
          <p className="text-sm text-[#4b5f5f] dark:text-[#9db3b3] font-medium leading-relaxed">
            Designing, engineering, and learning — one useful system at a time.
          </p>
        </div>

        {/* Center - Socials */}
        <div className="flex items-center gap-3 md:mt-2">
          <a
            href="mailto:dhruvboghani624@gmail.com"
            className="w-11 h-11 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-[#4b5f5f] dark:text-[#9db3b3] hover:text-[#0f1f1f] dark:hover:text-[#f5f7f7] hover:border-black/30 dark:hover:border-white/30 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            aria-label="Email"
          >
            <Mail size={18} strokeWidth={2} />
          </a>
          <a
            href="https://linkedin.com/in/dhruv-boghani"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-[#4b5f5f] dark:text-[#9db3b3] hover:text-[#0f1f1f] dark:hover:text-[#f5f7f7] hover:border-black/30 dark:hover:border-white/30 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} strokeWidth={2} />
          </a>
          <a
            href="https://github.com/Dhruv-Boghani"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-[#4b5f5f] dark:text-[#9db3b3] hover:text-[#0f1f1f] dark:hover:text-[#f5f7f7] hover:border-black/30 dark:hover:border-white/30 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            aria-label="GitHub"
          >
            <FaGithub size={18} strokeWidth={2} />
          </a>
          <a
            href="https://wa.me/919408564882?text=Hi%20Dhruv,%20let's%20build%20something!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-[#4b5f5f] dark:text-[#9db3b3] hover:text-[#0f1f1f] dark:hover:text-[#f5f7f7] hover:border-black/30 dark:hover:border-white/30 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={18} strokeWidth={2} />
          </a>
          <a
            href="https://x.com/Dhruv_Boghani"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-[#4b5f5f] dark:text-[#9db3b3] hover:text-[#0f1f1f] dark:hover:text-[#f5f7f7] hover:border-black/30 dark:hover:border-white/30 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            aria-label="XTwitter"
          >
            <FaXTwitter size={18} strokeWidth={2} />
          </a>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end gap-3 text-sm text-[#4b5f5f] dark:text-[#9db3b3] md:mt-2 font-medium">
          <p>© {new Date().getFullYear()} Dhruv Boghani</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-bold text-[#0f1f1f] dark:text-[#f5f7f7] hover:text-[#0891b2] dark:hover:text-[#22d3ee] transition-colors"
          >
            Back to top <ArrowUp size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
