/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // adding new animation
      // keyframes - are what are used to actually implement an animation
      keyframes: {
        shimmer: {
          // transform: 'translateX(100%)' - move an Element 100% to the right hand side
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite', // find the top 'shimmer', play it over a span of 1.5 sec
      },
    },
  },
  plugins: [],
};
