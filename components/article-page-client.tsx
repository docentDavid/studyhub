"use client";

import { useLanguage } from "@/lib/use-language";
import { Article } from "@/types/content";
import { MarkdownContent } from "@/components/markdown-content";

type ArticlePageClientProps = {
  article: Article;
};

export function ArticlePageClient({ article }: ArticlePageClientProps) {
  const language = useLanguage();

  return (
    <>
      <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
        {article.title[language]}
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        {article.summary[language]}
      </p>

      <div className="mt-10 rounded-3xl bg-[var(--surface-soft)] p-6 md:p-8">
        <MarkdownContent content={article.contentMarkdown[language]} />
      </div>
    </>
  );
}
