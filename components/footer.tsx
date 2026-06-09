"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/use-language";

export function Footer() {
  const language = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-4 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-black uppercase tracking-wide text-[var(--brand)]">
              StudyHub
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {language === "en"
                ? "Student information portal"
                : "Studenten informatieportaal"}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold md:justify-end"
          >
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[var(--muted)] transition hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
            >
              {language === "en" ? "Home" : "Start"}
            </Link>

            <Link
              href="/submit"
              className="text-[var(--muted)] transition hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
            >
              {language === "en" ? "Contribute" : "Bijdragen"}
            </Link>

            <Link
              href="/privacy"
              className="text-[var(--muted)] transition hover:text-[var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
            >
              {language === "en" ? "Privacy" : "Privacy"}
            </Link>
          </nav>
        </div>

        <div className="mt-4 text-center text-xs text-[var(--muted)] md:flex md:items-center md:justify-between md:text-left">
          <p>
            StudyHub {language === "en" ? "version" : "versie"} 0.2.1 -{" "}
            {language === "en" ? "June 2026" : "Juni 2026"}
          </p>
          <p className="mt-2 md:mt-0">
            © {currentYear} StudyHub.{" "}
            {language === "en"
              ? "All rights reserved."
              : "Alle rechten voorbehouden."}
          </p>
        </div>
      </div>
    </footer>
  );
}
