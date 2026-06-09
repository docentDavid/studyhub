"use client";

import { useEffect, useState } from "react";

type Language = "en" | "nl";
type Theme = "light" | "dark";

export function TopControls() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    const initialLanguage: Language =
      savedLanguage === "nl" || savedLanguage === "en" ? savedLanguage : "en";

    setLanguage(initialLanguage);
    document.documentElement.lang = initialLanguage;

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

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

  const inactiveButtonClassName =
    "text-[var(--muted)] hover:bg-[var(--brand-soft)] hover:text-[var(--brand)]";

  const activeButtonClassName = "bg-[var(--brand-dark)] text-white shadow-sm";

  return (
    <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 p-1 shadow-sm backdrop-blur">
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`cursor-pointer rounded-full px-3 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] hover:opacity-90 
          ${
            language === "en" ? activeButtonClassName : inactiveButtonClassName
          }`}
        aria-label="Switch to English"
        aria-pressed={language === "en"}
      >
        🇬🇧
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("nl")}
        className={`cursor-pointer rounded-full px-3 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] hover:opacity-90 
          ${
            language === "nl" ? activeButtonClassName : inactiveButtonClassName
          }`}
        aria-label="Switch to Dutch"
        aria-pressed={language === "nl"}
      >
        🇳🇱
      </button>

      <div className="mx-1 h-6 w-px bg-[var(--border)]" />

      <button
        type="button"
        onClick={toggleTheme}
        className="cursor-pointer rounded-full bg-[var(--brand-soft)] px-3 py-2 text-sm text-[var(--brand)] transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        aria-pressed={theme === "dark"}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
