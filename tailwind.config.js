module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lightGreen': '#58C27D',
        'darkGreen': '#41b168',
        'lightBlue': '#3A71FE',
        'darkBlue1': '#0142eb',
        'darkBlue2': '#084cfe',
        'grey': '#777E90',
        'lightGrey': '#B1B5C3',
        'normal': '#23262F',
        'lightWhite': '#E6E8EC',
        'blue': '#3B71FE',
        'paper': '#FCFCFD',
        'cyan': '#8BC5E5',
        'purple': '#92A5EF',
        'lightBlack': '#353945',
        'dark': '#141416'
      },
      backgroundImage: {
        'blur-black': 'linear-gradient(92.98deg, #23262F 3.54%, rgba(35, 38, 47, 0.7) 93.38%)',
        'blur-paper': 'linear-gradient(83.59deg, #FCFCFD 36.52%, rgba(252, 252, 253, 0.83) 98.8%)'
      },
    },
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'nm': '900px',
      'lg': '1024px',
      '2lg': '1179px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}