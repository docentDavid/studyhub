"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/use-language";
import { commonCopy } from "@/lib/i18n/copy";

export function ArticlePageHeaderClient() {
  const language = useLanguage();
  const common = commonCopy[language];

  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--brand)] transition hover:bg-[var(--brand-soft)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
        >
          ← {common.goToHomepage}
        </Link>

        <Link
          href="/submit"
          className="inline-flex items-center rounded-full bg-[var(--brand-dark)] px-4 py-2 text-sm font-bold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
        >
          {common.submitResource}
        </Link>
      </div>
    </header>
  );
}
