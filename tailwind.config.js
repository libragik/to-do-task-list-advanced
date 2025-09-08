/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0D1B2A',
        'dark-secondary': '#1B263B',
        'dark-tertiary': '#415A77',
        'dark-accent': '#778DA9',
        'dark-text-primary': '#E0E1DD',
        'dark-text-secondary': '#BDBDBD',
      },
    },
  },
  plugins: [],
};
