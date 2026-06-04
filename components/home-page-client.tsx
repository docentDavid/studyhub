"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Article } from "@/types/content";

type Language = "en" | "nl";

type HomePageClientProps = {
  articles: Article[];
};

const copy = {
  en: {
    eyebrow: "StudyHub",
    subtitle: "Student information portal",
    title: "Inspiration, guides and resources for students.",
    description:
      "Useful articles, tutorials and curated resources to support your studies, develop new skills and stay inspired throughout your learning journey.",
    submitResource: "Submit Resource",
    search: "Search articles...",
    allUnits: "All units",
    allSemesters: "All semesters",
    allTags: "All tags",
    by: "By",
  },
  nl: {
    eyebrow: "StudyHub",
    subtitle: "Studenten informatieportaal",
    title: "Inspiratie, handleidingen en bronnen voor studenten.",
    description:
      "Nuttige artikelen, tutorials en geselecteerde bronnen om je studie te ondersteunen, nieuwe vaardigheden te ontwikkelen en geïnspireerd te blijven tijdens je leerproces.",
    submitResource: "Bron insturen",
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

    function handleLanguageChange(event: Event) {
      const customEvent = event as CustomEvent<Language>;

      if (customEvent.detail === "en" || customEvent.detail === "nl") {
        setLanguage(customEvent.detail);
      }
    }

    window.addEventListener("language-change", handleLanguageChange);

    return () => {
      window.removeEventListener("language-change", handleLanguageChange);
    };
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
        <header className="mb-6 rounded-3xl bg-[#663399] p-6 text-white shadow-xl shadow-purple-950/20 sm:p-8">
          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            {t.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-purple-100 sm:text-lg">
            {t.description}
          </p>

          <Link
            href="/submit"
            className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#663399] transition hover:opacity-90"
          >
            {t.submitResource}
          </Link>
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

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            {language === "en"
              ? `Showing ${approvedArticles.length} resources`
              : `${approvedArticles.length} bronnen gevonden`}
          </p>
        </div>

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
