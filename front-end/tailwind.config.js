/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-wood': '#C8A165',
        'red-wood' : '#C87065',
      },
    },
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '970px',
      'xl': '1280px'
    }
  },
  plugins: [],
};
