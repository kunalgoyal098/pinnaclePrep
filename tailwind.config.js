/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B2D42',
        accent: '#FFDD7C',
        purple: '#4A1D96',
        testimonialBorder: '#FF731D'
      },
      fontFamily: {
        'abyssinica': ['Abyssinica SIL', 'serif'],
        'zilla': ['Zilla Slab', 'serif'],
        'fredoka': ['Fredoka', 'sans-serif'],
        'georgia': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
