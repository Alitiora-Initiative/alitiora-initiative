import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/")({ component: Home });

const facts = [
  { label: "Network", value: "Solana Devnet" },
  { label: "Flagship", value: "Space Ledger" },
  { label: "Canvas", value: "10B blocks" },
  { label: "Base", value: "Kenya" },
];

function Home() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden border-b border-line">
          <img src="/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/25 via-bg/60 to-bg" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[auto_1fr] md:items-center md:py-24">
            <img
              src="/logo.jpg"
              alt="Alitiora Initiative galaxy mark"
              width={220}
              height={220}
              className="size-36 rounded-full object-cover ring-2 ring-primary/50 md:size-48"
            />
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-bg/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <Sparkles className="size-3.5" aria-hidden />
                Organization
              </p>
              <h1 className="max-w-3xl font-display text-5xl font-extrabold md:text-7xl">Alitiora Initiative</h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                An independent studio in Kenya. We publish software you can run today, with the limits written next to the features.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/work" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 font-semibold text-bg">
                  Current work <ArrowUpRight className="size-4" aria-hidden />
                </Link>
                <Link to="/about" className="inline-flex min-h-11 items-center rounded-full border border-line bg-bg/70 px-5 font-medium">
                  About the studio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-px bg-line px-5 py-px sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-bg px-5 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{fact.label}</p>
              <p className="mt-2 font-display text-2xl font-bold">{fact.value}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
          <article className="rounded-[var(--radius)] border border-line bg-surface p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Live</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Space Ledger</h2>
            <p className="mt-3 text-muted">
              A shared canvas on Solana Devnet. Buyers settle whole blocks on a linear bonding curve and receive an on-chain receipt. There is no secondary market and no mainnet.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://space-ledger-alitiora.vercel.app" className="inline-flex min-h-11 items-center rounded-full bg-primary px-4 font-semibold text-bg">
                Open the app
              </a>
              <Link to="/work" className="inline-flex min-h-11 items-center rounded-full border border-line px-4">
                Read the brief
              </Link>
            </div>
          </article>
          <article className="rounded-[var(--radius)] border border-line bg-bg p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">How we work</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Ship, then explain</h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li>Free public infrastructure first. Paid scale only after a grant or revenue.</li>
              <li>Program state is the source of truth. Marketing copy does not invent markets.</li>
              <li>Operator contact is public: Joseph Mushelle Nyingeh.</li>
            </ul>
            <Link to="/principles" className="mt-6 inline-flex min-h-11 items-center text-primary">
              Full principles
            </Link>
          </article>
        </section>
      </main>
    </SiteShell>
  );
}
