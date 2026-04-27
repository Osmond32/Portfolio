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
        description: "Dopo anni nella ristorazione, oggi costruisco esperienze digitali: stessa precisione, disciplina, problem solving e creatività.",
        availability: "Pronto a raggiungere la vostra equipe in alternance",
        languages: {
          it: { name: "Italiano", level: "(Madrelingua)" },
          fr: { name: "Francese", level: "(Fluente)" },
          en: { name: "Inglese", level: "(Tecnico)" }
        }
      },
      skills: {
        title: "Le mie Competenze...",
        cards: {
          frontend: { title: "Frontend", desc: "Creazione di interfacce interattive e applicazioni web scalabili con focus su performance e SEO." },
          uiux: { title: "UI/UX Design", desc: "Design system scalabili e layout responsivi pixel-perfect orientati al mobile-first." },
          backend: { title: "Backend", desc: "Architetture server-side solide e API RESTful per gestire dati in modo sicuro." },
          database: { title: "Database", desc: "Disegno ottimizzato di schemi relazionali per persistenza e query veloci." },
          ai: { title: "AI & Prompt Engineering", desc: "Sfruttamento chirurgico dei LLMs per accelerare lo sviluppo e testare architetture." },
          tools: { title: "Strumenti", desc: "Integrazione delle piattaforme di versioning, design collaborativo e testing." }
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
          dev_date: "2025 - Oggi • Web developer Full-Stack (BAC+2)",
          dev_title: "Alla ricerca di nuove sfide in alternance",
          dev_desc: "La passione per l’informatica mi accompagna fin da piccolo, ma solo recentemente sono riuscito a trasformarla in un percorso concreto. Mi sono formato presso ForEach Academy attraverso un programma intensivo di 8 mesi, sviluppando competenze nello sviluppo web. Amo creare siti e servizi digitali che mettano in relazione le persone e semplifichino la loro vita quotidiana. Sono appassionato di codice e affascinato dalle potenzialità dell’intelligenza artificiale, che utilizzo per spingere continuamente i miei limiti sempre più avanti."
        }
      },
      contact_page: {
        title_sm: "Contattami...",
        title: "Lavoriamo Insieme",
        description: "Hai un progetto in mente o stai cercando un profilo come il mio per un'alternance? Scrivimi un messaggio o connettiamoci sui social!",
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
        description: "After years in the restaurant industry, today I build digital experiences: same precision, discipline, problem-solving, and creativity.",
        availability: "Ready to join your team for a work-study program (alternance)",
        languages: {
          it: { name: "Italian", level: "(Native)" },
          fr: { name: "French", level: "(Fluent)" },
          en: { name: "English", level: "(Technical)" }
        }
      },
      skills: {
        title: "My Skills...",
        cards: {
          frontend: { title: "Frontend", desc: "Creation of interactive interfaces and scalable web applications with a focus on performance and SEO." },
          uiux: { title: "UI/UX Design", desc: "Scalable design systems and pixel-perfect responsive layouts oriented towards mobile-first." },
          backend: { title: "Backend", desc: "Solid server-side architectures and RESTful APIs to securely manage data." },
          database: { title: "Database", desc: "Optimized design of relational schemas for fast queries and persistence." },
          ai: { title: "AI & Prompt Engineering", desc: "Surgical exploitation of LLMs to accelerate development and test architectures." },
          tools: { title: "Tools", desc: "Integration of versioning, collaborative design, and testing platforms." }
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
          dev_date: "2025 - Present • Full-Stack Web Developer (Associate's Degree)",
          dev_title: "Looking for new challenges in alternance",
          dev_desc: "My passion for IT has been with me since childhood, but only recently have I managed to turn it into a concrete path. I trained at ForEach Academy through an intensive 8-month program, developing web development skills. I love creating websites and digital services that connect people and simplify their daily lives. I am passionate about coding and fascinated by the potential of artificial intelligence, which I use to continuously push my limits further."
        }
      },
      contact_page: {
        title_sm: "Contact me...",
        title: "Let's Work Together",
        description: "Do you have a project in mind or are you looking for a profile like mine for a work-study program? Send me a message or let's connect on socials!",
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
        description: "Après des années dans la restauration, je construis aujourd'hui des expériences numériques : même précision, discipline, résolution de problèmes et créativité.",
        availability: "Prêt à rejoindre votre équipe en alternance",
        languages: {
          it: { name: "Italien", level: "(Maternel)" },
          fr: { name: "Français", level: "(Courant)" },
          en: { name: "Anglais", level: "(Technique)" }
        }
      },
      skills: {
        title: "Mes Compétences...",
        cards: {
          frontend: { title: "Frontend", desc: "Création d'interfaces interactives et d'applications web évolutives avec un accent sur les performances et le SEO." },
          uiux: { title: "UI/UX Design", desc: "Systèmes de design évolatifs et mises en page réactives pixel-perfect orientées mobile-first." },
          backend: { title: "Backend", desc: "Architectures côté serveur solides et API RESTful pour gérer les données de manière sécurisée." },
          database: { title: "Base de données", desc: "Conception optimisée de schémas relationnels pour la persistance et des requêtes rapides." },
          ai: { title: "IA & Prompt Engineering", desc: "Exploitation chirurgicale des LLMs pour accélérer le développement et tester les architectures." },
          tools: { title: "Outils", desc: "Intégration de plateformes de versionnage, de design collaboratif et de test." }
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
          dev_date: "2025 - Présent • Développeur Web Full-Stack (Bac+2)",
          dev_title: "À la recherche de nouveaux défis en alternance",
          dev_desc: "La passion pour l'informatique m'accompagne depuis l'enfance, mais ce n'est que récemment que j'ai pu la transformer en un parcours concret. Je me suis formé à la ForEach Academy à travers un programme intensif de 8 mois, développant des compétences en développement web. J'aime créer des sites et des services numériques qui connectent les gens et simplifient leur vie quotidienne. Je suis passionné par le code et fasciné par le potentiel de l'intelligence artificielle, que j'utilise pour repousser continuellement mes limites."
        }
      },
      contact_page: {
        title_sm: "Me contacter...",
        title: "Travaillons Ensemble",
        description: "Avez-vous un projet en tête ou cherchez-vous un profil comme le mien pour une alternance ? Envoyez-moi un message ou connectons-nous sur les réseaux sociaux !",
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