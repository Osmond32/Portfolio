import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const terminalSequences = [
    { text: 'npm run start:developer', delay: 100 },
    { text: '> loading portfolios assets...', delay: 500 },
    { text: '> loading core modules [react, tailwind, vite]...', delay: 900 },
    { text: '> configuring multilingual content (i18n)...', delay: 1300 },
    { text: '> status: SUCCESS. Ready in 45ms.', delay: 1700 },
  ];

  useEffect(() => {
    // Sequentially print terminal logs
    const timers = terminalSequences.map((seq) => {
      return setTimeout(() => {
        setLines((prev) => [...prev, seq.text]);
      }, seq.delay);
    });

    // Show the glowing developer logo/tag
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 2000);

    // Start fade-out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3200);

    // Call onComplete callback when loader animation is done
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3700);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(logoTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-dark z-50 flex flex-col items-center justify-center font-mono text-sm px-4 select-none transition-opacity duration-500 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="max-w-md w-full border border-zinc-800 rounded-lg bg-black p-6 shadow-2xl relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center space-x-2 border-b border-zinc-900 pb-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-zinc-600 text-xs ml-2 select-none">terminal@developer:~</span>
        </div>

        {/* Terminal Logs */}
        <div className="space-y-2 min-h-[140px] flex flex-col justify-start">
          {lines.map((line, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-primary mr-2 select-none">$</span>
              <span className={line.startsWith('>') ? 'text-zinc-400' : 'text-zinc-200 font-bold'}>
                {line}
              </span>
            </div>
          ))}
        </div>

        {/* Glowing Developer Tag */}
        <div
          className={`mt-6 pt-4 border-t border-zinc-900 flex justify-center items-center transition-all duration-700 ease-out ${
            showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="relative group">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative px-6 py-3 bg-black border border-primary/20 rounded-lg text-primary text-xl font-bold tracking-widest flex items-center space-x-2">
              <span className="text-zinc-500">&lt;</span>
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                DEVELOPER
              </span>
              <span className="text-zinc-500">/&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
