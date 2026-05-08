// src/Components/Footer.jsx
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import fotoCV from '../assets/ImgCV.jpg';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-primary/30 shadow-[0_-15px_40px_-10px_rgba(0,229,255,0.15)] bg-dark-surface mt-24 pt-16 pb-8 text-sm">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Griglia Principale a 4 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Colonna 1: Profilo e bio breve */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={fotoCV} alt="Giuseppe Saia" width="32" height="32" className="w-8 h-8 rounded-full object-cover border border-gray-700" loading="lazy" />
              <span className="font-bold text-white text-base">Giuseppe Saia</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Sviluppatore Web Full-Stack. Creo soluzioni digitali moderne, performanti e orientate ai risultati.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
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
          </div>

          {/* Colonna 2: Sezioni */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-500 font-semibold tracking-wider uppercase text-xs">{t('footer.sections.title')}</h4>
            <NavLink to="/" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.sections.home')}</NavLink>
            <a href="/#about" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.sections.about')}</a>
            <NavLink to="/projects" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.sections.projects')}</NavLink>
          </div>

          {/* Colonna 3: Pagine */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-500 font-semibold tracking-wider uppercase text-xs">{t('footer.pages.title')}</h4>
            <Link to="/projects" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.pages.all_projects')}</Link>
            <NavLink to="/cv" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.pages.cv')}</NavLink>
            <a href="mailto:saia.giuseppe@live.it" className="text-primary font-medium hover:text-white transition-colors w-fit">{t('footer.pages.contact')}</a>
          </div>

          {/* Colonna 4: Contatti */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-500 font-semibold tracking-wider uppercase text-xs">{t('footer.contact.title')}</h4>
            <a href="https://www.linkedin.com/in/giuseppe-saia-0790b664" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.contact.linkedin')}</a>
            <a href="https://github.com/Osmond32" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.contact.github')}</a>
            <a href="mailto:saia.giuseppe@live.it" className="text-gray-400 hover:text-primary transition-colors w-fit">{t('footer.contact.email')}</a>
          </div>

        </div>

        {/* Riga Inferiore: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800 text-gray-500 text-xs">
          <p>© {currentYear} {t('footer.copyright')}</p>
          <div className="flex items-center gap-2">
            <span>{t('footer.developed_with')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
