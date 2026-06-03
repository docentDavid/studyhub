import Link from "next/link";
import { mockArticles } from "@/data/mock-articles";

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
    <main className="min-h-screen bg-[#faf8ff] text-[#17142a]">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-3xl bg-[#663399] p-8 text-white shadow-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-100">
            StudyHub
          </p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            Guides, bronnen en studentbijdragen op één plek.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-purple-100">
            Een responsive informatieportal voor FED, IM en andere
            onderwijsunits.
          </p>
        </header>

        <section className="mb-8 grid gap-4 rounded-3xl border border-purple-100 bg-white p-4 shadow-sm md:grid-cols-4">
          <input
            className="rounded-2xl border border-purple-100 px-4 py-3"
            placeholder="Zoeken..."
          />

          <select className="rounded-2xl border border-purple-100 px-4 py-3">
            <option>Alle units</option>
            {units.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </select>

          <select className="rounded-2xl border border-purple-100 px-4 py-3">
            <option>Alle semesters</option>
            {semesters.map((semester) => (
              <option key={semester}>{semester}</option>
            ))}
          </select>

          <select className="rounded-2xl border border-purple-100 px-4 py-3">
            <option>Alle tags</option>
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
              className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {article.units.map((unit) => (
                  <span
                    key={unit}
                    className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-[#663399]"
                  >
                    {unit}
                  </span>
                ))}
                {article.semesters.map((semester) => (
                  <span
                    key={semester}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600"
                  >
                    {semester}
                  </span>
                ))}
              </div>

              <h2 className="text-xl font-black tracking-tight">
                {article.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {article.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-[#663399]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-xs font-semibold text-gray-500">
                Door {article.authorName}
              </p>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}
