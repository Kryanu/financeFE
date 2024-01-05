/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{vue,js,ts}', './src/**/*.{vue,js,ts}'],
  theme: {
    
    extend: {
      colors: {
        'pastel-orange':'#EAD7B8',
        'sky-blue': '#4481FD',
        'sea-blue': '#225CD3',
        'ocean-blue': '#163F94',
        'cloud-white': '#FFFBFB',
      },
      boxShadow: {
        '3xl': '2px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

