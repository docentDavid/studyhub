import { Article } from "@/types/content";

export const mockArticles: Article[] = [
  {
    id: "1",
    slug: "css-grid-layout",
    title: { en: "CSS Grid Layout", nl: "CSS Grid Layout" },
    summary: {
      en: "Learn how to create modern responsive layouts with CSS Grid.",
      nl: "Leer hoe je moderne responsive layouts maakt met CSS Grid.",
    },
    contentMarkdown: {
      en: "# CSS Grid Layout\n\nCSS Grid is a powerful layout system for rows and columns.",
      nl: "# CSS Grid Layout\n\nCSS Grid is een krachtig layout-systeem voor rijen en kolommen.",
    },
    units: ["FED"],
    semesters: ["Semester 2"],
    tags: ["css", "grid", "responsive"],
    authorName: "Alex",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-03",
    updatedAt: "2026-06-25",
  },
  {
    id: "2",
    slug: "ux-research-basics",
    title: { en: "UX Research Basics", nl: "Basis van UX Research" },
    summary: {
      en: "An introduction to user research within Interactive Media.",
      nl: "Een introductie tot gebruikersonderzoek binnen Interactive Media.",
    },
    contentMarkdown: {
      en: "# UX Research Basics\n\nResearch is the foundation of good design.",
      nl: "# Basis van UX Research\n\nOnderzoek vormt de basis van goed ontwerp.",
    },
    units: ["IM"],
    semesters: ["Semester 1"],
    tags: ["ux", "research"],
    authorName: "Sarah",
    sourceType: "article",
    status: "approved",
    createdAt: "2026-06-02",
    updatedAt: "2026-06-24",
  },
  {
    id: "3",
    slug: "responsive-design-principles",
    title: {
      en: "Responsive Design Principles",
      nl: "Principes van Responsive Design",
    },
    summary: {
      en: "Core principles for designing interfaces that work on every screen.",
      nl: "Basisprincipes voor interfaces die werken op elk scherm.",
    },
    contentMarkdown: {
      en: "# Responsive Design Principles\n\nStart mobile-first and scale up with meaningful breakpoints.",
      nl: "# Principes van Responsive Design\n\nBegin mobile-first en schaal op met betekenisvolle breakpoints.",
    },
    units: ["FED"],
    semesters: ["Semester 1"],
    tags: ["responsive", "html", "css"],
    authorName: "Morgan",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-01",
    updatedAt: "2026-06-23",
  },
  {
    id: "4",
    slug: "design-systems-introduction",
    title: {
      en: "Design Systems Introduction",
      nl: "Introductie tot Design Systems",
    },
    summary: {
      en: "Understand tokens, components and patterns for consistent interfaces.",
      nl: "Begrijp tokens, componenten en patronen voor consistente interfaces.",
    },
    contentMarkdown: {
      en: "# Design Systems Introduction\n\nA design system helps teams build consistent products faster.",
      nl: "# Introductie tot Design Systems\n\nEen design system helpt teams sneller consistente producten bouwen.",
    },
    units: ["DES", "FED"],
    semesters: ["Semester 3"],
    tags: ["design", "tokens", "components"],
    authorName: "Jamie",
    sourceType: "article",
    status: "approved",
    createdAt: "2026-05-31",
    updatedAt: "2026-06-22",
  },
  {
    id: "5",
    slug: "nextjs-app-router",
    title: { en: "Next.js App Router", nl: "Next.js App Router" },
    summary: {
      en: "Learn the basics of routing, layouts and server components in Next.js.",
      nl: "Leer de basis van routing, layouts en server components in Next.js.",
    },
    contentMarkdown: {
      en: "# Next.js App Router\n\nThe App Router structures pages around folders, layouts and server components.",
      nl: "# Next.js App Router\n\nDe App Router structureert pagina's met mappen, layouts en server components.",
    },
    units: ["FED", "PROG"],
    semesters: ["Semester 5"],
    tags: ["nextjs", "react", "routing"],
    authorName: "Robin",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-05-30",
    updatedAt: "2026-06-21",
  },
  ...Array.from({ length: 20 }, (_, index) => {
    const number = index + 6;

    return {
      id: String(number),
      slug: `resource-${number}`,
      title: {
        en: `Useful Study Resource ${number}`,
        nl: `Nuttige studiebron ${number}`,
      },
      summary: {
        en: "A curated resource to support learning, experimentation and project work.",
        nl: "Een geselecteerde bron ter ondersteuning van leren, experimenteren en projectwerk.",
      },
      contentMarkdown: {
        en: `# Useful Study Resource ${number}\n\nThis resource helps students explore a relevant study topic.`,
        nl: `# Nuttige studiebron ${number}\n\nDeze bron helpt studenten een relevant onderwerp te verkennen.`,
      },
      units: number % 2 === 0 ? ["FED"] : ["IM"],
      semesters: [`Semester ${(number % 4) + 1}`],
      tags: number % 2 === 0 ? ["frontend", "css"] : ["ux", "media"],
      authorName: number % 2 === 0 ? "Student Team" : "Teacher Team",
      sourceType: number % 3 === 0 ? "external-source" : "article",
      status: "approved",
      createdAt: `2026-05-${String(30 - index).padStart(2, "0")}`,
      updatedAt: `2026-06-${String(20 - index).padStart(2, "0")}`,
    } satisfies Article;
  }),
];
