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
    <div className="pt-32 px-8 max-w-6xl mx-auto flex flex-col min-h-[calc(100vh-80px)] text-light pb-24">
      
      {/* SEZIONE SUPERIORE: Divisa in 2 colonne su desktop */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
        
        {/* --- COLONNA SINISTRA: Testi con animazioni a cascata --- */}
        <div className="flex-1 flex flex-col items-start w-full">

          {/* 1. Saluto — entra per primo */}
          <p className="text-primary font-mono mb-4 text-2xl md:text-3xl font-semibold tracking-wide flex flex-col md:flex-row items-start md:items-baseline gap-y-1 md:gap-x-3 animate-fadeInUp">
            <span className="whitespace-nowrap">{t('home.greeting')}</span>
            <span className="font-signature text-white text-5xl md:text-6xl tracking-normal whitespace-nowrap">
              Giuseppe Saia
            </span>
          </p>

          {/* 2. Titolo principale — entra subito dopo */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight animate-fadeInUp-d1">
            {t('home.role_prefix')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 bg-[length:200%_auto] animate-shine drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] pb-1 pr-2">
              {t('home.role_suffix')}
            </span>
          </h1>

          {/* 3. Tagline — senza animate-pulse */}
          <p className="text-primary font-mono mb-8 text-lg md:text-xl font-semibold border-l-4 border-primary pl-4 animate-fadeInUp-d2">
            {t('home.tagline')}
          </p>

          {/* 4. Descrizione */}
          <p className="text-gray-400 max-w-lg text-lg leading-relaxed animate-fadeInUp-d2">
            {t('home.description')}
          </p>

          {/* 5. Disponibilità e CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fadeInUp-d3">
            
            {/* Badge Disponibilità */}
            <div className="flex items-center gap-4 bg-dark-surface/50 border border-gray-800/60 px-6 py-3 rounded-full w-fit shadow-sm">
              <div className="relative flex items-center justify-center w-4 h-4">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
              </div>
              <span className="text-gray-100 font-semibold text-base md:text-lg">
                {t('home.availability')}
              </span>
            </div>

            {/* Pulsante CTA Email */}
            <a 
              href="mailto:saia.giuseppe@live.it"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary hover:text-dark hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-dark group-hover:scale-110 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>{t('home.cta_hero')}</span>
            </a>
            
            {/* Pulsante Telefono */}
            <a 
              href="tel:0652213223"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary hover:text-dark hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-dark group-hover:scale-110 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>0652213223</span>
            </a>

          </div>

          {/* 6. Link Social (GitHub + LinkedIn) */}
          <div className="mt-6 flex items-center gap-4 animate-fadeInUp-d4">
            <a 
              href="https://github.com/Osmond32"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
              title="GitHub"
              aria-label="GitHub"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-gray-700 group-hover:border-gray-400 group-hover:bg-white/10 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/giuseppe-saia-0790b664"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-gray-700 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          {/* 7. Lingue Parlate */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 animate-fadeInUp-d4">
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

        </div>

        {/* --- COLONNA DESTRA: Foto Profilo con animazione d'entrata --- */}
        <div className="flex-1 flex justify-center lg:justify-end w-full lg:translate-x-8 animate-fadeIn">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">

            {/* Effetto glow dietro la foto */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>

            {/* Bordo della foto */}
            <div className="relative w-full h-full rounded-full border-4 border-primary p-2 overflow-hidden bg-dark-surface shadow-[0_0_30px_rgba(0,229,255,0.2)]">
              <img
                src={fotoCV}
                alt="Giuseppe Saia"
                width="384"
                height="384"
                fetchpriority="high"
                className="w-full h-full object-cover object-[50%_20%] rounded-full"
              />
            </div>

          </div>
        </div>

      </div>

      {/* Striscia Tech */}
      <TechStack />

      {/* Sezione About */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Sezione Skills / Servizi */}
      <Skills />

      {/* Sezione Riassunto Progetti */}
      <ProjectsOverview />

      {/* ===== CTA FINALE ===== */}
      <div className="w-full border-t border-gray-800 pt-24 flex flex-col items-center text-center">
        <h3 className="font-signature text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 bg-[length:200%_auto] animate-shine mb-2 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] pb-1 pr-2 w-fit">
          {t('contact_page.title_sm')}
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-4 mb-6">
          {t('contact_page.title')}
        </h2>
        <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-10">
          {t('contact_page.description')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:saia.giuseppe@live.it"
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-dark font-bold text-lg hover:bg-[#00c8e6] shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] transition-all duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            saia.giuseppe@live.it
          </a>
          <Link
            to="/projects"
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-transparent text-primary font-bold text-lg border border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            {t('projects_overview.button')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
