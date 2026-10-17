import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";
import type { ReactNode } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/stack", label: "Stack" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-line/80 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
          <Link to="/" className="flex min-h-11 items-center gap-3">
            <img src="/logo.jpg" alt="" width={40} height={40} className="size-10 rounded-full object-cover ring-1 ring-primary/50" />
            <span className="font-display text-sm font-semibold tracking-tight sm:text-base">Alitiora Initiative</span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-muted lg:flex" aria-label="Primary">
            {links.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-fg" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a href="https://github.com/Alitiora-Initiative" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium">
            <Github className="size-4" aria-hidden />
            GitHub
          </a>
        </div>
        <nav className="flex gap-1 overflow-x-auto border-t border-line px-3 py-2 text-sm lg:hidden" aria-label="Mobile">
          {links.map((item) => (
            <Link key={item.to} to={item.to} className="shrink-0 rounded-full px-3 py-2 text-muted" activeOptions={{ exact: true }} activeProps={{ className: "shrink-0 rounded-full bg-surface px-3 py-2 text-primary" }}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      {children}
      <footer className="border-t border-line px-5 py-8 text-sm text-muted">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Alitiora Initiative · Kenya · Public repos, named operator.</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-fg" href="https://space-ledger-alitiora.vercel.app">Space Ledger</a>
            <a className="hover:text-fg" href="https://web-dashboard-jolse.vercel.app">MIRA</a>
            <a className="hover:text-fg" href="mailto:jaymnyon@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="border-b border-line px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{lede}</p>
      </div>
    </header>
  );
}
