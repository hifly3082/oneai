/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        buch: ['Soenhe Buch', 'sans-serif'],
        dreiviertelfett: ['Soenhe Dreiviertelfett', 'sans-serif'],
        kraftig: ['Soenhe Kraftig', 'sans-serif'],
        sfpro: ['SF Pro Display', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: '#6600FF',
        secondary: '#00CC99',
        light: '#FCEFF9',
        text: '#080708',
        danger: '#FC440F',
        white2: '#FFF7FC66',
        white1: '#FFFFFF66',
        white: '#FFFFFF00',
        dark: '#080F0F',
        shade: '#EEE5E9',
        accent: '#6600FF66',
        auth: '#F0E7ED',
        signin: '#FFF7FC'
      },
      boxShadow: {
        sign1: '0px 0px 10px #6600FF66',
        sign2: '0 0 20px #08070880',
        card: 'inset 3px 3px 6px #EEE5E9',
        result: '0px 0px 10px #5FBB9780'
      },
      backgroundColor: {
        card: 'linear-gradient(140deg, #FFF7FC66 0%, #FFFFFF66 0%, #FFFFFF00 100%)'
      }
    }
  },
  plugins: []
}
