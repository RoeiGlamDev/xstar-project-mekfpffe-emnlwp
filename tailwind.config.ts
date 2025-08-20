import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // specify the paths to all of your components
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FFC0CB', // light pink
          DEFAULT: '#FF69B4', // hot pink
          dark: '#FF1493', // deep pink
        },
        white: '#FFFFFF', // white color
      },
      fontFamily: {
        serif: ['Georgia', 'serif'], // elegant serif font
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'], // clean sans-serif font
      },
    },
  },
  plugins: [],
});