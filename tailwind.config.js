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
        'marquee': 'marquee 60s linear infinite',
        'floating': 'floating 6s ease-in-out infinite',
        'shine': 'shine 13s linear infinite',
        'fadeInUp': 'fadeInUp 0.7s ease-out both',
        'fadeInUp-d1': 'fadeInUp 0.7s ease-out 0.15s both',
        'fadeInUp-d2': 'fadeInUp 0.7s ease-out 0.30s both',
        'fadeInUp-d3': 'fadeInUp 0.7s ease-out 0.45s both',
        'fadeInUp-d4': 'fadeInUp 0.7s ease-out 0.60s both',
        'fadeInUp-d5': 'fadeInUp 0.7s ease-out 0.75s both',
        'fadeIn': 'fadeIn 0.8s ease-out 0.9s both',
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
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
      // ---------------------------------------------
    },
  },
  plugins: [],
};
