module.exports = {
  purge: {
    enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1,
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      extend: {
         boxShadow: {
          'gray-1': '0px 0px 20px rgb(0 0 0 / 30%)',
         },
         borderColor: theme => ({
          ...theme('colors'),
         })
      },
       backgroundColor: theme => ({
        ...theme('colors'),
        'brown1': '#97918a',
       }),
       textColor:  theme => ({
        ...theme('colors')
       }),
       
    },
  },
  variants: {},
  plugins: [],
}
