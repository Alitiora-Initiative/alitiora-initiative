import { createFileRoute } from "@tanstack/react-router";
import { RepoGrid } from "@/components/repo-grid";
import { PageHero, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/products")({ component: Products });

function Products() {
  return (
    <SiteShell>
      <main>
        <PageHero
          kicker="Products"
          title="Launch the sites the organization actually ships."
          lede="Three live URLs were checked: Space Ledger, the MIRA dashboard, and this portal. The org profile opens on GitHub."
        />
        <section className="mx-auto max-w-6xl px-5 py-14">
          <RepoGrid />
        </section>
      </main>
    </SiteShell>
  );
}
