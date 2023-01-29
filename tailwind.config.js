/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
         'ps': "linear-gradient(90deg, rgba(56,69,190,0.7035189075630253) 100%, rgba(204,206,226,0.25253851540616246) 100%), url('/img/ps.jpg')",
         'xbox': "linear-gradient(90deg, rgba(85,86,93,0.7983193277310925) 100%, rgba(204,206,226,0.25253851540616246) 100%), url('/img/xbox.jpg')"
      },
      fontFamily: {
        'lato': "'Lato', 'sans-serif'"
      }
    },
  },
  plugins: [],
}
