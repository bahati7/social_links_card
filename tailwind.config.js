/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green: 'hsl(75, 94%, 57%)',
        white: 'hsl(0, 0%, 100%)',
       grey700: 'hsl(0, 0%, 20%)',
       grey800: 'hsl(0, 0%, 12%)',
       grey900: 'hsl(0, 0%, 8%)',

      }
    },
  },
  plugins: [],
}