"use client";

import { useSyncExternalStore } from "react";
import type { Language } from "@/lib/i18n/copy";

export type { Language };

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
