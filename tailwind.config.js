/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
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
