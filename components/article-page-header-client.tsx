"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Language = "en" | "nl";

const copy = {
  en: {
    allArticles: "All articles",
    submitSource: "Submit source",
  },
  nl: {
    allArticles: "Alle artikelen",
    submitSource: "Bron insturen",
  },
};

export function ArticlePageHeaderClient() {
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
    <header className="border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-black text-[var(--brand)] transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
        >
          ← {t.allArticles}
        </Link>

        <Link
          href="/submit"
          className="rounded-2xl bg-[var(--brand-dark)] px-4 py-2 text-sm font-bold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
        >
          {t.submitSource}
        </Link>
      </div>
    </header>
  );
}
