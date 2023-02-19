/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'maghony': ['Maghony'],
        'klein': ['Klein'],
        'theSeasons': ['TheSeasons'],
      },
      backgroundImage: {
        'navbarBg': "url('img/navbar.png')",
        'galleryBg': "url('img/gallery.png')",
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-7%)' },
          '50%': { transform: 'none' },
        }
      },
    },
    colors: {
      textColor: '#000',
      mainColor: '#8b7973',
      hoverColor: '#7a6862',
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
