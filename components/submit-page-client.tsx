"use client";

import Link from "next/link";
import { mockArticles } from "@/data/mock-articles";
import { getSourceTypeName } from "@/lib/source-types";
import { useLanguage } from "@/lib/use-language";
import type { SourceType } from "@/types/content";

const copy = {
  en: {
    back: "Back to homepage",
    label: "Contribute",
    title: "Submit a useful source",
    intro:
      "Share an article, video, tool or guide with other students. Your submission will be reviewed before it becomes visible.",
    name: "Your name",
    sourceTitle: "Source title",
    semester: "Semester",
    type: "Content type",
    topic: "Topic",
    url: "URL",
    reason: "Why is this useful?",
    reasonPlaceholder: "Explain why this source is helpful for other students.",
    submit: "Submit for review",
    cancel: "Cancel",
  },
  nl: {
    back: "Terug naar startpagina",
    label: "Bijdragen",
    title: "Stuur een nuttige bron in",
    intro:
      "Deel een artikel, video, tool of guide met andere studenten. Je inzending wordt eerst gecontroleerd voordat deze zichtbaar wordt.",
    name: "Jouw naam",
    sourceTitle: "Titel van de bron",
    semester: "Semester",
    type: "Contenttype",
    topic: "Onderwerp",
    url: "URL",
    reason: "Waarom is dit nuttig?",
    reasonPlaceholder:
      "Leg kort uit waarom deze bron nuttig is voor andere studenten.",
    submit: "Insturen ter beoordeling",
    cancel: "Annuleren",
  },
};

export function SubmitPageClient() {
  const language = useLanguage();
  const t = copy[language];

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
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--brand)] transition hover:bg-[var(--brand-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
        >
          ← {t.back}
        </Link>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-3xl bg-[var(--brand-dark)] p-8 text-white">
            <p className="mb-3 text-sm font-bold uppercase text-purple-100">
              {t.label}
            </p>

            <h1 className="text-4xl font-black tracking-tight">{t.title}</h1>

            <p className="mt-4 leading-7 text-purple-100">{t.intro}</p>
          </aside>

          <form className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="font-bold text-[var(--foreground)]">
                {t.name}
                <input className={fieldClassName} />
              </label>

              <label className="font-bold text-[var(--foreground)]">
                {t.sourceTitle}
                <input className={fieldClassName} />
              </label>
            </div>

            <div className="mt-4 grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm md:grid-cols-3">
              <label className="font-bold text-[var(--foreground)]">
                {t.type}
                <select className={fieldClassName}>
                  {sourceTypes.map((type) => (
                    <option key={type} value={type}>
                      {getSourceTypeName(type as SourceType, language)}
                    </option>
                  ))}
                </select>
              </label>

              <label className="font-bold text-[var(--foreground)]">
                {t.semester}
                <select className={fieldClassName}>
                  {semesters.map((semester) => (
                    <option key={semester} value={semester}>
                      {semester}
                    </option>
                  ))}
                </select>
              </label>

              <label className="font-bold text-[var(--foreground)]">
                {t.topic}
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
              {t.url}
              <input type="url" className={fieldClassName} />
            </label>

            <label className="mt-4 block font-bold text-[var(--foreground)]">
              {t.reason}
              <textarea
                className={`${fieldClassName} min-h-36`}
                placeholder={t.reasonPlaceholder}
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="rounded-2xl bg-[var(--brand-dark)] px-6 py-3 font-bold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              >
                {t.submit}
              </button>

              <Link
                href="/"
                className="rounded-2xl border border-[var(--border)] px-6 py-3 text-center font-bold text-[var(--brand)] transition hover:bg-[var(--brand-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              >
                {t.cancel}
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
