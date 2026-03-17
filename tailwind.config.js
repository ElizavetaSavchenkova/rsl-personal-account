/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gos-blue': '#0d4cd3',
        'gos-blue-hover': '#0039a8',
        'gos-bg': '#f2f3f7',
        'gos-text': '#222222',
        'gos-gray': '#8590a6',
      },
      fontFamily: {
        sans: ['Lato', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
