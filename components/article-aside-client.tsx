"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/use-language";
import { commonCopy, articleAsideCopy } from "@/lib/i18n/copy";
import { Article, SourceType } from "@/types/content";
import { getSourceTypeName } from "@/lib/source-types";
import { formatDate } from "@/lib/format-data";

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
  const articleAside = articleAsideCopy[language];
  const common = commonCopy[language];

  return (
    <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
      <button
        type="button"
        onClick={onHide}
        className="mb-4 hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--brand)]"
      >
        ← {articleAside.hide}
      </button>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
        <h2 className="font-black">{articleAside.articleInfo}</h2>

        <dl className="mt-4 space-y-3 text-sm text-[var(--muted)]">
          <div>
            <dt className="font-bold text-[var(--foreground)]">
              {articleAside.author}
            </dt>
            <dd>{article.authorName}</dd>
          </div>

          <div>
            <dt className="font-bold text-[var(--foreground)]">
              {articleAside.type}
            </dt>
            <dd>
              {getSourceTypeName(article.sourceType as SourceType, language)}
            </dd>
          </div>

          <div>
            <dt className="font-bold text-[var(--foreground)]">
              {common.updated}
            </dt>
            <dd>{formatDate(article.updatedAt, language)}</dd>
          </div>
          <div>
            <dt className="font-bold text-[var(--foreground)]">
              {articleAside.topics}
            </dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]"
                >
                  #{tag}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
        <h2 className="font-black">{articleAside.related}</h2>

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
            <p className="text-sm text-[var(--muted)]">
              {articleAside.noRelated}
            </p>
          )}
        </div>
      </section>
    </aside>
  );
}
