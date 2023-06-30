/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'head-color': '#FF007A',
        'chat-color': '#F1F1F1',
        'text-color': '#1E1E1E',
        'gray-color': '#E0E0E0',
        'button-color': '#46B455'
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}


