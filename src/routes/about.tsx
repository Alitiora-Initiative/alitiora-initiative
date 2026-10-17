import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <SiteShell>
      <main>
        <PageHero
          kicker="About"
          title="A small studio with a public record."
          lede="Alitiora Initiative is led by Joseph Mushelle Nyingeh in Kenya. The work is built on free tiers, documented in public GitHub repositories, and tested on Solana Devnet."
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-muted">
            <p>
              The studio started as one product: Space Ledger, a digital canvas where each confirmed purchase advances a linear price curve and writes a receipt the buyer can open on Explorer.
            </p>
            <p>
              We do not sell equity, tokens with a promised return, or a secondary market. Devnet SOL used in Space Ledger has no real-world value. That sentence stays on the product because it is the product.
            </p>
            <p>
              The organization site exists so partners, hackathon reviewers, and testers can see who operates the software, what is live, and what is explicitly out of scope.
            </p>
          </div>
          <aside className="h-fit rounded-[var(--radius)] border border-line bg-surface p-6">
            <h2 className="font-display text-2xl font-bold">Operator</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted">Name</dt>
                <dd>Joseph Mushelle Nyingeh</dd>
              </div>
              <div>
                <dt className="text-muted">Location</dt>
                <dd>Kenya</dd>
              </div>
              <div>
                <dt className="text-muted">Email</dt>
                <dd>
                  <a className="text-primary" href="mailto:jaymnyon@gmail.com">jaymnyon@gmail.com</a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">GitHub</dt>
                <dd>
                  <a className="text-primary" href="https://github.com/Alitiora-Initiative">Alitiora-Initiative</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </main>
    </SiteShell>
  );
}
