# Alitiora Initiative

Portal for every public repository under [Alitiora Initiative](https://github.com/Alitiora-Initiative).

| | |
|---|---|
| **Live** | [alitiora-initiative.vercel.app](https://alitiora-initiative.vercel.app) |
| **Operator** | Joseph Mushelle Nyingeh, Kenya |
| **Contact** | [jaymnyon@gmail.com](mailto:jaymnyon@gmail.com) |

## Pages

Home, Products, Stack, About, Contact. `/work` redirects to Products.

## Linked products

| Product | Code | Live |
|---|---|---|
| Space Ledger | [Space-Ledger](https://github.com/Alitiora-Initiative/Space-Ledger) | [space-ledger-alitiora.vercel.app](https://space-ledger-alitiora.vercel.app) |
| MIRA | [MIRA](https://github.com/Alitiora-Initiative/MIRA) | [web-dashboard-jolse.vercel.app](https://web-dashboard-jolse.vercel.app) |
| This site | this repository | [alitiora-initiative.vercel.app](https://alitiora-initiative.vercel.app) |
| Org profile | [.github](https://github.com/Alitiora-Initiative/.github) | [github.com/Alitiora-Initiative](https://github.com/Alitiora-Initiative) |

Repo counts on the home page are read from the public GitHub API. If that call fails, the page falls back to this catalog.

## Local

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run build
```

Node 22. Pushes to `main` run [.github/workflows/ci.yml](.github/workflows/ci.yml). Vercel Hobby should redeploy from the same branch when the project is connected to this repository.
