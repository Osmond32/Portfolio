import React from 'react';
import mangaFoto from '../assets/cooking_code.png';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-6xl mx-auto px-8 py-24 border-t border-gray-800">

      {/* Intestazione della sezione */}
      <div className="mb-20">
        <h3 className="font-signature text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 bg-[length:200%_auto] animate-shine mb-2 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] transform pb-1 pr-2 w-fit">
          {t('about.title_sm')}
        </h3>
        <h2 className="text-4xl md:text-3xl font-bold text-white tracking-tight mt-6">
          {t('about.title')}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">

        {/* --- Colonna Sinistra: La TimeLine --- */}
        <div className="flex-1 flex flex-col">

          {/* Contenitore della linea temporale - Usiamo un bordo tratteggiato (dashed) per smarcarsi dal collega */}
          <div className="border-l-2 border-dashed border-gray-800 ml-2 mt-4 space-y-12">

            {/* Elemento 1 */}
            <div className="relative pl-10 group cursor-default">
              {/* Rametto orizzontale (stile cartella/git tree) */}
              <div className="absolute top-3 left-0 w-5 border-t-2 border-dashed border-gray-800 group-hover:border-yellow-500/50 transition-colors"></div>

              {/* Rombo luminoso (ruotato a 45 gradi) invece del classico pallino tondo */}
              <span className="absolute left-[1.1rem] top-[0.4rem] w-3 h-3 rotate-45 border border-yellow-500 bg-dark shadow-[0_0_10px_rgba(234,179,8,0.5)] group-hover:scale-125 group-hover:bg-yellow-500 transition-all"></span>

              <p className="text-yellow-500 font-mono text-xs tracking-widest uppercase mb-2">
                {t('about.timeline.edu_date')}
              </p>
              <h4 className="text-xl font-bold text-white mb-2">
                {t('about.timeline.edu_title')}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed text-justify">
                {t('about.timeline.edu_desc')}
              </p>
            </div>

            {/* Elemento 2 */}
            <div className="relative pl-10 group cursor-default">
              <div className="absolute top-3 left-0 w-5 border-t-2 border-dashed border-gray-800 group-hover:border-yellow-500/50 transition-colors"></div>

              <span className="absolute left-[1.1rem] top-[0.4rem] w-3 h-3 rotate-45 border border-yellow-500 bg-dark shadow-[0_0_10px_rgba(234,179,8,0.5)] group-hover:scale-125 group-hover:bg-yellow-500 transition-all"></span>

              <p className="text-yellow-500 font-mono text-xs tracking-widest uppercase mb-2">
                {t('about.timeline.work_date')}
              </p>
              <h4 className="text-xl font-bold text-white mb-2">
                {t('about.timeline.work_title')}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed text-justify">
                {t('about.timeline.work_desc')}
              </p>
            </div>

            {/* Elemento 3 (Attuale) */}
            <div className="relative pl-10 group cursor-default">
              <div className="absolute top-3 left-0 w-5 border-t-2 border-dashed border-gray-800 group-hover:border-primary/50 transition-colors"></div>

              {/* Rombo Ciano Lampeggiante ad alta intensità (Presente) */}
              <div className="absolute left-[1.1rem] top-[0.4rem] w-3 h-3 flex items-center justify-center group-hover:scale-125 transition-transform">
                {/* L'onda radar che spara verso l'esterno per catturare l'occhio */}
                <span className="absolute w-full h-full rotate-45 border border-primary bg-primary opacity-70 animate-ping group-hover:animate-none"></span>
                {/* Il nodo fisico centrale */}
                <span className="relative w-full h-full rotate-45 border border-primary bg-primary shadow-[0_0_15px_rgba(0,229,255,1)]"></span>
              </div>

              <p className="text-primary font-mono text-xs tracking-widest uppercase mb-2">
                {t('about.timeline.dev_date')}
              </p>
              <h4 className="text-xl font-bold text-white mb-2">
                {t('about.timeline.dev_title')}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed text-justify">
                {t('about.timeline.dev_desc')}
              </p>
            </div>

          </div>

        </div>

        {/* --- Colonna Destra: Immagine Padella generata dall'AI --- */}
        <div className="flex-1 w-full flex justify-center lg:justify-end items-center">

          <div className="relative w-full max-w-md rounded-2xl overflow-hidden group">

            {/* Effetto fumo luminoso per farla risaltare sullo sfondo nero */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-primary/40 blur-3xl group-hover:from-primary/50 transition-all duration-500"></div>

            {/* L'immagine della padella con codici e libri */}
            <img
              src={mangaFoto}
              alt={t('about.image_alt')}
              loading="lazy"
              className="relative z-10 w-full h-auto object-cover rounded-2xl border border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default AboutSection;
