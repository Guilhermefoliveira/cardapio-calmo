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
          light: '#FD9446', // PANTONE 2011 C (Orange). Graphic details only, never text.
          DEFAULT: '#34657E', // PANTONE 2160 C (Blue)
        }
      },
      fontFamily: {
        display: ['"Oswald Variable"', '"Arial Narrow"', 'sans-serif'],
        sans: ['"Open Sans Variable"', 'system-ui', 'sans-serif'],
      },
      zIndex: {
        nav: '30',
        fab: '40',
        overlay: '50',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'fade-in-up': 'fadeInUp 1s ease-out both',
        'nudge-down': 'nudgeDown 2s ease-in-out infinite',
        'pop-in': 'popIn 0.3s ease-out 1s both',
        'sheet-up': 'sheetUp 360ms cubic-bezier(0.25, 1, 0.5, 1) both',
        'sheet-in': 'sheetIn 280ms cubic-bezier(0.25, 1, 0.5, 1) both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        nudgeDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(4px)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        sheetUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        sheetIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
