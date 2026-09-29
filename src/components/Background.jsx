import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
  const [init, setInit] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 250,
          links: {
            opacity: 0.6,
            color: "#0891b2"
          },
        },
        push: {
          quantity: 3,
        },
      },
    },
    particles: {
      color: { value: ["#0891b2", "#22d3ee", "#14b8a6"] },
      links: {
        color: "#14b8a6",
        distance: 150,
        enable: true,
        opacity: 0.25,
        width: 1.5,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50,
      },
      opacity: {
        value: 0.5,
        animation: { enable: true, speed: 1, minimumValue: 0.1 }
      },
      shape: { type: "circle" },
      size: { 
        value: { min: 1, max: 3.5 },
        animation: { enable: true, speed: 2, minimumValue: 0.5 }
      },
    },
    detectRetina: true,
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#eef6f6] dark:bg-[#0a1414] transition-colors duration-500" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] [background-image:linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* Interactive tsparticles layer */}
      {init && (
        <div className="absolute inset-0 z-0 opacity-60 dark:opacity-100 transition-opacity duration-1000">
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="w-full h-full"
          />
        </div>
      )}

      {/* Interactive Glowing Orb following mouse */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-[#0891b2]/20 dark:bg-[#22d3ee]/10 blur-[150px] pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.6
        }}
      />

      {/* Top Left Static Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0891b2]/10 dark:bg-[#0891b2]/15 blur-[120px] pointer-events-none" />

      {/* Bottom Right Static Glow */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#14b8a6]/10 dark:bg-[#14b8a6]/15 blur-[120px] pointer-events-none" />
    </div>
  );
};

export default Background;
