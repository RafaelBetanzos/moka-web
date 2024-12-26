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
          "linear-gradient(180deg, #68B0AB 0%, #78B7AA 34%, #86BCA9 54.5%, #8FC0A9 68.5%, #ACCBB1 100%)",
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
  plugins: [],
};
