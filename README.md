# Karst VPN Landing Page

Landing page for Karst VPN, a VLESS-link and subscription client for Windows and Android.

Stack: React, TypeScript, Vite, vanilla CSS. Package manager: pnpm.

## Development

```bash
pnpm dev
```

Dev server is bound to `127.0.0.1`.

## Build

```bash
pnpm build
```

Outputs static files to `dist/`.

## Preview

```bash
pnpm preview
```

Serves the production build locally.

## Deploy to GitHub Pages

```bash
pnpm run deploy
```

Builds the project and pushes `dist/` to the `gh-pages` branch via the `gh-pages` package.
