/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1a0a1f',
        'secondary-dark': '#0A0A0A',
        'accent-purple': '#8E44AD',
        'primary-text': '#E0E0E0',
        'secondary-text': '#B8B8B8',
        'highlight-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
}
