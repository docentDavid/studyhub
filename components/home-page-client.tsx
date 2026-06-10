"use client";

import Link from "next/link";
import { useState } from "react";
import { Article, SourceType } from "@/types/content";
import { useRouter, useSearchParams } from "next/navigation";
import { getSourceTypeName } from "@/lib/source-types";
import { commonCopy, homePageCopy } from "@/lib/i18n/copy";
import { useLanguage } from "@/lib/use-language";
import { formatDate } from "@/lib/format-data";

type HomePageClientProps = {
  articles: Article[];
};

function formatTopic(sourceType: string) {
  return sourceType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function HomePageClient({ articles }: HomePageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const language = useLanguage();
  const homePage = homePageCopy[language];
  const common = commonCopy[language];

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

  const sourceTypes = Array.from(
    new Set(approvedArticles.map((article) => article.sourceType)),
  ).sort((a, b) => a.localeCompare(b));

  const semesters = Array.from(
    new Set(approvedArticles.flatMap((article) => article.semesters)),
  ).sort((a, b) => a.localeCompare(b));

  const tags = Array.from(
    new Set(approvedArticles.flatMap((article) => article.tags)),
  ).sort((a, b) => a.localeCompare(b));

  const cardClassName =
    "rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/10 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]";

  const fieldClassName =
    "rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--brand)]";

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-3xl bg-[var(--brand-dark)] p-6 text-white shadow-md shadow-purple-950/20 sm:p-8">
          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            {homePage.title}
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-purple-100 sm:text-lg">
            {homePage.description}
          </p>

          <Link
            href="/submit"
            className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[var(--brand-dark)] transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--brand-dark)]"
          >
            {common.submitResource}
          </Link>
        </header>

        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-2xl font-black tracking-tight">
              {homePage.latestResources}
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              {homePage.latestDescription}
            </p>
          </div>

          <div className="flex snap-x gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
            {latestArticles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className={`${cardClassName} group flex flex-col`}
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-wide text-[var(--muted)]">
                    {getSourceTypeName(
                      article.sourceType as SourceType,
                      language,
                    ) || article.sourceType}
                  </p>

                  <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-bold text-[var(--muted)]">
                    {article.semesters[0]}
                  </span>
                </div>

                <h2 className="text-xl font-black tracking-tight transition group-hover:text-[var(--brand)]">
                  {article.title[language]}
                </h2>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--muted)]">
                  {article.summary[language]}
                </p>

                <div className="mt-auto pt-6 text-xs font-semibold text-[var(--muted)]">
                  <p>
                    {homePage.by}: <strong>{article.authorName}</strong>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-[var(--border)] pt-8">
          <div className="mb-4">
            <h2 className="text-2xl font-black tracking-tight">
              {homePage.filterTitle}
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              {homePage.filterDescription}
            </p>
          </div>

          <div className="grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm md:grid-cols-4">
            <input
              className={fieldClassName}
              placeholder={homePage.search}
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
              <option value="">{homePage.allContentTypes}</option>
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
              <option value="">{homePage.allSemesters}</option>

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
              <option value="">{homePage.allTopics}</option>

              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {formatTopic(tag)}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 mb-5">
            <p className="mt-1 text-sm font-semibold text-[var(--muted)]">
              {homePage.showingResources(filteredArticles.length)}
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
                {homePage.clearAll}
              </button>
            </div>
          )}
        </section>

        {filteredArticles.length === 0 ? (
          <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-sm">
            <h2 className="text-2xl font-black tracking-tight">
              {homePage.emptyStateTitle}
            </h2>

            <p className="mt-3 text-sm text-[var(--muted)]">
              {homePage.emptyStateDescription}
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
              {homePage.clearAll}
            </button>
          </section>
        ) : (
          <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className={`${cardClassName} group flex flex-col`}
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-wide text-[var(--muted)]">
                    {getSourceTypeName(
                      article.sourceType as SourceType,
                      language,
                    )}
                  </p>

                  <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-bold text-[var(--muted)]">
                    {article.semesters[0]}
                  </span>
                </div>

                <h2 className="text-xl font-black tracking-tight transition group-hover:text-[var(--brand)]">
                  {article.title[language]}
                </h2>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--muted)]">
                  {article.summary[language]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 text-xs font-semibold text-[var(--muted)]">
                  <p>
                    {homePage.by}: <strong>{article.authorName}</strong>
                  </p>

                  <p className="mt-1">
                    {common.updated}:{" "}
                    <strong>{formatDate(article.updatedAt, language)}</strong>
                  </p>
                </div>
              </Link>
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
