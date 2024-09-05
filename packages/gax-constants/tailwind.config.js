/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      maxWidth: {
        wrapper: '1280px',
      },
    },
  },
  plugins: [],
};
