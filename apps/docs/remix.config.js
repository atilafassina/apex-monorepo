const INTERNAL_ESM_PACKAGES = ["ui"];
const PACKAGES_PATHS = ["../../packages/ui"];

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  /**
   * Monorepo packages Remix should
   * watch for changes
   */
  watchPaths: PACKAGES_PATHS,
  /**
   * Remix Hot-Reload does not work if
   * package exports ESM, workaround
   * not needed for production
   */
  serverDependenciesToBundle:
    process.env.NODE_ENV === "development" ? [...INTERNAL_ESM_PACKAGES] : [],
};
