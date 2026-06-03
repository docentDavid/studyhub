"use client";

import { useEffect, useState } from "react";

type Language = "en" | "nl";
type Theme = "light" | "dark";

type TopControlsProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function TopControls({ language, onLanguageChange }: TopControlsProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme: Theme = prefersDark ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <div className="flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 p-1 shadow-sm backdrop-blur dark:border-purple-900 dark:bg-[#17142a]/80">
      <button
        onClick={() => onLanguageChange("en")}
        className={`rounded-full px-3 py-2 text-sm transition ${
          language === "en"
            ? "bg-[#663399] text-white"
            : "text-gray-600 hover:bg-purple-50 dark:text-gray-300 dark:hover:bg-purple-950"
        }`}
        aria-label="Switch to English"
      >
        🇬🇧
      </button>

      <button
        onClick={() => onLanguageChange("nl")}
        className={`rounded-full px-3 py-2 text-sm transition ${
          language === "nl"
            ? "bg-[#663399] text-white"
            : "text-gray-600 hover:bg-purple-50 dark:text-gray-300 dark:hover:bg-purple-950"
        }`}
        aria-label="Switch to Dutch"
      >
        🇳🇱
      </button>

      <div className="mx-1 h-6 w-px bg-purple-200 dark:bg-purple-900" />

      <button
        onClick={toggleTheme}
        className="rounded-full bg-purple-100 px-3 py-2 text-sm text-[#663399] transition hover:bg-purple-200 dark:bg-purple-950 dark:text-purple-200"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
