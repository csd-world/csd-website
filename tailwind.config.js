const textShadow = require('tailwindcss-textshadow')
const Color = require('color')

const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
  mode: 'jit',
  plugins: [
    textShadow
  ],
  purge: [
    'node_modules/tv-toast/dist/tv-*.umd.min.js',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      borderRadius: {
        '1/2': '50%',
        '1/4': '25%'
      },
      padding: {
        '1/2': '50%',
        '1/4': '25%',
        '1/6': '16.667%',
        '1/8': '12.5%',
        '1/10': '10%',
        '1/12': '8.333%',
        'full': '100%',
      },
      colors: {
        primary: {
          DEFAULT: '#5222d0',
          darker: darken('#5222d0', 0.1),
          lighter: '#8F94FB'
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