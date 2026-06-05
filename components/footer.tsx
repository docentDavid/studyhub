"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Language = "en" | "nl";

export function Footer() {
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
    <footer className="mt-2 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-semibold text-[var(--foreground)]">StudyHub</p>

            <p className="text-sm text-[var(--muted)]">
              {language === "en" ? "Version 0.1.0" : "Versie 0.1.0"}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            <Link
              href="/"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
            >
              {language === "en" ? "Home" : "Start"}
            </Link>

            <Link
              href="/submit"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
            >
              {language === "en" ? "Contribute" : "Bijdragen"}
            </Link>

            <Link
              href="#"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
