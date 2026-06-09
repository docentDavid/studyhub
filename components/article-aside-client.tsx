"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/use-language";
import { Article } from "@/types/content";

type ArticleAsideClientProps = {
  article: Article;
  relatedArticles: Article[];
  onHide: () => void;
};

export function ArticleAsideClient({
  article,
  relatedArticles,
  onHide,
}: ArticleAsideClientProps) {
  const language = useLanguage();

  const copy = {
    en: {
      show: "Show article info",
      hide: "Hide article info",
      articleInfo: "Article info",
      author: "Author",
      type: "Type",
      updated: "Updated",
      related: "Related articles",
      noRelated: "No related articles yet.",
    },
    nl: {
      show: "Toon artikelinfo",
      hide: "Verberg artikelinfo",
      articleInfo: "Artikelinfo",
      author: "Auteur",
      type: "Type",
      updated: "Bijgewerkt",
      related: "Gerelateerde artikelen",
      noRelated: "Nog geen gerelateerde artikelen.",
    },
  };

  const t = copy[language];

  return (
    <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
      <button
        type="button"
        onClick={onHide}
        className="mb-4 hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--brand)]"
      >
        ← {t.hide}
      </button>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
        <h2 className="font-black">{t.articleInfo}</h2>

        <dl className="mt-4 space-y-3 text-sm text-[var(--muted)]">
          <div>
            <dt className="font-bold text-[var(--foreground)]">{t.author}</dt>
            <dd>{article.authorName}</dd>
          </div>

          <div>
            <dt className="font-bold text-[var(--foreground)]">{t.type}</dt>
            <dd>{article.sourceType}</dd>
          </div>

          <div>
            <dt className="font-bold text-[var(--foreground)]">{t.updated}</dt>
            <dd>{article.updatedAt}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
        <h2 className="font-black">{t.related}</h2>

        <div className="mt-4 space-y-3">
          {relatedArticles.length > 0 ? (
            relatedArticles.map((item) => (
              <Link
                key={item.id}
                href={`/articles/${item.slug}`}
                className="block rounded-2xl bg-[var(--brand-soft)] p-3 text-sm font-bold text-[var(--brand)] transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              >
                {item.title[language]}
              </Link>
            ))
          ) : (
            <p className="text-sm text-[var(--muted)]">{t.noRelated}</p>
          )}
        </div>
      </section>
    </aside>
  );
}
