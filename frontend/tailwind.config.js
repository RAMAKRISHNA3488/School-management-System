/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a', // Example base dark color often used
        primary: '#3b82f6', // Example primary
        secondary: '#64748b',
        muted: '#9ca3af',
      }
    },
  },
  plugins: [],
}
