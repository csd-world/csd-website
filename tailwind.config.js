const textShadow = require('tailwindcss-textshadow')
const Color = require('color')

const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
  plugins: [
    textShadow
  ],
    theme: {
      extend: {
        borderRadius: {
          '1/2': '50%'
        },
        padding: {
          '1/2': '50%',
          'full': '100%',
        },
        colors: {
          primary: {
            DEFAULT: '#5222d0',
            darker: darken('#5222d0', 0.05)
          },
          info: {
            DEFAULT: 'rgba(0, 0, 0, 0.2)',
            darker: 'rgba(0, 0, 0, 0.25)'
          }
        },
        minWidth: {
          '32': '8rem'
        }
      }
    }
}