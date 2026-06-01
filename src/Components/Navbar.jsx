import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cvFile from '../assets/CV_Giuseppe_Saia.pdf';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isCvPage = location.pathname === '/cv';

  const handleCvClick = () => {
    if (isCvPage) {
      const link = document.createElement('a');
      link.href = cvFile;
      link.setAttribute('download', 'CV_Giuseppe_Saia.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      navigate('/cv');
    }
  };

  return (
    <>
      {/* ======================================================== */}
      {/* 1. TOP HEADER (Sempre visibile in alto su tutti i dispositivi) */}
      {/* ======================================================== */}
      <header className="fixed top-0 left-0 w-full h-16 sm:h-20 bg-dark/80 backdrop-blur-md border-b border-gray-800/50 flex items-center justify-between px-4 sm:px-6 md:px-12 z-40">
        
        {/* LOGO SINISTRA */}
        <NavLink 
          to="/" 
          className="relative group flex items-center gap-1.5 sm:gap-2"
        >
          <span className="font-signature text-xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 bg-[length:200%_auto] animate-shine drop-shadow-[0_0_10px_rgba(0,229,255,0.2)]">
            Giuseppe Saia
          </span>
        </NavLink>

        {/* 2. MENU CENTRALE (Visibile solo su DESKTOP/TABLET) */}
        <nav className="hidden md:flex items-center md:absolute md:left-1/2 md:-translate-x-1/2 gap-12">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `relative py-2 font-medium tracking-wide transition-all duration-300 ${
                isActive 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:shadow-[0_0_10px_#00e5ff] after:rounded-full' 
                  : 'text-gray-400 hover:text-white hover:-translate-y-[1px]'
              }`
            }
          >
            {t('sidebar.home')}
          </NavLink>
          
          <NavLink 
            to="/projects" 
            className={({isActive}) => 
              `relative py-2 font-medium tracking-wide transition-all duration-300 ${
                isActive 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:shadow-[0_0_10px_#00e5ff] after:rounded-full' 
                  : 'text-gray-400 hover:text-white hover:-translate-y-[1px]'
              }`
            }
          >
            {t('sidebar.projects')}
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `relative py-2 font-medium tracking-wide transition-all duration-300 ${
                isActive 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:shadow-[0_0_10px_#00e5ff] after:rounded-full' 
                  : 'text-gray-400 hover:text-white hover:-translate-y-[1px]'
              }`
            }
          >
            {t('sidebar.contact')}
          </NavLink>
        </nav>

        {/* 3. AZIONI DESTRA (Flags + CV Button) */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-6">
          
          {/* Bandierine Selezione Lingua (Compatte e Premium) */}
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-3 bg-white/5 border border-gray-800/80 p-0.5 sm:p-1 md:p-1.5 px-1.5 sm:px-2 md:px-3.5 rounded-full shadow-inner shrink-0">
            {/* Bandiera Italiana */}
            <button 
              onClick={() => i18n.changeLanguage('it')}
              className={`transition-all duration-300 cursor-pointer flex items-center justify-center ${
                i18n.language === 'it' ? 'scale-125 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] z-10' : 'opacity-60 hover:opacity-100 hover:scale-110'
              }`}
              title="Italiano"
              aria-label="Italiano"
            >
              <img src="https://flagcdn.com/w40/it.png" alt="IT" className="w-[18px] h-[12px] sm:w-[20px] sm:h-[14px] md:w-6 md:h-4 object-cover rounded-[2px]" />
            </button>
            
            <div className="w-[1px] h-3 sm:h-3.5 bg-gray-700/80"></div>

            {/* Bandiera Inglese */}
            <button 
              onClick={() => i18n.changeLanguage('en')}
              className={`transition-all duration-300 cursor-pointer flex items-center justify-center ${
                i18n.language === 'en' ? 'scale-125 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] z-10' : 'opacity-60 hover:opacity-100 hover:scale-110'
              }`}
              title="English"
              aria-label="English"
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-[18px] h-[12px] sm:w-[20px] sm:h-[14px] md:w-6 md:h-4 object-cover rounded-[2px]" />
            </button>
            
            <div className="w-[1px] h-3 sm:h-3.5 bg-gray-700/80"></div>

            {/* Bandiera Francese */}
            <button 
              onClick={() => i18n.changeLanguage('fr')}
              className={`transition-all duration-300 cursor-pointer flex items-center justify-center ${
                i18n.language === 'fr' ? 'scale-125 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] z-10' : 'opacity-60 hover:opacity-100 hover:scale-110'
              }`}
              title="Français"
              aria-label="Français"
            >
              <img src="https://flagcdn.com/w40/fr.png" alt="FR" className="w-[18px] h-[12px] sm:w-[20px] sm:h-[14px] md:w-6 md:h-4 object-cover rounded-[2px]" />
            </button>
          </div>

          {/* Pulsante CV */}
          <button 
            onClick={handleCvClick}
            className="bg-primary/10 text-primary border border-primary px-2.5 py-1 sm:px-3.5 sm:py-1.5 md:px-5 md:py-2 text-[10px] sm:text-xs md:text-sm whitespace-nowrap rounded-full font-semibold hover:bg-primary hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.15)] hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] cursor-pointer"
          >
            {isCvPage ? t('header.downloadCV') : t('header.viewCV')}
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 4. FLOATING MOBILE NAV (Visibile SOLO su MOBILE in basso) */}
      {/* ======================================================== */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800/80 py-2.5 px-6 sm:py-3.5 sm:px-8 rounded-full flex items-center gap-6 sm:gap-10 z-50 shadow-[0_15px_35px_rgba(0,0,0,0.6)] shadow-black/80 max-w-[95vw] w-fit">
        
        {/* LINK HOME */}
        <NavLink 
          to="/" 
          className={({isActive}) => 
            `flex flex-col items-center justify-center transition-all duration-300 ${
              isActive ? 'text-primary scale-110' : 'text-gray-400 hover:text-white'
            }`
          }
          aria-label={t('sidebar.home')}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider">{t('sidebar.home')}</span>
        </NavLink>
        
        {/* LINK PROGETTI */}
        <NavLink 
          to="/projects" 
          className={({isActive}) => 
            `flex flex-col items-center justify-center transition-all duration-300 ${
              isActive ? 'text-primary scale-110' : 'text-gray-400 hover:text-white'
            }`
          }
          aria-label={t('sidebar.projects')}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider">{t('sidebar.projects')}</span>
        </NavLink>

        {/* LINK CONTATTI */}
        <NavLink 
          to="/contact" 
          className={({isActive}) => 
            `flex flex-col items-center justify-center transition-all duration-300 ${
              isActive ? 'text-primary scale-110' : 'text-gray-400 hover:text-white'
            }`
          }
          aria-label={t('sidebar.contact')}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider">{t('sidebar.contact')}</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
