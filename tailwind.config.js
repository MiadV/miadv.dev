const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx,html}'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      height: {
        screen: 'calc(var(--vh, 1vh) * 100)',
      },
      maxHeight: {
        screen: 'calc(var(--vh, 1vh) * 100)',
      },
      minHeight: {
        screen: 'calc(var(--vh, 1vh) * 100)',
      },
      typography: (_theme) => ({
        DEFAULT: {
          css: {
            'h2,h3,h4': {
              'scroll-margin-top': defaultTheme.spacing[16],
            },
          },
        },
        dark: {
          css: {
            'h2,h3,h4': {
              'scroll-margin-top': defaultTheme.spacing[16],
            },
          },
        },
      }),
    },
  },
};
