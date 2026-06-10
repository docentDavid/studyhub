"use client";

import { Article } from "@/types/content";
import { useLanguage } from "@/lib/use-language";
import { getSourceTypeName } from "@/lib/source-types";
import { MarkdownContent } from "@/components/markdown-content";

type ArticlePageClientProps = {
  article: Article;
};

export function ArticlePageClient({ article }: ArticlePageClientProps) {
  const language = useLanguage();

  return (
    <>
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="text-xs font-black uppercase tracking-wide text-[var(--muted)]">
          {getSourceTypeName(article.sourceType, language)}
        </p>

        <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-bold text-[var(--muted)]">
          {article.semesters[0]}
        </span>
      </div>

      <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
        {article.title[language]}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
        {article.summary[language]}
      </p>

      <div className="mt-10 rounded-3xl bg-[var(--surface-soft)] p-6 md:p-8">
        <MarkdownContent content={article.contentMarkdown[language]} />
      </div>
    </>
  );
}
