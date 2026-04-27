// src/Components/Footer.jsx
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import fotoCV from '../assets/ImgCV.jpg'; // Riutilizziamo la tua foto per il piccolo avatar!

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-primary/30 shadow-[0_-15px_40px_-10px_rgba(0,229,255,0.15)] bg-dark-surface mt-24 pt-16 pb-8 text-sm">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Griglia Principale a 4 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Colonna 1: Profilo e Bio stie "Classic" */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={fotoCV} alt="Giuseppe Saia" className="w-8 h-8 rounded-full object-cover border border-gray-700" />
              <span className="font-bold text-white text-base">Giuseppe Saia</span>
            </div>
           
          </div>

          {/* Colonna 2: Sezioni (SECTIONS) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-500 font-semibold tracking-wider uppercase text-xs">{t('footer.sections.title')}</h4>
            <NavLink to="/" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.sections.home')}</NavLink>
            <NavLink to="/about" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.sections.about')}</NavLink>
            <NavLink to="/projects" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.sections.projects')}</NavLink>
          </div>

          {/* Colonna 3: Pagine (PAGES) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-500 font-semibold tracking-wider uppercase text-xs">{t('footer.pages.title')}</h4>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.pages.all_projects')}</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.pages.cv')}</a>
            <NavLink to="/contact" className="text-primary font-medium hover:text-white transition-colors w-fit">{t('footer.pages.contact')}</NavLink>
          </div>

          {/* Colonna 4: Contatti (CONTACT) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-500 font-semibold tracking-wider uppercase text-xs">{t('footer.contact.title')}</h4>
            <a href="https://linkedin.com/in/tuousername" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.contact.linkedin')}</a>
            <a href="https://github.com/tuousername" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.contact.github')}</a>
            <a href="mailto:tuamail@email.com" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.contact.email')}</a>
          </div>

        </div>

        {/* Riga Inferiore: Copyright staccato da una linea */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800 text-gray-500 text-xs">
          
          <p>© {currentYear} {t('footer.copyright')}</p>
          
          {/* L'equivalente del "Créé avec..." */}
          <div className="flex items-center gap-2">
            <span>{t('footer.developed_with')}</span>
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
