import { notFound } from "next/navigation";
import { mockArticles } from "@/data/mock-articles";
import { ArticlePageClient } from "@/components/article-page-client";
import { ArticleReadingLayoutClient } from "@/components/article-reading-layout-client";
import { ArticlePageHeaderClient } from "@/components/article-page-header-client";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return mockArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = mockArticles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article not found | StudyHub",
    };
  }

  return {
    title: article.title.en,
    description: article.summary.en,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article = mockArticles.find(
    (item) => item.slug === slug && item.status === "approved",
  );

  if (!article) {
    notFound();
  }

  const relatedArticles = mockArticles
    .filter((item) => item.id !== article.id && item.status === "approved")
    .map((item) => {
      let score = 0;

      score += item.tags.filter((tag) => article.tags.includes(tag)).length * 3;
      score +=
        item.units.filter((unit) => article.units.includes(unit)).length * 2;
      score += item.semesters.filter((semester) =>
        article.semesters.includes(semester),
      ).length;

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const panelClassName =
    "rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm";

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <ArticlePageHeaderClient />

      <ArticleReadingLayoutClient
        article={article}
        relatedArticles={relatedArticles}
      >
        <article className={`${panelClassName} p-6 md:p-10`}>
          <ArticlePageClient article={article} />
        </article>
      </ArticleReadingLayoutClient>
    </main>
  );
}
