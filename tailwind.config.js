module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    safelist: ['w-1/2', 'w-1/3', 'w-1/4']
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
