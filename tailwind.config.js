/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'deep-black': '#0A0A0A',
        'charcoal': '#1A1A1A',
        'warm-gray': '#4A4A4A',
        'mid-gray': '#888888',
        'light-gray': '#D4D4D4',
        'cream': '#FAFAF8',
        'pure-white': '#FFFFFF',
        'burnt-sienna': '#8B4513',
        'olive': '#3F3F2A',
        'copper': '#B87333',
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
        'section-sm': 'clamp(3rem, 8vw, 6rem)',
      },
    },
  },
  plugins: [],
}
