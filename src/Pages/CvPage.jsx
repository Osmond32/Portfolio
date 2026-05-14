import React from 'react';
import { useTranslation } from 'react-i18next';
// Assicurati che il nome del file 'CV_Giuseppe_Saia.pdf' sia corretto e che si trovi nella cartella 'src/assets'
import cvFile from '../assets/CV_Giuseppe_Saia.pdf';

const CvPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 px-4 sm:px-8 max-w-6xl mx-auto min-h-[calc(100vh-80px)] text-light pb-24">
      
      {/* --- Intestazione della Pagina --- */}
      <div className="mb-12 text-center md:text-left">
        <h3 className="font-signature text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 animate-shine mb-2 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] pb-1 pr-2 w-fit mx-auto md:mx-0">
          {t('cv_page.title_sm')}
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-4">
          {t('cv_page.title')}
        </h1>
        <p className="text-gray-400 max-w-3xl text-lg mt-6 leading-relaxed mx-auto md:mx-0">
          {t('cv_page.description')}
        </p>
      </div>

      {/* --- Contenitore del PDF --- */}
      <div className="w-full h-[80vh] bg-dark-surface rounded-lg border border-gray-800 shadow-2xl overflow-hidden">
        <iframe
          src={cvFile}
          title={t('cv_page.iframe_title')}
          width="100%"
          height="100%"
          className="border-none"
        />
      </div>
    </div>
  );
};

export default CvPage;