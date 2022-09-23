# Docs Workspace

This is a standard Remix app with a few adjustments to use modules from within the monorepo.

## Configuration for Monorepo

The `remix.config.js` uses 2 keys to adjust the development workflow.

- `watchPaths`: to track changes in packages outside of the workspace.

- `serverDependenciesToBundle`: so packages inside the monorepo still work with Hot-Reload and Fast-Refresh even if they export ESM modules.
