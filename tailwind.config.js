/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F1EB',
          dark: '#E8DDD4',
        },
        coffee: {
          light: '#FD9446', // PANTONE 2011 C (Orange)
          DEFAULT: '#34657E', // PANTONE 2160 C (Blue)
        }
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}