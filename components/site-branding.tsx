"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/use-language";
import { commonCopy } from "@/lib/i18n/copy";

export function SiteBranding() {
  const language = useLanguage();
  const common = commonCopy[language];

  return (
    <Link
      href="/"
      aria-label={common.goToHomepage}
      className="block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
    >
      <p className="text-sm font-black uppercase tracking-wide text-[var(--brand)]">
        StudyHub
      </p>

      <p className="text-sm text-[var(--muted)]">{common.portalLabel}</p>
    </Link>
  );
}
