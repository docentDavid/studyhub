"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/use-language";
import { commonCopy, privacyPageCopy } from "@/lib/i18n/copy";

export function PrivacyPageClient() {
  const language = useLanguage();
  const common = commonCopy[language];
  const privacyPage = privacyPageCopy[language];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-bold text-[var(--brand)] transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
        >
          ← {common.goToHomepage}
        </Link>

        <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-[var(--brand)]">
            {common.privacy}
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            {privacyPage.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            {privacyPage.intro}
          </p>

          <div className="mt-8 space-y-6">
            {privacyPage.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-black">{section.title}</h2>
                <p className="mt-2 leading-7 text-[var(--muted)]">
                  {section.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
