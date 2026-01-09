/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f172a',
        'brand-accent': '#38bdf8',
        'brand-card': '#1e293b',
      }
    },
  },
  plugins: [],
}
