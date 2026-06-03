import Link from "next/link";
import { mockArticles } from "@/data/mock-articles";
import { TopControls } from "@/components/top-controls";

export default function HomePage() {
  const articles = mockArticles.filter(
    (article) => article.status === "approved",
  );

  const units = Array.from(
    new Set(articles.flatMap((article) => article.units)),
  );
  const semesters = Array.from(
    new Set(articles.flatMap((article) => article.semesters)),
  );
  const tags = Array.from(new Set(articles.flatMap((article) => article.tags)));

  return (
    <main className="min-h-screen bg-[#faf8ff] text-[#17142a] transition-colors dark:bg-[#0f0b1d] dark:text-white">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#663399] dark:text-purple-300">
              StudyHub
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Student information portal
            </p>
          </div>

          <TopControls />
        </div>

        <header className="mb-8 rounded-3xl bg-[#663399] p-8 text-white shadow-xl shadow-purple-950/20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-100">
            For FED, IM and other learning units
          </p>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            Guides, resources and student contributions in one place.
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-purple-100">
            A responsive learning portal where students can discover articles,
            filter by tags and submit useful sources for review.
          </p>
        </header>

        <section className="mb-8 grid gap-4 rounded-3xl border border-purple-100 bg-white p-4 shadow-sm dark:border-purple-950 dark:bg-[#17142a] md:grid-cols-4">
          <input
            className="rounded-2xl border border-purple-100 bg-white px-4 py-3 text-[#17142a] outline-none focus:ring-2 focus:ring-[#663399] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white"
            placeholder="Search articles..."
          />

          <select className="rounded-2xl border border-purple-100 bg-white px-4 py-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
            <option>All units</option>
            {units.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </select>

          <select className="rounded-2xl border border-purple-100 bg-white px-4 py-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
            <option>All semesters</option>
            {semesters.map((semester) => (
              <option key={semester}>{semester}</option>
            ))}
          </select>

          <select className="rounded-2xl border border-purple-100 bg-white px-4 py-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
            <option>All tags</option>
            {tags.map((tag) => (
              <option key={tag}>{tag}</option>
            ))}
          </select>
        </section>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/10 dark:border-purple-950 dark:bg-[#17142a]"
            >
              <div className="mb-4 flex flex-wrap gap-2">
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

              <h2 className="text-xl font-black tracking-tight">
                {article.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {article.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-[#663399] dark:bg-purple-950 dark:text-purple-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                By {article.authorName}
              </p>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}
