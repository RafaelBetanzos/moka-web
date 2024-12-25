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
        gray: "var(--gray-color)",
        blackcolor: "var(--black-color)",
        card: "var(--card-color)",
        secondcard: "var(--second-card-color)",
        whitecolor: "var(--white-color)",
      },
      backgroundImage: {
        "hero-pattern": "url('/Plants.jpeg')",
        "background-brain": "url('/background-brain.svg')",
        leafs: "url('/Leafs.svg')",
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
