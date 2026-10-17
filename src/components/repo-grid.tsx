import { useEffect, useState } from "react";
import { products } from "@/lib/catalog";

type Live = { name: string; language: string | null; pushed_at: string; stargazers_count: number };

export function OrgTicker() {
  const [repos, setRepos] = useState<Live[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://api.github.com/orgs/Alitiora-Initiative/repos?per_page=100&type=public", {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status));
        return response.json() as Promise<Live[]>;
      })
      .then(setRepos)
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setFailed(true);
      });
    return () => controller.abort();
  }, []);

  const count = repos?.length ?? products.length;
  const languages = repos
    ? new Set(repos.map((repo) => repo.language).filter(Boolean)).size
    : new Set(products.flatMap((product) => product.languages)).size;

  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius)] border border-line bg-line sm:grid-cols-4">
      {[
        ["Public repos", String(count)],
        ["Languages", String(languages)],
        ["Live sites", "3"],
        ["Source", failed ? "Catalog" : repos ? "GitHub" : "Loading"],
      ].map(([label, value]) => (
        <div key={label} className="bg-bg px-4 py-4">
          <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{label}</dt>
          <dd className="mt-1 font-display text-2xl font-bold text-primary">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function RepoGrid() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {products.map((product) => (
        <li key={product.repo} className="flex flex-col rounded-[var(--radius)] border border-line bg-surface p-5">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-2xl font-bold">{product.name}</h3>
            <span className="rounded-full bg-bg px-2 py-1 font-mono text-xs text-accent">{product.layer}</span>
          </div>
          <p className="mt-1 font-mono text-xs text-muted">{product.repo}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.languages.map((language) => (
              <span key={language} className="rounded-full border border-line px-2 py-1 text-xs text-primary">
                {language}
              </span>
            ))}
          </div>
          <p className="mt-3 flex-1 text-sm text-muted">{product.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={`https://github.com/Alitiora-Initiative/${product.repo}`}
              className="inline-flex min-h-11 items-center rounded-full border border-line px-3 text-sm"
            >
              View code
            </a>
            <a href={product.docs} className="inline-flex min-h-11 items-center rounded-full border border-line px-3 text-sm">
              Read docs
            </a>
            {product.live ? (
              <a href={product.live} className="inline-flex min-h-11 items-center rounded-full bg-primary px-3 text-sm font-semibold text-bg">
                Launch
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
