# Apex Monorepo

- Multiple apps deployed
- Internal packages as shared dependencies
- Changesets Bot for release management
- Renovate Bot to keep dependencies automatically up-to-date

### Apps and Packages 🚗

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities 🤹

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [changesets](https://github.com/changesets/changesets) for managing releases according to SemVer
- [pnpm](https://pnpm.io) for managing Node.js packages

### Usage

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

### Remote Caching ☁️

Besides local caching, Turbo can also cache build artifacts in the cloud and share across members of a team and environments. The smallest setup for Remote Caching is with [Vercel](https://turborepo.org/docs/core-concepts/remote-caching#vercel).

## Use Remote Caching on Deploys

When using Turbo CLI it will automatically

## Useful Links 📚

Learn more about the power of Turborepo:

- [Turborepo Docs](https://turborepo.org/docs)

---

Built on top of [Turborepo Starter](https://github.com/vercel/turborepo/tree/main/examples/basic)
