import { createFileRoute, Link } from "@tanstack/react-router";
import { OrgTicker, RepoGrid } from "@/components/repo-grid";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden border-b border-line">
          <img src="/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />
          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">org / alitiora-initiative</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold md:text-7xl">One portal for every public repo.</h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Alitiora Initiative publishes Space Ledger, MIRA, and this site. Each card opens the live product, the source, and the docs. Nothing here is invented.
            </p>
            <div className="mt-8">
              <OrgTicker />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-5 py-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold">Repositories</h2>
            <Link to="/products" className="text-sm text-primary">All products</Link>
          </div>
          <RepoGrid />
        </section>
      </main>
    </SiteShell>
  );
}
