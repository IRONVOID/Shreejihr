/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fc',
          100: '#e1ecf8',
          200: '#c2d9f2',
          300: '#94beea',
          400: '#5e9de0',
          500: '#387dd4',
          600: '#2361b9',
          700: '#1c4d96',
          800: '#1a427c',
          850: '#122c54',
          900: '#0b1f3f',
          950: '#061124',
        },
        gold: {
          50: '#fdfbf2',
          100: '#faf3dd',
          200: '#f3e3b3',
          300: '#eacd83',
          400: '#deb355',
          500: '#c9a227',
          600: '#b0861c',
          700: '#8c6517',
          800: '#735019',
          900: '#61421a',
          950: '#38230b',
        },
        cream: {
          50: '#FDFBF2',
          100: '#FAF2D6', // Authentic mild golden cream (from logo)
          200: '#F4E7BD', // Rich mild gold cream section
          300: '#DFBF74', // Mild gold hairline border
          400: '#D4AF37', // Metallic mild gold
          500: '#C9A227', // Logo vibrant gold
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(201, 162, 39, 0.15)',
        'gold-md': '0 4px 20px rgba(201, 162, 39, 0.25)',
        'gold-lg': '0 10px 30px rgba(201, 162, 39, 0.3)',
        'navy-lg': '0 15px 35px -5px rgba(11, 31, 63, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
