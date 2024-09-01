/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  purge: ["./src/**/*.{html,js}", "*.{html,js}"],
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: {
          DEFAULT: "1rem", // Default padding for all breakpoints
        },
      },
      screens: {
        // Min-width breakpoints
        "sm-mobile-360": "360px", // Min-width: 260px and above
        "sm-mobile-380": "380px", // Min-width: 380px and above
        "sm-mobile-400": "400px", // Min-width: 400px and above
        "sm-mobile-420": "420px", // Min-width: 420px and above
        "sm-mobile-450": "450px", // Min-width: 450px and above
        "sm-mobile-480": "480px", // Min-width: 480px and above
        "sm-mobile-520": "520px", // Min-width: 520px and above
        "sm-mobile-610": "610px", // Min-width: 610px and above
      },
      colors: {
        primary: "#F05A2B", // Add your custom colors
        secondary: "#14171A",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(112deg, #4242FF 0%, #B225FF 100%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      borderRadius: {},
      keyframes: {},
      animation: {},
      boxShadow: {
        nav: "0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)", // Custom box shadow
      },
    },
  },
  plugins: [],
};
