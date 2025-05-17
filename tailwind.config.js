/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      colors: {
        gold: {
          DEFAULT: '#FFDE5A',
          light: '#FFE88D',
          dark: '#FACF39',
          vibrant: '#FFD427',
        },
        gray: {
          DEFAULT: '#525252',
          dark: '#393939',
        },
        accent: {
          primary: '#FFDE5A',
          secondary: '#FACF39',
          dark: '#393939',
        }
      },
    },
  },
  plugins: [],
}
