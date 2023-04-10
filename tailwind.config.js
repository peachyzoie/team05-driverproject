/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black-olive': '#37392E',
      'payne-gray': '#19647E',
      'verdigris': '#28AFB0',
      'timberwolf': '#DDCECD',
      'isabelline': '#EEE5E6',
      'white': '#FFFFFF'
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}