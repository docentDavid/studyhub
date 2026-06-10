import type { Language } from "@/lib/i18n/copy";

export function formatDate(date: string, language: Language) {
  const locale = language === "nl" ? "nl-NL" : "en-US";

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
