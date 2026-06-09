"use client";

import { useSyncExternalStore } from "react";

export type Language = "en" | "nl";

function getLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = localStorage.getItem("language");

  return savedLanguage === "nl" ? "nl" : "en";
}

function subscribe(callback: () => void) {
  window.addEventListener("language-change", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("language-change", callback);
    window.removeEventListener("storage", callback);
  };
}

export function useLanguage(): Language {
  return useSyncExternalStore(subscribe, getLanguage, () => "en");
}
