<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/tareqitos/yamedame/blob/main/public/logo/dark-mode-logo.png">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/tareqitos/yamedame/blob/main/public/logo/light-mode-logo.png">
    <img alt="Yamedame Logo" src="https://github.com/tareqitos/yamedame/blob/main/public/logo/light-mode-logo.png" width="500">
  </picture>
</p>

<p align="center">
  <strong>Don't give up! Don't stop learning Japanese!</strong><br>
  A free, curated collection of Japanese learning resources for every level.
</p>

<p align="center">
  <a href="https://yameda.me">🌐 Website</a> •
  <a href="https://discord.gg/QW5QXf3YqX">💬 Discord</a> •
  <a href="https://ko-fi.com/H2H0QZVAZ">☕ Support</a>
</p>

---

**Yamedame** (やめだめ) combines *yame* (やめる, "to stop") and *dame* (だめ, "no good"): **"Don't stop!"**

Hundreds of resources (dictionaries, kanji, grammar, reading, media, games, apps…) with search, categories, a beginner page, local favorites with JSON import/export, and dark mode.

## Getting started

Built with Next.js, TypeScript and Tailwind CSS.

```bash
git clone https://github.com/tareqitos/yamedame.git
cd yamedame
npm install
npm run dev
```

Then open http://localhost:3000.

Resources come from a private API. To load them locally, add the URL and an API key to `.env.local` (ask on [Discord](https://discord.gg/QW5QXf3YqX)):

```env
NEXT_PUBLIC_API_URL=...
API_KEY=...
```

## Contributing

Pull requests are welcome. Fork the repo and open a PR.

## License

MIT. See `LICENSE`.
