import React from 'react';
import { Sparkles } from 'lucide-react';

const skills = [
  "NODE.JS", "EXPRESS.JS", "FASTAPI", "PYTHON", "REACT", "NEXT.JS", 
  "TYPESCRIPT", "POSTGRESQL", "MONGODB", "REDIS", "PINECONE", 
  "LANGCHAIN", "HUGGING FACE", "DOCKER", "VERCEL", "GIT", "GITHUB",
  "RESEND", "SQLITE", "PRISMA ORM", "RENDER"
];

const SkillsMarquee = () => {
  return (
    <div className="w-full bg-black/5 dark:bg-black/20 py-5 border-y border-black/10 dark:border-white/10 overflow-hidden flex whitespace-nowrap">
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {/* Duplicate the list multiple times to ensure a seamless infinite loop */}
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex items-center mx-8 gap-8">
            <div className="flex items-center">
              {/* <Sparkles size={16} className="text-[#14b8a6] dark:text-[#5eead4]" strokeWidth={2.5} /> */}
              <span className="text-[#0891b2] dark:text-[#22d3ee] text-[13px] font-bold tracking-[0.2em] uppercase">
                {skill}
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#0891b2] dark:bg-[#22d3ee] mx-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
