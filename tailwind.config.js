module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00E5FF',
        dark: '#0A0A0A',
        'dark-surface': '#121212',
        light: '#F5F5F5'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        signature: ['"Caveat"', 'cursive'],
      },
      // --- QUESTE SONO LE ANIMAZIONI DA AGGIUNGERE ---
      animation: {
        'marquee': 'marquee 60s linear infinite', // Velocità della striscia (aumenta i secondi per rallentare)
        'floating': 'floating 6s ease-in-out infinite', // Animazione foto fluttuante
        'shine': 'shine 13s linear infinite', // Animazione scintillio
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Si sposta di metà e riparte senza scatti
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, // Si alza dolcemente
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        }
      }
      // ---------------------------------------------
    },
  },
  plugins: [],
};
