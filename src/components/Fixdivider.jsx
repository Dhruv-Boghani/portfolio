import React from 'react';

const Fixdivider = () => {
  return (
    <section 
      aria-hidden="true" 
      className="flex items-center justify-center h-36 md:h-52 overflow-hidden border-y border-black/5 dark:border-white/5 bg-[#eef6f6]/50 dark:bg-[#0a1414]/50 transition-colors duration-300"
    >
      <div 
        className="w-max whitespace-nowrap font-extrabold leading-none tracking-tighter text-[#0f1f1f] dark:text-[#f5f7f7] opacity-90"
        style={{ fontSize: 'clamp(54px, 8vw, 118px)' }}
      >
        BUILD WITH INTENT{' '}
        <span className="text-transparent [-webkit-text-stroke:1.5px_#14b8a6] dark:[-webkit-text-stroke:1.5px_#5eead4]">
          THINK IN SYSTEMS
        </span>{' '}
        SHIP WITH CARE
      </div>
    </section>
  );
};

export default Fixdivider;