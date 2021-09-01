module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'green': '#1DB954',
                'dark': '#121212',
                'light': '#282828',
                'lightest': '#B3B3B3',
                'darkest': '#191414',
                'bg': '#212121',
                'alo': '#535353',
                'time': '#b3b3b3'
            },
            boxShadow: {
                default: '0 16px 24px rgba(0,0,0,.3),0 6px 8px rgba(0,0,0,.2)'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}