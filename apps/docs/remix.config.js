/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  /**
   * For Remix Hot-Reload to work,
   * all EXTERNAL packages should be added here
   */
  watchPaths: ["../../packages/ui"],
  /**
   * For Remix Hot-Reload to work, all INTERNAL packages
   * should be added here
   */
  serverDependenciesToBundle: ["ui"],
};
