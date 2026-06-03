import Link from "next/link";
import { notFound } from "next/navigation";
import { mockArticles } from "@/data/mock-articles";

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
    title: `${article.title} | StudyHub`,
    description: article.summary,
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
    .filter(
      (item) =>
        item.id !== article.id &&
        item.status === "approved" &&
        (item.units.some((unit) => article.units.includes(unit)) ||
          item.tags.some((tag) => article.tags.includes(tag))),
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#faf8ff] text-[#17142a] dark:bg-[#0f0b1d] dark:text-white">
      <header className="border-b border-purple-100 bg-white/90 backdrop-blur dark:border-purple-950 dark:bg-[#17142a]/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-black text-[#663399] dark:text-purple-300"
          >
            ← All articles
          </Link>

          <Link
            href="/submit"
            className="rounded-2xl bg-[#663399] px-4 py-2 text-sm font-bold text-white"
          >
            Submit source
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8">
        <article className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm dark:border-purple-950 dark:bg-[#17142a] md:p-10">
          <div className="mb-5 flex flex-wrap gap-2">
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

          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            {article.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            {article.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-[#663399] dark:bg-purple-950 dark:text-purple-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-10 whitespace-pre-wrap rounded-3xl bg-[#faf8ff] p-6 leading-8 text-gray-700 dark:bg-[#0f0b1d] dark:text-gray-300">
            {article.contentMarkdown}
          </div>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
          <section className="rounded-3xl border border-purple-100 bg-white p-5 shadow-sm dark:border-purple-950 dark:bg-[#17142a]">
            <h2 className="font-black">Article info</h2>

            <dl className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <dt className="font-bold text-[#17142a] dark:text-white">
                  Author
                </dt>
                <dd>{article.authorName}</dd>
              </div>

              <div>
                <dt className="font-bold text-[#17142a] dark:text-white">
                  Type
                </dt>
                <dd>{article.sourceType}</dd>
              </div>

              <div>
                <dt className="font-bold text-[#17142a] dark:text-white">
                  Updated
                </dt>
                <dd>{article.updatedAt}</dd>
              </div>
            </dl>
          </section>

          <section className="rounded-3xl border border-purple-100 bg-white p-5 shadow-sm dark:border-purple-950 dark:bg-[#17142a]">
            <h2 className="font-black">Related articles</h2>

            <div className="mt-4 space-y-3">
              {relatedArticles.length > 0 ? (
                relatedArticles.map((item) => (
                  <Link
                    key={item.id}
                    href={`/articles/${item.slug}`}
                    className="block rounded-2xl bg-purple-50 p-3 text-sm font-bold text-[#663399] transition hover:bg-purple-100 dark:bg-purple-950 dark:text-purple-200"
                  >
                    {item.title}
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No related articles yet.
                </p>
              )}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
