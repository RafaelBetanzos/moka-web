// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    optimizeDeps: {
      include: ["react", "react-dom"],
    },
  },
  env: {
    schema: {
      VITE_BASE_MOKA_URL: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
});
