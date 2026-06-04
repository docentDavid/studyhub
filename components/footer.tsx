import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-purple-100 dark:border-purple-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-gray-500 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">StudyHub</p>
          <p>Version 0.1.0</p>
        </div>

        <div className="flex flex-wrap gap-6">
          <Link
            href="/"
            className="transition hover:text-[#663399] dark:hover:text-purple-300"
          >
            Home
          </Link>

          <Link
            href="/submit"
            className="transition hover:text-[#663399] dark:hover:text-purple-300"
          >
            Contribute
          </Link>

          <Link
            href="#"
            className="transition hover:text-[#663399] dark:hover:text-purple-300"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
