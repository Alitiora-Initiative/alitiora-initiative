import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/work")({ component: Work });

const rows = [
  ["Status", "Public Devnet beta"],
  ["Program", "EbP7vsnMXPonTfriPUFynco69d69JiXpWbKnwVmz8sgG"],
  ["Sale", "Primary only. Linear curve from $0.001 toward $1,000 across 10 billion blocks"],
  ["Ownership", "Whole blocks, recorded as on-chain receipts"],
  ["Wallets", "Wallet Standard (Phantom, Solflare, and others installed in the browser)"],
  ["Not included", "Mainnet, transfers, listings, pixel-level ownership, paid audit"],
];

function Work() {
  return (
    <SiteShell>
      <main>
        <PageHero
          kicker="Work"
          title="Space Ledger"
          lede="The flagship experiment: a shared canvas where the next price is a function of confirmed supply, not a screenshot."
        />
        <section className="mx-auto max-w-6xl px-5 py-14">
          <div className="overflow-hidden rounded-[var(--radius)] border border-line">
            <table className="w-full text-left text-sm">
              <tbody>
                {rows.map(([label, value]) => (
                  <tr key={label} className="border-b border-line last:border-0">
                    <th className="w-40 bg-surface px-4 py-4 font-medium text-muted">{label}</th>
                    <td className="px-4 py-4">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Connect once", "The top navigation wallet session is reused. You do not reconnect on every page."],
              ["Quote against balance", "If a selection exceeds the connected Devnet balance, the app says so before you approve."],
              ["Check the receipt", "A successful buy leaves an account you can open on Solana Explorer, Devnet cluster."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-[var(--radius)] border border-line bg-surface p-5">
                <h2 className="font-display text-xl font-bold">{title}</h2>
                <p className="mt-2 text-muted">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://space-ledger-alitiora.vercel.app" className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 font-semibold text-bg">
              Live app
            </a>
            <a href="https://github.com/Alitiora-Initiative/Space-Ledger" className="inline-flex min-h-11 items-center rounded-full border border-line px-5">
              Source and roadmap
            </a>
            <a href="https://explorer.solana.com/address/EbP7vsnMXPonTfriPUFynco69d69JiXpWbKnwVmz8sgG?cluster=devnet" className="inline-flex min-h-11 items-center rounded-full border border-line px-5">
              Program on Explorer
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
