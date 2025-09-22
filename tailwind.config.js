/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans Arabic', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'sans-serif'],
      },
      colors: {
        pink: {
          50: '#ffe5ec',
          100: '#ffccd9',
          200: '#ff99b3',
          300: '#ff8fab',
          400: '#ff6693',
          500: '#ff4d7a',
          600: '#cc3d62',
          700: '#992e49',
          800: '#661f31',
          900: '#330f18',
        },
        primary: {
          50: '#ffe5ec',
          100: '#ffccd9',
          200: '#ff99b3',
          300: '#ff8fab',
          400: '#ff6693',
          500: '#ff4d7a',
          600: '#cc3d62',
          700: '#992e49',
          800: '#661f31',
          900: '#330f18',
        }
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #ffe5ec 0%, #ff8fab 100%)',
        'gradient-soft': 'linear-gradient(135deg, #ffe5ec 0%, #ffccd9 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255, 229, 236, 0.8) 0%, rgba(255, 143, 171, 0.8) 100%)',
      }
    },
  },
  plugins: [],
};
