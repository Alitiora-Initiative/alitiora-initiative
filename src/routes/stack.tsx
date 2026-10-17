import { createFileRoute } from "@tanstack/react-router";
import { layers } from "@/lib/catalog";
import { PageHero, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/stack")({ component: Stack });

function Stack() {
  return (
    <SiteShell>
      <main>
        <PageHero
          kicker="Stack"
          title="Languages that are in the repositories."
          lede="This matrix matches the public code. There is no separate sniper runtime, and there is no Supabase schema in the organization today."
        />
        <section className="mx-auto max-w-6xl px-5 py-14">
          <div className="overflow-hidden rounded-[var(--radius)] border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface font-mono text-xs uppercase tracking-[0.14em] text-muted">
                <tr>
                  <th className="px-4 py-3">Layer</th>
                  <th className="px-4 py-3">Language</th>
                  <th className="px-4 py-3">Where it lives</th>
                </tr>
              </thead>
              <tbody>
                {layers.map(([layer, language, where]) => (
                  <tr key={layer} className="border-t border-line">
                    <th className="px-4 py-4 font-display text-base font-bold">{layer}</th>
                    <td className="px-4 py-4 text-primary">{language}</td>
                    <td className="px-4 py-4 text-muted">{where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
