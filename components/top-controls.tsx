"use client";

import { useEffect, useState } from "react";

type Language = "en" | "nl";
type Theme = "light" | "dark";

export function TopControls() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    const initialLanguage = savedLanguage === "nl" ? "nl" : "en";

    setLanguage(initialLanguage);
    document.documentElement.lang = initialLanguage;

    const savedTheme = localStorage.getItem("theme") as Theme | null;

    let initialTheme: Theme = "dark";

    if (savedTheme === "light" || savedTheme === "dark") {
      initialTheme = savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      initialTheme = "light";
    }

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.style.colorScheme = initialTheme;
  }, []);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
    document.documentElement.lang = nextLanguage;

    window.dispatchEvent(
      new CustomEvent("language-change", {
        detail: nextLanguage,
      }),
    );
  }

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
  }

  return (
    <div className="flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 p-1 shadow-sm backdrop-blur dark:border-purple-900 dark:bg-[#17142a]/80">
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`rounded-full px-3 py-2 text-sm ${
          language === "en"
            ? "bg-[#663399] text-white"
            : "text-gray-600 dark:text-gray-300"
        }`}
        aria-label="Switch to English"
      >
        🇬🇧
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("nl")}
        className={`rounded-full px-3 py-2 text-sm ${
          language === "nl"
            ? "bg-[#663399] text-white"
            : "text-gray-600 dark:text-gray-300"
        }`}
        aria-label="Switch to Dutch"
      >
        🇳🇱
      </button>

      <div className="mx-1 h-6 w-px bg-purple-200 dark:bg-purple-900" />

      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full bg-purple-100 px-3 py-2 text-sm text-[#663399] dark:bg-purple-950 dark:text-purple-200"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
