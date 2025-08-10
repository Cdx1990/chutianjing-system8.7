// Tailwind CSS configuration
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#38bdf8',
          600: '#0ea5e9',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(56,189,248,0.5)'
      }
    },
  },
  plugins: [forms, typography],
}