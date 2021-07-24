const textShadow = require('tailwindcss-textshadow')

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
        }
      }
    }
}