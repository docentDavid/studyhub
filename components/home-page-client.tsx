"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Article } from "@/types/content";

type Language = "en" | "nl";

type HomePageClientProps = {
  articles: Article[];
};

function getSourceTypeLabel(sourceType: string) {
  switch (sourceType) {
    case "guide":
      return "📘 Guide";
    case "article":
      return "📰 Article";
    case "video":
      return "🎥 Video";
    case "external-source":
      return "🔗 External source";
    case "student-source":
      return "🎓 Student source";
    default:
      return "Resource";
  }
}

const copy = {
  en: {
    title: "Inspiration, guides and resources for students.",
    description:
      "Useful articles, tutorials and curated resources to support your studies, develop new skills and stay inspired throughout your learning journey.",
    submitResource: "Submit Resource",
    search: "Search articles...",
    allUnits: "All units",
    allSemesters: "All semesters",
    allTags: "All tags",
    latestResources: "Latest resources",
    latestDescription: "Recently added articles, guides and useful sources.",
    allResources: "All resources",
    updated: "Updated",
    by: "By",
    showingResources: (count: number) => `Showing ${count} resources`,
  },
  nl: {
    title: "Inspiratie, handleidingen en bronnen voor studenten.",
    description:
      "Nuttige artikelen, tutorials en geselecteerde bronnen om je studie te ondersteunen, nieuwe vaardigheden te ontwikkelen en geïnspireerd te blijven tijdens je leerproces.",
    submitResource: "Bron insturen",
    search: "Zoek artikelen...",
    allUnits: "Alle units",
    allSemesters: "Alle semesters",
    allTags: "Alle tags",
    latestResources: "Nieuwste bronnen",
    latestDescription:
      "Recent toegevoegde artikelen, gidsen en nuttige bronnen.",
    allResources: "Alle bronnen",
    updated: "Bijgewerkt",
    by: "Door",
    showingResources: (count: number) => `${count} bronnen gevonden`,
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

  const approvedArticles = articles.filter(
    (article) => article.status === "approved",
  );

  const latestArticles = [...approvedArticles]
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    )
    .slice(0, 4);

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

  const cardClassName =
    "rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/10 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]";

  const fieldClassName =
    "rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--brand)]";

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-3xl bg-[var(--brand-dark)] p-6 text-white shadow-xl shadow-purple-950/20 sm:p-8">
          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            {t.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-purple-100 sm:text-lg">
            {t.description}
          </p>

          <Link
            href="/submit"
            className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[var(--brand-dark)] transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--brand-dark)]"
          >
            {t.submitResource}
          </Link>
        </header>

        <section className="mb-10 grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm md:grid-cols-4">
          <input className={fieldClassName} placeholder={t.search} />

          <select className={fieldClassName}>
            <option>{t.allUnits}</option>
            {units.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </select>

          <select className={fieldClassName}>
            <option>{t.allSemesters}</option>
            {semesters.map((semester) => (
              <option key={semester}>{semester}</option>
            ))}
          </select>

          <select className={fieldClassName}>
            <option>{t.allTags}</option>
            {tags.map((tag) => (
              <option key={tag}>{tag}</option>
            ))}
          </select>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <h2 className="text-2xl font-black tracking-tight">
              {t.latestResources}
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              {t.latestDescription}
            </p>
          </div>

          <div className="flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
            {latestArticles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className={`${cardClassName} min-w-[85%] snap-start md:min-w-0`}
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--muted)]">
                  {getSourceTypeLabel(article.sourceType)}
                </p>

                <h3 className="text-lg font-black tracking-tight">
                  {article.title[language]}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {article.summary[language]}
                </p>

                <p className="mt-5 text-xs font-semibold text-[var(--muted)]">
                  {t.updated} {article.updatedAt}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mb-5 border-t border-[var(--border)] pt-8">
          <h2 className="text-2xl font-black tracking-tight">
            {t.allResources}
          </h2>

          <p className="mt-1 text-sm font-semibold text-[var(--muted)]">
            {t.showingResources(approvedArticles.length)}
          </p>
        </div>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {approvedArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className={cardClassName}
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {article.units.map((unit) => (
                  <span
                    key={unit}
                    className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-bold text-[var(--brand)]"
                  >
                    {unit}
                  </span>
                ))}

                {article.semesters.map((semester) => (
                  <span
                    key={semester}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-bold text-[var(--muted)]"
                  >
                    {semester}
                  </span>
                ))}
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--muted)]">
                {getSourceTypeLabel(article.sourceType)}
              </p>

              <h2 className="text-xl font-black tracking-tight">
                {article.title[language]}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {article.summary[language]}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-xs font-semibold text-[var(--muted)]">
                {t.by} {article.authorName}
              </p>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}
