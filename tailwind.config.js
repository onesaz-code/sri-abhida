/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e00433',
        secondary: '#124b75',
        light: '#f5f5f5',
        dark: '#212121',
        border: '#e0e0e0',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        container: '1260px',
      },
    },
  },
  plugins: [],
};
