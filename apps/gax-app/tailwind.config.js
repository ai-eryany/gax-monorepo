/** @type {import('tailwindcss').Config} */
// TODO: test removing the packages from content, because we are at monorepo
export default {
    darkMode: 'class',
    content: [
        './src/**/*.{astro,js,ts,jsx,tsx,html}',
        '../../packages/**/*.{astro,js,ts,jsx,tsx,html}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0a192f',
                    100: '#e6ecf2', // Lightest
                    200: '#ccd9e5',
                    300: '#b3c6d8',
                    400: '#809fbf',
                    500: '#4d79a5', // Mid
                    600: '#446c95',
                    700: '#2e4763',
                    800: '#22354a',
                    900: '#0a192f', // Darkest
                },
                secondary: {
                    DEFAULT: '#d1d5db',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280', // Base gray
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827', // Darkest
                },
                accent: {
                    DEFAULT: '#db2777',
                    100: '#fce7f3', // pink-100
                    200: '#fbcfe8', // pink-200
                    300: '#f9a8d4', // pink-300
                    400: '#f472b6', // pink-400
                    500: '#ec4899', // pink-500
                    600: '#db2777', // pink-600
                    700: '#be185d', // pink-700
                    800: '#9d174d', // pink-800
                    900: '#831843', // pink-900
                },
            },
        },
    },
    plugins: [],
};
