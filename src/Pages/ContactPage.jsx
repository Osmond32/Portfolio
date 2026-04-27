import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Aggiorna lo stato quando l'utente digita nel form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestisce l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui in futuro potrai inserire la logica di invio reale (es. EmailJS o una tua API backend)
    alert("Il form funziona! La logica di invio email verrà implementata a breve.");
    setFormData({ name: '', email: '', message: '' }); // Resetta il form
  };

  return (
    <div className="pt-32 px-8 max-w-6xl mx-auto min-h-[calc(100vh-80px)] text-light pb-24">
      
      {/* --- Intestazione della Pagina --- */}
      <div className="mb-16 text-center md:text-left">
        <h3 className="font-signature text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 animate-shine mb-2 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] pb-1 pr-2 w-fit mx-auto md:mx-0">
          {t('contact_page.title_sm')}
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-4">
          {t('contact_page.title')}
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg mt-6 leading-relaxed mx-auto md:mx-0">
          {t('contact_page.description')}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* --- Colonna Sinistra: Social Links --- */}
        <div className="flex-1 flex flex-col gap-10">
          <div>
            <h4 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">
              {t('contact_page.social.title')}
            </h4>
            <div className="flex flex-col gap-4">
              
              {/* Pulsante LinkedIn */}
              <a href="https://linkedin.com/in/tuousername" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800 rounded-xl hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-200 group-hover:text-primary transition-colors">LinkedIn</h5>
                  <span className="text-sm text-gray-500">Connettiamoci!</span>
                </div>
              </a>

              {/* Pulsante GitHub */}
              <a href="https://github.com/tuousername" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800 rounded-xl hover:border-gray-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-700/10 text-gray-300 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-200 group-hover:text-white transition-colors">GitHub</h5>
                  <span className="text-sm text-gray-500">Esplora il mio codice</span>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* --- Colonna Destra: Modulo di Contatto (Form) --- */}
        <div className="flex-1 w-full">
          <form onSubmit={handleSubmit} className="bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
            {/* Bagliore di background al form */}
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 blur-[30px] bg-primary pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">{t('contact_page.form.name_label')}</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-200 border border-gray-400 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:bg-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all placeholder-gray-500" placeholder={t('contact_page.form.name_placeholder')} />
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">{t('contact_page.form.email_label')}</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-200 border border-gray-400 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:bg-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all placeholder-gray-500" placeholder={t('contact_page.form.email_placeholder')} />
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">{t('contact_page.form.message_label')}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full bg-gray-200 border border-gray-400 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:bg-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all resize-none placeholder-gray-500" placeholder={t('contact_page.form.message_placeholder')}></textarea>
            </div>

            <button type="submit" className="relative z-10 mt-2 w-full py-4 font-bold text-dark bg-primary rounded-xl overflow-hidden hover:bg-[#00c8e6] shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all duration-300">
              {t('contact_page.form.send_button')}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;