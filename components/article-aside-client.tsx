"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Article } from "@/types/content";

type Language = "en" | "nl";

type ArticleAsideClientProps = {
  article: Article;
  relatedArticles: Article[];
};

export function ArticleAsideClient({
  article,
  relatedArticles,
}: ArticleAsideClientProps) {
  const [language, setLanguage] = useState<Language>("en");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;

    if (savedLanguage === "en" || savedLanguage === "nl") {
      setLanguage(savedLanguage);
    }

    function handleLanguageChange(event: Event) {
      const customEvent = event as CustomEvent<Language>;

      if (customEvent.detail === "en" || customEvent.detail === "nl") {
        setLanguage(customEvent.detail);
      }
    }

    window.addEventListener("language-change", handleLanguageChange);

    return () => {
      window.removeEventListener("language-change", handleLanguageChange);
    };
  }, []);

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
        onClick={() => setIsVisible((value) => !value)}
        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-bold text-[var(--brand)] transition hover:bg-[var(--brand-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
      >
        {isVisible ? t.hide : t.show}
      </button>

      {isVisible && (
        <>
          <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
            <h2 className="font-black">{t.articleInfo}</h2>

            <dl className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <div>
                <dt className="font-bold text-[var(--foreground)]">
                  {t.author}
                </dt>
                <dd>{article.authorName}</dd>
              </div>

              <div>
                <dt className="font-bold text-[var(--foreground)]">{t.type}</dt>
                <dd>{article.sourceType}</dd>
              </div>

              <div>
                <dt className="font-bold text-[var(--foreground)]">
                  {t.updated}
                </dt>
                <dd>{article.updatedAt}</dd>
              </div>
            </dl>
          </section>

          <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
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
        </>
      )}
    </aside>
  );
}
