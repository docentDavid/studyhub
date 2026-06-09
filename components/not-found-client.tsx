"use client";

import Link from "next/link";
import { commonCopy, notFoundPageCopy } from "@/lib/i18n/copy";
import { useLanguage } from "@/lib/use-language";

export function NotFoundClient() {
  const language = useLanguage();
  const common = commonCopy[language];
  const notFoundPage = notFoundPageCopy[language];

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-16 text-[var(--foreground)] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-sm">
        <p className="text-9xl font-black uppercase tracking-wide text-[var(--brand)]">
          404
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight">
          {notFoundPage.title}
        </h1>

        <p className="mt-4 text-[var(--muted)]">{notFoundPage.intro}</p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-[var(--brand-dark)] px-6 py-3 font-bold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
        >
          {common.goToHomepage}
        </Link>
      </section>
    </main>
  );
}
