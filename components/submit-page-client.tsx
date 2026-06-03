"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Language = "en" | "nl";

const copy = {
  en: {
    back: "Back to portal",
    label: "Contribute",
    title: "Submit a useful source",
    intro:
      "Share an article, video, tool or guide with other students. Your submission will be reviewed before it becomes visible.",
    name: "Your name",
    sourceTitle: "Source title",
    unit: "Unit",
    semester: "Semester",
    type: "Type",
    tags: "Tags",
    url: "URL",
    reason: "Why is this useful?",
    reasonPlaceholder: "Explain why this source is helpful for other students.",
    submit: "Submit for review",
    cancel: "Cancel",
  },
  nl: {
    back: "Terug naar portal",
    label: "Bijdragen",
    title: "Stuur een nuttige bron in",
    intro:
      "Deel een artikel, video, tool of guide met andere studenten. Je inzending wordt eerst gecontroleerd voordat deze zichtbaar wordt.",
    name: "Jouw naam",
    sourceTitle: "Titel van de bron",
    unit: "Unit",
    semester: "Semester",
    type: "Type",
    tags: "Tags",
    url: "URL",
    reason: "Waarom is dit nuttig?",
    reasonPlaceholder:
      "Leg kort uit waarom deze bron nuttig is voor andere studenten.",
    submit: "Insturen ter beoordeling",
    cancel: "Annuleren",
  },
};

export function SubmitPageClient() {
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

  const t = copy[language];

  return (
    <main className="min-h-screen bg-[#faf8ff] px-4 py-8 text-[#17142a] dark:bg-[#0f0b1d] dark:text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-6 inline-flex rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-bold text-[#663399] transition hover:bg-purple-50 dark:border-purple-900 dark:bg-[#17142a] dark:text-purple-200 dark:hover:bg-purple-950"
        >
          ← {t.back}
        </Link>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-3xl bg-[#663399] p-8 text-white">
            <p className="mb-3 text-sm font-bold uppercase text-purple-100">
              {t.label}
            </p>
            <h1 className="text-4xl font-black tracking-tight">{t.title}</h1>
            <p className="mt-4 leading-7 text-purple-100">{t.intro}</p>
          </aside>

          <form className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm dark:border-purple-950 dark:bg-[#17142a] md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="font-bold">
                {t.name}
                <input className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white" />
              </label>

              <label className="font-bold">
                {t.sourceTitle}
                <input className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white" />
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <label className="font-bold">
                {t.unit}
                <select className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
                  <option>FED</option>
                  <option>IM</option>
                  <option>DES</option>
                  <option>PROG</option>
                  <option>GENERAL</option>
                </select>
              </label>

              <label className="font-bold">
                {t.semester}
                <select className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
                  <option>Semester 1</option>
                  <option>Semester 2</option>
                  <option>Semester 3</option>
                  <option>Semester 4</option>
                </select>
              </label>

              <label className="font-bold">
                {t.type}
                <select className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
                  <option>external-source</option>
                  <option>article</option>
                  <option>video</option>
                  <option>guide</option>
                  <option>student-source</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block font-bold">
              {t.tags}
              <input className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white" />
            </label>

            <label className="mt-4 block font-bold">
              {t.url}
              <input
                type="url"
                className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white"
              />
            </label>

            <label className="mt-4 block font-bold">
              {t.reason}
              <textarea
                className="mt-2 min-h-36 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white"
                placeholder={t.reasonPlaceholder}
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="rounded-2xl bg-[#663399] px-6 py-3 font-bold text-white"
              >
                {t.submit}
              </button>

              <Link
                href="/"
                className="rounded-2xl border border-purple-200 px-6 py-3 text-center font-bold text-[#663399] transition hover:bg-purple-50 dark:border-purple-900 dark:text-purple-200 dark:hover:bg-purple-950"
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
