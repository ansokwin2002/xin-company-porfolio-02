/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(239, 68, 68, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        'button': 'var(--button-border-radius)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(90deg, var(--button-gradient-start) 0%, var(--button-gradient-end) 100%)',
        'gradient-gold': 'linear-gradient(90deg, #FACC15 0%, #D97706 100%)', // from-yellow-400 to-amber-700
      },
      backgroundSize: {
        'hero-sm': 'auto 40%',
        'hero-md': 'auto 55%',
      },
      backgroundPosition: {
        'hero-pos-sm': 'center 80%',
        'hero-pos-md': 'center 60%',
      },
      boxShadow: {
        'button': 'var(--button-shadow-offset-x) var(--button-shadow-offset-y) var(--button-shadow-blur-radius) var(--button-shadow-color)',
      },
      colors: {
        gold: 'var(--color-gold)',
      },
      fontFamily: {
        siemreap: ['Siemreap', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
