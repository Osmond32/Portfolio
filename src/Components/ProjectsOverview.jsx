import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Sotto-componente per le singole card con l'animazione dei numeri
const StatCard = ({ title, value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          // Calcola la velocità in modo che tutte contino fluidamente in base al valore finale
          const stepTime = Math.max(1500 / value, 30); 
          
          const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            }
          }, stepTime);
          
          // Disconnette l'osservatore: l'animazione avviene solo la prima volta
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Parte quando almeno il 50% della card è visibile
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div 
      ref={ref} 
      className="group flex flex-col items-center justify-center p-10 bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(0,229,255,0.2)] hover:border-primary/50 relative overflow-hidden"
    >
      {/* Effetto bagliore (glow) allo scorrimento del mouse */}
      <div className="absolute -inset-4 opacity-0 group-hover:opacity-20 transition-all duration-700 blur-[30px] bg-primary pointer-events-none"></div>
      
      <div className="relative z-10 flex items-baseline gap-1">
        <span className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
          {count}
        </span>
        <span className="text-3xl font-bold text-primary">{suffix}</span>
      </div>
      
      <div className="relative z-10 mt-4 text-gray-400 font-medium tracking-wider uppercase text-sm group-hover:text-gray-200 transition-colors text-center">
        {title}
      </div>
    </div>
  );
};

const ProjectsOverview = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-6xl mx-auto px-8 py-24 border-t border-gray-800 flex flex-col items-center">
      
      {/* Intestazione della sezione */}
      <div className="mb-16 flex flex-col items-start text-start w-full">
        <h3 className="font-signature text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 bg-[length:200%_auto] animate-shine mb-2 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] transform pb-1 pr-2 w-fit">
          {t('projects_overview.title')}
        </h3>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
        <StatCard title={t('projects_overview.stats.projects')} value={4} />
        <StatCard title={t('projects_overview.stats.experience')} value={8} />
        <StatCard title={t('projects_overview.stats.techs')} value={10} suffix="+" />
      </div>

      {/* Pulsante che dirotta alla pagina dei progetti */}
      <Link 
        to="/projects" 
        className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-red-500/10 border border-red-500 rounded-xl overflow-hidden hover:bg-red-500 hover:text-white shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] animate-pulse hover:animate-none"
      >
        <span className="relative z-10 flex items-center gap-3 text-lg">
          {t('projects_overview.button')}
        </span>
      </Link>
    </div>
  );
};

export default ProjectsOverview;