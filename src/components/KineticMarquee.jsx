import React from 'react';

const phrases = [
  { text: "THINK IN SYSTEMS.", outline: false },
  { text: "SHIP WITH CARE.", outline: true },
  { text: "ENGINEER FOR SCALE.", outline: false },
  { text: "INTEGRATE INTELLIGENCE.", outline: true },
];

const KineticMarquee = () => {
  return (
    <section className="relative w-full py-5 md:py-10 overflow-hidden flex items-center border-y border-black/5 dark:border-white/5 bg-[#eef6f6] dark:bg-[#0a1414]">
      
      {/* Subtle Background glow strip to add depth between sections */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[100%] h-[30%] bg-[#0891b2] dark:bg-[#22d3ee] blur-[120px] opacity-[0.05] dark:opacity-[0.1]" />
      </div>

      {/* Marquee container */}
      <div 
        className="relative z-10 flex w-max items-center select-none"
        style={{ animation: 'marquee 50s linear infinite' }}
      >
        {/* We duplicate the phrases block multiple times for a seamless infinite scroll loop */}
        {Array(5).fill(0).map((_, i) => (
          <div key={i} className="flex items-center">
            {phrases.map((phrase, j) => (
              <span 
                key={j} 
                className={`text-5xl md:text-7xl lg:text-[6rem] font-extrabold uppercase whitespace-nowrap tracking-tighter mx-6 transition-colors duration-300 ${
                  phrase.outline 
                    ? "text-transparent [-webkit-text-stroke:2px_#0f1f1f] dark:[-webkit-text-stroke:2px_#4b5f5f]" 
                    : "text-[#0f1f1f] dark:text-[#f5f7f7]"
                }`}
              >
                {phrase.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KineticMarquee;
