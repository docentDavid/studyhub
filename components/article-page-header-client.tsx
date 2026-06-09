"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/use-language";
import { articlePageHeaderCopy } from "@/lib/i18n/copy";

export function ArticlePageHeaderClient() {
  const language = useLanguage();
  const articlePageHeader = articlePageHeaderCopy[language];

  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-black text-[var(--brand)] transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
        >
          ← {articlePageHeader.allArticles}
        </Link>

        <Link
          href="/submit"
          className="rounded-2xl bg-[var(--brand-dark)] px-4 py-2 text-sm font-bold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
        >
          {articlePageHeader.submitSource}
        </Link>
      </div>
    </header>
  );
}
