# Apex Monorepo

- Multiple apps deployed
- Internal packages as shared dependencies
- Changesets Bot for release management
- Renovate Bot to keep dependencies automatically up-to-date

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

Turbo caches build artifacts and is able to skip processes when there are no changes. To leverage that, it is recommended to use Turbo as the task runner for every task.

To build all apps and packages:

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

Besides local caching, Turbo can also cache build artifacts in the cloud and share across members of a team and environments. The smallest setup for Remote Caching is with [Vercel](https://turborepo.org/docs/core-concepts/remote-caching#vercel).

## Useful Links 📚

- [Turborepo Docs](https://turborepo.org/docs)
