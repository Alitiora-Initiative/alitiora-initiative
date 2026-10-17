import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/principles")({ component: Principles });

const items = [
  ["On-chain truth", "If a claim cannot be checked on Devnet Explorer, it is not a feature. Receipts beat dashboards."],
  ["Named operator", "A person and an email sit on the legal pages and on this site. Anonymous marketing is not the plan."],
  ["Scope in writing", "Pixels, transfers, and mainnet are future work. They are not hidden toggles."],
  ["Free infrastructure first", "Public RPC, Hobby hosting, and open source until a grant or revenue pays for more."],
  ["No investment language", "Devnet balances are test funds. Support, if offered inside Space Ledger, is optional and separate from purchases."],
  ["Tests before claims", "The Space Ledger repository keeps automated checks next to the product so a broken page is a failing build, not a slogan."],
];

function Principles() {
  return (
    <SiteShell>
      <main>
        <PageHero
          kicker="Principles"
          title="What we will and will not say."
          lede="These rules keep the studio from dressing a prototype as a market."
        />
        <ol className="mx-auto grid max-w-6xl gap-4 px-5 py-14 md:grid-cols-2">
          {items.map(([title, body], index) => (
            <li key={title} className="rounded-[var(--radius)] border border-line bg-surface p-6">
              <p className="font-display text-sm text-accent">0{index + 1}</p>
              <h2 className="mt-2 font-display text-2xl font-bold">{title}</h2>
              <p className="mt-2 text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </main>
    </SiteShell>
  );
}
