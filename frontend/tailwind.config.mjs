/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        navbar: "var(--navbar-color)",
        graycolor: "var(--gray-color)",
        blackcolor: "var(--black-color)",
        card: "var(--card-color)",
        secondcard: "var(--second-card-color)",
        whitecolor: "var(--white-color)",
        secondgray: "var(--second-gray)",
      },
      screens: {
        xl: "1920px",
        lg: "1280px",
      },
      backgroundImage: {
        "hero-pattern": "url('/Plants.jpeg')",
        "background-brain": "url('/background-brain.svg')",
        leafs: "url('/Leafs.svg')",
        "custom-gradient":
          "linear-gradient(180deg, rgba(237, 237, 237, 0.16) 0%, rgba(133, 188, 170, 0.36) 33.5%, rgba(143, 192, 169, 0.4) 54%, rgba(172, 203, 177, 0.36) 75%, rgba(237, 237, 237, 0.16) 100%)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "100%": "100%",
        16: "4rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
