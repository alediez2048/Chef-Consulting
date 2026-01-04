/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        'deep-black': '#0A0A0A',
        'charcoal': '#1A1A1A',
        'warm-gray': '#4A4A4A',
        'mid-gray': '#888888',
        'light-gray': '#D4D4D4',
        'cream': '#FAFAF8',

        // Accents
        'burnt-sienna': '#8B4513',
        'olive': '#3F3F2A',
        'copper': '#B87333',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2rem, 4vw, 4rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.3' }],
        'lead': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.6' }],
        'body': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.8' }],
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 12rem)',
        'section-sm': 'clamp(3rem, 6vw, 8rem)',
      },
    },
  },
  plugins: [],
}
