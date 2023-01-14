/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'greenigth': '#BCFF1F',
        'graycard': 'rgba(242, 242, 242, 0.1)',
        'ligthgray': '#BABABA',
        'progressgreen': '#BCFF1F',
        'progressgray': 'rgba(242, 242, 242, 0.2)',
        'porcentgreen': '#96CC19',
        'porcentpurple': '#8989FF'
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}
