"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Article, SourceType } from "@/types/content";
import { useRouter, useSearchParams } from "next/navigation";
import { getSourceTypeLabel, getSourceTypeName } from "@/lib/source-types";

type Language = "en" | "nl";

type HomePageClientProps = {
  articles: Article[];
};

function formatTopic(sourceType: string) {
  return sourceType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const copy = {
  en: {
    title: "Inspiration, guides and resources for students.",
    description:
      "Useful articles, tutorials and curated resources to support your studies, develop new skills and stay inspired throughout your learning journey.",
    submitResource: "Submit Resource",
    search: "Search articles...",
    allContentTypes: "All content types",
    allSemesters: "All semesters",
    allTopics: "All topics",
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
    allContentTypes: "Alle content types",
    allSemesters: "Alle semesters",
    allTopics: "Alle onderwerpen",
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLanguage = localStorage.getItem("language");

    return savedLanguage === "en" || savedLanguage === "nl"
      ? savedLanguage
      : "en";
  });

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") ?? "");
  const [selectedType, setSelectedType] = useState(
    searchParams.get("type") ?? "",
  );
  const [selectedSemester, setSelectedSemester] = useState(
    searchParams.get("semester") ?? "",
  );
  const [selectedTopic, setSelectedTopic] = useState(
    searchParams.get("topic") ?? "",
  );

  useEffect(() => {
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

  function updateFilters(nextFilters: {
    q?: string;
    type?: string;
    semester?: string;
    topic?: string;
  }) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(nextFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    const queryString = params.toString();

    router.replace(queryString ? `/?${queryString}` : "/", {
      scroll: false,
    });
  }

  const approvedArticles = articles.filter(
    (article) => article.status === "approved",
  );

  const filteredArticles = approvedArticles.filter((article) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      article.title[language]
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      article.summary[language]
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesType =
      selectedType === "" || article.sourceType === selectedType;

    const matchesSemester =
      selectedSemester === "" || article.semesters.includes(selectedSemester);

    const matchesTopic =
      selectedTopic === "" || article.tags.includes(selectedTopic);

    return matchesSearch && matchesType && matchesSemester && matchesTopic;
  });

  const latestArticles = [...approvedArticles]
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    )
    .slice(0, 4);

  const sourceTypes = useMemo(
    () =>
      Array.from(
        new Set(approvedArticles.map((article) => article.sourceType)),
      ).sort((a, b) => a.localeCompare(b)),
    [approvedArticles],
  );

  const semesters = useMemo(
    () =>
      Array.from(
        new Set(approvedArticles.flatMap((article) => article.semesters)),
      ).sort((a, b) => a.localeCompare(b)),
    [approvedArticles],
  );

  const tags = useMemo(
    () =>
      Array.from(
        new Set(approvedArticles.flatMap((article) => article.tags)),
      ).sort((a, b) => a.localeCompare(b)),
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
        <header className="mb-6 rounded-3xl bg-[var(--brand-dark)] p-6 text-white shadow-md shadow-purple-950/20 sm:p-8">
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

        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-2xl font-black tracking-tight">
              {t.latestResources}
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              {t.latestDescription}
            </p>
          </div>

          <div className="flex snap-x gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
            {latestArticles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className={`${cardClassName} min-w-[85%] snap-start md:min-w-0`}
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--muted)]">
                  {getSourceTypeLabel(article.sourceType, language)}
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

        <section className="mt-10 border-t border-[var(--border)] pt-8">
          <div className="mb-4">
            <h2 className="text-2xl font-black tracking-tight">
              {language === "en" ? "Filter resources" : "Filter bronnen"}
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              {language === "en"
                ? "Search and filter the resource library."
                : "Zoek en filter door de bronnenbibliotheek."}
            </p>
          </div>

          <div className="grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm md:grid-cols-4">
            <input
              className={fieldClassName}
              placeholder={t.search}
              value={searchQuery}
              onChange={(event) => {
                const value = event.target.value;

                setSearchQuery(value);
                updateFilters({ q: value });
              }}
            />

            <select
              className={fieldClassName}
              value={selectedType}
              onChange={(event) => {
                const value = event.target.value;

                setSelectedType(value);
                updateFilters({ type: value });
              }}
            >
              <option value="">{t.allContentTypes}</option>
              {sourceTypes.map((type) => (
                <option key={type} value={type}>
                  {getSourceTypeName(type, language)}
                </option>
              ))}
            </select>

            <select
              className={fieldClassName}
              value={selectedSemester}
              onChange={(event) => {
                const value = event.target.value;

                setSelectedSemester(value);
                updateFilters({ semester: value });
              }}
            >
              <option value="">{t.allSemesters}</option>

              {semesters.map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>

            <select
              className={fieldClassName}
              value={selectedTopic}
              onChange={(event) => {
                const value = event.target.value;

                setSelectedTopic(value);
                updateFilters({ topic: value });
              }}
            >
              <option value="">{t.allTopics}</option>

              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {formatTopic(tag)}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 mb-5">
            <p className="mt-1 text-sm font-semibold text-[var(--muted)]">
              {t.showingResources(filteredArticles.length)}
            </p>
          </div>

          {(searchQuery ||
            selectedType ||
            selectedSemester ||
            selectedTopic) && (
            <div className="mb-5 flex flex-wrap gap-2">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    updateFilters({ q: "" });
                  }}
                  className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]"
                >
                  {searchQuery} ✕
                </button>
              )}

              {selectedType && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedType("");
                    updateFilters({ type: "" });
                  }}
                  className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]"
                >
                  {getSourceTypeName(selectedType as SourceType, language)} ✕
                </button>
              )}

              {selectedSemester && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSemester("");
                    updateFilters({ semester: "" });
                  }}
                  className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]"
                >
                  {selectedSemester} ✕
                </button>
              )}

              {selectedTopic && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTopic("");
                    updateFilters({ topic: "" });
                  }}
                  className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]"
                >
                  {selectedTopic} ✕
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("");
                  setSelectedSemester("");
                  setSelectedTopic("");
                  updateFilters({
                    q: "",
                    type: "",
                    semester: "",
                    topic: "",
                  });
                }}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold text-[var(--muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              >
                {language === "en" ? "Clear all" : "Alles wissen"}
              </button>
            </div>
          )}
        </section>

        {filteredArticles.length === 0 ? (
          <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-sm">
            <h2 className="text-2xl font-black tracking-tight">
              {language === "en"
                ? "No resources found"
                : "Geen bronnen gevonden"}
            </h2>

            <p className="mt-3 text-sm text-[var(--muted)]">
              {language === "en"
                ? "Try changing your search term or removing one of the filters."
                : "Probeer je zoekterm aan te passen of een filter te verwijderen."}
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedType("");
                setSelectedSemester("");
                setSelectedTopic("");
              }}
              className="mt-6 rounded-2xl bg-[var(--brand-dark)] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
            >
              {language === "en" ? "Clear filters" : "Filters wissen"}
            </button>
          </section>
        ) : (
          <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
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
                  {getSourceTypeLabel(article.sourceType, language)}
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
        )}
      </section>
    </main>
  );
}
