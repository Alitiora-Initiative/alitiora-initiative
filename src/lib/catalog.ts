export type Product = {
  name: string;
  repo: string;
  languages: string[];
  summary: string;
  live: string | null;
  docs: string;
  layer: string;
};

export const products: Product[] = [
  {
    name: "Space Ledger",
    repo: "Space-Ledger",
    languages: ["JavaScript", "Rust"],
    summary:
      "Solana Devnet canvas. Primary-sale bonding curve, wallet connect, and on-chain receipts. Not mainnet and not a secondary market.",
    live: "https://space-ledger-alitiora.vercel.app",
    docs: "https://github.com/Alitiora-Initiative/Space-Ledger/blob/main/README.md",
    layer: "Product",
  },
  {
    name: "MIRA",
    repo: "MIRA",
    languages: ["Python", "TypeScript"],
    summary:
      "Separate trading experiment: a Python engine and a web dashboard. Live exchange mode can lose money. It is not part of Space Ledger.",
    live: "https://web-dashboard-jolse.vercel.app",
    docs: "https://github.com/Alitiora-Initiative/MIRA/blob/master/README.md",
    layer: "Experiment",
  },
  {
    name: "Organization site",
    repo: "alitiora-initiative",
    languages: ["TypeScript"],
    summary: "This portal. Home, products, stack, and contact for every public repository.",
    live: "https://alitiora-initiative.vercel.app",
    docs: "https://github.com/Alitiora-Initiative/alitiora-initiative/blob/main/README.md",
    layer: "Site",
  },
  {
    name: "Org profile",
    repo: ".github",
    languages: ["Markdown"],
    summary: "The README GitHub shows on the organization page.",
    live: "https://github.com/Alitiora-Initiative",
    docs: "https://github.com/Alitiora-Initiative/.github/blob/main/profile/README.md",
    layer: "Profile",
  },
];

export const layers = [
  ["On-chain", "Rust (Anchor)", "Space Ledger program. Whole-block receipts on Devnet. No transfer market."],
  ["Apps", "TypeScript", "Space Ledger web app, MIRA dashboard, and this portal."],
  ["Engines", "Python", "MIRA trading engine. Treat it as experimental. Do not assume profits."],
  ["Automation", "YAML", "GitHub Actions on this site: typecheck and production build on every push to main."],
];
