"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Language = "en" | "nl";

export function SiteBranding() {
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
    <Link
      href="/"
      aria-label="Go to homepage"
      className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
    >
      <p className="text-sm font-black uppercase tracking-wide text-[var(--brand)]">
        StudyHub
      </p>

      <p className="text-sm text-[var(--muted)]">
        {language === "en"
          ? "Student Information Portal"
          : "Studenten Informatieportaal"}
      </p>
    </Link>
  );
}
