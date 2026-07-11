import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Elegant progression of loading percentage
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for a natural loading feel
        const increment = Math.floor(Math.random() * 12) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small pause at 100% for satisfying completion feel, then fade out
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 500);

      const completeTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-dark z-50 flex flex-col items-center justify-center select-none transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="flex flex-col items-center max-w-sm w-full px-6 z-10">
        {/* Elegant Logo / Monogram */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Outer glowing ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-500 opacity-20 blur-xl animate-spin" style={{ animationDuration: '8s' }}></div>
          
          <div className="w-24 h-24 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center shadow-2xl relative">
            <span className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              &lt;GS/&gt;
            </span>
          </div>
        </div>

        {/* Name and Role */}
        <h2 className="text-2xl font-bold text-white tracking-wider mb-1 text-center font-sans">
          Giuseppe Saia
        </h2>
        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-10 text-center font-sans font-medium">
          Web Developer Portfolio
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-zinc-900/60 h-[3px] rounded-full overflow-hidden border border-zinc-900 relative">
          <div
            className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_#00E5FF]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage Counter */}
        <div className="mt-4 text-xs font-mono text-zinc-400 tracking-widest">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loader;
