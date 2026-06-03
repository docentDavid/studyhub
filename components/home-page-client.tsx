"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Article } from "@/types/content";
import { TopControls } from "@/components/top-controls";

type Language = "en" | "nl";

type HomePageClientProps = {
  articles: Article[];
};

const copy = {
  en: {
    eyebrow: "StudyHub",
    subtitle: "Student information portal",
    heroLabel: "For FED, IM and other learning units",
    title: "Guides, resources and student contributions in one place.",
    description:
      "A responsive learning portal where students can discover articles, filter by tags and submit useful sources for review.",
    search: "Search articles...",
    allUnits: "All units",
    allSemesters: "All semesters",
    allTags: "All tags",
    by: "By",
  },
  nl: {
    eyebrow: "StudyHub",
    subtitle: "Studenten informatieportaal",
    heroLabel: "Voor FED, IM en andere onderwijseenheden",
    title: "Guides, bronnen en studentbijdragen op één plek.",
    description:
      "Een responsive leerportaal waar studenten artikelen ontdekken, filteren op tags en nuttige bronnen kunnen insturen.",
    search: "Zoek artikelen...",
    allUnits: "Alle units",
    allSemesters: "Alle semesters",
    allTags: "Alle tags",
    by: "Door",
  },
};

export function HomePageClient({ articles }: HomePageClientProps) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;

    if (savedLanguage === "en" || savedLanguage === "nl") {
      setLanguage(savedLanguage);
    }
  }, []);

  function handleLanguageChange(nextLanguage: Language) {
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  const approvedArticles = articles.filter(
    (article) => article.status === "approved",
  );

  const units = useMemo(
    () =>
      Array.from(new Set(approvedArticles.flatMap((article) => article.units))),
    [approvedArticles],
  );

  const semesters = useMemo(
    () =>
      Array.from(
        new Set(approvedArticles.flatMap((article) => article.semesters)),
      ),
    [approvedArticles],
  );

  const tags = useMemo(
    () =>
      Array.from(new Set(approvedArticles.flatMap((article) => article.tags))),
    [approvedArticles],
  );

  const t = copy[language];

  return (
    <main className="min-h-screen bg-[#faf8ff] text-[#17142a] transition-colors dark:bg-[#0f0b1d] dark:text-white">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#663399] dark:text-purple-300">
              {t.eyebrow}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t.subtitle}
            </p>
          </div>

          <TopControls
            language={language}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        <header className="mb-8 rounded-3xl bg-[#663399] p-8 text-white shadow-xl shadow-purple-950/20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-100">
            {t.heroLabel}
          </p>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            {t.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-purple-100">
            {t.description}
          </p>
        </header>

        <section className="mb-8 grid gap-4 rounded-3xl border border-purple-100 bg-white p-4 shadow-sm dark:border-purple-950 dark:bg-[#17142a] md:grid-cols-4">
          <input
            className="rounded-2xl border border-purple-100 bg-white px-4 py-3 text-[#17142a] outline-none focus:ring-2 focus:ring-[#663399] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white"
            placeholder={t.search}
          />

          <select className="rounded-2xl border border-purple-100 bg-white px-4 py-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
            <option>{t.allUnits}</option>
            {units.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </select>

          <select className="rounded-2xl border border-purple-100 bg-white px-4 py-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
            <option>{t.allSemesters}</option>
            {semesters.map((semester) => (
              <option key={semester}>{semester}</option>
            ))}
          </select>

          <select className="rounded-2xl border border-purple-100 bg-white px-4 py-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
            <option>{t.allTags}</option>
            {tags.map((tag) => (
              <option key={tag}>{tag}</option>
            ))}
          </select>
        </section>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {approvedArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/10 dark:border-purple-950 dark:bg-[#17142a]"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {article.units.map((unit) => (
                  <span
                    key={unit}
                    className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-[#663399] dark:bg-purple-950 dark:text-purple-200"
                  >
                    {unit}
                  </span>
                ))}

                {article.semesters.map((semester) => (
                  <span
                    key={semester}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600 dark:bg-white/10 dark:text-gray-300"
                  >
                    {semester}
                  </span>
                ))}
              </div>

              <h2 className="text-xl font-black tracking-tight">
                {article.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {article.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-[#663399] dark:bg-purple-950 dark:text-purple-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                {t.by} {article.authorName}
              </p>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}
