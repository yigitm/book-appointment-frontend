module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  /* eslint-disable global-require */
  plugins: [require('tailwind-scrollbar-hide')],
  /* eslint-enable global-require */
};
