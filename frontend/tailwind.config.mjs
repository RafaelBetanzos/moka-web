// Brand colors built from RGB channels so modifiers like bg-deepforest/75 generate CSS.
const brand = (name) => `rgb(var(--${name}-rgb) / <alpha-value>)`;

// The site uses opacity steps outside Tailwind's default scale (e.g. /7, /28, /74).
const opacityScale = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [String(i), String(i / 100)]),
);

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
        pure: brand("pure"),
        birch: brand("birch"),
        sage: brand("sage"),
        deepforest: brand("deep-forest"),
        freshgreen: brand("fresh-green"),
        charcoal: brand("charcoal"),
        // Aliases, matching the var() aliases in global.css
        primary: brand("deep-forest"),
        secondary: brand("sage"),
        navbar: brand("fresh-green"),
        graycolor: brand("birch"),
        blackcolor: brand("charcoal"),
        card: brand("sage"),
        secondcard: brand("deep-forest"),
        whitecolor: brand("pure"),
        secondgray: brand("birch"),
        pills: brand("fresh-green"),
      },
      opacity: opacityScale,
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
