<img src="/apex.png" alt="Apex Monorepo logo" width="200" align="right"/>

# Apex Monorepo

- Automatic: Release, Changelog, Publishing, Dependency Updates
- Zero Installation PRs with [Stackblitz CodeFlow](https://stackblitz.com/codeflow)
- Internal and External Packages
- ESM and CJS support for published packages
- Setup ready for:
  - Next.js
  - Remix
  - Any [Vite](https://vite.dev) based app.
  - Astro (coming soon 🚧)

[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/atilafassina/apex-monorepo)

## Workspaces 🚗

| Name                 | Type         | Description                                        |
| -------------------- | ------------ | -------------------------------------------------- |
| Remix                | App          | with module transpilation.                         |
| Nextjs               | App          | with module transpilation in dev.                  |
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

## Expanding 📦

When creating a new internal package, it's important to set overrides for `pnpm` on the [stackblitz/codeflow.json](/.stackblitz/codeflow.json).

```json
{
  "pnpm": {
    "overrides": {
      "ui": "./packages/ui",
      "tsconfig": "./packages/tsconfig",
      "eslint-config-custom": "./packages/eslint-config-custom",

      "<new-pacakge-name>": "./new/package/path/from/root"
    }
  }
}
```

## Useful Links 📚

- [Nx Docs](https://nx.dev)
