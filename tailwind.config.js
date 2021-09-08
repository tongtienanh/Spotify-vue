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
                'time': '#b3b3b3',
                'recommend': 'rgb(141, 103, 171)'
            },
            boxShadow: {
                default: '0 16px 24px rgba(0,0,0,.3),0 6px 8px rgba(0,0,0,.2)'
            },
            spacing: {
                '23': '92px'
            },
            width: {
                '3/2': '6px',
            },
            screens: {
                'tablet': '640px',
                // => @media (min-width: 640px) { ... }

                'laptop': { 'max': '1024px' },
                // => @media (min-width: 1024px) { ... }

                'desktop': {
                    'max': '1100px'
                },
                // => @media (max-width: 1110px) { ... }
            },
        },
    },
    variants: {
        extend: {
            hidden: ['last']
        },
    },
    plugins: [],
}