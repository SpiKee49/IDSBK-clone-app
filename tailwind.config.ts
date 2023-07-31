/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: { DEFAULT: '#00a6e3', 400: '#0080ff' },
        secondary: '#aaaaaa',
      },
    },
  },
  plugins: [],
};
