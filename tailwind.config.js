/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1025px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '520px' }
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        source: 'Source Sans Pro, sans-serif'
      },
      colors: {
        teal: {
          400: '#72D3A7',
          500: '#22E18C',
          900: '#253240',
          700: '#3B4856',
          800: '#134e4a'
        },
        cyan: {
          600: '#253240',
          700: '#1B2634',
          800: '#161e2a',
          900: '#080c10'
        }
      }
    }
  },
  plugins: []
}
