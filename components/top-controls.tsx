"use client";

import { useEffect, useState } from "react";

type Language = "en" | "nl";
type Theme = "light" | "dark";

type TopControlsProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }

  return "dark";
}

export function TopControls({ language, onLanguageChange }: TopControlsProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const initialTheme = getInitialTheme();

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.style.colorScheme = initialTheme;
  }, []);

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
        type="button"
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
        type="button"
        onClick={toggleTheme}
        className="rounded-full bg-purple-100 px-3 py-2 text-sm text-[#663399] transition hover:bg-purple-200 dark:bg-purple-950 dark:text-purple-200"
        aria-label="Toggle dark mode"
        title={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
