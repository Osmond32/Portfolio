import React from 'react';

// Qui puoi inserire o modificare i dati dei tuoi veri progetti
const projectsData = [
  {
    id: 1,
    title: "AlloCiné Clone",
    description: "Una piattaforma web per la ricerca di film e serie TV. Gestione dei preferiti, ricerca dinamica e paginazione integrando l'API pubblica di TMDB.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Bootstrap", "Axios", "API REST"],
    link: "#"
  },
  {
    id: 2,
    title: "League of Legends API",
    description: "Applicazione frontend interattiva che sfrutta l'API ufficiale di League of Legends per esplorare i campioni, le statistiche e le abilità del gioco.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Bootstrap", "Axios", "API REST"],
    link: "#"
  },
  {
    id: 3,
    title: "Nomade Hub (Progetto d'Esame)",
    description: "Piattaforma full-stack per nomadi digitali. Permette di cercare alloggi, leggere/scrivere recensioni e trovare opportunità di lavoro da remoto.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "Express", "MySQL", "Mantine"],
    link: "#"
  },
  {
    id: 4,
    title: "Gestione Users",
    description: "Sistema di autenticazione backend e frontend con registrazione, login sicuro, criptografia password (Bcrypt) e gestione dei token (JWT).",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "JWT", "Bcrypt", "MySQL"],
    link: "#"
  }
];

const ProjectsPage = () => {
  return (
    <div className="pt-32 px-8 max-w-6xl mx-auto min-h-[calc(100vh-80px)] text-light pb-24">
      
      {/* --- Intestazione della Pagina --- */}
      <div className="mb-16">
        <h3 className="font-signature text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-green-400 animate-shine mb-2 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] pb-1 pr-2 w-fit">
          I Miei Lavori
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-4">
          Progetti in Evidenza
        </h1>
        <p className="text-gray-400 max-w-4xl text-lg mt-6 leading-relaxed text-justify">
          Ecco una selezione di progetti realizzati durante la mia formazione. Ogni card rappresenta una sfida affrontata, nuove tecnologie apprese e soluzioni implementate per trasformare idee in codice funzionante. Attualmente sto sviluppando nuove applicazioni indipendenti, nello specifico rivolte al settore dell'assistenza medica e sanitaria.
        </p>
      </div>

      {/* --- Griglia dei Progetti --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col bg-[#0b1120]/80 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_-10px_rgba(0,229,255,0.2)] hover:border-primary/50 relative"
          >
            {/* Bagliore (Glow) di sfondo che appare all'hover */}
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-20 transition-all duration-700 blur-[30px] bg-primary pointer-events-none"></div>

            {/* Immagine del Progetto */}
            <div className="relative h-48 w-full overflow-hidden border-b border-gray-800">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Contenuto Testuale della Card */}
            <div className="relative z-10 p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 text-justify">
                {project.description}
              </p>

              {/* Stack Tecnologico (Badge) */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2.5 py-1 text-[11px] font-mono font-semibold text-primary bg-primary/10 border border-primary/20 rounded-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Pulsante Unico per il Progetto */}
              <div className="mt-auto pt-4 border-t border-gray-800/50">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 text-sm font-bold text-dark bg-primary hover:bg-[#00c8e6] shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] rounded-lg transition-all">
                  Vedi Progetto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;