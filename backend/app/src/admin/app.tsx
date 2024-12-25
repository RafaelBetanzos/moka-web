import type { StrapiApp } from "@strapi/strapi/admin"

export default {
  config: {
    tutorials: false,
    locales: [],
  },
  bootstrap() {},
  register(app: StrapiApp) {
    const indexRoute = app.router.routes.find(({ index }) => index)
    if (!indexRoute) throw new Error("unable to find index page")
    indexRoute.lazy = async () => {
      const { Homepage } = await import("./Homepage")
      return { Component: Homepage }
    }
  },
}