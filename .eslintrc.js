module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/web/"],
    },
    remix: {
      rootDir: ["apps/docs/"],
    },
  },
};
