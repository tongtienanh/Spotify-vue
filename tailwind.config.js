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
                'recommend': 'rgb(141, 103, 171)',
                'gray': '#919496',
                'font-login': '#222326',
                'login': '#616467',
                'greener': '#15883e'
            },
            fontSize: {
                'base': '16px'
            },
            boxShadow: {
                default: '0 16px 24px rgba(0,0,0,.3),0 6px 8px rgba(0,0,0,.2)',
                login: 'inset 0 0 0 2px #616467'
            },
            spacing: {
                '23': '92px'
            },
            width: {
                '3/2': '6px',
                '112': '450px',
                'phone': '375px',
                'inherit': 'inherit',
                '91': '364px',
                '75': '300px'

            },
            margin: {
                '3/2': '6px'
            },
            screens: {
                'phone': {
                    'max': '650px'
                },
                'sm': { 'min': '375px', 'max': '768px' },
                'xs': { 'max': '376px' },
                'tablet': '640px',
                // => @media (min-width: 640px) { ... }

                'laptop': { 'max': '1024px' },
                // => @media (min-width: 1024px) { ... }

                'desktop': {
                    'max': '1100px'
                },
                'medium': {
                    'max': '1300px',
                    'min': '1100px'
                }
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