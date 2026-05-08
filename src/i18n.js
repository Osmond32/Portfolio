import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Qui inseriamo i nostri dizionari per le diverse lingue
const resources = {
  it: {
    translation: {
      header: {
        downloadCV: "Scarica CV",
        viewCV: "Vedi il mio CV",
        alertCV: "In futuro qui partirà il download del PDF del tuo CV!"
      },
      home: {
        greeting: "Ciao sono",
        role_prefix: "Sviluppatore",
        role_suffix: "Web Full-Stack.",
        tagline: "Ti aiuto a trasformare la tua presenza online in clienti reali",
        description: "Sviluppo soluzioni su misura con React e Node.js: siti performanti, responsive e pensati per convertire visitatori in clienti.",
        availability: "Pronto a raggiungere la vostra equipe in alternance",
        cta_hero: "Parliamo del tuo progetto",
        languages: {
          it: { name: "Italiano", level: "(Madrelingua)" },
          fr: { name: "Francese", level: "(Fluente)" },
          en: { name: "Inglese", level: "(Tecnico)" }
        }
      },
      skills: {
        title: "Come posso aiutarti...",
        cards: {
          frontend: { title: "Siti Web Professionali", desc: "Creazione di siti moderni e veloci per attività locali che vogliono più clienti online." },
          uiux: { title: "Design & UX Ottimizzata", desc: "Interfacce intuitive e mobile-first, progettate per massimizzare la conversione degli utenti." },
          backend: { title: "App Web su Misura", desc: "Sviluppo di applicazioni web personalizzate per automatizzare i processi del tuo business." },
          database: { title: "API & Gestione Dati", desc: "Integrazione di sistemi e database solidi per una gestione fluida delle informazioni." },
          ai: { title: "Soluzioni con IA", desc: "Sfruttamento dell'Intelligenza Artificiale per accelerare lo sviluppo e offrire funzionalità avanzate." },
          tools: { title: "Performance & SEO", desc: "Ottimizzazione della velocità e posizionamento per garantire visibilità e risultati concreti." }
        }
      },
      projects_overview: {
        title: "I miei Progetti...",
        stats: { projects: "Progetti Realizzati", experience: "Mesi di Esperienza", techs: "Tecnologie Studiate" },
        button: "Vedi i miei Progetti"
      },
      footer: {
        sections: { title: "Sezioni", home: "Home", about: "Chi Sono", projects: "Progetti" },
        pages: { title: "Pagine", all_projects: "Tutti i progetti", cv: "Curriculum Vitae", contact: "Contattami" },
        contact: { title: "Contatti", linkedin: "LinkedIn", github: "GitHub", email: "Email" },
        copyright: "Giuseppe Saia. Tutti i diritti riservati.",
        developed_with: "Sviluppato con React & Tailwind CSS"
      },
      about: {
        title_sm: "A proposito di me...",
        title: "Dalla padella al Codice: La Mia Storia di Riconversione",
        image_alt: "Cucinare Codice e Psicologia",
        timeline: {
          edu_date: "2006 - 2012 • Università degli studi di Torino (Bac+5)",
          edu_title: "Psicologia del lavoro e delle organizzazioni",
          edu_desc: "In questi anni ho studiato la mente umana, le dinamiche di gruppo e il comportamento organizzativo. Ho imparato a comprendere le persone, a comunicare efficacemente e a risolvere problemi complessi. Queste competenze si sono rivelate preziose durante tutto il corso della mia vita.",
          work_date: "2018 - 2025 • Manager di ristorante (Quadro)",
          work_title: "Si parte all'avventura!",
          work_desc: "Mi sono trasferito in Francia alla ricerca di nuove esperienze, spinto dalla voglia di scoprire e mettermi alla prova. Ho iniziato a lavorare in diversi ristoranti, dove grazie alla mia determinazione e al mio spirito di sacrificio ho rapidamente guadagnato fiducia, arrivando a ricoprire ruoli di responsabilità come manager.",
          dev_date: "2025 - Oggi • Web developer Full-Stack",
          dev_title: "Soluzioni Digitali per il Business",
          dev_desc: "Dopo diversi anni in ruoli di responsabilità che hanno forgiato la mia disciplina e capacità di problem solving, oggi aiuto attività locali e piccoli business a migliorare la loro presenza online con soluzioni moderne e funzionali. Il mio obiettivo non è solo creare siti, ma strumenti utili che portano risultati concreti."
        }
      },
      contact_page: {
        title_sm: "Contattami...",
        title: "Hai un progetto in mente?",
        description: "Se vuoi migliorare la tua presenza online o creare un sito per la tua attività, contattami e parliamone insieme.",
        social: {
          title: "I miei Social"
        },
        form: {
          name_label: "Nome",
          name_placeholder: "Il tuo nome",
          email_label: "Email",
          email_placeholder: "La tua email",
          message_label: "Messaggio",
          message_placeholder: "Come posso aiutarti?",
          send_button: "Invia Messaggio"
        }
      },
      sidebar: {
        home: "Home",
        projects: "Progetti",
        contact: "Contatti"
      },
      projects_page: {
        title_sm: "I Miei Lavori",
        title: "Progetti in Evidenza",
        description: "Ecco una selezione di progetti realizzati durante la mia formazione. Ogni card rappresenta una sfida affrontata, nuove tecnologie apprese e soluzioni implementate per trasformare idee in codice funzionante.",
        view_project: "Vedi Progetto",
        coming_soon: "Presto disponibile",
        back_to_home: "Torna alla Home",
        projects: {
          allocine: {
            title: "AlloCiné Clone",
            description: "Una piattaforma web per la ricerca di film e serie TV. Gestione dei preferiti, ricerca dinamica e paginazione integrando l'API pubblica di TMDB."
          },
          lol: {
            title: "League of Legends API",
            description: "Applicazione frontend interattiva che sfrutta l'API ufficiale di League of Legends per esplorare i campioni, le statistiche e le abilità del gioco."
          },
          nomadehub: {
            title: "Nomade Hub (Progetto d'Esame)",
            description: "Piattaforma full-stack per nomadi digitali. Permette di cercare alloggi, leggere/scrivere recensioni e trovare opportunità di lavoro da remoto."
          },
          users: {
            title: "Gestione Users",
            description: "Sistema di autenticazione backend e frontend con registrazione, login sicuro, criptografia password (Bcrypt) e gestione dei token (JWT)."
          }
        }
      }
    }
  },
  en: {
    translation: {
      header: {
        downloadCV: "Download CV",
        viewCV: "View my CV",
        alertCV: "In the future, the download of your CV PDF will start here!"
      },
      home: {
        greeting: "Hi, I'm",
        role_prefix: "Full-Stack",
        role_suffix: "Web Developer.",
        tagline: "I help you transform your online presence into real customers",
        description: "Developing tailor-made solutions with React and Node.js: high-performance, responsive sites designed to convert visitors into customers.",
        availability: "Ready to join your team for a work-study program (alternance)",
        cta_hero: "Let's talk about your project",
        languages: {
          it: { name: "Italian", level: "(Native)" },
          fr: { name: "French", level: "(Fluent)" },
          en: { name: "English", level: "(Technical)" }
        }
      },
      skills: {
        title: "How I can help you...",
        cards: {
          frontend: { title: "Professional Websites", desc: "Creating modern and fast websites for local businesses looking for more customers online." },
          uiux: { title: "Optimized Design & UX", desc: "Intuitive and mobile-first interfaces, designed to maximize user conversion." },
          backend: { title: "Custom Web Apps", desc: "Developing customized web applications to automate your business processes." },
          database: { title: "API & Data Management", desc: "Integration of solid systems and databases for smooth information management." },
          ai: { title: "AI Solutions", desc: "Leveraging Artificial Intelligence to accelerate development and offer advanced features." },
          tools: { title: "Performance & SEO", desc: "Speed optimization and ranking to ensure visibility and concrete results." }
        }
      },
      projects_overview: {
        title: "My Projects...",
        stats: { projects: "Completed Projects", experience: "Months of Experience", techs: "Technologies Studied" },
        button: "See My Projects"
      },
      footer: {
        sections: { title: "Sections", home: "Home", about: "About", projects: "Projects" },
        pages: { title: "Pages", all_projects: "All Projects", cv: "Curriculum Vitae", contact: "Contact Me" },
        contact: { title: "Contact", linkedin: "LinkedIn", github: "GitHub", email: "Email" },
        copyright: "Giuseppe Saia. All rights reserved.",
        developed_with: "Developed with React & Tailwind CSS"
      },
      about: {
        title_sm: "About me...",
        title: "From the Pan to the Code: My Career Change Story",
        image_alt: "Cooking Code and Psychology",
        timeline: {
          edu_date: "2006 - 2012 • University of Turin (Master's Degree)",
          edu_title: "Work and Organizational Psychology",
          edu_desc: "During these years I studied the human mind, group dynamics, and organizational behavior. I learned to understand people, communicate effectively, and solve complex problems. These skills have proven invaluable throughout my life.",
          work_date: "2018 - 2025 • Restaurant Manager (Executive)",
          work_title: "Let the adventure begin!",
          work_desc: "I moved to France looking for new experiences, driven by the desire to discover and challenge myself. I started working in various restaurants, where thanks to my determination and spirit of sacrifice, I quickly gained trust, eventually taking on roles of responsibility such as manager.",
          dev_date: "2025 - Present • Full-Stack Web Developer",
          dev_title: "Digital Solutions for Business",
          dev_desc: "After several years in responsible roles that forged my discipline and problem-solving skills, today I help local businesses and small companies improve their online presence with modern and functional solutions. My goal is not just to create websites, but useful tools that bring concrete results."
        }
      },
      contact_page: {
        title_sm: "Contact me...",
        title: "Have a project in mind?",
        description: "If you want to improve your online presence or create a website for your business, contact me and let's talk about it.",
        social: {
          title: "My Socials"
        },
        form: {
          name_label: "Name",
          name_placeholder: "Your name",
          email_label: "Email",
          email_placeholder: "Your email address",
          message_label: "Message",
          message_placeholder: "How can I help you?",
          send_button: "Send Message"
        }
      },
      sidebar: {
        home: "Home",
        projects: "Projects",
        contact: "Contact"
      },
      projects_page: {
        title_sm: "My Work",
        title: "Featured Projects",
        description: "Here is a selection of projects carried out during my training. Each card represents a challenge faced, new technologies learned, and solutions implemented to turn ideas into functional code.",
        view_project: "View Project",
        coming_soon: "Coming soon",
        back_to_home: "Back to Home",
        projects: {
          allocine: {
            title: "AlloCiné Clone",
            description: "A web platform for searching movies and TV series. Favorites management, dynamic search, and pagination integrating the public TMDB API."
          },
          lol: {
            title: "League of Legends API",
            description: "Interactive frontend application that leverages the official League of Legends API to explore game champions, stats, and abilities."
          },
          nomadehub: {
            title: "Nomade Hub (Final Project)",
            description: "Full-stack platform for digital nomads. Allows you to search for accommodation, read/write reviews, and find remote work opportunities."
          },
          users: {
            title: "User Management",
            description: "Backend and frontend authentication system with registration, secure login, password encryption (Bcrypt), and token management (JWT)."
          }
        }
      }
    }
  },
  fr: {
    translation: {
      header: {
        downloadCV: "Télécharger CV",
        viewCV: "Voir mon CV",
        alertCV: "À l'avenir, le téléchargement de votre CV PDF commencera ici !"
      },
      home: {
        greeting: "Bonjour, je suis",
        role_prefix: "Développeur",
        role_suffix: "Web Full-Stack.",
        tagline: "Je vous aide à transformer votre présence en ligne en clients réels",
        description: "Je développe des solutions sur mesure avec React et Node.js : des sites performants, responsives et conçus pour convertir les visiteurs en clients.",
        availability: "Prêt à rejoindre votre équipe en alternance",
        cta_hero: "Parlons de votre projet",
        languages: {
          it: { name: "Italien", level: "(Maternel)" },
          fr: { name: "Français", level: "(Courant)" },
          en: { name: "Anglais", level: "(Technique)" }
        }
      },
      skills: {
        title: "Comment puis-je vous aider...",
        cards: {
          frontend: { title: "Sites Web Professionnels", desc: "Création de sites modernes et rapides pour les entreprises locales qui souhaitent plus de clients en ligne." },
          uiux: { title: "Design & UX Optimisée", desc: "Interfaces intuitives et mobile-first, conçues pour maximiser la conversion des utilisateurs." },
          backend: { title: "App Web sur Mesure", desc: "Développement d'applications web personnalisées pour automatiser vos processus métier." },
          database: { title: "API & Gestion de Données", desc: "Intégration de systèmes et de bases de données solides pour une gestion fluide des informations." },
          ai: { title: "Solutions avec l'IA", desc: "Exploitation de l'Intelligence Artificielle pour accélérer le développement et offrir des fonctionnalités avancées." },
          tools: { title: "Performance & SEO", desc: "Optimisation de la vitesse et référencement pour garantir une visibilité et des résultats concrets." }
        }
      },
      projects_overview: {
        title: "Mes Projets...",
        stats: { projects: "Projets Réalisés", experience: "Mois d'Expérience", techs: "Technologies Étudiées" },
        button: "Voir mes Projets"
      },
      footer: {
        sections: { title: "Sections", home: "Accueil", about: "À propos", projects: "Projets" },
        pages: { title: "Pages", all_projects: "Tous les projets", cv: "Curriculum Vitae", contact: "Me contacter" },
        contact: { title: "Contact", linkedin: "LinkedIn", github: "GitHub", email: "E-mail" },
        copyright: "Giuseppe Saia. Tous droits réservés.",
        developed_with: "Développé avec React & Tailwind CSS"
      },
      about: {
        title_sm: "À propos de moi...",
        title: "De la poêle au Code : Mon histoire de reconversion",
        image_alt: "Cuisiner le Code et la Psychologie",
        timeline: {
          edu_date: "2006 - 2012 • Université de Turin (Bac+5)",
          edu_title: "Psychologie du travail et des organisations",
          edu_desc: "Au cours de ces années, j'ai étudié l'esprit humain, la dynamique de groupe et le comportement organisationnel. J'ai appris à comprendre les gens, à communiquer efficacement et à résoudre des problèmes complexes. Ces compétences se sont avérées inestimables tout au long de ma vie.",
          work_date: "2018 - 2025 • Manager de restaurant (Cadre)",
          work_title: "Que l'aventure commence !",
          work_desc: "J'ai déménagé en France à la recherche de nouvelles expériences, poussé par l'envie de découvrir et de me mettre à l'épreuve. J'ai commencé à travailler dans différents restaurants, où, grâce à ma détermination et à mon esprit de sacrifice, j'ai rapidement gagné en confiance, pour finalement assumer des postes à responsabilité comme celui de manager.",
          dev_date: "2025 - Présent • Développeur Web Full-Stack",
          dev_title: "Solutions Numériques pour le Business",
          dev_desc: "Après plusieurs années dans des postes à responsabilité qui ont forgé ma discipline et mes capacités de résolution de problèmes, j'aide aujourd'hui les entreprises locales et les petites sociétés à améliorer leur présence en ligne avec des solutions modernes et fonctionnelles. Mon objectif n'est pas seulement de créer des sites, mais des outils utiles qui apportent des résultats concrets."
        }
      },
      contact_page: {
        title_sm: "Me contacter...",
        title: "Vous avez un projet en tête ?",
        description: "Si vous souhaitez améliorer votre présence en ligne ou créer un site pour votre entreprise, contactez-moi et parlons-en ensemble.",
        social: {
          title: "Mes Réseaux Sociaux"
        },
        form: {
          name_label: "Nom",
          name_placeholder: "Votre nom",
          email_label: "E-mail",
          email_placeholder: "Votre adresse e-mail",
          message_label: "Message",
          message_placeholder: "Comment puis-je vous aider ?",
          send_button: "Envoyer le Message"
        }
      },
      sidebar: {
        home: "Accueil",
        projects: "Projets",
        contact: "Contact"
      },
      projects_page: {
        title_sm: "Mes Travaux",
        title: "Projets en Vedette",
        description: "Voici une sélection de projets réalisés lors de ma formation. Chaque carte représente un défi relevé, de nouvelles technologies apprises et des solutions mises en œuvre pour transformer des idées en code fonctionnel.",
        view_project: "Voir le Projet",
        coming_soon: "Bientôt disponible",
        back_to_home: "Retour à l'Accueil",
        projects: {
          allocine: {
            title: "Clone d'AlloCiné",
            description: "Une plateforme web pour la recherche de films et de séries TV. Gestion des favoris, recherche dynamique et pagination intégrant l'API publique de TMDB."
          },
          lol: {
            title: "API League of Legends",
            description: "Application frontend interactive exploitant l'API officielle de League of Legends pour explorer les champions, les statistiques et les capacités du jeu."
          },
          nomadehub: {
            title: "Nomade Hub (Projet d'Examen)",
            description: "Plateforme full-stack pour les nomades numériques. Permet de rechercher un logement, de lire/écrire des avis et de trouver des opportunités de travail à distance."
          },
          users: {
            title: "Gestion des Utilisateurs",
            description: "Système d'authentification backend et frontend avec inscription, connexion sécurisée, cryptage de mots de passe (Bcrypt) et gestion des jetons (JWT)."
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next) // Passa i18n a react-i18next
  .init({
    resources,
    lng: "it", // Lingua di default all'apertura del sito
    fallbackLng: "en", // Se manca una traduzione, usa l'inglese
    interpolation: {
      escapeValue: false // React protegge già dagli attacchi XSS
    }
  });

export default i18n;