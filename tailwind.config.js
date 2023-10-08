/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#081A51",
        "light-color": "rgba(255,255,255,0.18)"
      }
    },
  },
  plugins: [],
}
