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

        {/* --- Colonna Sinistra: Testo --- */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-gray-400 text-lg leading-relaxed text-justify mb-6">
            {t('about.paragraph')}
          </p>
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
              width="448"
              height="448"
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
