import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    // Il contenitore principale che mantiene le distanze identiche al resto della pagina
    <div className="w-full max-w-6xl mx-auto px-8 py-24">

      {/* --- 1. SEZIONE INTESTAZIONE (Titoli) --- */}
      <div className="mb-16">
        {/* Sottotitolo "COMPETENZE" con font a mano (Signature) e sfumatura luminosa */}
        <h3 className="font-signature text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 bg-[length:200%_auto] animate-shine mb-2 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] transform pb-1 pr-2 w-fit">
          {t('skills.title')}
        </h3>

      </div>

      {/* --- 2. AREA DELLA GRIGLIA "BENTO" --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[
          {
            id: "frontend",
            icon: "🌐",
            accentColor: "#38BDF8", // Ciano/Sky associato al front
            tech: [
              { name: "JavaScript", color: "#FDE047" },
              { name: "React", color: "#67E8F9" },
              { name: "HTML5", color: "#FB923C" },
              { name: "CSS3", color: "#38BDF8" }
            ]
          },
          {
            id: "uiux",
            icon: "🎨",
            accentColor: "#C084FC", // Viola sfumato per il CSS/Styling
            tech: [
              { name: "Tailwind CSS", color: "#22D3EE" },
              { name: "Material UI", color: "#007FFF" },
              { name: "Mantine", color: "#339AF0" },
              { name: "Bootstrap", color: "#C084FC" },
              { name: "Figma", color: "#FB7185" }
            ]
          },
          {
            id: "backend",
            icon: "⚙️",
            accentColor: "#4ADE80", // Verde associato a Node
            tech: [
              { name: "Node.js", color: "#4ADE80" },
              { name: "Express", color: "#E5E7EB" },
              { name : "API RESTful", color: "#E5E7EB"}
            ]
          },
          {
            id: "database",
            icon: "🗄️",
            accentColor: "#60A5FA", // Blu classico Database MySQL
            tech: [
              { name: "MySQL", color: "#60A5FA" }
            ]
          },
          {
            id: "ai",
            icon: "🤖",
            accentColor: "#34D399", // Smeraldo/Ciano associato all'intelligenza artificiale
            tech: [
              { name: "ChatGPT", color: "#34D399" },
              { name: "Claude", color: "#FDBA74" },
              { name: "Gemini", color: "#C084FC" },
              { name: "Antigravity", color: "#22D3EE" }
            ]
          },
          {
            id: "tools",
            icon: "🔀",
            accentColor: "#FB7185", // Rosa rosso di figma e git
            tech: [
              { name: "Git", color: "#F87171" },
              { name: "GitHub", color: "#F3F4F6" },
              { name: "Postman", color: "#71e8f8ff" },
              { name: "Docker", color: "#ac71f8ff" },
              { name: "Vercel", color: "#d4f871ff" },
              { name: "Railway", color: "#71f883ff"},
              { name: "Jira", color: "#f88571ff"}
            ]
          }
        ].map((domain, index) => (
          
          <div 
            key={index} 
            className="group relative bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-7 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.7)] hover:border-gray-700 overflow-hidden"
          >
            {/* Linea Magica Superiore (Gradient Sweep) */}
            <div 
               className="absolute top-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{ background: `linear-gradient(90deg, transparent, ${domain.accentColor}, transparent)` }}
            ></div>

            {/* Bagliore (Glow) sotterraneo dinamico ultra-morbido */}
            <div 
              className="absolute -inset-4 opacity-0 group-hover:opacity-[0.20] transition-all duration-700 blur-[40px] pointer-events-none group-hover:scale-110" 
              style={{ backgroundColor: domain.accentColor }}
            ></div>
            
            {/* Intestazione: Icona Animata e Titolo */}
            <div className="relative z-10 flex items-center gap-4 mb-5">
              <div className="w-12 h-12 flex justify-center items-center rounded-xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                <span className="text-2xl filter drop-shadow-md">{domain.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-white tracking-wide transition-colors group-hover:text-gray-100">
                {t(`skills.cards.${domain.id}.title`)}
              </h4>
            </div>

            {/* Micro Descrizione */}
            <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-8 min-h-[45px] group-hover:text-gray-300 transition-colors">
              {t(`skills.cards.${domain.id}.desc`)}
            </p>

            {/* Contenitore dei Tag/Linguaggi Animato */}
            <div className="relative z-10 flex flex-wrap gap-2.5">
              {domain.tech.map((t) => (
                <span 
                  key={t.name}
                  className="px-3 py-1.5 border text-xs font-mono font-semibold rounded-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default"
                  style={{
                    color: t.color,
                    borderColor: `${t.color}40`, 
                    backgroundColor: `${t.color}15`,
                    boxShadow: `0 2px 10px ${t.color}00`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 15px ${t.color}50`;
                    e.currentTarget.style.backgroundColor = `${t.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 2px 10px ${t.color}00`;
                    e.currentTarget.style.backgroundColor = `${t.color}15`;
                  }}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
          
        ))}
      </div>

    </div>
  );
};

export default Skills;
