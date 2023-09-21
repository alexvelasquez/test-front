/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: { 
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1536px',
    },
  },
  plugins: [],
}
