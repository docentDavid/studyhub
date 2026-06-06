import { Article } from "@/types/content";

export const mockArticles: Article[] = [
  {
    id: "1",
    slug: "css-grid-layout-basics",
    title: {
      en: "CSS Grid Layout Basics",
      nl: "Basis van CSS Grid Layout",
    },
    summary: {
      en: "Learn the fundamentals of CSS Grid for responsive page layouts.",
      nl: "Leer de basis van CSS Grid voor responsive pagina-layouts.",
    },
    contentMarkdown: {
      en: "# CSS Grid Layout Basics\n\nCSS Grid helps you create two-dimensional layouts using rows and columns.",
      nl: "# Basis van CSS Grid Layout\n\nCSS Grid helpt je tweedimensionale layouts te maken met rijen en kolommen.",
    },
    units: ["FED"],
    semesters: ["Semester 1"],
    tags: ["css", "grid", "layout"],
    authorName: "Alex",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-01",
    updatedAt: "2026-06-25",
  },
  {
    id: "2",
    slug: "css-grid-common-patterns",
    title: {
      en: "CSS Grid Common Patterns",
      nl: "Veelgebruikte CSS Grid Patronen",
    },
    summary: {
      en: "Explore practical layout patterns built with CSS Grid.",
      nl: "Ontdek praktische layoutpatronen gebouwd met CSS Grid.",
    },
    contentMarkdown: {
      en: "# CSS Grid Common Patterns\n\nUse Grid for cards, dashboards, galleries and page templates.",
      nl: "# Veelgebruikte CSS Grid Patronen\n\nGebruik Grid voor kaarten, dashboards, galerijen en paginatemplates.",
    },
    units: ["FED"],
    semesters: ["Semester 1"],
    tags: ["css", "grid", "responsive"],
    authorName: "Morgan",
    sourceType: "article",
    status: "approved",
    createdAt: "2026-06-02",
    updatedAt: "2026-06-24",
  },
  {
    id: "3",
    slug: "advanced-css-grid",
    title: {
      en: "Advanced CSS Grid",
      nl: "Gevorderde CSS Grid",
    },
    summary: {
      en: "A deeper look at named grid areas, minmax and complex layouts.",
      nl: "Een diepere blik op named grid areas, minmax en complexe layouts.",
    },
    contentMarkdown: {
      en: "# Advanced CSS Grid\n\nAdvanced Grid techniques help you build flexible and maintainable interfaces.",
      nl: "# Gevorderde CSS Grid\n\nGevorderde Grid-technieken helpen je flexibele en onderhoudbare interfaces te bouwen.",
    },
    units: ["FED"],
    semesters: ["Semester 2"],
    tags: ["css", "grid", "advanced"],
    authorName: "Jamie",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-03",
    updatedAt: "2026-06-23",
  },
  {
    id: "4",
    slug: "responsive-css-foundations",
    title: {
      en: "Responsive CSS Foundations",
      nl: "Basis van Responsive CSS",
    },
    summary: {
      en: "Understand fluid layouts, media queries and responsive design principles.",
      nl: "Begrijp fluid layouts, media queries en principes van responsive design.",
    },
    contentMarkdown: {
      en: "# Responsive CSS Foundations\n\nResponsive CSS starts with flexible units, readable typography and meaningful breakpoints.",
      nl: "# Basis van Responsive CSS\n\nResponsive CSS begint met flexibele eenheden, leesbare typografie en betekenisvolle breakpoints.",
    },
    units: ["FED"],
    semesters: ["Semester 2"],
    tags: ["css", "responsive", "layout"],
    authorName: "Taylor",
    sourceType: "article",
    status: "approved",
    createdAt: "2026-06-04",
    updatedAt: "2026-06-22",
  },
  {
    id: "5",
    slug: "ux-research-basics",
    title: {
      en: "UX Research Basics",
      nl: "Basis van UX Research",
    },
    summary: {
      en: "An introduction to interviews, observations and surveys.",
      nl: "Een introductie tot interviews, observaties en enquêtes.",
    },
    contentMarkdown: {
      en: "# UX Research Basics\n\nResearch helps you understand users before designing solutions.",
      nl: "# Basis van UX Research\n\nOnderzoek helpt je gebruikers te begrijpen voordat je oplossingen ontwerpt.",
    },
    units: ["IM"],
    semesters: ["Semester 1"],
    tags: ["ux", "research", "interviews"],
    authorName: "Sarah",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-05",
    updatedAt: "2026-06-21",
  },
  {
    id: "6",
    slug: "ux-research-interview-guide",
    title: {
      en: "UX Research Interview Guide",
      nl: "UX Research Interviewgids",
    },
    summary: {
      en: "Prepare, conduct and analyse student-friendly UX interviews.",
      nl: "Bereid studentvriendelijke UX-interviews voor, voer ze uit en analyseer ze.",
    },
    contentMarkdown: {
      en: "# UX Research Interview Guide\n\nGood interviews focus on behaviour, context and open questions.",
      nl: "# UX Research Interviewgids\n\nGoede interviews focussen op gedrag, context en open vragen.",
    },
    units: ["IM"],
    semesters: ["Semester 1"],
    tags: ["ux", "research", "interviews"],
    authorName: "Noah",
    sourceType: "article",
    status: "approved",
    createdAt: "2026-06-06",
    updatedAt: "2026-06-20",
  },
  {
    id: "7",
    slug: "interaction-design-principles",
    title: {
      en: "Interaction Design Principles",
      nl: "Principes van Interaction Design",
    },
    summary: {
      en: "Learn feedback, affordances and interaction patterns for digital products.",
      nl: "Leer feedback, affordances en interactiepatronen voor digitale producten.",
    },
    contentMarkdown: {
      en: "# Interaction Design Principles\n\nInteraction design shapes how users understand and control an interface.",
      nl: "# Principes van Interaction Design\n\nInteraction design bepaalt hoe gebruikers een interface begrijpen en bedienen.",
    },
    units: ["IM", "DES"],
    semesters: ["Semester 2"],
    tags: ["ux", "interaction", "design"],
    authorName: "Riley",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-07",
    updatedAt: "2026-06-19",
  },
  {
    id: "8",
    slug: "figma-prototyping-workflow",
    title: {
      en: "Figma Prototyping Workflow",
      nl: "Figma Prototype Workflow",
    },
    summary: {
      en: "Create clickable prototypes for user testing and design reviews.",
      nl: "Maak klikbare prototypes voor gebruikerstesten en design reviews.",
    },
    contentMarkdown: {
      en: "# Figma Prototyping Workflow\n\nA prototype helps you test interaction ideas before building code.",
      nl: "# Figma Prototype Workflow\n\nEen prototype helpt je interactie-ideeën te testen voordat je code bouwt.",
    },
    units: ["IM", "DES"],
    semesters: ["Semester 2"],
    tags: ["figma", "prototype", "ux"],
    authorName: "Emma",
    sourceType: "video",
    status: "approved",
    createdAt: "2026-06-08",
    updatedAt: "2026-06-18",
  },
  {
    id: "9",
    slug: "nextjs-app-router-overview",
    title: {
      en: "Next.js App Router Overview",
      nl: "Overzicht van de Next.js App Router",
    },
    summary: {
      en: "Understand layouts, pages, loading states and server components.",
      nl: "Begrijp layouts, pages, loading states en server components.",
    },
    contentMarkdown: {
      en: "# Next.js App Router Overview\n\nThe App Router structures applications around folders and layouts.",
      nl: "# Overzicht van de Next.js App Router\n\nDe App Router structureert applicaties rond mappen en layouts.",
    },
    units: ["FED", "PROG"],
    semesters: ["Semester 3"],
    tags: ["nextjs", "react", "routing"],
    authorName: "Robin",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-09",
    updatedAt: "2026-06-17",
  },
  {
    id: "10",
    slug: "nextjs-server-components",
    title: {
      en: "Next.js Server Components",
      nl: "Next.js Server Components",
    },
    summary: {
      en: "Learn when to use server components and when client components are needed.",
      nl: "Leer wanneer je server components gebruikt en wanneer client components nodig zijn.",
    },
    contentMarkdown: {
      en: "# Next.js Server Components\n\nServer Components reduce client-side JavaScript and improve performance.",
      nl: "# Next.js Server Components\n\nServer Components verminderen client-side JavaScript en verbeteren performance.",
    },
    units: ["FED", "PROG"],
    semesters: ["Semester 3"],
    tags: ["nextjs", "react", "performance"],
    authorName: "Casey",
    sourceType: "article",
    status: "approved",
    createdAt: "2026-06-10",
    updatedAt: "2026-06-16",
  },
  {
    id: "11",
    slug: "nextjs-deployment-checklist",
    title: {
      en: "Next.js Deployment Checklist",
      nl: "Next.js Deployment Checklist",
    },
    summary: {
      en: "A practical checklist for deploying a Next.js project.",
      nl: "Een praktische checklist voor het deployen van een Next.js-project.",
    },
    contentMarkdown: {
      en: "# Next.js Deployment Checklist\n\nCheck environment variables, metadata, caching and build output.",
      nl: "# Next.js Deployment Checklist\n\nControleer environment variables, metadata, caching en build output.",
    },
    units: ["FED", "PROG"],
    semesters: ["Semester 4"],
    tags: ["nextjs", "deployment", "vercel"],
    authorName: "Jordan",
    sourceType: "external-source",
    status: "approved",
    createdAt: "2026-06-11",
    updatedAt: "2026-06-15",
  },
  {
    id: "12",
    slug: "tailwind-css-design-tokens",
    title: {
      en: "Tailwind CSS Design Tokens",
      nl: "Tailwind CSS Design Tokens",
    },
    summary: {
      en: "Use CSS variables and tokens to keep visual design consistent.",
      nl: "Gebruik CSS-variabelen en tokens om visueel ontwerp consistent te houden.",
    },
    contentMarkdown: {
      en: "# Tailwind CSS Design Tokens\n\nDesign tokens make colors, spacing and typography easier to maintain.",
      nl: "# Tailwind CSS Design Tokens\n\nDesign tokens maken kleuren, spacing en typografie eenvoudiger te onderhouden.",
    },
    units: ["FED", "DES"],
    semesters: ["Semester 2"],
    tags: ["tailwind", "design", "tokens"],
    authorName: "Avery",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-12",
    updatedAt: "2026-06-14",
  },
  {
    id: "13",
    slug: "accessibility-color-contrast",
    title: {
      en: "Accessibility and Color Contrast",
      nl: "Toegankelijkheid en Kleurcontrast",
    },
    summary: {
      en: "Improve readability with accessible contrast and clear visual hierarchy.",
      nl: "Verbeter leesbaarheid met toegankelijk contrast en duidelijke visuele hiërarchie.",
    },
    contentMarkdown: {
      en: "# Accessibility and Color Contrast\n\nGood contrast helps everyone read and understand content more easily.",
      nl: "# Toegankelijkheid en Kleurcontrast\n\nGoed contrast helpt iedereen content makkelijker te lezen en begrijpen.",
    },
    units: ["FED", "DES"],
    semesters: ["Semester 1"],
    tags: ["accessibility", "design", "contrast"],
    authorName: "Pat",
    sourceType: "article",
    status: "approved",
    createdAt: "2026-06-13",
    updatedAt: "2026-06-13",
  },
  {
    id: "14",
    slug: "html-semantic-structure",
    title: {
      en: "HTML Semantic Structure",
      nl: "Semantische Structuur in HTML",
    },
    summary: {
      en: "Use semantic HTML to improve accessibility, SEO and maintainability.",
      nl: "Gebruik semantische HTML om toegankelijkheid, SEO en onderhoudbaarheid te verbeteren.",
    },
    contentMarkdown: {
      en: "# HTML Semantic Structure\n\nSemantic elements describe the meaning of content and improve assistive technology support.",
      nl: "# Semantische Structuur in HTML\n\nSemantische elementen beschrijven de betekenis van content en verbeteren ondersteuning voor assistieve technologie.",
    },
    units: ["FED"],
    semesters: ["Semester 1"],
    tags: ["html", "accessibility", "seo"],
    authorName: "Lina",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-14",
    updatedAt: "2026-06-12",
  },
  {
    id: "15",
    slug: "javascript-array-methods",
    title: {
      en: "JavaScript Array Methods",
      nl: "JavaScript Array-methodes",
    },
    summary: {
      en: "Practice map, filter, reduce and sort with realistic examples.",
      nl: "Oefen met map, filter, reduce en sort aan de hand van realistische voorbeelden.",
    },
    contentMarkdown: {
      en: "# JavaScript Array Methods\n\nArray methods help transform and filter data in frontend applications.",
      nl: "# JavaScript Array-methodes\n\nArray-methodes helpen data te transformeren en filteren in frontend applicaties.",
    },
    units: ["FED", "PROG"],
    semesters: ["Semester 2"],
    tags: ["javascript", "arrays", "programming"],
    authorName: "Kim",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-15",
    updatedAt: "2026-06-11",
  },
  {
    id: "16",
    slug: "typescript-for-beginners",
    title: {
      en: "TypeScript for Beginners",
      nl: "TypeScript voor Beginners",
    },
    summary: {
      en: "Learn types, interfaces and safer JavaScript development.",
      nl: "Leer types, interfaces en veiligere JavaScript-development.",
    },
    contentMarkdown: {
      en: "# TypeScript for Beginners\n\nTypeScript helps catch mistakes before your code runs.",
      nl: "# TypeScript voor Beginners\n\nTypeScript helpt fouten te vinden voordat je code draait.",
    },
    units: ["FED", "PROG"],
    semesters: ["Semester 3"],
    tags: ["typescript", "javascript", "programming"],
    authorName: "Sam",
    sourceType: "article",
    status: "approved",
    createdAt: "2026-06-16",
    updatedAt: "2026-06-10",
  },
  {
    id: "17",
    slug: "portfolio-case-study-writing",
    title: {
      en: "Writing a Portfolio Case Study",
      nl: "Een Portfolio Case Study Schrijven",
    },
    summary: {
      en: "Structure your design and development projects into clear portfolio stories.",
      nl: "Structureer je ontwerp- en developmentprojecten als duidelijke portfolioverhalen.",
    },
    contentMarkdown: {
      en: "# Writing a Portfolio Case Study\n\nA good case study explains context, process, decisions and outcomes.",
      nl: "# Een Portfolio Case Study Schrijven\n\nEen goede case study legt context, proces, keuzes en resultaten uit.",
    },
    units: ["DES", "IM", "FED"],
    semesters: ["Semester 4"],
    tags: ["portfolio", "reflection", "presentation"],
    authorName: "Drew",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-17",
    updatedAt: "2026-06-09",
  },
  {
    id: "18",
    slug: "student-source-css-tricks-grid",
    title: {
      en: "Student Source: CSS-Tricks Grid Guide",
      nl: "Studentenbron: CSS-Tricks Grid Guide",
    },
    summary: {
      en: "A student-submitted external guide for learning CSS Grid.",
      nl: "Een door een student ingediende externe gids om CSS Grid te leren.",
    },
    contentMarkdown: {
      en: "# Student Source: CSS-Tricks Grid Guide\n\nThis student source points to a practical external explanation of CSS Grid.",
      nl: "# Studentenbron: CSS-Tricks Grid Guide\n\nDeze studentenbron verwijst naar een praktische externe uitleg over CSS Grid.",
    },
    units: ["FED"],
    semesters: ["Semester 1"],
    tags: ["css", "grid", "external"],
    authorName: "Lisa",
    sourceType: "student-source",
    status: "approved",
    createdAt: "2026-06-18",
    updatedAt: "2026-06-08",
  },
  {
    id: "19",
    slug: "student-source-ux-laws",
    title: {
      en: "Student Source: Laws of UX",
      nl: "Studentenbron: Laws of UX",
    },
    summary: {
      en: "A useful student-submitted source about common UX principles.",
      nl: "Een nuttige studentenbron over veelgebruikte UX-principes.",
    },
    contentMarkdown: {
      en: "# Student Source: Laws of UX\n\nThis source helps students connect UX theory to design choices.",
      nl: "# Studentenbron: Laws of UX\n\nDeze bron helpt studenten UX-theorie te koppelen aan ontwerpkeuzes.",
    },
    units: ["IM", "DES"],
    semesters: ["Semester 2"],
    tags: ["ux", "design", "principles"],
    authorName: "Milan",
    sourceType: "student-source",
    status: "approved",
    createdAt: "2026-06-19",
    updatedAt: "2026-06-07",
  },
  {
    id: "20",
    slug: "video-react-state-management",
    title: {
      en: "Video: React State Management",
      nl: "Video: React State Management",
    },
    summary: {
      en: "A short video explaining local state, props and derived state.",
      nl: "Een korte video over local state, props en derived state.",
    },
    contentMarkdown: {
      en: "# Video: React State Management\n\nState management helps components respond to user interaction and data changes.",
      nl: "# Video: React State Management\n\nState management helpt componenten reageren op interactie en dataveranderingen.",
    },
    units: ["FED", "PROG"],
    semesters: ["Semester 3"],
    tags: ["react", "state", "javascript"],
    authorName: "Teacher Team",
    sourceType: "video",
    status: "approved",
    createdAt: "2026-06-20",
    updatedAt: "2026-06-06",
  },
  {
    id: "21",
    slug: "external-source-mdn-accessibility",
    title: {
      en: "External Source: MDN Accessibility",
      nl: "Externe Bron: MDN Accessibility",
    },
    summary: {
      en: "A curated external source for accessibility fundamentals.",
      nl: "Een geselecteerde externe bron over de basis van toegankelijkheid.",
    },
    contentMarkdown: {
      en: "# External Source: MDN Accessibility\n\nMDN provides reliable documentation for web accessibility.",
      nl: "# Externe Bron: MDN Accessibility\n\nMDN biedt betrouwbare documentatie over webtoegankelijkheid.",
    },
    units: ["FED"],
    semesters: ["Semester 1"],
    tags: ["accessibility", "html", "external"],
    authorName: "Teacher Team",
    sourceType: "external-source",
    status: "approved",
    createdAt: "2026-06-21",
    updatedAt: "2026-06-05",
  },
  {
    id: "22",
    slug: "external-source-vercel-nextjs",
    title: {
      en: "External Source: Vercel Next.js Docs",
      nl: "Externe Bron: Vercel Next.js Docs",
    },
    summary: {
      en: "Official documentation for learning and deploying Next.js applications.",
      nl: "Officiële documentatie voor het leren en deployen van Next.js-applicaties.",
    },
    contentMarkdown: {
      en: "# External Source: Vercel Next.js Docs\n\nUse the official documentation when working with Next.js features.",
      nl: "# Externe Bron: Vercel Next.js Docs\n\nGebruik de officiële documentatie bij het werken met Next.js-features.",
    },
    units: ["FED", "PROG"],
    semesters: ["Semester 4"],
    tags: ["nextjs", "deployment", "external"],
    authorName: "Teacher Team",
    sourceType: "external-source",
    status: "approved",
    createdAt: "2026-06-22",
    updatedAt: "2026-06-04",
  },
  {
    id: "23",
    slug: "media-storytelling-basics",
    title: {
      en: "Media Storytelling Basics",
      nl: "Basis van Media Storytelling",
    },
    summary: {
      en: "Learn how structure, pacing and interaction shape digital stories.",
      nl: "Leer hoe structuur, tempo en interactie digitale verhalen vormgeven.",
    },
    contentMarkdown: {
      en: "# Media Storytelling Basics\n\nDigital storytelling combines content, interaction and timing.",
      nl: "# Basis van Media Storytelling\n\nDigital storytelling combineert content, interactie en timing.",
    },
    units: ["IM"],
    semesters: ["Semester 3"],
    tags: ["media", "storytelling", "interaction"],
    authorName: "Nora",
    sourceType: "article",
    status: "approved",
    createdAt: "2026-06-23",
    updatedAt: "2026-06-03",
  },
  {
    id: "24",
    slug: "design-critique-methods",
    title: {
      en: "Design Critique Methods",
      nl: "Methodes voor Design Critique",
    },
    summary: {
      en: "Give and receive useful feedback during design reviews.",
      nl: "Geef en ontvang nuttige feedback tijdens design reviews.",
    },
    contentMarkdown: {
      en: "# Design Critique Methods\n\nGood critique focuses on goals, evidence and actionable improvements.",
      nl: "# Methodes voor Design Critique\n\nGoede critique focust op doelen, bewijs en uitvoerbare verbeteringen.",
    },
    units: ["DES", "IM"],
    semesters: ["Semester 4"],
    tags: ["design", "feedback", "critique"],
    authorName: "Maya",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-24",
    updatedAt: "2026-06-02",
  },
  {
    id: "25",
    slug: "frontend-performance-basics",
    title: {
      en: "Frontend Performance Basics",
      nl: "Basis van Frontend Performance",
    },
    summary: {
      en: "Improve loading speed with images, caching and JavaScript awareness.",
      nl: "Verbeter laadsnelheid met afbeeldingen, caching en bewust gebruik van JavaScript.",
    },
    contentMarkdown: {
      en: `
# Frontend Performance Basics

Performance improves user experience, accessibility and conversion.

## Why performance matters

A fast website feels more reliable and helps students access resources quickly.

### Key techniques

- Optimize images
- Reduce unnecessary JavaScript
- Use caching
- Avoid layout shifts
- Test on real devices

## Example checklist

\`\`\`ts
const performanceChecklist = [
  "Optimize images",
  "Minimize JavaScript",
  "Use semantic HTML",
  "Check Lighthouse",
];
\`\`\`

## Useful reminder

**Performance is a user experience issue**, not only a technical issue.

> Start simple, measure often, and improve step by step.
`,
      nl: `
# Basis van Frontend Performance

Performance verbetert gebruikerservaring, toegankelijkheid en conversie.

## Waarom performance belangrijk is

Een snelle website voelt betrouwbaarder en helpt studenten om bronnen snel te openen.

### Belangrijke technieken

- Optimaliseer afbeeldingen
- Verminder onnodige JavaScript
- Gebruik caching
- Voorkom layout shifts
- Test op echte apparaten

## Voorbeeld checklist

\`\`\`ts
const performanceChecklist = [
  "Afbeeldingen optimaliseren",
  "JavaScript beperken",
  "Semantische HTML gebruiken",
  "Lighthouse controleren",
];
\`\`\`

## Handige reminder

**Performance is een UX-probleem**, niet alleen een technisch probleem.

> Begin eenvoudig, meet regelmatig en verbeter stap voor stap.
`,
    },
    units: ["FED"],
    semesters: ["Semester 4"],
    tags: ["performance", "javascript", "accessibility"],
    authorName: "Chris",
    sourceType: "article",
    status: "approved",
    createdAt: "2026-06-25",
    updatedAt: "2026-06-01",
  },
];
