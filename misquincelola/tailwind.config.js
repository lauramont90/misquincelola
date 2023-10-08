module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MiFuente', 'sans'], // 'MiFuente' debe coincidir con el nombre de la fuente definido en @font-face
        customa: ['MiFuenteDos', 'sans'], // 'MiFuente' debe coincidir con el nombre de la fuente definido en @font-face
      },
      colors: {
        "backg": "#ffeedd",
        "backgr": "#fff8f0",
        "letter": "#82815B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
