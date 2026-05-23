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
        pure: "var(--pure-color)",
        birch: "var(--birch-color)",
        sage: "var(--sage-color)",
        deepforest: "var(--deep-forest-color)",
        freshgreen: "var(--fresh-green-color)",
        charcoal: "var(--charcoal-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        navbar: "var(--navbar-color)",
        graycolor: "var(--gray-color)",
        blackcolor: "var(--black-color)",
        card: "var(--card-color)",
        secondcard: "var(--second-card-color)",
        whitecolor: "var(--white-color)",
        secondgray: "var(--second-gray)",
        pills: "var(--pills-color)",
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
          "linear-gradient(180deg, rgba(18, 18, 18, 0.96) 0%, rgba(19, 45, 37, 0.92) 33.5%, rgba(86, 114, 99, 0.72) 54%, rgba(110, 191, 126, 0.28) 75%, rgba(18, 18, 18, 0.96) 100%)",
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
