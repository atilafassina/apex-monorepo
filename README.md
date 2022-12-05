<img src="/apex.png" alt="Apex Monorepo logo" width="200" align="right"/>

# Apex Monorepo

- Automatic: Release, Changelog, Publishing, Dependency Updates
- Internal and External Packages
- Fast-Refresh and Hot-Reloading for Remix and Next.js
- ESM and CJS support for published packages

[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/atilafassina/apex-monorepo)

## Workspaces 🚗

| Name                 | Type         | Description                                        |
| -------------------- | ------------ | -------------------------------------------------- |
| Docs                 | App          | [Remix](https://remix.run) app                     |
| Web                  | App          | [Next.js](https://nextjs.org) app                  |
| UI                   | External Pkg | Component library published on NPM                 |
| eslint-config-custom | Internal Pkg | shared [ESLint](https://eslint.org/) configuration |
| tsconfig             | Internal Pkg | shared TypeScript configuration                    |

## Tooling 🤹

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [changesets](https://github.com/changesets/changesets) for managing releases according to SemVer
- [pnpm](https://pnpm.io) for managing Node.js packages
- [tsup](https://tsup.egoist.dev/) for easily bundling TypeScript packages

## Bots 🤖

| Name       | Links                                                                                                                   | Reason                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Renovate   | [Marketplace](https://github.com/marketplace/renovate) / [Docs](https://docs.renovatebot.com/configuration-options/)    | Pin and auto-update dependencies                                                                     |
| Kodiak     | [Marketplace](https://github.com/marketplace/kodiakhq#pricing-and-setup) / [Docs](https://kodiakhq.com/docs/quickstart) | Automerge selected Pull Requests (including minor and patch dependency updates)                      |
| Changesets | [Marketplace](https://github.com/apps/changeset-bot) / [Docs](https://github.com/changesets/changesets)                 | Handle [SemVer](https://semver.org/), changelog generation, and publishing for **External Packages** |

## Usage 🤹

Remember to set up access for the Bots mentioned above by visiting their Github Marketplace pages and enabling them.

> ⚠️ for Kodiak it is also important to enforce Branch Protection rules for `main` in your repository settings

Once that is done, install dependencies from root.

```sh
pnpm install
```

And to build every package and app in the monorepo:

```sh
pnpm build
```

To develop all apps and packages:

```sh
pnpm dev
```

Whenever neccessary to run only a certain set of workspaces, use the `--filter` flag:

```sh
pnpm dev --filter workspace-name
```

## Remote Caching ☁️

Besides local caching, Turbo can also cache build artifacts in the cloud and share across members of a team and environments. The quickest setup for Turbo's Remote Caching is with [Vercel](https://turborepo.org/docs/core-concepts/remote-caching#vercel).

## Deploying Apps 🚀

Remote Caching will skip processes when there are no changes. In order to make the best use of that, it is recommended to use Turbo as the task runner for every task in all environments.

So, when deploying your apps it is important to override the inferred build tasks from the platform and run them from root. For example, usually your `build` script declared in `package.json` will run either `remix build` or `next build`. For the apps within an Apex Monorepo it's best to change directory back to root of the monorepo and run the task from there with the filter.

For example, if your app is localted at `/apps/app-workspace-name` the build command in the server platform will be:

```sh
cd ../../ && pnpm build --filter app-workspace-name
```

## Useful Links 📚

- [Turborepo Docs](https://turborepo.org/docs)
