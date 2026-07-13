# jsfe

This template should help get you started developing with Vue 3 in Rsbuild.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Rsbuild Configuration Reference](https://rsbuild.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## API Modes

This app supports both live and mock API modes through environment variables.

1. Copy `.env.example` to `.env.local`.
2. Set `VITE_API_MODE`:

```sh
VITE_API_MODE=mock
```

Use `mock` for local development without a backend, or `live` to call the real API.

`.env.local` is ignored by git, so it stays machine-specific.

Optional:

```sh
VITE_API_BASE_URL=http://localhost:3000
```

`VITE_API_BASE_URL` is used only in `live` mode.
