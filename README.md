# Karst VPN (Landing Page)

Лендинг для [Karst VPN](https://github.com/elev1e1nSure/karst-vpn) — приложения для Windows и Android, работающего с VLESS-ссылками и подписками.

Приложения:
- [Karst VPN для Android](https://github.com/elev1e1nSure/karst-vpn)
- [Karst VPN для Windows](https://github.com/elev1e1nSure/karst-vpn-desktop)

Стек: React, TypeScript, Vite, vanilla CSS. Пакетный менеджер: pnpm.

## Разработка

```bash
pnpm dev
```

Dev-сервер поднимается на `127.0.0.1`.

## Сборка

```bash
pnpm build
```

Статика собирается в `dist/`.

## Предпросмотр

```bash
pnpm preview
```

## Деплой в GitHub Pages

```bash
pnpm run deploy
```

Собирает проект и пушит `dist/` в ветку `gh-pages`.
