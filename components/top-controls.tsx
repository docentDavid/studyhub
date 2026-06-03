"use client";

import { useEffect, useState } from "react";

export function TopControls() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"en" | "nl">("en");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 p-1 shadow-sm backdrop-blur dark:border-purple-900 dark:bg-[#17142a]/80">
      <button
        onClick={() => setLanguage("en")}
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
        onClick={() => setLanguage("nl")}
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
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="rounded-full bg-purple-100 px-3 py-2 text-sm text-[#663399] transition hover:bg-purple-200 dark:bg-purple-950 dark:text-purple-200"
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
