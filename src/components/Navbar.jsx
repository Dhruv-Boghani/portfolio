import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context-provider/ThemeContextProvider";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center py-6 px-4">
      {/* Main Pill Container */}
      <div className="flex items-center justify-between w-full max-w-5xl bg-white/60 dark:bg-white/5 backdrop-blur-md px-4 py-3 rounded-full border border-black/10 dark:border-white/10 shadow-sm dark:shadow-lg transition-all duration-300">
        {/* Logo Section */}
        <Link to="/" onClick={handleLogoClick}>
          <div className="flex items-center gap-3 pl-2">
            <div className="flex items-center justify-center w-8 h-8 bg-[#0891b2] dark:bg-[#22d3ee] rounded-xl text-white dark:text-teal-950 font-bold text-lg transition-colors duration-300">
              D
            </div>
            <span className="text-[#0f1f1f] dark:text-[#f5f7f7] font-semibold text-lg tracking-wide transition-colors duration-300">
              Dhruv Boghani
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-sm text-[#4b5f5f] dark:text-[#9db3b3] font-medium ml-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-all duration-300 font-medium ${
                  isActive
                    ? "text-[#0d9488] dark:text-[#5eead4] font-bold drop-shadow-[0_0_12px_rgba(94,234,212,0.4)]"
                    : "text-slate-500 dark:text-slate-400 hover:text-[#0891b2] dark:hover:text-[#22d3ee]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1tSKWo2y9JUqHO2ewxHEwcp6dv7h49LDt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-2.5 text-sm font-semibold text-white dark:text-teal-950 bg-[#0891b2] hover:bg-[#06b6d4] dark:bg-[#22d3ee] dark:hover:bg-[#5eead4] rounded-xl transition-colors duration-300"
          >
            Resume
          </a>

          <button
            aria-label="Toggle Dark Mode"
            onClick={toggleTheme}
            className="p-2.5 bg-white/80 hover:bg-white dark:bg-[#0f1f1f] dark:hover:bg-gray-800 text-[#4b5f5f] hover:text-[#0891b2] dark:text-[#9db3b3] dark:hover:text-[#22d3ee] rounded-xl transition-colors duration-300 border border-black/10 dark:border-white/10 shadow-sm"
          >
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={2} />
            ) : (
              <Moon size={18} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
