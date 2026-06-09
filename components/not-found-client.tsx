"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Language = "en" | "nl";

export function NotFoundClient() {
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
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-9xl font-black uppercase tracking-wide text-[var(--brand)]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">
          {language === "en" ? "Page not found" : "Pagina niet gevonden"}
        </h1>
        <p className="mt-4 text-[var(--muted)]">
          {language === "en"
            ? "The page you are looking for does not exist or may have been moved."
            : "De pagina die je zoekt bestaat niet of is mogelijk verplaatst."}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-[var(--brand-dark)] px-6 py-3 font-bold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
        >
          {language === "en" ? "Back to StudyHub" : "Terug naar StudyHub"}
        </Link>
      </section>
    </main>
  );
}
