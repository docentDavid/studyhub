export type Language = "en" | "nl";
export type LocalizedCopy<T> = Record<Language, T>;

export const commonCopy = {
  en: {
    goToHomepage: "Go to homepage",
    portalLabel: "Student Information Portal",
    cancel: "Cancel",
    submitForReview: "Submit for review",
    privacy: "Privacy",
    home: "Home",
    contribute: "Contribute",
    version: "Version",
  },
  nl: {
    goToHomepage: "Ga naar startpagina",
    portalLabel: "Studenten Informatieportaal",
    cancel: "Annuleren",
    submitForReview: "Insturen ter beoordeling",
    privacy: "Privacy",
    home: "Start",
    contribute: "Bijdragen",
    version: "Versie",
  },
} satisfies LocalizedCopy<{
  goToHomepage: string;
  portalLabel: string;
  cancel: string;
  submitForReview: string;
  privacy: string;
  home: string;
  contribute: string;
  version: string;
}>;

export const submitPageCopy = {
  en: {
    title: "Submit a useful source",
    intro:
      "Share an article, video, tool or guide with other students. Your submission will be reviewed before it becomes visible.",
    name: "Your name",
    sourceTitle: "Source title",
    semester: "Semester",
    type: "Content type",
    topic: "Topic",
    url: "URL",
    reason: "Why is this useful?",
    reasonPlaceholder: "Explain why this source is helpful for other students.",
  },
  nl: {
    title: "Stuur een nuttige bron in",
    intro:
      "Deel een artikel, video, tool of guide met andere studenten. Je inzending wordt eerst gecontroleerd voordat deze zichtbaar wordt.",
    name: "Jouw naam",
    sourceTitle: "Titel van de bron",
    semester: "Semester",
    type: "Contenttype",
    topic: "Onderwerp",
    url: "URL",
    reason: "Waarom is dit nuttig?",
    reasonPlaceholder:
      "Leg kort uit waarom deze bron nuttig is voor andere studenten.",
  },
} satisfies LocalizedCopy<{
  title: string;
  intro: string;
  name: string;
  sourceTitle: string;
  semester: string;
  type: string;
  topic: string;
  url: string;
  reason: string;
  reasonPlaceholder: string;
}>;

export const footerCopy = {
  en: {
    portalLabel: "Student information portal",
    releaseDate: "June 2026",
    allRightsReserved: "All rights reserved.",
    navigationLabel: "Footer navigation",
  },
  nl: {
    portalLabel: "Studenten informatieportaal",
    releaseDate: "Juni 2026",
    allRightsReserved: "Alle rechten voorbehouden.",
    navigationLabel: "Footer navigatie",
  },
} satisfies LocalizedCopy<{
  portalLabel: string;
  releaseDate: string;
  allRightsReserved: string;
  navigationLabel: string;
}>;

export const privacyPageCopy = {
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
} satisfies LocalizedCopy<{
  back: string;
  label: string;
  title: string;
  intro: string;
  sections: {
    title: string;
    text: string;
  }[];
}>;

export const siteBrandingCopy = {
  en: {
    portalLabel: "Student Information Portal",
    goToHomepage: "Go to homepage",
  },
  nl: {
    portalLabel: "Studenten Informatieportaal",
    goToHomepage: "Ga naar startpagina",
  },
} satisfies LocalizedCopy<{
  portalLabel: string;
  goToHomepage: string;
}>;

export const notFoundPageCopy = {
  en: {
    title: "Page not found",
    intro:
      "The page you are looking for does not exist or may have been moved.",
  },
  nl: {
    title: "Pagina niet gevonden",
    intro: "De pagina die je zoekt bestaat niet of is mogelijk verplaatst.",
  },
} satisfies LocalizedCopy<{
  title: string;
  intro: string;
}>;

export const articleAsideCopy = {
  en: {
    show: "Show article info",
    hide: "Hide article info",
    articleInfo: "Article info",
    author: "Author",
    type: "Type",
    updated: "Updated",
    related: "Related articles",
    noRelated: "No related articles yet.",
  },
  nl: {
    show: "Toon artikelinfo",
    hide: "Verberg artikelinfo",
    articleInfo: "Artikelinfo",
    author: "Auteur",
    type: "Type",
    updated: "Bijgewerkt",
    related: "Gerelateerde artikelen",
    noRelated: "Nog geen gerelateerde artikelen.",
  },
} satisfies LocalizedCopy<{
  show: string;
  hide: string;
  articleInfo: string;
  author: string;
  type: string;
  updated: string;
  related: string;
  noRelated: string;
}>;

export const homePageCopy = {
  en: {
    title: "Inspiration, guides and resources for students.",
    description:
      "Useful articles, tutorials and curated resources to support your studies, develop new skills and stay inspired throughout your learning journey.",
    submitResource: "Submit Resource",
    search: "Search articles...",
    allContentTypes: "All content types",
    allSemesters: "All semesters",
    allTopics: "All topics",
    latestResources: "Latest resources",
    latestDescription: "Recently added articles, guides and useful sources.",
    allResources: "All resources",
    updated: "Updated",
    by: "By",
    filterTitle: "Filter resources",
    filterDescription: "Search and filter the resource library.",
    emptyStateTitle: "No resources found",
    emptyStateDescription:
      "Try changing your search term or removing one of the filters.",
    clearAll: "Clear all",
    clearFilters: "Clear filters",
    showingResources: (count: number) => `Showing ${count} resources`,
  },
  nl: {
    title: "Inspiratie, handleidingen en bronnen voor studenten.",
    description:
      "Nuttige artikelen, tutorials en geselecteerde bronnen om je studie te ondersteunen, nieuwe vaardigheden te ontwikkelen en geïnspireerd te blijven tijdens je leerproces.",
    submitResource: "Bron insturen",
    search: "Zoek artikelen...",
    allContentTypes: "Alle content types",
    allSemesters: "Alle semesters",
    allTopics: "Alle onderwerpen",
    latestResources: "Nieuwste bronnen",
    latestDescription:
      "Recent toegevoegde artikelen, gidsen en nuttige bronnen.",
    allResources: "Alle bronnen",
    updated: "Bijgewerkt",
    by: "Door",
    filterTitle: "Filter bronnen",
    filterDescription: "Zoek en filter door de bronnenbibliotheek.",
    emptyStateTitle: "Geen bronnen gevonden",
    emptyStateDescription:
      "Probeer je zoekterm aan te passen of een filter te verwijderen.",
    clearAll: "Alles wissen",
    clearFilters: "Filters wissen",
    showingResources: (count: number) => `${count} bronnen gevonden`,
  },
} satisfies LocalizedCopy<{
  title: string;
  description: string;
  submitResource: string;
  search: string;
  allContentTypes: string;
  allSemesters: string;
  allTopics: string;
  latestResources: string;
  latestDescription: string;
  allResources: string;
  updated: string;
  by: string;
  filterTitle: string;
  filterDescription: string;
  showingResources: (count: number) => string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  clearAll: string;
  clearFilters: string;
}>;

export const articlePageHeaderCopy = {
  en: {
    allArticles: "All articles",
    submitSource: "Submit source",
  },
  nl: {
    allArticles: "Alle artikelen",
    submitSource: "Bron insturen",
  },
} satisfies LocalizedCopy<{
  allArticles: string;
  submitSource: string;
}>;
