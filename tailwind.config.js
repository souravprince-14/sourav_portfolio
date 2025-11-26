/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        python: {
          blue: '#306998',
          yellow: '#FFD43B',
          dark: '#1e293b'
        }
      }
    },
  },
  plugins: [],
}