/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxs: '320px',

      xs: '375px',

      sm: '414px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      'xxxs': '319px',

      '2xl': '1536px',

      '4xl': '1918px',

      '3xl': '1920px',
    },
  },
  extend: {
    colors: {
      primary: '#fccf3a',
      primaryDark: '#000000',
      light: '#fff',
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
