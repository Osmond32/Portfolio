import fotoCV from '../assets/ImgCV.jpg';
import TechStack from '../Components/TechStack';
import AboutSection from '../Components/AboutSection';
import Skills from '../Components/Skills';
import ProjectsOverview from '../Components/ProjectsOverview';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    // Contenitore madre della pagina (senza flex-row così gli elementi vanno uno SOTTO l'altro)
    <div className="pt-32 px-8 max-w-6xl mx-auto flex flex-col min-h-[calc(100vh-80px)] text-light pb-24">
      
      {/* SEZIONE SUPERIORE: Divisa in 2 colonne su desktop (lg:flex-row) */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
        
        {/* --- COLONNA SINISTRA: Testi --- */}
        <div className="flex-1 flex flex-col items-start w-full">
          <p className="text-primary font-mono mb-4 text-2xl md:text-3xl font-semibold tracking-wide flex items-baseline gap-x-2 md:gap-x-3">
            <span className="whitespace-nowrap">{t('home.greeting')}</span>

            {/* La Firma! Ora perfettamente in linea */}
            <span className="font-signature text-white text-5xl md:text-6xl tracking-normal whitespace-nowrap">
              Giuseppe Saia
            </span>
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            {t('home.role_prefix')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 bg-[length:200%_auto] animate-shine drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] pb-1 pr-2">
              {t('home.role_suffix')}
            </span>
          </h1>

          <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
            {t('home.description')}
          </p>

          {/* --- Contenitore Disponibilità e Pulsante Contatto --- */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            
            {/* --- Indicatore Disponibilità (Badge Verde) --- */}
            <div className="flex items-center gap-4 bg-dark-surface/50 border border-gray-800/60 px-6 py-3 rounded-full w-fit shadow-sm">
              {/* Contenitore del pallino verde luminoso */}
              <div className="relative flex items-center justify-center w-4 h-4">
                {/* Animazione "radar" che pulsa dietro al pallino */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping"></span>
                {/* Il pallino solido centrale con l'ombra luminosa */}
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
              </div>
              <span className="text-gray-100 font-semibold text-base md:text-lg">
                {t('home.availability')}
              </span>
            </div>

            {/* --- Pulsante Contatti --- */}
            <Link 
              to="/contact" 
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary hover:text-dark hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-dark group-hover:scale-110 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>{t('footer.pages.contact')}</span>
            </Link>
            
          </div>

          {/* --- Lingue Parlate (Forzate sulla stessa riga) --- */}
          <div className="mt-6 flex flex-nowrap items-center gap-4 sm:gap-6 whitespace-nowrap overflow-x-auto pb-2 sm:pb-0">
             <div className="flex items-center gap-2">
               <div className="w-1 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] shrink-0"></div>
               <span className="text-gray-200 font-medium tracking-wide">
                 {t('home.languages.it.name')} <span className="text-gray-500 font-normal ml-0.5">{t('home.languages.it.level')}</span>
               </span>
             </div>
             
             <div className="flex items-center gap-2">
               <div className="w-1 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] shrink-0"></div>
               <span className="text-gray-200 font-medium tracking-wide">
                 {t('home.languages.fr.name')} <span className="text-gray-500 font-normal ml-0.5">{t('home.languages.fr.level')}</span>
               </span>
             </div>

             <div className="flex items-center gap-2">
               <div className="w-1 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] shrink-0"></div>
               <span className="text-gray-200 font-medium tracking-wide">
                 {t('home.languages.en.name')} <span className="text-gray-500 font-normal ml-0.5">{t('home.languages.en.level')}</span>
               </span>
             </div>
          </div>
          
          {/* --- Fine Indicatore --- */}

        </div>


        {/* --- COLONNA DESTRA: Foto Profilo Ferma --- */}
        <div className="flex-1 flex justify-center lg:justify-end w-full lg:translate-x-8">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">

            {/* Effetto glow (bagliore) dietro la foto */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>

            {/* Bordo della foto (cerchio con ombra luminosa) */}
            <div className="relative w-full h-full rounded-full border-4 border-primary p-2 overflow-hidden bg-dark-surface shadow-[0_0_30px_rgba(0,229,255,0.2)]">

              {/* L'immagine vera e propria: cambia il parametro 'src' in futuro! */}
              <img
                src={fotoCV}
                alt="Giuseppe Saia"
                className="w-full h-full object-cover object-[50%_20%] rounded-full"
              />

            </div>

          </div>

        </div>

      </div> {/* <-- CHIUSURA SEZIONE A DUE COLONNE */}

      {/* ECCO LA STRISCIA PUBBLICITARIA INFINITA! */}
      {/* Essendo fuori dal gruppo precedente, finirà perfettamente sotto e attraverserà lo schermo */}
      <TechStack />

      <AboutSection />

      <Skills />

      {/* Sezione Riassunto Progetti con contatore animato */}
      <ProjectsOverview />

    </div>

  );
};

export default HomePage;
