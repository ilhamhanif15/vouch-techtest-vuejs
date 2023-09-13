/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#5DB075'
        },
        secondary: {
          light: '#f6f6f6',
          darker: '#e8e8e8'
        }
      }
    },
  },
  plugins: [],
}

