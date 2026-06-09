"use client";

import { useState } from "react";
import { Article } from "@/types/content";
import { ArticleAsideClient } from "@/components/article-aside-client";

type Language = "en" | "nl";

type Props = {
  article: Article;
  relatedArticles: Article[];
  children: React.ReactNode;
};

export function ArticleReadingLayoutClient({
  article,
  relatedArticles,
  children,
}: Props) {
  const [showAside, setShowAside] = useState(true);

  return (
    <div
      className={`mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:px-8 ${
        showAside ? "lg:grid-cols-[1fr_280px]" : "lg:grid-cols-1"
      }`}
    >
      {children}

      <div className="lg:block">
        <ArticleAsideClient
          article={article}
          relatedArticles={relatedArticles}
          onHide={() => setShowAside(false)}
        />
      </div>

      {!showAside && (
        <button
          type="button"
          onClick={() => setShowAside(true)}
          className="fixed bottom-6 right-6 z-50 hidden rounded-full bg-[var(--brand-dark)] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90 lg:block"
        >
          Info
        </button>
      )}
    </div>
  );
}
