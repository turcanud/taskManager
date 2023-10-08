/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
      },
      colors: {
        navBg: '#333435',
        sideBg: '#333435',
        boardBg: '#1e1f21',
        txtColor: '#EBF5EE',
        headings: '',
        lines: '#545556',
      }
    },
  },
  plugins: [],
}