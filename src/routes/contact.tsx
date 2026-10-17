import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({ component: Contact });

const channels = [
  ["General", "jaymnyon@gmail.com", "mailto:jaymnyon@gmail.com", "Product questions, press, and partnership notes."],
  ["Organization", "github.com/Alitiora-Initiative", "https://github.com/Alitiora-Initiative", "Public profile, Space Ledger, and this website’s source."],
  ["Product", "space-ledger-alitiora.vercel.app", "https://space-ledger-alitiora.vercel.app", "Use the live Devnet app. Faucet SOL is required to buy a block."],
];

function Contact() {
  return (
    <SiteShell>
      <main>
        <PageHero
          kicker="Contact"
          title="Write to the operator."
          lede="There is no support desk and no ticket bot. Email reaches Joseph Mushelle Nyingeh directly."
        />
        <ul className="mx-auto grid max-w-6xl gap-4 px-5 py-14">
          {channels.map(([label, value, href, note]) => (
            <li key={label} className="rounded-[var(--radius)] border border-line bg-surface p-6 md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
                <a href={href} className="mt-2 block font-display text-2xl font-bold text-primary">
                  {value}
                </a>
              </div>
              <p className="mt-3 max-w-sm text-muted md:mt-0 md:text-right">{note}</p>
            </li>
          ))}
        </ul>
      </main>
    </SiteShell>
  );
}
