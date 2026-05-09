import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

// ─── Chiavi EmailJS dal file .env ───────────────────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ────────────────────────────────────────────────────────────────────────────

const ContactPage = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);

  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Usiamo sendForm che legge direttamente i campi 'name' degli input
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 px-8 max-w-6xl mx-auto min-h-[calc(100vh-80px)] text-light pb-24">
      
      {/* Intestazione */}
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
        
        {/* ─── Colonna Sinistra: Info di contatto ─── */}
        <div className="flex-1 flex flex-col gap-6">
          <h4 className="text-2xl font-bold text-white border-b border-gray-800 pb-4">
            {t('contact_page.social.title')}
          </h4>

          {/* Email */}
          <a href="mailto:saia.giuseppe@live.it" className="group flex items-center gap-4 p-5 bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800 rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark transition-colors flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <h5 className="font-bold text-gray-200 group-hover:text-primary transition-colors">Email</h5>
              <span className="text-sm text-gray-500">saia.giuseppe@live.it</span>
            </div>
          </a>

          {/* Telefono */}
          <a href="tel:0652213223" className="group flex items-center gap-4 p-5 bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800 rounded-xl hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div>
              <h5 className="font-bold text-gray-200 group-hover:text-green-400 transition-colors">Telefono</h5>
              <span className="text-sm text-gray-500">06 52 21 32 23</span>
            </div>
          </a>

          {/* GitHub */}
          <a href="https://github.com/Osmond32" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800 rounded-xl hover:border-gray-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-700/20 text-gray-300 group-hover:bg-gray-700 group-hover:text-white transition-colors flex-shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </div>
            <div>
              <h5 className="font-bold text-gray-200 group-hover:text-white transition-colors">GitHub</h5>
              <span className="text-sm text-gray-500">github.com/Osmond32</span>
            </div>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/giuseppe-saia-0790b664" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800 rounded-xl hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div>
              <h5 className="font-bold text-gray-200 group-hover:text-blue-400 transition-colors">LinkedIn</h5>
              <span className="text-sm text-gray-500">giuseppe-saia-0790b664</span>
            </div>
          </a>
        </div>

        {/* ─── Colonna Destra: Form con EmailJS ─── */}
        <div className="flex-1 w-full">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden group"
          >
            {/* Bagliore di sfondo */}
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 blur-[30px] bg-primary pointer-events-none"></div>

            {/* Nome — name="from_name" */}
            <div className="relative z-10 flex flex-col gap-2">
              <label htmlFor="from_name" className="text-sm font-medium text-gray-300">
                {t('contact_page.form.name_label')}
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                disabled={status === 'sending' || status === 'success'}
                className="w-full bg-gray-200 border border-gray-400 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:bg-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all placeholder-gray-500 disabled:opacity-50"
                placeholder={t('contact_page.form.name_placeholder')}
              />
            </div>

            {/* Email — name="from_email" e name="email" (per Reply To) */}
            <div className="relative z-10 flex flex-col gap-2">
              <label htmlFor="from_email" className="text-sm font-medium text-gray-300">
                {t('contact_page.form.email_label')}
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                disabled={status === 'sending' || status === 'success'}
                className="w-full bg-gray-200 border border-gray-400 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:bg-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all placeholder-gray-500 disabled:opacity-50"
                placeholder={t('contact_page.form.email_placeholder')}
              />
              {/* Campo nascosto per mappare 'email' usato nel Reply-To del tuo template */}
              <input type="hidden" name="email" value={formRef.current?.from_email?.value || ''} />
            </div>

            {/* Oggetto — name="subject" */}
            <div className="relative z-10 flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                Oggetto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                defaultValue="Contatto da Portfolio"
                disabled={status === 'sending' || status === 'success'}
                className="w-full bg-gray-200 border border-gray-400 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:bg-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all placeholder-gray-500 disabled:opacity-50"
              />
            </div>

            {/* Messaggio — name="message" */}
            <div className="relative z-10 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                {t('contact_page.form.message_label')}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                disabled={status === 'sending' || status === 'success'}
                className="w-full bg-gray-200 border border-gray-400 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:bg-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all resize-none placeholder-gray-500 disabled:opacity-50"
                placeholder={t('contact_page.form.message_placeholder')}
              ></textarea>
            </div>

            {/* ─── Bottone con stati ─── */}
            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="relative z-10 mt-2 w-full py-4 font-bold rounded-xl overflow-hidden transition-all duration-300 disabled:cursor-not-allowed
                text-dark bg-primary hover:bg-[#00c8e6]
                shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]
                disabled:opacity-70"
            >
              {status === 'idle'    && t('contact_page.form.send_button')}
              {status === 'sending' && (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Invio in corso...
                </span>
              )}
              {status === 'success' && '✅ Messaggio inviato!'}
              {status === 'error'   && '❌ Errore — riprova'}
            </button>

            {/* Nota GDPR */}
            <p className="text-[10px] text-gray-500 leading-tight text-center px-4 italic">
              {t('contact_page.form.gdpr_note')}
            </p>

            {/* Banner successo */}
            {status === 'success' && (
              <div className="relative z-10 flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p>Messaggio ricevuto! Ti risponderò il prima possibile.</p>
              </div>
            )}

            {/* Banner errore */}
            {status === 'error' && (
              <div className="relative z-10 flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <p>Qualcosa è andato storto. Riprova più tardi.</p>
                </div>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;