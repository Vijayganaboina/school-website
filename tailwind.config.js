/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-blue': '#03045e',
        'brand-blue': '#0077b6',
        'brand-cyan': '#00b4d8',
        'brand-light-cyan': '#90e0ef',
        'brand-pale-cyan': '#caf0f8',
      },
    },
  },
  plugins: [],
}

