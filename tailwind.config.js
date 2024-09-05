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
        "sm-mobile-550": "550px", // Min-width: 550px and above
        "sm-mobile-580": "580px", // Min-width: 580px and above
        "sm-mobile-610": "610px", // Min-width: 610px and above
      },
      colors: {
        primary: "#F05A2B", // Add your custom colors
        secondary: "#14171A",
        borderColor: "rgba(239, 239, 239, 0.00)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(112deg, #4242FF 0%, #B225FF 100%)",
        "primary-gradient-hover": "linear-gradient(112deg, #B225FF 0%, #4242FF 100%)",
        "footer-bg": "url('src/assets/image/home/footer-bg.png')",
        "browse-all-bg": "linear-gradient(90deg, #F05A2B 0%, #FA991B 100%)",
        "browse-all-bg-hover": "linear-gradient(90deg, #FA991B 0%, #F05A2B 100%)",
        "faq-gradient":
          "linear-gradient(112deg, rgba(66, 66, 255, 0.10) 0%, rgba(178, 37, 255, 0.10) 100%)",
        "about-gradient1":
          "linear-gradient(112deg, rgba(251, 118, 188, 0.30) 0%, rgba(178, 37, 255, 0.30) 100%)",
        "about-gradient2":
          "linear-gradient(112deg, rgba(66, 66, 255, 0.30) 0%, rgba(178, 37, 255, 0.30) 100%)",
        "about-gradient3":
          "linear-gradient(90deg, rgba(240, 90, 43, 0.30) 0%, rgba(250, 153, 27, 0.30) 100%)",
        "contact-gradient": "linear-gradient(112deg, #ECECFF 0%, #F8EBFF 100%)",
        "testimonial-gradient":
          "linear-gradient(112deg, rgba(71, 68, 173, 0.15) 1.36%, rgba(56, 64, 247, 0.15) 19.75%, rgba(243, 98, 53, 0.15) 38.33%, rgba(217, 60, 101, 0.15) 59.85%, rgba(178, 37, 255, 0.15) 74.98%, rgba(83, 216, 255, 0.15) 99.16%)",
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
        heroBox: "10px 10px 80px 0px rgba(0, 0, 0, 0.10)",
      },

      transitionProperty: {
        all: "all", // Custom transition for all properties
      },
      transitionDuration: {
        350: "350ms", // Custom duration of 0.35s
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out", // Custom timing function
      },
    },
  },
  plugins: [],
};
