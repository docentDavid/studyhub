"use client";

import Link from "next/link";
import { mockArticles } from "@/data/mock-articles";
import { getSourceTypeName } from "@/lib/source-types";
import { commonCopy, submitPageCopy } from "@/lib/i18n/copy";
import { useLanguage } from "@/lib/use-language";
import type { SourceType } from "@/types/content";

export function SubmitPageClient() {
  const language = useLanguage();
  const common = commonCopy[language];
  const submitPage = submitPageCopy[language];

  const approvedArticles = mockArticles.filter(
    (article) => article.status === "approved",
  );

  const sourceTypes = Array.from(
    new Set(approvedArticles.map((article) => article.sourceType)),
  ).sort((a, b) => a.localeCompare(b));

  const semesters = Array.from(
    new Set(approvedArticles.flatMap((article) => article.semesters)),
  ).sort((a, b) => a.localeCompare(b));

  const topics = Array.from(
    new Set(approvedArticles.flatMap((article) => article.tags)),
  ).sort((a, b) => a.localeCompare(b));

  const fieldClassName =
    "mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--brand)]";

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--brand)] transition hover:bg-[var(--brand-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
        >
          ← {common.goToHomepage}
        </Link>
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-3xl bg-[var(--brand-dark)] p-8 text-white">
            <p className="mb-3 text-sm font-bold uppercase text-purple-100">
              {common.contribute}
            </p>

            <h1 className="text-4xl font-black tracking-tight">
              {submitPage.title}
            </h1>

            <p className="mt-4 leading-7 text-purple-100">{submitPage.intro}</p>
          </aside>

          <form className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="font-bold text-[var(--foreground)]">
                {submitPage.name}
                <input className={fieldClassName} />
              </label>

              <label className="font-bold text-[var(--foreground)]">
                {submitPage.sourceTitle}
                <input className={fieldClassName} />
              </label>
            </div>

            <div className="mt-4 grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm md:grid-cols-3">
              <label className="font-bold text-[var(--foreground)]">
                {submitPage.type}
                <select className={fieldClassName}>
                  {sourceTypes.map((type) => (
                    <option key={type} value={type}>
                      {getSourceTypeName(type as SourceType, language)}
                    </option>
                  ))}
                </select>
              </label>

              <label className="font-bold text-[var(--foreground)]">
                {submitPage.semester}
                <select className={fieldClassName}>
                  {semesters.map((semester) => (
                    <option key={semester} value={semester}>
                      {semester}
                    </option>
                  ))}
                </select>
              </label>

              <label className="font-bold text-[var(--foreground)]">
                {submitPage.topic}
                <select className={fieldClassName}>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 block font-bold text-[var(--foreground)]">
              {submitPage.url}
              <input type="url" className={fieldClassName} />
            </label>

            <label className="mt-4 block font-bold text-[var(--foreground)]">
              {submitPage.reason}
              <textarea
                className={`${fieldClassName} min-h-36`}
                placeholder={submitPage.reasonPlaceholder}
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="rounded-2xl bg-[var(--brand-dark)] px-6 py-3 font-bold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              >
                {common.submitForReview}
              </button>

              <Link
                href="/"
                className="rounded-2xl border border-[var(--border)] px-6 py-3 text-center font-bold text-[var(--brand)] transition hover:bg-[var(--brand-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              >
                {common.cancel}
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
