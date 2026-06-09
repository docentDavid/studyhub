"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useLanguage, type Language } from "@/lib/use-language";

type Theme = "light" | "dark";

function getTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = localStorage.getItem("theme");

  return savedTheme === "light" ? "light" : "dark";
}

function subscribeTheme(callback: () => void) {
  window.addEventListener("theme-change", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function TopControls() {
  const language = useLanguage();

  const theme = useSyncExternalStore<Theme>(
    subscribeTheme,
    getTheme,
    () => "dark",
  );
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function changeLanguage(nextLanguage: Language) {
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

    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);

    window.dispatchEvent(new Event("theme-change"));
  }

  const inactiveButtonClassName =
    "text-[var(--muted)] hover:bg-[var(--brand-soft)] hover:text-[var(--brand)]";

  const activeButtonClassName = "bg-[var(--brand-dark)] text-white shadow-sm";

  return (
    <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 p-1 shadow-sm backdrop-blur">
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`rounded-full px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-[var(--brand)] ${
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
        className={`rounded-full px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-[var(--brand)] ${
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
        className="rounded-full bg-[var(--brand-soft)] px-3 py-2 text-sm text-[var(--brand)] transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
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
