import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {/* Overlay scuro */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Bottone Hamburger */}
      <div className="fixed top-5 left-5 z-50 flex items-center gap-4">
        {/* Bottone Menu */}
        <div className="group cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/40 transition-colors duration-300"></div>
          <button 
            aria-label="Apri o Chiudi Menu di Navigazione"
            className="relative text-white flex flex-col gap-1.5 p-2.5 bg-dark-surface rounded-lg border-2 border-primary shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300 pointer-events-none"
          >
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Avatar Home Sempre Visibile (Nascosto su mobile per evitare sovrapposizioni) */}
        <NavLink 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="relative group hidden md:flex items-center justify-center"
        >
          <div className="absolute -inset-1.5 bg-primary/40 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative w-12 h-12 bg-dark-surface border-2 border-primary rounded-full flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </div>
        </NavLink>
      </div>

      {/* Pannello Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-dark-surface border-r border-gray-800 flex flex-col pt-24 px-6 pb-6 text-light z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Avatar Home Visibile SOLO su mobile dentro la sidebar */}
        <div className="mb-8 px-2 flex justify-start md:hidden">
          <NavLink 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="relative group"
          >
            <div className="absolute -inset-1.5 bg-primary/40 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-14 h-14 bg-dark-surface border-2 border-primary rounded-full flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
          </NavLink>
        </div>

        <div className="mb-10 px-2">
          <h2 className="text-3xl font-bold font-sans text-primary">Portfolio.</h2>
        </div>
        
        <nav className="flex flex-col gap-2 flex-1">
          <NavLink 
            to="/" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            {t('sidebar.home')}
          </NavLink>
        
          <NavLink 
            to="/projects" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            {t('sidebar.projects')}
          </NavLink>

          <NavLink 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            {t('sidebar.contact')}
          </NavLink>
        </nav>
        
        {/* Social links in fondo alla sidebar */}
        <div className="flex items-center gap-4 px-4 py-4 border-t border-gray-800">
          <a href="https://github.com/Osmond32" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub" aria-label="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/giuseppe-saia-0790b664" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" title="LinkedIn" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:saia.giuseppe@live.it" className="text-gray-400 hover:text-primary transition-colors" title="Email" aria-label="Email">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;
