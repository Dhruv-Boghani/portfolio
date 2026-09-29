import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import ProjectsPage from "./page/ProjectsPage";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Skills from "./page/Skills";
import ContactPage from "./page/ContactPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="relative min-h-screen font-sans selection:bg-[#0891b2]/30 dark:selection:bg-[#22d3ee]/30 transition-colors duration-300">
        <Navbar />
        <Background />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      {/* typogtaphy */}
    </BrowserRouter>
  );
};

export default App;
