/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
      mono: ['Poppins', 'monospace'],
      heading: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: {
        200: '#F6FAFF',
        300: '#DFEDFF',
        400: '#A0C9FE',
        500: '#88BCFD',
        600: '#71AEFD',
        700: '#59A0FC',
        800: '#3F8AFB',
        900: '#1278FB',
        DEFAULT: '#1278FB', // 500
        on: '#f4f8fd', // 50
      },
      blue: '#124069',
      red: '#B22500',
    },
    extend: {
      colors: {
        primary: {
          200: '#F6FAFF',
          300: '#DFEDFF',
          400: '#A0C9FE',
          500: '#88BCFD',
          600: '#71AEFD',
          700: '#59A0FC',
          800: '#3F8AFB',
          900: '#1278FB',
          DEFAULT: '#1278FB', // 500
          on: '#f4f8fd', // 50
        },
        blue: '#124069',
        red: '#B22500',
      },
      lineHeight: {
        hero: '4.5rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
