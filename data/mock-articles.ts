import { Article } from "@/types/content";

export const mockArticles: Article[] = [
  {
    id: "1",
    slug: "css-grid-layout",

    title: "CSS Grid Layout",
    summary: "Leer hoe je moderne responsive layouts maakt met CSS Grid.",

    contentMarkdown: `
# CSS Grid Layout

CSS Grid is een krachtig layout systeem.

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

    title: "UX Research Basics",
    summary:
      "Een introductie tot gebruikersonderzoek binnen Interactive Media.",

    contentMarkdown: `
# UX Research Basics

Onderzoek vormt de basis van goed ontwerp.

## Methoden

- Interviews
- Observaties
- Surveys
`,

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
