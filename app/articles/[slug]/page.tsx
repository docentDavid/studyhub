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

  const panelClassName =
    "rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm";

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-black text-[var(--brand)] transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
          >
            ← All articles
          </Link>

          <Link
            href="/submit"
            className="rounded-2xl bg-[var(--brand-dark)] px-4 py-2 text-sm font-bold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
          >
            Submit source
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8">
        <article className={`${panelClassName} p-6 md:p-10`}>
          <div className="mb-5 flex flex-wrap gap-2">
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

          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            {article.title.en}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            {article.summary.en}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand)]"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-10 whitespace-pre-wrap rounded-3xl bg-[var(--surface-soft)] p-6 leading-8 text-[var(--foreground)]">
            {article.contentMarkdown.en}
          </div>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
          <section className={`${panelClassName} p-5`}>
            <h2 className="font-black">Article info</h2>

            <dl className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <div>
                <dt className="font-bold text-[var(--foreground)]">Author</dt>
                <dd>{article.authorName}</dd>
              </div>

              <div>
                <dt className="font-bold text-[var(--foreground)]">Type</dt>
                <dd>{article.sourceType}</dd>
              </div>

              <div>
                <dt className="font-bold text-[var(--foreground)]">Updated</dt>
                <dd>{article.updatedAt}</dd>
              </div>
            </dl>
          </section>

          <section className={`${panelClassName} p-5`}>
            <h2 className="font-black">Related articles</h2>

            <div className="mt-4 space-y-3">
              {relatedArticles.length > 0 ? (
                relatedArticles.map((item) => (
                  <Link
                    key={item.id}
                    href={`/articles/${item.slug}`}
                    className="block rounded-2xl bg-[var(--brand-soft)] p-3 text-sm font-bold text-[var(--brand)] transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                  >
                    {item.title.en}
                  </Link>
                ))
              ) : (
                <p className="text-sm text-[var(--muted)]">
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
