import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  // Stato per controllare se il menu è aperto o chiuso
  const [isOpen, setIsOpen] = useState(false);
  
  const { t } = useTranslation();

  return (
    <>
      {/* Sfondo scuro semitrasparente: appare quando il menu è aperto e permette di chiuderlo se cliccato */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Wrapper fisso per posizionare sia il bottone che la sua luce posteriore */}
      <div className="fixed top-5 left-5 z-50 group cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        
        {/* Effetto glow (bagliore) BLU/CIANO */}
        <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/40 transition-colors duration-300"></div>

        {/* Bottone Hamburger vero e proprio con bordo blu/ciano */}
        <button 
          aria-label="Apri o Chiudi Menu di Navigazione"
          className="relative text-white flex flex-col gap-1.5 p-2.5 bg-dark-surface rounded-lg border-2 border-primary shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300 pointer-events-none"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Pannello della Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-dark-surface border-r border-gray-800 flex flex-col pt-24 px-6 pb-6 text-light z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="mb-10 px-2">
          <h1 className="text-3xl font-bold font-sans text-primary">Portfolio.</h1>
        </div>
        
        <nav className="flex flex-col gap-4 flex-1">
          {/* Aggiunto onClick per far chiudere il menu qnd si clicca un link */}
          <NavLink 
            to="/" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `px-4 py-3 rounded-lg transition-colors font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            {t('sidebar.home')}
          </NavLink>
        
          <NavLink 
            to="/projects" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `px-4 py-3 rounded-lg transition-colors font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            {t('sidebar.projects')}
          </NavLink>

          <NavLink 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `px-4 py-3 rounded-lg transition-colors font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            {t('sidebar.contact')}
          </NavLink>

          
        </nav>
        
        <div className="mt-auto px-4 py-4 text-xs text-gray-500">
          © 2026 Portfolio
        </div>

      </aside>
    </>
  );
};

export default Sidebar;
