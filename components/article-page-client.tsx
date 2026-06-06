"use client";

import { useEffect, useState } from "react";
import { Article } from "@/types/content";
import { MarkdownContent } from "@/components/markdown-content";

type Language = "en" | "nl";

type ArticlePageClientProps = {
  article: Article;
};

export function ArticlePageClient({ article }: ArticlePageClientProps) {
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

  return (
    <>
      <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
        {article.title[language]}
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        {article.summary[language]}
      </p>

      <div className="mt-10 rounded-3xl bg-[var(--surface-soft)] p-6 md:p-8">
        <MarkdownContent content={article.contentMarkdown[language]} />
      </div>
    </>
  );
}
