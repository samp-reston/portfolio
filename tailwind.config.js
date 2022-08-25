/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        body: '10.67%'
      },
      screens: {
        xs: '320px'
      },
      maxWidth: {
        'project-image': ''
      },
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#4C93E6',
        secondary: '#9658B5',
        base: '#826ECB',
        black: {
          100: '#041514',
          90: '#041514E6',
          75: '#041514BF',
          50: '#04151480',
          25: '#04151440',
          10: '#0415141A',
          5: '#0415140D'
        },
        error: '#D11A0F'
      },
      letterSpacing: {
        default: '7.5%'
      },
      fontSize: {
        socials: ['48px'],
        'socials-mobile': ['40px'],
        nav: ['21px', {
          letterSpacing: '0.075em'
        }],
        h1: ['64px', {
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }],
        h2: ['51px', {
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }],
        h3: ['41px', {
          letterSpacing: '0.05em',
          fontWeight: 'light'
        }],
        h4: ['33px', {
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }],
        h5: ['26px', {
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }],
        h6: ['21px', {
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }],
        p: ['21px', {
          lineHeight: '31.5px',
          fontWeight: 'regular'
        }],
        testimonial: ['21px', {
          lineHeight: '31.5px',
          fontWeight: 'extra-light'
        }],
        'nav-mobile': ['16.8px', {
          letterSpacing: '0.075em'
        }],
        'h1-mobile': ['51px', {
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }],
        'h2-mobile': ['41px', {
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }],
        'h3-mobile': ['33px', {
          letterSpacing: '0.05em',
          fontWeight: 'light'
        }],
        'h4-mobile': ['26px', {
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }],
        'h5-mobile': ['21px', {
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }],
        'h6-mobile': ['16.8px', {
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }],
        'p-mobile': ['16.8px', {
          lineHeight: '31.5px',
          fontWeight: 'regular'
        }],
        'testimonial-mobile': ['16.8px', {
          lineHeight: '31.5px',
          fontWeight: 'extra-light'
        }]
      }
    }
  },
  plugins: []
}
