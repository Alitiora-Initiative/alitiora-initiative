import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Mail, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const projects = [
  {
    name: "Space Ledger",
    status: "Live on Devnet",
    copy: "A shared canvas of 10 billion blocks. Primary-sale bonding curve, on-chain receipts, and wallet connect. Test tokens only — not a market, not mainnet.",
    href: "https://space-ledger-alitiora.vercel.app",
    code: "https://github.com/Alitiora-Initiative/Space-Ledger",
  },
];

const principles = [
  {
    title: "On-chain truth",
    body: "Receipts and explorers over slogans. If it is not on Devnet, we do not pretend it is.",
  },
  {
    title: "Free tiers first",
    body: "We ship on public tools, then ask for grants when scale or a real audit is the next step.",
  },
  {
    title: "Honest scope",
    body: "Whole blocks today. No secondary market, no pixel ownership, no investment pitch.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-line/80 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Alitiora Initiative mark"
              width={40}
              height={40}
              className="size-10 rounded-full object-cover ring-1 ring-primary/40"
            />
            <span className="font-display text-base font-semibold tracking-tight">Alitiora Initiative</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a className="hover:text-fg" href="#work">Work</a>
            <a className="hover:text-fg" href="#principles">Principles</a>
            <a className="hover:text-fg" href="#contact">Contact</a>
          </nav>
          <a
            href="https://github.com/Alitiora-Initiative"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-fg"
          >
            <Github className="size-4" aria-hidden />
            GitHub
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-line">
          <img
            src="/hero.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/55 to-bg" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[auto_1fr] md:items-center md:py-28">
            <img
              src="/logo.jpg"
              alt="Bright galaxy emblem of Alitiora Initiative"
              width={220}
              height={220}
              className="size-40 rounded-full object-cover shadow-2xl ring-2 ring-primary/50 md:size-52"
            />
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-bg/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <Sparkles className="size-3.5" aria-hidden />
                Kenya · Web3 · Devnet
              </p>
              <h1 className="max-w-3xl font-display text-5xl font-extrabold text-fg md:text-7xl">
                Alitiora Initiative
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                We build software you can actually try. The current experiment is Space Ledger — a Solana Devnet canvas with a public program and real receipts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://space-ledger-alitiora.vercel.app"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 font-semibold text-bg"
                >
                  Open Space Ledger
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
                <a
                  href="#work"
                  className="inline-flex min-h-11 items-center rounded-full border border-line bg-bg/70 px-5 font-medium text-fg"
                >
                  See the work
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Active</p>
              <h2 className="mt-2 font-display text-4xl font-bold">What we ship</h2>
            </div>
          </div>
          <ul className="grid gap-5">
            {projects.map((project) => (
              <li
                key={project.name}
                className="rounded-[var(--radius)] border border-line bg-surface p-6 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-3xl font-bold">{project.name}</h3>
                  <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-primary">
                    {project.status}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-muted">{project.copy}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.href}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 font-semibold text-bg"
                  >
                    Live site <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                  <a
                    href={project.code}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 font-medium"
                  >
                    <Github className="size-4" aria-hidden /> Source
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="principles" className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="rounded-[var(--radius)] border border-line bg-bg p-6">
                <ShieldCheck className="mb-4 size-5 text-accent" aria-hidden />
                <h2 className="font-display text-2xl font-bold">{item.title}</h2>
                <p className="mt-3 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-4xl font-bold">Contact</h2>
          <p className="mt-3 max-w-xl text-muted">
            Operator Joseph Mushelle Nyingeh. Questions, testers, and partnership notes go to email.
          </p>
          <a
            href="mailto:jaymnyon@gmail.com"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-5 font-medium"
          >
            <Mail className="size-4 text-primary" aria-hidden />
            jaymnyon@gmail.com
          </a>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-8 text-sm text-muted">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <p>Alitiora Initiative · Kenya · Devnet experiments, not investments.</p>
          <a className="hover:text-fg" href="https://github.com/Alitiora-Initiative">
            github.com/Alitiora-Initiative
          </a>
        </div>
      </footer>
    </div>
  );
}
