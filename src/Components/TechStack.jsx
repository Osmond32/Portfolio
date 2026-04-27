// src/Components/TechStack.jsx
const technologies = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/white' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'MUI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/white' },
 
  { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
  { name: 'Antigravity', icon: 'https://cdn.simpleicons.org/probot/00E5FF' }, // Il mio logo personalizzato per te!
];

const TechStack = () => {
  // Duplichiamo 4 volte per garantire lo scorrimento infinito
  const duplicatedTechs = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    // Questo trucco CSS lo forza a coprire tutto lo schermo, uscendo dalla max-w-6xl
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-dark-surface/90 border-y border-gray-800 py-3 mt-20">
      
      {/* Nastro scorrevole */}
      <div className="flex animate-marquee whitespace-nowrap min-w-max gap-8 px-4 items-center hover:[animation-play-state:paused]">
        
        {duplicatedTechs.map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`} 
            className="flex items-center gap-4 bg-dark/80 px-6 py-3 rounded-full border border-gray-800 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer"
          >
            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
            <span className="text-gray-300 font-semibold text-base tracking-wide">
              {tech.name}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default TechStack;
