/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,hbs}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '375px' },


      'md': { 'max': '768px' },


      'lg': { 'max': '1024px' },


      'xl': { 'max': '1280px' },


      '2xl': { 'max': '1920px' }

    }
  },
  plugins: [],
}
