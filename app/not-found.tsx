import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#faf8ff] px-4 py-16 text-[#17142a] dark:bg-[#0f0b1d] dark:text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-3xl border border-purple-100 bg-white p-8 text-center shadow-sm dark:border-purple-950 dark:bg-[#17142a]">
        <p className="text-sm font-black uppercase tracking-wide text-[#663399] dark:text-purple-300">
          404
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight">
          Page not found
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-[#663399] px-6 py-3 font-bold text-white"
        >
          Back to StudyHub
        </Link>
      </section>
    </main>
  );
}
