import { Article } from "@/types/content";

export const mockArticles: Article[] = [
  {
    id: "1",
    slug: "css-grid-layout",
    title: {
      en: "CSS Grid Layout",
      nl: "CSS Grid Layout",
    },
    summary: {
      en: "Learn how to create modern responsive layouts with CSS Grid.",
      nl: "Leer hoe je moderne responsive layouts maakt met CSS Grid.",
    },
    contentMarkdown: {
      en: `
# CSS Grid Layout

CSS Grid is a powerful layout system.

## Why use Grid?

Grid gives you control over rows and columns.

## Example

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
\`\`\`
`,
      nl: `
# CSS Grid Layout

CSS Grid is een krachtig layout-systeem.

## Waarom Grid?

Grid geeft je controle over rijen én kolommen.

## Voorbeeld

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
\`\`\`
`,
    },
    units: ["FED"],
    semesters: ["Semester 2"],
    tags: ["css", "grid", "responsive"],
    authorName: "Alex",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-03",
    updatedAt: "2026-06-03",
  },
  {
    id: "2",
    slug: "ux-research-basics",
    title: {
      en: "UX Research Basics",
      nl: "Basis van UX Research",
    },
    summary: {
      en: "An introduction to user research within Interactive Media.",
      nl: "Een introductie tot gebruikersonderzoek binnen Interactive Media.",
    },
    contentMarkdown: {
      en: `
# UX Research Basics

Research is the foundation of good design.

## Methods

- Interviews
- Observations
- Surveys
`,
      nl: `
# Basis van UX Research

Onderzoek vormt de basis van goed ontwerp.

## Methoden

- Interviews
- Observaties
- Enquêtes
`,
    },
    units: ["IM"],
    semesters: ["Semester 1"],
    tags: ["ux", "research"],
    authorName: "Sarah",
    sourceType: "article",
    status: "approved",
    createdAt: "2026-06-03",
    updatedAt: "2026-06-03",
  },
];
