import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  
  // Importiamo gli strumenti per tradurre e per cambiare lingua
  const { t, i18n } = useTranslation();

  // Strumenti magici di React Router
  const location = useLocation();
  const navigate = useNavigate();

  // Controlliamo se l'url attuale è esattamente la pagina del CV
  const isCvPage = location.pathname === '/cv';

  // Funzione chiamata al completamento del bottone
  const handleCvClick = () => {
    if (isCvPage) {
      // L'utente è già nel CV: facciamo partire il download!
      // Mostra l'alert tradotto
      alert(t('header.alertCV'));
    } else {
      // L'utente è altrove: lo mandiamo alla pagina del CV
      navigate('/cv');
    }
  };

  return (
    <header className="fixed top-0 right-0 w-full h-20 bg-dark/80 backdrop-blur-md flex items-center justify-end px-4 md:px-8 z-30 border-b border-gray-800/50">
      
      {/* Contenitore principale a destra che raggruppa Pulsante + Bandiere */}
      <div className="flex items-center gap-3 md:gap-8"> {/* gap ridotto su mobile */}
        
        {/* Pulsante CV (dinamico) */}
        <button 
          onClick={handleCvClick}
          className="bg-primary/10 text-primary border border-primary px-3 py-2 md:px-5 md:py-2.5 text-sm md:text-base whitespace-nowrap rounded-lg font-medium hover:bg-primary hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.2)] hover:shadow-[0_0_15px_rgba(0,229,255,0.6)]"
        >
          {isCvPage ? t('header.downloadCV') : t('header.viewCV')}
        </button>

        {/* Sfondo bianco, bordi e ombra per le bandierine */}
        <div className="flex items-center gap-2 md:gap-4 bg-white p-1.5 px-2 md:p-2 md:px-3 rounded-lg border border-gray-200 shadow-md shrink-0">
          
          {/* Bandiera Italiana */}
          <button 
            onClick={() => i18n.changeLanguage('it')}
            className={`transition-all duration-300 cursor-pointer flex items-center justify-center ${i18n.language === 'it' ? 'scale-125 drop-shadow-md z-10' : 'opacity-80 hover:opacity-100 hover:scale-110'}`}
            title="Italiano"
          >
            <img src="https://flagcdn.com/w40/it.png" alt="Italia" className="w-6 h-auto rounded-[2px]" />
          </button>
          
          <div className="w-[1px] h-6 bg-gray-300"></div>

          {/* Bandiera Inglese */}
          <button 
            onClick={() => i18n.changeLanguage('en')}
            className={`transition-all duration-300 cursor-pointer flex items-center justify-center ${i18n.language === 'en' ? 'scale-125 drop-shadow-md z-10' : 'opacity-80 hover:opacity-100 hover:scale-110'}`}
            title="English"
          >
            <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-auto rounded-[2px]" />
          </button>

          <div className="w-[1px] h-6 bg-gray-300"></div>

          {/* Bandiera Francese */}
          <button 
            onClick={() => i18n.changeLanguage('fr')}
            className={`transition-all duration-300 cursor-pointer flex items-center justify-center ${i18n.language === 'fr' ? 'scale-125 drop-shadow-md z-10' : 'opacity-80 hover:opacity-100 hover:scale-110'}`}
            title="Français"
          >
            <img src="https://flagcdn.com/w40/fr.png" alt="Français" className="w-6 h-auto rounded-[2px]" />
          </button>

        </div>

      </div>
      
    </header>
  );
};

export default Header;
