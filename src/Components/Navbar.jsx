import { useState } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cvFile from '../assets/CV_Giuseppe_Saia.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isCvPage = location.pathname === '/cv';

  const handleCvClick = () => {
    setIsOpen(false);
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
      <header className="fixed top-0 left-0 w-full h-16 sm:h-20 bg-dark/80 backdrop-blur-md border-b border-gray-800/50 flex items-center justify-between px-6 md:px-12 z-50">
        
        {/* LOGO SINISTRA */}
        <NavLink 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="relative group flex items-center gap-2 z-50"
        >
          <span className="font-signature text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 bg-[length:200%_auto] animate-shine drop-shadow-[0_0_10px_rgba(0,229,255,0.2)]">
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

        {/* 3. AZIONI DESTRA (Flags + CV Button) - Visibili solo su Desktop/Tablet */}
        <div className="hidden md:flex items-center gap-3 md:gap-6">
          
          {/* Bandierine Selezione Lingua (Compatte e Premium) */}
          <div className="flex items-center gap-1.5 md:gap-3 bg-white/5 border border-gray-800/80 p-1 md:p-1.5 px-2 md:px-3.5 rounded-full shadow-inner shrink-0">
            {/* Bandiera Italiana */}
            <button 
              onClick={() => i18n.changeLanguage('it')}
              className={`transition-all duration-300 cursor-pointer flex items-center justify-center ${
                i18n.language === 'it' ? 'scale-125 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] z-10' : 'opacity-60 hover:opacity-100 hover:scale-110'
              }`}
              title="Italiano"
              aria-label="Italiano"
            >
              <img src="https://flagcdn.com/w40/it.png" alt="IT" className="w-5 h-3.5 md:w-6 md:h-4 object-cover rounded-[2px]" />
            </button>
            
            <div className="w-[1px] h-3.5 bg-gray-700/80"></div>

            {/* Bandiera Inglese */}
            <button 
              onClick={() => i18n.changeLanguage('en')}
              className={`transition-all duration-300 cursor-pointer flex items-center justify-center ${
                i18n.language === 'en' ? 'scale-125 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] z-10' : 'opacity-60 hover:opacity-100 hover:scale-110'
              }`}
              title="English"
              aria-label="English"
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-5 h-3.5 md:w-6 md:h-4 object-cover rounded-[2px]" />
            </button>
            
            <div className="w-[1px] h-3.5 bg-gray-700/80"></div>

            {/* Bandiera Francese */}
            <button 
              onClick={() => i18n.changeLanguage('fr')}
              className={`transition-all duration-300 cursor-pointer flex items-center justify-center ${
                i18n.language === 'fr' ? 'scale-125 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] z-10' : 'opacity-60 hover:opacity-100 hover:scale-110'
              }`}
              title="Français"
              aria-label="Français"
            >
              <img src="https://flagcdn.com/w40/fr.png" alt="FR" className="w-5 h-3.5 md:w-6 md:h-4 object-cover rounded-[2px]" />
            </button>
          </div>

          {/* Pulsante CV */}
          <button 
            onClick={handleCvClick}
            className="bg-primary/10 text-primary border border-primary px-3.5 py-1.5 md:px-5 md:py-2 text-xs md:text-sm whitespace-nowrap rounded-full font-semibold hover:bg-primary hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.15)] hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] cursor-pointer"
          >
            {isCvPage ? t('header.downloadCV') : t('header.viewCV')}
          </button>
        </div>

        {/* BOTTONE BURGER (Mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-4 z-55 relative cursor-pointer focus:outline-none"
          aria-label="Menu"
        >
          <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </header>

      {/* ======================================================== */}
      {/* 4. OVERLAY MENU BURGER RESPONSIVO (Slide-down glassmorphism) */}
      {/* ======================================================== */}
      <div 
        className={`fixed inset-0 bg-dark/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Link del Menu */}
        <nav className="flex flex-col items-center gap-8">
          <NavLink 
            to="/" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => 
              `text-2xl font-semibold tracking-wide transition-all duration-300 ${
                isActive ? 'text-primary scale-110 drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]' : 'text-gray-300 hover:text-white'
              }`
            }
          >
            {t('sidebar.home')}
          </NavLink>
          
          <NavLink 
            to="/projects" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => 
              `text-2xl font-semibold tracking-wide transition-all duration-300 ${
                isActive ? 'text-primary scale-110 drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]' : 'text-gray-300 hover:text-white'
              }`
            }
          >
            {t('sidebar.projects')}
          </NavLink>

          <NavLink 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => 
              `text-2xl font-semibold tracking-wide transition-all duration-300 ${
                isActive ? 'text-primary scale-110 drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]' : 'text-gray-300 hover:text-white'
              }`
            }
          >
            {t('sidebar.contact')}
          </NavLink>
        </nav>

        {/* Separatore */}
        <div className="w-2/3 h-[1px] bg-gray-800/80 my-2"></div>

        {/* Selezione Lingua nel Menu Mobile */}
        <div className="flex items-center gap-4 bg-white/5 border border-gray-800/80 p-2 px-4 rounded-full shadow-inner">
          <button 
            onClick={() => { i18n.changeLanguage('it'); setIsOpen(false); }}
            className={`transition-all duration-300 cursor-pointer ${
              i18n.language === 'it' ? 'scale-125 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]' : 'opacity-55 hover:opacity-100'
            }`}
            title="Italiano"
          >
            <img src="https://flagcdn.com/w40/it.png" alt="IT" className="w-7 h-5 object-cover rounded-[2px]" />
          </button>
          
          <div className="w-[1px] h-4 bg-gray-700/80"></div>

          <button 
            onClick={() => { i18n.changeLanguage('en'); setIsOpen(false); }}
            className={`transition-all duration-300 cursor-pointer ${
              i18n.language === 'en' ? 'scale-125 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]' : 'opacity-55 hover:opacity-100'
            }`}
            title="English"
          >
            <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-7 h-5 object-cover rounded-[2px]" />
          </button>
          
          <div className="w-[1px] h-4 bg-gray-700/80"></div>

          <button 
            onClick={() => { i18n.changeLanguage('fr'); setIsOpen(false); }}
            className={`transition-all duration-300 cursor-pointer ${
              i18n.language === 'fr' ? 'scale-125 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]' : 'opacity-55 hover:opacity-100'
            }`}
            title="Français"
          >
            <img src="https://flagcdn.com/w40/fr.png" alt="FR" className="w-7 h-5 object-cover rounded-[2px]" />
          </button>
        </div>

        {/* Pulsante CV nel Menu Mobile */}
        <button 
          onClick={handleCvClick}
          className="bg-primary/10 text-primary border border-primary px-6 py-2.5 text-sm rounded-full font-semibold hover:bg-primary hover:text-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] cursor-pointer mt-2"
        >
          {isCvPage ? t('header.downloadCV') : t('header.viewCV')}
        </button>
      </div>
    </>
  );
};

export default Navbar;
