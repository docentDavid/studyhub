"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/use-language";

export function SiteBranding() {
  const language = useLanguage();

  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
    >
      <p className="text-sm font-black uppercase tracking-wide text-[var(--brand)]">
        StudyHub
      </p>

      <p className="text-sm text-[var(--muted)]">
        {language === "en"
          ? "Student Information Portal"
          : "Studenten Informatieportaal"}
      </p>
    </Link>
  );
}
