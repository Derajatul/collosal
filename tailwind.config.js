/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     colors: {
      'primary': '#6016FC',
      'dark': '#0B0B22',
      'white': '#ffffff',
      'transparent': 'transparent',
      'muted': '#FFFFFF99',
      'green': '#16FCD2',
      'cardDark': '#161629',
      'highlight' : '#221048'
    },
  },
  plugins: [],
}