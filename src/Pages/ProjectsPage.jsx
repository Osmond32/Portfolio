import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Qui puoi inserire o modificare i dati dei tuoi veri progetti
const projectsData = [
  {
    id: "allocine",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Bootstrap", "Axios", "API REST"],
    link: "https://allocine-6vk5.vercel.app/",
    isComingSoon: false
  },
  {
    id: "lol",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Bootstrap", "Axios", "API REST"],
    // Link aggiornato!
    link: "https://lol-azk1.vercel.app/",
    isComingSoon: false
  },
  {
    id: "nomadehub",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "MySQL", "Render", "Aiven"],
    link: "https://nomad-hub-bz8x.vercel.app/",
    isComingSoon: false
  },
  {
    id: "users",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "MySQL", "Render", "Aiven"],
    link: "https://project-user-alpha.vercel.app",
    isComingSoon: false
  }
];

const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 px-8 max-w-6xl mx-auto min-h-[calc(100vh-80px)] text-light pb-24">
      
      {/* Link per tornare alla Home */}
      <Link to="/" className="group flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 w-fit text-sm font-medium">
        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        <span>{t('projects_page.back_to_home')}</span>
      </Link>

      {/* --- Intestazione della Pagina --- */}
      <div className="mb-16">
        <h3 className="font-signature text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 animate-shine mb-2 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] pb-1 pr-2 w-fit">
          {t('projects_page.title_sm')}
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-4">
          {t('projects_page.title')}
        </h1>
        <p className="text-gray-400 max-w-4xl text-lg mt-6 leading-relaxed text-justify">
          {t('projects_page.description')}
        </p>
      </div>

      {/* --- Griglia dei Progetti --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <a 
            href={project.isComingSoon ? undefined : project.link}
            target={project.isComingSoon ? undefined : "_blank"}
            rel={project.isComingSoon ? undefined : "noopener noreferrer"}
            key={project.id} 
            className={`group flex flex-col bg-[#0b1120]/80 backdrop-blur-xl border border-gray-700 shadow-lg shadow-black/40 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 relative ${project.isComingSoon ? 'cursor-not-allowed hover:border-gray-500 hover:shadow-none' : 'cursor-pointer hover:shadow-[0_15px_40px_-10px_rgba(0,229,255,0.2)] hover:border-primary/50'}`}
          >
            {/* Bagliore (Glow) di sfondo che appare all'hover */}
            {!project.isComingSoon && <div className="absolute -inset-4 opacity-0 group-hover:opacity-20 transition-all duration-700 blur-[30px] bg-primary pointer-events-none"></div>}

            {/* Immagine del Progetto */}
            <div className={`relative h-48 w-full overflow-hidden border-b border-gray-700 ${project.isComingSoon ? 'grayscale opacity-60' : ''}`}>
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
              <img 
                src={project.image} 
                alt={t(`projects_page.projects.${project.id}.title`)} 
                width="800"
                height="450"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Contenuto Testuale della Card */}
            <div className="relative z-10 p-6 flex flex-col flex-1">
              <h3 className={`text-2xl font-bold text-white mb-1 transition-colors ${project.isComingSoon ? '' : 'group-hover:text-primary'}`}>
                {t(`projects_page.projects.${project.id}.title`)}
              </h3>
              
              {project.isComingSoon ? (
                <span className="text-sm text-yellow-500 font-medium mb-4 inline-block">
                  ({t('projects_page.coming_soon')})
                </span>
              ) : (
                <div className="mb-4"></div>
              )}

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 text-justify">
                {t(`projects_page.projects.${project.id}.description`)}
              </p>

              {/* Stack Tecnologico (Badge) */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md shadow-sm ${project.isComingSoon ? 'text-gray-400 bg-gray-800/50 border border-gray-700/50' : 'text-primary bg-primary/10 border border-primary/20'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Pulsante Unico per il Progetto */}
              <div className="mt-auto pt-4 border-t border-gray-700/50">
                <span className={`block w-full text-center py-3 text-sm font-bold rounded-lg transition-all ${project.isComingSoon ? 'text-gray-400 bg-gray-800' : 'text-dark bg-primary group-hover:bg-[#00c8e6] shadow-[0_0_15px_rgba(0,229,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]'}`}>
                  {project.isComingSoon ? t('projects_page.coming_soon') : t('projects_page.view_project')}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;