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
    <Link href="/" aria-label="Go to homepage">
      <div className="cursor-pointer">
        <p className="text-sm font-black uppercase tracking-wide text-[#663399] dark:text-purple-300">
          StudyHub
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {language === "en"
            ? "Student Information Portal"
            : "Studenten Informatieportaal"}
        </p>
      </div>
    </Link>
  );
}
