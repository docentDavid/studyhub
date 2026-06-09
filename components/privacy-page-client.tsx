"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Language = "en" | "nl";

const copy = {
  en: {
    back: "Back to homepage",
    label: "Privacy",
    title: "Privacy statement",
    intro:
      "StudyHub is a student information portal. We handle personal data carefully and only use information when it is needed for the platform.",
    sections: [
      {
        title: "What data do we use?",
        text: "StudyHub may use submitted information such as your name, source title, URL and explanation when you contribute a resource.",
      },
      {
        title: "Why do we use this data?",
        text: "We use this information to review submitted resources and keep the quality of the platform reliable for students.",
      },
      {
        title: "Local preferences",
        text: "StudyHub may store preferences such as language or theme locally in your browser. This helps the website remember your settings.",
      },
      {
        title: "Sharing data",
        text: "StudyHub does not sell personal data. Submitted resources may become visible after review, depending on the purpose of the submission.",
      },
      {
        title: "Contact",
        text: "For questions about privacy or submitted content, contact the StudyHub maintainer.",
      },
    ],
  },
  nl: {
    back: "Terug naar startpagina",
    label: "Privacy",
    title: "Privacyverklaring",
    intro:
      "StudyHub is een studenten informatieportaal. We gaan zorgvuldig om met persoonsgegevens en gebruiken informatie alleen wanneer dat nodig is voor het platform.",
    sections: [
      {
        title: "Welke gegevens gebruiken we?",
        text: "StudyHub kan ingezonden informatie gebruiken, zoals je naam, de titel van een bron, URL en toelichting wanneer je een bron instuurt.",
      },
      {
        title: "Waarom gebruiken we deze gegevens?",
        text: "We gebruiken deze informatie om ingezonden bronnen te beoordelen en de kwaliteit van het platform betrouwbaar te houden voor studenten.",
      },
      {
        title: "Lokale voorkeuren",
        text: "StudyHub kan voorkeuren zoals taal of thema lokaal in je browser opslaan. Daardoor kan de website je instellingen onthouden.",
      },
      {
        title: "Gegevens delen",
        text: "StudyHub verkoopt geen persoonsgegevens. Ingezonden bronnen kunnen na controle zichtbaar worden, afhankelijk van het doel van de inzending.",
      },
      {
        title: "Contact",
        text: "Voor vragen over privacy of ingezonden content kun je contact opnemen met de beheerder van StudyHub.",
      },
    ],
  },
};

export function PrivacyPageClient() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;

    if (savedLanguage === "en" || savedLanguage === "nl") {
      setLanguage(savedLanguage);
    }

    function handleLanguageChange(event: Event) {
      const customEvent = event as CustomEvent;

      if (customEvent.detail === "en" || customEvent.detail === "nl") {
        setLanguage(customEvent.detail);
      }
    }

    window.addEventListener("language-change", handleLanguageChange);

    return () => {
      window.removeEventListener("language-change", handleLanguageChange);
    };
  }, []);

  const t = copy[language];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-bold text-[var(--brand)] transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
        >
          ← {t.back}
        </Link>

        <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-[var(--brand)]">
            {t.label}
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            {t.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            {t.intro}
          </p>

          <div className="mt-8 space-y-6">
            {t.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-black">{section.title}</h2>
                <p className="mt-2 leading-7 text-[var(--muted)]">
                  {section.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
