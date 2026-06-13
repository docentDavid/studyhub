import { Article } from "@/types/content";

export const mockArticles: Article[] = [
  // ─── SEMESTER 1 – Introductie ───────────────────────────────────────────────

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
    sourceUrl: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    contentMarkdown: {
      en: `# CSS Grid Layout Basics

CSS Grid is a two-dimensional layout system built into modern browsers. Unlike Flexbox — which works in one direction — Grid lets you control both rows and columns at the same time.

## Why Grid?

Before Grid, building complex page layouts required float hacks, table tricks, or a combination of nested Flexbox containers. CSS Grid makes those workarounds unnecessary by giving you a dedicated, native layout engine.

## Core concepts

### Defining a grid

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 400px auto;
  gap: 1rem;
}
\`\`\`

- **fr** — the "fractional unit" divides available space proportionally.
- **gap** — adds consistent space between rows and columns.

### Placing items

\`\`\`css
.header  { grid-column: 1 / -1; }   /* spans full width */
.sidebar { grid-column: 1 / 2; }
.main    { grid-column: 2 / 4; }
\`\`\`

### Named grid areas

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main  "
    "footer  footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
\`\`\`

Named areas make templates readable at a glance and are easy to restructure with a media query.

## Responsive grid without media queries

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

\`auto-fit\` + \`minmax\` creates a fluid layout that reflows automatically — no breakpoints needed.

## Browser support

CSS Grid has full support in all modern browsers (Chrome, Firefox, Safari, Edge). You can use it without any fallback for student projects targeting modern platforms.

> **Tip from roadmap.sh:** Grid and Flexbox are not competitors — use Grid for page-level layout and Flexbox for component-level alignment.

## Practice exercise

Build a magazine-style page layout with a header, sidebar, main content area, and footer using \`grid-template-areas\`. Then make it stack vertically on mobile with a single media query.
`,
      nl: `# Basis van CSS Grid Layout

CSS Grid is een tweedimensionaal layoutsysteem dat ingebouwd is in moderne browsers. In tegenstelling tot Flexbox — dat in één richting werkt — geeft Grid je controle over zowel rijen als kolommen tegelijk.

## Waarom Grid?

Vóór Grid vereisten complexe paginalay-outs float-hacks, tabel-trucjes of geneste Flexbox-containers. CSS Grid maakt die workarounds overbodig.

## Kernconcepten

### Een grid definiëren

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 400px auto;
  gap: 1rem;
}
\`\`\`

- **fr** — de "fractional unit" verdeelt beschikbare ruimte proportioneel.
- **gap** — voegt consistente ruimte toe tussen rijen en kolommen.

### Items plaatsen

\`\`\`css
.header  { grid-column: 1 / -1; }   /* volledige breedte */
.sidebar { grid-column: 1 / 2; }
.main    { grid-column: 2 / 4; }
\`\`\`

### Benoemde grid areas

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main  "
    "footer  footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
\`\`\`

Benoemde areas maken templates in één oogopslag leesbaar.

## Responsive grid zonder media queries

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

\`auto-fit\` + \`minmax\` maakt een vloeiende lay-out die automatisch opnieuw rangschikt — zonder breakpoints.

## Browsersupport

CSS Grid wordt volledig ondersteund in alle moderne browsers.

> **Tip van roadmap.sh:** Grid en Flexbox zijn geen concurrenten — gebruik Grid voor pagina-niveau lay-out en Flexbox voor uitlijning op component-niveau.

## Oefening

Bouw een magazine-achtige paginalay-out met header, sidebar, maincontent en footer via \`grid-template-areas\`. Maak het vervolgens verticaal gestapeld op mobiel met één media query.
`,
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
    sourceUrl: "https://gridbyexample.com/patterns/",
    contentMarkdown: {
      en: `# CSS Grid Common Patterns

Once you know the basics of CSS Grid, you can apply a handful of reusable patterns to solve most layout challenges. This article walks through five patterns you'll reach for again and again.

## 1. The Holy Grail Layout

Header → sidebar + content + aside → footer. Classic and still useful.

\`\`\`css
.holy-grail {
  display: grid;
  grid-template-areas:
    "header header  header"
    "nav    content aside "
    "footer footer  footer";
  grid-template-columns: 200px 1fr 160px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
\`\`\`

## 2. Auto-flowing card grid

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}
\`\`\`

The difference between \`auto-fill\` and \`auto-fit\`:
- \`auto-fill\` keeps empty tracks, preserving column widths.
- \`auto-fit\` collapses empty tracks so filled columns grow.

## 3. Sidebar + content

\`\`\`css
.with-sidebar {
  display: grid;
  grid-template-columns: clamp(180px, 25%, 320px) 1fr;
  gap: 2rem;
}
@media (max-width: 640px) {
  .with-sidebar { grid-template-columns: 1fr; }
}
\`\`\`

Using \`clamp()\` keeps the sidebar proportional without extra breakpoints.

## 4. Full-bleed sections

\`\`\`css
.page {
  display: grid;
  grid-template-columns: 1fr min(65ch, 100%) 1fr;
}
.page > * { grid-column: 2; }
.full-bleed { grid-column: 1 / -1; }
\`\`\`

This popular technique (by Josh W. Comeau) lets you center content while specific sections — like hero images — bleed to the edges.

## 5. Dashboard grid

\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}
.widget-wide  { grid-column: span 8; }
.widget-small { grid-column: span 4; }
.widget-full  { grid-column: 1 / -1; }
\`\`\`

A 12-column base makes it easy to mix widget sizes without custom calculations.

## Summary

| Pattern | Key property |
|---|---|
| Holy Grail | grid-template-areas |
| Card grid | auto-fill / auto-fit |
| Sidebar | clamp() in column definition |
| Full-bleed | Named lines + negative grid-column |
| Dashboard | span keyword on child elements |

> Master these five and you'll handle 90% of real-world layout requests.
`,
      nl: `# Veelgebruikte CSS Grid Patronen

Zodra je de basisprincipes van CSS Grid kent, kun je een handvol herbruikbare patronen toepassen om de meeste lay-outchallenges op te lossen.

## 1. Het Holy Grail-layout

Header → sidebar + content + aside → footer. Klassiek en nog steeds waardevol.

\`\`\`css
.holy-grail {
  display: grid;
  grid-template-areas:
    "header header  header"
    "nav    content aside "
    "footer footer  footer";
  grid-template-columns: 200px 1fr 160px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
\`\`\`

## 2. Automatisch vloeiend kaartgrid

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}
\`\`\`

Het verschil tussen \`auto-fill\` en \`auto-fit\`:
- \`auto-fill\` behoudt lege tracks.
- \`auto-fit\` klapt lege tracks dicht zodat gevulde kolommen groeien.

## 3. Sidebar + content

\`\`\`css
.with-sidebar {
  display: grid;
  grid-template-columns: clamp(180px, 25%, 320px) 1fr;
  gap: 2rem;
}
@media (max-width: 640px) {
  .with-sidebar { grid-template-columns: 1fr; }
}
\`\`\`

## 4. Full-bleed secties

\`\`\`css
.page {
  display: grid;
  grid-template-columns: 1fr min(65ch, 100%) 1fr;
}
.page > * { grid-column: 2; }
.full-bleed { grid-column: 1 / -1; }
\`\`\`

## 5. Dashboard-grid

\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}
.widget-wide  { grid-column: span 8; }
.widget-small { grid-column: span 4; }
.widget-full  { grid-column: 1 / -1; }
\`\`\`

> Beheers deze vijf patronen en je lost 90% van de lay-outvragen op.
`,
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
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
    contentMarkdown: {
      en: `# HTML Semantic Structure

Semantic HTML means using the right element for the right job. A \`<nav>\` communicates *navigation* to browsers, search engines, and assistive technologies — a \`<div class="nav">\` communicates nothing beyond its class name.

## Why it matters

According to the roadmap.sh frontend roadmap, understanding accessibility and semantic markup is one of the core skills every frontend developer must have. Semantic HTML is the foundation of that skill.

**Benefits:**
- Screen readers announce landmark regions automatically (\`<main>\`, \`<nav>\`, \`<aside>\`).
- Search engines use heading hierarchy (\`<h1>\`–\`<h6>\`) to understand page structure.
- Your team reads the code faster because elements carry meaning.

## Key semantic elements

| Element | Purpose |
|---|---|
| \`<header>\` | Introductory content for a page or section |
| \`<nav>\` | Primary or secondary navigation links |
| \`<main>\` | The dominant content of the page (one per page) |
| \`<article>\` | Self-contained, independently distributable content |
| \`<section>\` | Thematically grouped content with a heading |
| \`<aside>\` | Content tangentially related to the main content |
| \`<footer>\` | Footer for a page or section |
| \`<figure>\` / \`<figcaption>\` | Self-contained media with optional caption |
| \`<time>\` | Machine-readable date/time |

## Before and after

**Non-semantic (avoid):**

\`\`\`html
<div class="header">
  <div class="logo">Brand</div>
  <div class="menu">…</div>
</div>
<div class="content">…</div>
<div class="footer">…</div>
\`\`\`

**Semantic (preferred):**

\`\`\`html
<header>
  <a href="/" aria-label="Brand homepage">Brand</a>
  <nav aria-label="Main">…</nav>
</header>
<main>…</main>
<footer>…</footer>
\`\`\`

## Headings as an outline

Use headings to create a logical document outline — not to control visual size.

\`\`\`html
<h1>Student Portfolio</h1>
  <h2>About me</h2>
  <h2>Projects</h2>
    <h3>Grocery app</h3>
    <h3>Weather dashboard</h3>
  <h2>Contact</h2>
\`\`\`

You can always resize headings with CSS. Never skip heading levels for layout reasons.

## Quick checklist

- [ ] One \`<h1>\` per page.
- [ ] Navigation wrapped in \`<nav>\`.
- [ ] Page content inside \`<main>\`.
- [ ] Blog posts / cards use \`<article>\`.
- [ ] No \`<div>\` where a semantic alternative exists.
`,
      nl: `# Semantische Structuur in HTML

Semantische HTML betekent het juiste element gebruiken voor de juiste taak. Een \`<nav>\` communiceert *navigatie* aan browsers, zoekmachines en hulptechnologieën — een \`<div class="nav">\` communiceert niets meer dan de klassenaam.

## Waarom het belangrijk is

Volgens de roadmap.sh frontend roadmap is begrijpen van toegankelijkheid en semantische opmaak een van de kernvaardigheden die elke frontend developer moet beheersen.

**Voordelen:**
- Schermlezers kondigen landmark-regio's automatisch aan (\`<main>\`, \`<nav>\`, \`<aside>\`).
- Zoekmachines gebruiken de koptyperarchie (\`<h1>\`–\`<h6>\`) om paginastructuur te begrijpen.
- Je team leest de code sneller omdat elementen betekenis dragen.

## Belangrijke semantische elementen

| Element | Doel |
|---|---|
| \`<header>\` | Inleidende content voor een pagina of sectie |
| \`<nav>\` | Primaire of secundaire navigatielinks |
| \`<main>\` | De dominante content van de pagina (één per pagina) |
| \`<article>\` | Op zichzelf staande, zelfstandig distribueerbare content |
| \`<section>\` | Thematisch gegroepeerde content met een kop |
| \`<aside>\` | Content die zijdelings gerelateerd is aan de hoofdcontent |
| \`<footer>\` | Footer voor een pagina of sectie |
| \`<figure>\` / \`<figcaption>\` | Op zichzelf staande media met optioneel bijschrift |
| \`<time>\` | Machineleesbare datum/tijd |

## Voor en na

**Niet-semantisch (vermijden):**

\`\`\`html
<div class="header">
  <div class="logo">Brand</div>
  <div class="menu">…</div>
</div>
<div class="content">…</div>
<div class="footer">…</div>
\`\`\`

**Semantisch (voorkeur):**

\`\`\`html
<header>
  <a href="/" aria-label="Brand homepage">Brand</a>
  <nav aria-label="Main">…</nav>
</header>
<main>…</main>
<footer>…</footer>
\`\`\`

## Koppen als document-outline

Gebruik koppen om een logische documentoutline te maken — niet om de visuele grootte te regelen.

## Snelle checklist

- [ ] Één \`<h1>\` per pagina.
- [ ] Navigatie gewikkeld in \`<nav>\`.
- [ ] Pagina-inhoud binnen \`<main>\`.
- [ ] Blogposts / kaarten gebruiken \`<article>\`.
- [ ] Geen \`<div>\` waar een semantisch alternatief bestaat.
`,
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
    sourceUrl: "https://www.nngroup.com/articles/which-ux-research-methods/",
    contentMarkdown: {
      en: `# UX Research Basics

UX research is the systematic study of users and their contexts to help designers make informed decisions. Without research, you're designing based on assumptions — and assumptions are often wrong.

## Why research first?

The Norman Nielsen Group consistently reports that usability testing with as few as five participants uncovers ~85% of major usability problems. Investing a day in research saves weeks of rework later.

## The research landscape

UX research methods fall into two dimensions:

| | **Attitudinal** (what people say) | **Behavioural** (what people do) |
|---|---|---|
| **Qualitative** | Interviews, diary studies | Usability testing, contextual inquiry |
| **Quantitative** | Surveys | Analytics, A/B testing |

## Core methods for beginners

### 1. User interviews

A 30–60 minute conversation focused on understanding a person's context, goals, and frustrations.

**Good questions:**
- "Walk me through the last time you tried to do X."
- "What was the hardest part about that?"
- "What did you do when that happened?"

**Avoid:** leading questions ("Would you like a dark mode?") and hypotheticals ("Would you use this feature?").

### 2. Contextual observation

Watch users in their natural environment — at their desk, on their phone in a commute — rather than in an artificial lab setting. You discover workarounds and shortcuts that people wouldn't think to mention in an interview.

### 3. Surveys

Useful for quantifying frequency or satisfaction across a larger group. Keep surveys short (≤10 questions), use clear scales, and always pilot-test before sending.

## The research plan

Before any study, write a one-page plan:
1. **Research goal** — what decision will this inform?
2. **Research questions** — specific questions you want to answer.
3. **Methods** — which methods match your questions and timeline.
4. **Participants** — who and how many.
5. **Timeline** — when does each phase happen.

## Synthesising findings

Raw notes aren't insights. Use **affinity mapping**:
1. Write every observation on a separate sticky note (digital or physical).
2. Group related notes into clusters.
3. Name each cluster — that name is your insight.

> From the roadmap.sh UX design roadmap: mastering user research is the first major milestone on the path to becoming a UX designer.
`,
      nl: `# Basis van UX Research

UX-onderzoek is de systematische studie van gebruikers en hun contexten om ontwerpers te helpen onderbouwde beslissingen te nemen. Zonder onderzoek ontwerp je op basis van aannames — en aannames kloppen vaak niet.

## Waarom eerst onderzoek?

De Norman Nielsen Group rapporteert consequent dat gebruikerstesten met slechts vijf deelnemers ~85% van de grote bruikbaarheidsproblemen blootleggen.

## Het onderzoekslandschap

UX-onderzoeksmethoden vallen in twee dimensies:

| | **Attitudinaal** (wat mensen zeggen) | **Gedragsmatig** (wat mensen doen) |
|---|---|---|
| **Kwalitatief** | Interviews, dagboekstudies | Gebruikerstesten, contextueel onderzoek |
| **Kwantitatief** | Enquêtes | Analytics, A/B-testen |

## Kernmethoden voor beginners

### 1. Gebruikersinterviews

Een gesprek van 30–60 minuten gericht op het begrijpen van de context, doelen en frustraties van een persoon.

**Goede vragen:**
- "Beschrijf de laatste keer dat je X probeerde te doen."
- "Wat was het moeilijkste deel daarvan?"
- "Wat deed je toen dat gebeurde?"

### 2. Contextuele observatie

Observeer gebruikers in hun natuurlijke omgeving — aan hun bureau, op hun telefoon — in plaats van in een kunstmatige labsetting.

### 3. Enquêtes

Handig voor het kwantificeren van frequentie of tevredenheid over een grotere groep. Houd enquêtes kort (≤10 vragen) en pilot-test altijd voordat je ze verstuurt.

## Het onderzoeksplan

Schrijf vóór elke studie een plan van één pagina:
1. **Onderzoeksdoel** — welke beslissing wordt hierdoor geïnformeerd?
2. **Onderzoeksvragen** — specifieke vragen die je wilt beantwoorden.
3. **Methoden** — welke methoden passen bij je vragen.
4. **Deelnemers** — wie en hoeveel.
5. **Tijdlijn** — wanneer vindt elke fase plaats.

## Bevindingen samenvatten

Gebruik **affinity mapping**:
1. Schrijf elke observatie op een apart sticky-notitie.
2. Groepeer gerelateerde notities in clusters.
3. Benoem elk cluster — die naam is jouw inzicht.
`,
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
    sourceUrl: "https://webaim.org/resources/contrastchecker/",
    contentMarkdown: {
      en: `# Accessibility and Color Contrast

Approximately 1 in 12 men and 1 in 200 women have some form of colour vision deficiency. Designing with accessible contrast ensures your content is readable by everyone — with or without visual impairments.

## WCAG contrast requirements

The Web Content Accessibility Guidelines (WCAG) 2.1 define two success criteria:

| Level | Normal text | Large text (≥18pt or bold ≥14pt) |
|---|---|---|
| **AA** (minimum) | 4.5 : 1 | 3 : 1 |
| **AAA** (enhanced) | 7 : 1 | 4.5 : 1 |

Most projects target **AA**. Government and healthcare sites often require **AAA**.

## How contrast ratio works

The contrast ratio compares the **relative luminance** of two colours. A ratio of 1:1 means identical colours. A ratio of 21:1 is the maximum (black on white).

You don't need to calculate this manually — use tools:
- **WebAIM Contrast Checker** — [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)
- **Colour & Contrast** picker in browser DevTools (Chrome, Firefox)
- **Figma** — plugins like "Contrast" or built-in accessibility annotations

## Common mistakes

### Low-contrast text on backgrounds

\`\`\`css
/* ❌ Fails AA: grey #999 on white = 2.85:1 */
color: #999999;
background: #ffffff;

/* ✓ Passes AA: darker grey = 4.74:1 */
color: #767676;
background: #ffffff;
\`\`\`

### Colour as the only indicator

Don't use colour alone to communicate state. Add an icon, underline, or label.

\`\`\`css
/* ❌ Only colour distinguishes error from success */
.error   { color: red; }
.success { color: green; }

/* ✓ Also uses text and icon */
.error::before   { content: "✗ "; }
.success::before { content: "✓ "; }
\`\`\`

### Placeholder text

\`\`\`css
/* ❌ Placeholders are typically < 4.5:1 */
::placeholder { color: #aaaaaa; }

/* ✓ Darken the placeholder */
::placeholder { color: #767676; }
\`\`\`

## Focus indicators

Don't remove the browser's default focus ring without providing a visible alternative.

\`\`\`css
/* ✓ Custom focus style */
:focus-visible {
  outline: 3px solid #0070f3;
  outline-offset: 2px;
}
\`\`\`

## Design tip

Choose your background colour first, then test every text/icon colour against it before finalising your palette. Fix it at the design stage — not after implementation.
`,
      nl: `# Toegankelijkheid en Kleurcontrast

Ongeveer 1 op 12 mannen en 1 op 200 vrouwen heeft een vorm van kleurzwakheid. Ontwerpen met toegankelijk contrast zorgt ervoor dat je content voor iedereen leesbaar is.

## WCAG-contrastvereisten

De Web Content Accessibility Guidelines (WCAG) 2.1 definiëren twee succescriteria:

| Niveau | Normale tekst | Grote tekst (≥18pt of vet ≥14pt) |
|---|---|---|
| **AA** (minimum) | 4,5 : 1 | 3 : 1 |
| **AAA** (verbeterd) | 7 : 1 | 4,5 : 1 |

De meeste projecten richten zich op **AA**.

## Hoe de contrastverhouding werkt

De contrastverhouding vergelijkt de **relatieve luminantie** van twee kleuren. Gebruik tools:
- **WebAIM Contrast Checker** — [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)
- Kleur- & contrastpicker in browser DevTools
- Figma-plug-ins zoals "Contrast"

## Veelgemaakte fouten

### Tekst met laag contrast

\`\`\`css
/* ❌ Mislukt AA: grijs #999 op wit = 2,85:1 */
color: #999999;

/* ✓ Slaagt AA: donkerder grijs = 4,74:1 */
color: #767676;
\`\`\`

### Kleur als enige indicator

Gebruik nooit alleen kleur om status te communiceren. Voeg een icoon, onderstreping of label toe.

### Focusindicatoren

Verwijder de standaard focusring van de browser niet zonder een zichtbaar alternatief te bieden.

\`\`\`css
:focus-visible {
  outline: 3px solid #0070f3;
  outline-offset: 2px;
}
\`\`\`
`,
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

  // ─── SEMESTER 2 – Interactive Media ─────────────────────────────────────────

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
    sourceUrl:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
    contentMarkdown: {
      en: `# Advanced CSS Grid

You know the basics — now let's dig into the techniques that give you fine-grained control over complex layouts.

## subgrid

Subgrid allows a grid item to *inherit* its parent's track definitions. This solves the classic card-alignment problem.

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  display: grid;
  grid-row: span 3;
  /* card inherits the parent's column tracks */
  grid-template-rows: subgrid;
}
\`\`\`

Now all three rows inside each card (image, title, description) align across cards automatically — no matter how much text each card contains.

> **Browser support:** subgrid is supported in Chrome 117+, Firefox 71+, Safari 16+.

## minmax() in depth

\`minmax(min, max)\` defines a size range for a track.

\`\`\`css
/* Column is at least 200px, grows up to 1fr of available space */
grid-template-columns: minmax(200px, 1fr) 2fr;
\`\`\`

Combining \`minmax\` with \`auto-fit\`:

\`\`\`css
/* Fluid grid: columns are 260–400px wide, as many as fit */
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
\`\`\`

## Dense grid packing

By default, Grid places items in "sparse" order. Use \`grid-auto-flow: dense\` to fill visual gaps:

\`\`\`css
.masonry-like {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
}

.item-wide { grid-column: span 2; }
\`\`\`

## Intrinsic sizing with fit-content()

\`\`\`css
/* Column is as wide as its content, but never more than 300px */
grid-template-columns: fit-content(300px) 1fr;
\`\`\`

## Grid + Container Queries

Pair Grid with Container Queries for truly self-contained responsive components:

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 500px) {
  .card {
    display: grid;
    grid-template-columns: 160px 1fr;
  }
}
\`\`\`

## Practice exercise

Build a photo gallery where landscape images span two columns and portrait images span two rows. Use \`grid-auto-flow: dense\` to minimise gaps.
`,
      nl: `# Gevorderde CSS Grid

## subgrid

Subgrid laat een grid-item de trackdefinities van de parent *erven*. Dit lost het klassieke kaart-uitlijningsprobleem op.

\`\`\`css
.card {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid;
}
\`\`\`

Nu lijnen alle drie de rijen in elke kaart (afbeelding, titel, beschrijving) automatisch uit over kaarten heen.

## minmax() in detail

\`\`\`css
/* Vloeiend grid: kolommen zijn 260–400px breed, zo veel als passen */
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
\`\`\`

## Dense grid packing

\`\`\`css
.masonry-achtig {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
}
.item-breed { grid-column: span 2; }
\`\`\`

## Grid + Container Queries

\`\`\`css
.card-container {
  container-type: inline-size;
}
@container (min-width: 500px) {
  .card {
    display: grid;
    grid-template-columns: 160px 1fr;
  }
}
\`\`\`

## Oefening

Bouw een fotogalerij waarbij landschapsfoto's twee kolommen beslaan en portretfoto's twee rijen. Gebruik \`grid-auto-flow: dense\` om gaten te minimaliseren.
`,
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
    sourceUrl:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
    contentMarkdown: {
      en: `# JavaScript Array Methods

Modern JavaScript array methods replace manual \`for\` loops with declarative, readable operations. Mastering them is one of the first milestones in the roadmap.sh JavaScript learning path.

## The big four

### map() — transform every item

\`\`\`js
const prices = [10, 25, 8, 40];
const withVat = prices.map(price => price * 1.21);
// [12.1, 30.25, 9.68, 48.4]

const products = [
  { name: "Milk", price: 1.2 },
  { name: "Bread", price: 2.5 },
];
const labels = products.map(p => \`\${p.name}: €\${p.price.toFixed(2)}\`);
// ["Milk: €1.20", "Bread: €2.50"]
\`\`\`

### filter() — keep matching items

\`\`\`js
const items = [
  { name: "Apple",  inStock: true  },
  { name: "Banana", inStock: false },
  { name: "Cherry", inStock: true  },
];
const available = items.filter(item => item.inStock);
// [{ name: "Apple", … }, { name: "Cherry", … }]
\`\`\`

### reduce() — accumulate to a single value

\`\`\`js
const cart = [
  { name: "Shirt", price: 29.99, qty: 2 },
  { name: "Hat",   price: 14.99, qty: 1 },
];
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
// 74.97
\`\`\`

> **Rule of thumb:** if you want an array back, use \`map\` or \`filter\`. If you want a single result, use \`reduce\`.

### sort() — order items

\`\`\`js
const names = ["Charlie", "Alice", "Bob"];
const sorted = [...names].sort(); // always copy first!
// ["Alice", "Bob", "Charlie"]

const byPrice = [...products].sort((a, b) => a.price - b.price);
\`\`\`

⚠️ \`sort()\` mutates the original array. Always spread into a new array first.

## Chaining methods

\`\`\`js
const topExpensive = products
  .filter(p => p.inStock)
  .sort((a, b) => b.price - a.price)
  .slice(0, 3)
  .map(p => p.name);
\`\`\`

## find() and findIndex()

\`\`\`js
const user = users.find(u => u.id === 42);         // first match or undefined
const idx  = users.findIndex(u => u.id === 42);    // index or -1
\`\`\`

## some() and every()

\`\`\`js
const hasAdmin   = users.some(u => u.role === "admin");   // true if any match
const allActive  = users.every(u => u.active === true);   // true if all match
\`\`\`

## Practice exercise

Given an array of student objects \`{ name, grade, passed }\`:
1. Filter to only passing students.
2. Sort by grade descending.
3. Map to \`"Name — Grade"\` strings.
4. Calculate the average grade of passing students with \`reduce\`.
`,
      nl: `# JavaScript Array-methodes

Moderne JavaScript array-methodes vervangen handmatige \`for\`-loops door declaratieve, leesbare bewerkingen.

## De grote vier

### map() — elk item transformeren

\`\`\`js
const prijzen = [10, 25, 8, 40];
const metBtw = prijzen.map(prijs => prijs * 1.21);
// [12.1, 30.25, 9.68, 48.4]
\`\`\`

### filter() — overeenkomende items behouden

\`\`\`js
const beschikbaar = items.filter(item => item.inStock);
\`\`\`

### reduce() — samenvatten tot één waarde

\`\`\`js
const totaal = winkelwagen.reduce(
  (som, item) => som + item.prijs * item.aantal,
  0
);
\`\`\`

### sort() — items sorteren

\`\`\`js
const gesorteerd = [...namen].sort(); // altijd eerst kopiëren!
\`\`\`

⚠️ \`sort()\` muteert de originele array. Maak altijd eerst een kopie.

## Methodes koppelen

\`\`\`js
const topDuur = producten
  .filter(p => p.inStock)
  .sort((a, b) => b.prijs - a.prijs)
  .slice(0, 3)
  .map(p => p.naam);
\`\`\`

## Oefening

Gegeven een array van studentobjecten \`{ naam, cijfer, geslaagd }\`:
1. Filter op geslaagde studenten.
2. Sorteer op cijfer aflopend.
3. Map naar \`"Naam — Cijfer"\`-strings.
4. Bereken het gemiddelde cijfer met \`reduce\`.
`,
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
    sourceUrl: "https://www.interaction-design.org/literature/topics/ux-design",
    contentMarkdown: {
      en: `# Interaction Design Principles

Interaction design (IxD) defines how a user and a digital product communicate with each other. Good IxD makes the right action obvious and the result predictable.

## The five dimensions of IxD

Gillian Crampton Smith identified four dimensions; Kevin Silver later added a fifth:

1. **Words** — labels, microcopy, button text.
2. **Visual representations** — icons, images, typography.
3. **Physical objects** — the device (screen size, input type).
4. **Time** — animations, transitions, progress states.
5. **Behaviour** — the response to user actions.

## Core principles

### Affordance

An affordance is a property of an object that signals how it can be used. A button that looks raised *affords* pressing. A text field that looks sunken *affords* typing.

\`\`\`html
<!-- Clear affordance: visually distinct, labelled action -->
<button type="submit" class="btn-primary">Add to cart</button>

<!-- Poor affordance: looks like a label but acts as a button -->
<span onclick="addToCart()">Add to cart</span>
\`\`\`

### Feedback

Every action should produce a visible, audible, or haptic response — immediately.

| Delay | Feedback needed |
|---|---|
| < 100 ms | None — feels instantaneous |
| 100 ms – 1 s | Visual change on the element |
| 1 s – 10 s | Progress indicator (spinner) |
| > 10 s | Progress bar with estimation |

### Consistency

Reuse patterns across your product. If clicking a card navigates somewhere, all cards should navigate somewhere. Inconsistency forces users to re-learn your interface.

### Visibility of system status

Don't leave users guessing. Loading states, empty states, success confirmations, and error messages all communicate what the system is doing right now.

\`\`\`html
<!-- ✓ Status is always visible -->
<button aria-busy="true" disabled>
  <span class="spinner" aria-hidden="true"></span>
  Saving…
</button>
\`\`\`

### Error recovery

Good error messages explain:
1. What went wrong.
2. Why it happened (optional but helpful).
3. What the user should do next.

\`\`\`
❌  "Error 422"
✓   "The email address is already registered. Sign in or reset your password."
\`\`\`

## Interaction patterns to know

| Pattern | When to use |
|---|---|
| Progressive disclosure | Hide secondary information until needed |
| Inline editing | Edit directly in context, skip modal |
| Undo instead of confirm | Less friction than "Are you sure?" |
| Skeleton screens | Show layout while data loads |
| Optimistic UI | Show success immediately, revert on failure |
`,
      nl: `# Principes van Interaction Design

Interaction design (IxD) definieert hoe een gebruiker en een digitaal product met elkaar communiceren. Goede IxD maakt de juiste actie duidelijk en het resultaat voorspelbaar.

## De vijf dimensies van IxD

1. **Woorden** — labels, microcopy, knoptekst.
2. **Visuele representaties** — iconen, afbeeldingen, typografie.
3. **Fysieke objecten** — het apparaat (schermgrootte, invoertype).
4. **Tijd** — animaties, overgangen, voortgangstoestanden.
5. **Gedrag** — de respons op gebruikersacties.

## Kernprincipes

### Affordance

Een affordance is een eigenschap van een object die aangeeft hoe het gebruikt kan worden. Een knop die verhoogd lijkt, *affordt* indrukken.

### Feedback

Elke actie moet een zichtbare, hoorbare of haptische respons produceren — onmiddellijk.

| Vertraging | Benodigde feedback |
|---|---|
| < 100 ms | Geen — voelt direct aan |
| 100 ms – 1 s | Visuele verandering op het element |
| 1 s – 10 s | Voortgangsindicator (spinner) |
| > 10 s | Voortgangsbalk met schatting |

### Zichtbaarheid van systeemstatus

Laat gebruikers niet raden. Laadtoestanden, lege toestanden, bevestigingen en foutmeldingen communiceren allemaal wat het systeem momenteel doet.

## Interactiepatronen om te kennen

| Patroon | Wanneer gebruiken |
|---|---|
| Progressive disclosure | Verberg secundaire informatie tot het nodig is |
| Inline editing | Bewerk direct in context |
| Ongedaan maken i.p.v. bevestigen | Minder wrijving dan "Weet je het zeker?" |
| Skeleton screens | Toon lay-out terwijl data laadt |
| Optimistic UI | Toon direct succes, draai terug bij mislukking |
`,
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
    sourceUrl: "https://tailwindcss.com/docs/theme",
    contentMarkdown: {
      en: `# Tailwind CSS Design Tokens

Design tokens are the smallest, most reusable design decisions: a colour, a spacing step, a font size. Tailwind's theme system turns these decisions into utility classes, keeping your UI consistent without writing custom CSS.

## What are design tokens?

| Token type | Example values |
|---|---|
| Colour | brand-500, neutral-100 |
| Spacing | 4 (1rem), 8 (2rem), 16 (4rem) |
| Typography | font-sans, text-sm, text-xl |
| Border radius | rounded, rounded-lg, rounded-full |
| Shadow | shadow-sm, shadow-md, shadow-xl |

## Tailwind v4: CSS-first configuration

Tailwind v4 moves configuration from \`tailwind.config.js\` into a CSS file using \`@theme\`:

\`\`\`css
/* app.css */
@import "tailwindcss";

@theme {
  --color-brand-50:  #eff6ff;
  --color-brand-500: #3b82f6;
  --color-brand-900: #1e3a8a;

  --font-family-display: "Inter", sans-serif;

  --spacing-section: 5rem;
}
\`\`\`

These become utility classes automatically:

\`\`\`html
<div class="bg-brand-50 text-brand-900 font-display py-section">
  Your design-token-driven component
</div>
\`\`\`

## Using CSS variables directly

Sometimes you need token values in custom CSS:

\`\`\`css
.hero {
  background: var(--color-brand-500);
  padding: var(--spacing-section) 0;
}
\`\`\`

## Semantic token layering

Name tokens by *role*, not by *value*:

\`\`\`css
@theme {
  /* Primitive tokens */
  --color-blue-500: #3b82f6;

  /* Semantic tokens */
  --color-primary:         var(--color-blue-500);
  --color-interactive:     var(--color-blue-500);
  --color-text-on-primary: #ffffff;
}
\`\`\`

When you rebrand, you only update the primitive — all semantic tokens update automatically.

## Connecting to Figma

Your Figma design system and your Tailwind theme should share the same token names. Tools like **Style Dictionary** or **Token Transformer** can automate the sync between a design file and your CSS variables.

## Practical workflow

1. Define primitive colour and spacing tokens in a dedicated \`tokens.css\`.
2. Import \`tokens.css\` in your Tailwind config.
3. Build components using only token-based utilities.
4. Refactor one-off magic values to tokens as you find them.
`,
      nl: `# Tailwind CSS Design Tokens

Design tokens zijn de kleinste, herbruikbare ontwerpbeslissingen: een kleur, een spatiestap, een lettergrootte. Het themasysteem van Tailwind zet deze beslissingen om in utility-klassen.

## Wat zijn design tokens?

| Token-type | Voorbeeldwaarden |
|---|---|
| Kleur | brand-500, neutral-100 |
| Spatiëring | 4 (1rem), 8 (2rem) |
| Typografie | font-sans, text-sm, text-xl |
| Afgeronde hoeken | rounded, rounded-lg |
| Schaduw | shadow-sm, shadow-xl |

## Tailwind v4: CSS-first configuratie

\`\`\`css
@import "tailwindcss";

@theme {
  --color-brand-50:  #eff6ff;
  --color-brand-500: #3b82f6;
  --font-family-display: "Inter", sans-serif;
  --spacing-section: 5rem;
}
\`\`\`

Deze worden automatisch utility-klassen:

\`\`\`html
<div class="bg-brand-50 text-brand-900 font-display py-section">
  Je door design-tokens aangedreven component
</div>
\`\`\`

## Semantische token-lagen

Benoem tokens op *rol*, niet op *waarde*:

\`\`\`css
@theme {
  --color-blue-500: #3b82f6;
  --color-primary:  var(--color-blue-500);
}
\`\`\`

Bij een rebrand update je alleen de primitive — alle semantische tokens worden automatisch bijgewerkt.
`,
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

  // ─── SEMESTER 3 & 4 – FED, Full Stack, Media Creation ───────────────────────

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
    sourceUrl: "https://nextjs.org/docs/app",
    contentMarkdown: {
      en: `# Next.js App Router Overview

The App Router, introduced in Next.js 13 and stable since Next.js 14, rethinks how Next.js applications are structured. Instead of a \`pages/\` directory, everything lives in \`app/\` — and the conventions are more powerful.

## File-system conventions

\`\`\`
app/
├── layout.tsx          ← root layout (wraps every page)
├── page.tsx            ← the "/" route
├── loading.tsx         ← shown while page.tsx is fetching
├── error.tsx           ← error boundary for this segment
├── not-found.tsx       ← 404 for this segment
└── dashboard/
    ├── layout.tsx      ← nested layout (wraps only dashboard pages)
    ├── page.tsx        ← the "/dashboard" route
    └── settings/
        └── page.tsx    ← the "/dashboard/settings" route
\`\`\`

## Layouts

Layouts persist across navigations. The root layout is mandatory and must include \`<html>\` and \`<body>\`.

\`\`\`tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
\`\`\`

## Server Components by default

Every file in \`app/\` is a **React Server Component** by default. Server Components:
- Run on the server (no client JS bundle added).
- Can directly \`await\` database queries or fetch calls.
- Cannot use hooks (\`useState\`, \`useEffect\`) or browser APIs.

\`\`\`tsx
// app/products/page.tsx — runs on the server, no "use client" needed
async function ProductsPage() {
  const products = await db.product.findMany(); // direct DB access
  return <ProductList products={products} />;
}
\`\`\`

## Client Components

Add \`"use client"\` to the top of a file to opt in to client-side rendering:

\`\`\`tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\`

**Rule of thumb:** keep the "client boundary" as low in the tree as possible. Wrap only the interactive part, not the whole page.

## Loading UI

\`\`\`tsx
// app/dashboard/loading.tsx
export default function Loading() {
  return <SkeletonDashboard />;
}
\`\`\`

Next.js automatically shows this file while \`page.tsx\` resolves its async data. No manual loading state needed.

## Route groups

Organise routes without adding URL segments using parentheses:

\`\`\`
app/
├── (marketing)/
│   ├── about/page.tsx    → /about
│   └── pricing/page.tsx  → /pricing
└── (app)/
    ├── layout.tsx        ← different layout for app routes
    └── dashboard/page.tsx → /dashboard
\`\`\`

## Dynamic routes

\`\`\`
app/blog/[slug]/page.tsx  → /blog/any-slug
\`\`\`

\`\`\`tsx
type Props = { params: Promise<{ slug: string }> };

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  // …
}
\`\`\`
`,
      nl: `# Overzicht van de Next.js App Router

De App Router, geïntroduceerd in Next.js 13 en stabiel sinds Next.js 14, herdefinieert hoe Next.js-applicaties zijn gestructureerd.

## Bestandssysteemconventies

\`\`\`
app/
├── layout.tsx          ← root-layout
├── page.tsx            ← de "/" route
├── loading.tsx         ← getoond terwijl page.tsx data ophaalt
├── error.tsx           ← foutgrens voor dit segment
└── dashboard/
    └── page.tsx        ← de "/dashboard" route
\`\`\`

## Server Components standaard

Elk bestand in \`app/\` is standaard een **React Server Component**. Server Components:
- Draaien op de server (geen client JS-bundle toegevoegd).
- Kunnen direct \`await\` database-queries of fetch-calls gebruiken.
- Kunnen geen hooks (\`useState\`, \`useEffect\`) of browser-API's gebruiken.

\`\`\`tsx
async function ProductenPagina() {
  const producten = await db.product.findMany();
  return <ProductenLijst producten={producten} />;
}
\`\`\`

## Client Components

Voeg \`"use client"\` bovenaan een bestand toe voor client-side rendering:

\`\`\`tsx
"use client";
import { useState } from "react";

export function Teller() {
  const [aantal, setAantal] = useState(0);
  return <button onClick={() => setAantal(n => n + 1)}>{aantal}</button>;
}
\`\`\`

**Vuistregel:** houd de "client boundary" zo laag mogelijk in de boom.

## Dynamische routes

\`\`\`
app/blog/[slug]/page.tsx  → /blog/elke-slug
\`\`\`
`,
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
    sourceUrl:
      "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
    contentMarkdown: {
      en: `# TypeScript for Beginners

TypeScript is a statically typed superset of JavaScript. It catches many bugs at *compile time* — before your code ever runs in a browser. According to roadmap.sh, TypeScript is now an essential frontend skill.

## Why TypeScript?

- Autocomplete in your editor knows the *shape* of your data.
- Refactoring is safe: rename a property and TypeScript finds every usage.
- Code is self-documenting: a function signature tells you what it accepts and returns.

## Basic types

\`\`\`ts
const name:    string  = "Alice";
const age:     number  = 24;
const active:  boolean = true;
const tags:    string[] = ["html", "css", "js"];
\`\`\`

## Type inference

You don't need to annotate every variable. TypeScript infers the type from the value:

\`\`\`ts
const score = 42;    // TypeScript knows this is number
score = "hi";        // ❌ Type 'string' is not assignable to 'number'
\`\`\`

## Interfaces and types

\`\`\`ts
interface User {
  id:     number;
  name:   string;
  email:  string;
  role?:  "admin" | "editor" | "viewer"; // ? = optional
}

type Point = { x: number; y: number };
\`\`\`

**When to use which:**
- \`interface\` — for objects and classes; can be extended (\`extends\`).
- \`type\` — for unions, intersections, and utility types.

## Functions

\`\`\`ts
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const add = (a: number, b: number): number => a + b;
\`\`\`

## Arrays and generics

\`\`\`ts
function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const first = firstItem([1, 2, 3]);    // type: number | undefined
const word  = firstItem(["a", "b"]);   // type: string | undefined
\`\`\`

## Union types

\`\`\`ts
type Status = "idle" | "loading" | "success" | "error";

function handleStatus(status: Status) {
  if (status === "error") {
    // TypeScript knows status can only be one of the four strings
  }
}
\`\`\`

## Working with DOM

\`\`\`ts
const input = document.querySelector<HTMLInputElement>("#search");
// input is HTMLInputElement | null — TypeScript forces you to handle null

if (input) {
  console.log(input.value); // safe — TypeScript knows it's not null here
}
\`\`\`

## Utility types

| Utility | What it does |
|---|---|
| \`Partial<T>\` | Makes all properties optional |
| \`Required<T>\` | Makes all properties required |
| \`Readonly<T>\` | Makes all properties read-only |
| \`Pick<T, K>\` | Select specific properties |
| \`Omit<T, K>\` | Exclude specific properties |

\`\`\`ts
type UpdateUser = Partial<Pick<User, "name" | "email">>;
// { name?: string; email?: string }
\`\`\`
`,
      nl: `# TypeScript voor Beginners

TypeScript is een statisch getypeerde superset van JavaScript. Het vangt veel bugs tijdens het *compileren* — voordat je code ooit in een browser draait.

## Waarom TypeScript?

- Autocomplete in je editor kent de *vorm* van je data.
- Refactoring is veilig: hernoem een eigenschap en TypeScript vindt elk gebruik.
- Code documenteert zichzelf: een functiesignatuur vertelt je wat het accepteert en retourneert.

## Basistypes

\`\`\`ts
const naam:    string  = "Alice";
const leeftijd: number = 24;
const actief:  boolean = true;
const tags:    string[] = ["html", "css", "js"];
\`\`\`

## Interfaces en types

\`\`\`ts
interface Gebruiker {
  id:    number;
  naam:  string;
  email: string;
  rol?:  "admin" | "editor" | "viewer"; // ? = optioneel
}
\`\`\`

## Union types

\`\`\`ts
type Status = "idle" | "loading" | "success" | "error";
\`\`\`

## Utility types

| Utility | Wat het doet |
|---|---|
| \`Partial<T>\` | Maakt alle eigenschappen optioneel |
| \`Required<T>\` | Maakt alle eigenschappen verplicht |
| \`Readonly<T>\` | Maakt alle eigenschappen alleen-lezen |
| \`Pick<T, K>\` | Selecteer specifieke eigenschappen |
| \`Omit<T, K>\` | Sluit specifieke eigenschappen uit |
`,
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
    sourceUrl:
      "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
    contentMarkdown: {
      en: `# Next.js Server Components

React Server Components (RSC) fundamentally change where and how components render. Understanding the mental model is essential for building efficient Next.js applications.

## The two rendering environments

| | Server Component | Client Component |
|---|---|---|
| **Where it runs** | Node.js on the server | Browser (+ server for hydration) |
| **Can use hooks** | ❌ | ✓ |
| **Can use browser APIs** | ❌ | ✓ |
| **Can be async** | ✓ | ❌ (use useEffect for async) |
| **Adds to JS bundle** | ❌ | ✓ |
| **Direct data access** | ✓ (DB, filesystem) | ❌ |

## Why this matters for performance

Every component marked \`"use client"\` adds JavaScript to the browser bundle. In a Server Component, that code never reaches the client — the server sends rendered HTML instead.

## Data fetching in Server Components

\`\`\`tsx
// No fetch boilerplate, no useEffect, no loading state
async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await db.article.findUnique({
    where: { slug: params.slug },
  });

  if (!article) notFound();

  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </article>
  );
}
\`\`\`

## Composing server and client components

\`\`\`
ArticlePage (Server)         ← fetches data, renders article
└── ArticleContent (Server)  ← renders text
└── LikeButton (Client)      ← needs onClick → "use client"
└── CommentSection (Client)  ← needs state  → "use client"
\`\`\`

The key insight: **a Server Component can render a Client Component, but a Client Component cannot render a Server Component directly**. Pass server data as props.

\`\`\`tsx
// Server Component
async function ArticlePage() {
  const article = await fetchArticle();
  return (
    <>
      <ArticleContent article={article} />
      <LikeButton articleId={article.id} />  {/* client component receives id */}
    </>
  );
}

// Client Component
"use client";
function LikeButton({ articleId }: { articleId: string }) {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(l => !l)}>
      {liked ? "♥" : "♡"} Like
    </button>
  );
}
\`\`\`

## Caching in Next.js

Next.js extends the native \`fetch\` API with caching options:

\`\`\`tsx
// Static: cached indefinitely (default)
const data = await fetch("/api/config");

// Revalidate every 60 seconds
const data = await fetch("/api/posts", { next: { revalidate: 60 } });

// Never cache (always fresh)
const data = await fetch("/api/cart", { cache: "no-store" });
\`\`\`

## Common mistakes

1. **Marking too much as \`"use client"\`** — creates unnecessarily large bundles.
2. **Passing non-serialisable props** to Client Components (functions, class instances).
3. **Async Client Components** — not supported; use \`useEffect\` or SWR/React Query.
`,
      nl: `# Next.js Server Components

React Server Components veranderen fundamenteel waar en hoe componenten renderen.

## De twee renderomgevingen

| | Server Component | Client Component |
|---|---|---|
| **Waar het draait** | Node.js op de server | Browser |
| **Kan hooks gebruiken** | ❌ | ✓ |
| **Kan async zijn** | ✓ | ❌ |
| **Voegt toe aan JS-bundle** | ❌ | ✓ |
| **Directe data-toegang** | ✓ (DB, bestandssysteem) | ❌ |

## Datafetching in Server Components

\`\`\`tsx
async function ArtikelPagina({ params }: { params: { slug: string } }) {
  const artikel = await db.artikel.findUnique({
    where: { slug: params.slug },
  });
  if (!artikel) notFound();
  return <article><h1>{artikel.titel}</h1></article>;
}
\`\`\`

## Server en Client Components combineren

\`\`\`
ArtikelPagina (Server)      ← haalt data op
└── ArtikelContent (Server) ← rendert tekst
└── LikeButton (Client)     ← heeft onClick nodig → "use client"
\`\`\`

## Veelgemaakte fouten

1. **Te veel als \`"use client"\` markeren** — veroorzaakt onnodig grote bundles.
2. **Niet-serialiseerbare props** doorgeven aan Client Components.
3. **Async Client Components** — niet ondersteund.
`,
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
    sourceUrl:
      "https://www.niemanlab.org/2023/12/what-makes-digital-storytelling-work/",
    contentMarkdown: {
      en: `# Media Storytelling Basics

Digital stories live at the intersection of journalism, design, and technology. Whether you're building an interactive data story, a documentary web experience, or an onboarding flow, the same storytelling principles apply.

## The story arc

Every story — even a data visualisation or tutorial — benefits from a classic structure:

\`\`\`
Hook → Context → Rising tension → Climax → Resolution → Call to action
\`\`\`

**Hook:** grab attention in the first screen. Use a striking statistic, question, or visual.

**Context:** orient the user — who is this for, why does it matter?

**Rising tension:** build complexity gradually. Introduce one idea at a time.

**Climax:** the key insight, the most important finding, the "aha" moment.

**Resolution:** what does it mean? What should the user feel or do?

## Pacing and scroll

In a scroll-driven story, pacing is controlled by:
- **Text density** — fewer words per screen keeps pace brisk.
- **Transition speed** — slow transitions feel weighty; fast ones feel energetic.
- **Breathing room** — white space between ideas gives readers time to absorb.

## The power of one idea per screen

Research on reading comprehension shows that presenting one main idea per "screen unit" improves retention. Avoid the temptation to cram multiple charts or paragraphs above the fold.

## Interactivity: when and why

Interaction is not always better — passive viewing suits emotional narratives (documentaries), while interaction suits exploration (data dashboards, tutorials).

| Story type | Interaction level |
|---|---|
| Documentary / essay | Low (scroll-triggered) |
| News explainer | Medium (annotated charts) |
| Data dashboard | High (filters, selections) |
| Tutorial / onboarding | High (step-by-step input) |

## Visual hierarchy for storytelling

1. **Size** — the most important element is largest.
2. **Contrast** — key data points stand out from context.
3. **Motion** — draw the eye to what changed, not to everything.
4. **Colour** — use accent colour to highlight one thing, not five.

## Accessibility in media stories

- Add \`alt\` text to every chart and image.
- Provide text alternatives for motion/animation.
- Ensure scroll-triggered events can also be triggered by keyboard.
- Test at reduced motion preference: \`prefers-reduced-motion\`.

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  .scroll-animation { animation: none; transition: none; }
}
\`\`\`
`,
      nl: `# Basis van Media Storytelling

Digitale verhalen leven op het snijpunt van journalistiek, design en technologie.

## De verhaalboog

Elk verhaal — zelfs een datavisualisatie of tutorial — profiteert van een klassieke structuur:

\`\`\`
Hook → Context → Stijgende spanning → Climax → Oplossing → Call to action
\`\`\`

## Pacing en scroll

In een scroll-gedreven verhaal wordt het tempo bepaald door:
- **Tekstdichtheid** — minder woorden per scherm houdt het tempo levendig.
- **Transitiesnelheid** — langzame transities voelen zwaarder; snelle voelen energiek.
- **Ademruimte** — witruimte tussen ideeën geeft lezers tijd om te absorberen.

## Interactiviteit: wanneer en waarom

| Verhaaltype | Interactieniveau |
|---|---|
| Documentaire / essay | Laag (scroll-triggered) |
| Nieuwsuitlegger | Middel (geannoteerde grafieken) |
| Data-dashboard | Hoog (filters, selecties) |
| Tutorial / onboarding | Hoog (stapsgewijze invoer) |

## Toegankelijkheid in mediaverhalen

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  .scroll-animatie { animation: none; transition: none; }
}
\`\`\`
`,
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
    id: "11",
    slug: "nextjs-deployment-checklist",
    title: {
      en: "Next.js Deployment Checklist",
      nl: "Next.js Deployment Checklist",
    },
    summary: {
      en: "A practical checklist for deploying a Next.js project to production.",
      nl: "Een praktische checklist voor het deployen van een Next.js-project naar productie.",
    },
    sourceUrl:
      "https://nextjs.org/docs/app/building-your-application/deploying",
    contentMarkdown: {
      en: `# Next.js Deployment Checklist

Getting your Next.js app from local dev to a live URL involves more than just pushing to Git. This checklist covers the steps that are most commonly missed.

## Before you deploy

### Environment variables

\`\`\`bash
# .env.local (never commit this file!)
DATABASE_URL="postgres://user:password@host/db"
NEXTAUTH_SECRET="your-secret-here"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
\`\`\`

- Variables prefixed with \`NEXT_PUBLIC_\` are exposed to the browser — never put secrets there.
- Add all required variables to your hosting platform (Vercel dashboard → Settings → Environment Variables).
- Verify they are set for the correct environment (production / preview / development).

### Build locally first

\`\`\`bash
npm run build   # catches TypeScript errors and missing env vars
npm run start   # test the production build locally
\`\`\`

Never deploy something you haven't run \`npm run build\` on locally.

### Metadata and SEO

\`\`\`tsx
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:       { default: "My App", template: "%s | My App" },
  description: "A short, accurate description for search engines.",
  openGraph: {
    title:       "My App",
    description: "A short, accurate description.",
    url:         "https://myapp.com",
    siteName:    "My App",
  },
};
\`\`\`

### Images

- Use \`next/image\` for all images — it handles optimisation, lazy loading, and CLS prevention automatically.
- Set explicit \`width\` and \`height\` to avoid Cumulative Layout Shift.

## Deploying to Vercel

\`\`\`bash
# Install the Vercel CLI
npm i -g vercel

# Deploy from project root
vercel --prod
\`\`\`

Or connect your GitHub repository for automatic deployments on every push.

## Post-deployment checks

- [ ] Open Chrome DevTools → Network tab → check for 404s on assets.
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) — target 90+ on mobile.
- [ ] Check the [Core Web Vitals](https://web.dev/vitals/): LCP, CLS, INP.
- [ ] Test on a real mobile device (not just DevTools emulation).
- [ ] Verify all environment-dependent features (auth, payments, emails).
- [ ] Check \`robots.txt\` and \`sitemap.xml\` are reachable.

## Common errors

| Error | Likely cause |
|---|---|
| Hydration mismatch | Server HTML ≠ client HTML (often from browser extensions or SSR-incompatible libraries) |
| Module not found | Package missing from \`dependencies\` (only in \`devDependencies\`) |
| 500 on API routes | Missing env variable on the server |
| Images not loading | Domain not listed in \`next.config.ts\` images config |

\`\`\`ts
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.example.com" },
    ],
  },
};
\`\`\`
`,
      nl: `# Next.js Deployment Checklist

Je Next.js-app van lokale dev naar een live URL brengen vereist meer dan alleen pushen naar Git.

## Vóór de deployment

### Omgevingsvariabelen

\`\`\`bash
# .env.local (dit bestand nooit committen!)
DATABASE_URL="postgres://gebruiker:wachtwoord@host/db"
NEXTAUTH_SECRET="jouw-geheim-hier"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
\`\`\`

- Variabelen met \`NEXT_PUBLIC_\` prefix worden blootgesteld aan de browser — zet daar nooit geheimen in.
- Voeg alle vereiste variabelen toe aan je hostingplatform.

### Lokaal eerst bouwen

\`\`\`bash
npm run build   # vangt TypeScript-fouten en ontbrekende env-variabelen
npm run start   # test de productiebuild lokaal
\`\`\`

### Metadata en SEO

\`\`\`tsx
export const metadata: Metadata = {
  title:       { default: "Mijn App", template: "%s | Mijn App" },
  description: "Een korte, accurate beschrijving voor zoekmachines.",
};
\`\`\`

## Controles na deployment

- [ ] Open Chrome DevTools → Network-tab → controleer op 404's bij assets.
- [ ] Voer [PageSpeed Insights](https://pagespeed.web.dev) uit — streef naar 90+ op mobiel.
- [ ] Controleer de Core Web Vitals: LCP, CLS, INP.
- [ ] Test op een echt mobiel apparaat.
`,
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
    sourceUrl: "https://web.dev/learn/performance",
    contentMarkdown: {
      en: `# Frontend Performance Basics

Performance is a user experience issue, not just a technical one. A one-second delay in page load time can reduce conversions by 7% (Akamai). For users on slower connections or lower-end devices — often the majority of your real audience — performance is even more critical.

## The Core Web Vitals

Google's Core Web Vitals measure three dimensions of user experience:

| Metric | What it measures | Good threshold |
|---|---|---|
| **LCP** — Largest Contentful Paint | How quickly the main content loads | < 2.5 s |
| **CLS** — Cumulative Layout Shift | Visual stability (does content jump?) | < 0.1 |
| **INP** — Interaction to Next Paint | Responsiveness to user input | < 200 ms |

## Images — the biggest win

Images are typically the heaviest resources on a web page.

### Use modern formats

\`\`\`html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero image" width="1200" height="630" loading="lazy">
</picture>
\`\`\`

AVIF and WebP are typically 50–80% smaller than JPEG/PNG at equivalent quality.

### Prevent layout shift

Always set \`width\` and \`height\` on images. The browser reserves the space before the image loads:

\`\`\`html
<!-- ❌ CLS: browser doesn't know the height until image loads -->
<img src="photo.jpg" alt="…">

<!-- ✓ No CLS: browser reserves 400×300 immediately -->
<img src="photo.jpg" alt="…" width="400" height="300">
\`\`\`

### Lazy loading

\`\`\`html
<img src="below-fold.jpg" alt="…" loading="lazy">
\`\`\`

## Reduce JavaScript

JavaScript is the most expensive resource per byte because it must be parsed and executed, not just downloaded.

\`\`\`ts
const performanceChecklist = [
  "Remove unused dependencies (bundle-phobia.com)",
  "Code-split with dynamic import()",
  "Load third-party scripts with defer or async",
  "Avoid large polyfills for modern browsers",
];
\`\`\`

## Caching with service workers

\`\`\`js
// sw.js — cache essential assets on install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) =>
      cache.addAll(["/", "/styles/main.css", "/scripts/app.js"])
    )
  );
});
\`\`\`

## Use Lighthouse

Run Lighthouse from Chrome DevTools (Lighthouse tab) or via the CLI:

\`\`\`bash
npx lighthouse https://yoursite.com --output html --open
\`\`\`

Fix items in this priority order:
1. Critical render-blocking resources (CSS / JS in \`<head>\`).
2. Images (format, dimensions, lazy loading).
3. Unused JavaScript.
4. Server response time.

> **Remember:** Performance is a user experience issue, not only a technical issue.
> Start simple, measure often, and improve step by step.
`,
      nl: `# Basis van Frontend Performance

Performance is een gebruikerservaringsprobleem, niet alleen een technisch probleem.

## De Core Web Vitals

| Metriek | Wat het meet | Goede drempel |
|---|---|---|
| **LCP** — Largest Contentful Paint | Hoe snel de hoofdcontent laadt | < 2,5 s |
| **CLS** — Cumulative Layout Shift | Visuele stabiliteit | < 0,1 |
| **INP** — Interaction to Next Paint | Responsiviteit op gebruikersinvoer | < 200 ms |

## Afbeeldingen — de grootste winst

\`\`\`html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero afbeelding" width="1200" height="630" loading="lazy">
</picture>
\`\`\`

AVIF en WebP zijn doorgaans 50–80% kleiner dan JPEG/PNG bij vergelijkbare kwaliteit.

## JavaScript reduceren

\`\`\`ts
const prestatieChecklist = [
  "Verwijder ongebruikte afhankelijkheden",
  "Code-split met dynamic import()",
  "Laad third-party scripts met defer of async",
  "Vermijd grote polyfills voor moderne browsers",
];
\`\`\`

## Gebruik Lighthouse

\`\`\`bash
npx lighthouse https://jouwsite.com --output html --open
\`\`\`

> **Onthoud:** Performance is een UX-probleem, niet alleen een technisch probleem.
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
    sourceUrl: "https://www.nngroup.com/articles/design-critiques/",
    contentMarkdown: {
      en: `# Design Critique Methods

A design critique is a structured conversation about a design in progress. It's not about whether you personally like it — it's about whether it solves the problem it set out to solve.

## The core principle

Critique focuses on **goals, evidence, and next steps** — not personal taste.

| ❌ Opinion | ✓ Critique |
|---|---|
| "I don't like the blue button." | "The low contrast of the button may fail WCAG AA — did you check the ratio?" |
| "This looks cluttered." | "There are seven items in the primary navigation. Research suggests 5–7 is a cognitive limit." |
| "I would have done it differently." | "How does this design address the user's need to find products quickly?" |

## Structuring a critique session

### 1. Set up (5 min)

The designer explains:
- What problem does this design solve?
- Who are the users?
- What stage is this (exploration, refinement, final)?
- What specific feedback do you need today?

### 2. Observe silently (5 min)

Everyone looks at the design without commenting. Write notes on what you see and any questions that arise.

### 3. Describe before evaluating

Before giving an opinion, *describe* what you see:
- "I see a modal that appears when the user clicks Add to cart."
- "The primary action button is in the top-right."

This reveals misalignments between designer intent and reviewer perception.

### 4. Ask questions

Questions often reveal more than statements:
- "What happens when the user has an empty cart?"
- "How did you decide on three columns instead of four?"

### 5. Relate to goals and users

Frame feedback in terms of the design brief and user needs, not your own preference:
- "Given that users are often on mobile when shopping, how does this interaction work with a thumb?"

## The I Like / I Wish / What If method

A low-stakes framework that keeps critique constructive:

- **I like…** — "I like that the error message appears inline next to the field."
- **I wish…** — "I wish the success confirmation were more visible — I nearly missed it."
- **What if…** — "What if we showed a toast notification instead of a banner?"

## Receiving critique

- Listen without defending — write everything down first.
- Ask clarifying questions rather than justifying your choices.
- You don't have to act on every piece of feedback — but explain your reasoning if you don't.

## Portfolio reflection

Include critique sessions in your portfolio case study:
- Screenshot the design before and after critique.
- Describe the feedback you received and why you did or didn't act on it.
- Show that you can communicate about design decisions, not just make them.
`,
      nl: `# Methodes voor Design Critique

Een design critique is een gestructureerd gesprek over een ontwerp in ontwikkeling. Het gaat niet over of je het persoonlijk mooi vindt — het gaat over of het het probleem oplost dat het wilde oplossen.

## Het kernprincipe

Critique focust op **doelen, bewijs en volgende stappen** — niet op persoonlijke smaak.

| ❌ Mening | ✓ Critique |
|---|---|
| "Ik vind de blauwe knop niet mooi." | "Het lage contrast van de knop haalt mogelijk geen WCAG AA — heb je de verhouding gecontroleerd?" |
| "Dit ziet er rommelig uit." | "Er zijn zeven items in de primaire navigatie. Onderzoek suggereert 5–7 als cognitieve limiet." |

## Een critiquesessie structureren

### 1. Opzet (5 min)

De ontwerper legt uit:
- Welk probleem lost dit ontwerp op?
- Wie zijn de gebruikers?
- In welke fase is dit (verkenning, verfijning, definitief)?
- Welke specifieke feedback is er vandaag nodig?

### 2. De methode I Like / I Wish / What If

- **I like…** — "Ik vind het goed dat de foutmelding naast het veld verschijnt."
- **I wish…** — "Ik zou willen dat de bevestiging zichtbaarder was."
- **What if…** — "Wat als we een toast-notificatie gebruiken in plaats van een banner?"

## Feedback ontvangen

- Luister zonder te verdedigen — schrijf alles eerst op.
- Stel verduidelijkende vragen in plaats van je keuzes te rechtvaardigen.
- Je hoeft niet op alle feedback te reageren — maar leg je redenering uit als je dat niet doet.
`,
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

  // ─── SEMESTER 5 – Stage ──────────────────────────────────────────────────────

  {
    id: "26",
    slug: "internship-preparation-guide",
    title: {
      en: "Preparing for Your Frontend Internship",
      nl: "Voorbereiding op je Frontend Stage",
    },
    summary: {
      en: "How to prepare your portfolio, Git workflow, and professional habits before your internship starts.",
      nl: "Hoe je je portfolio, Git-workflow en professionele gewoontes voorbereidt vóór de stage.",
    },
    sourceUrl: "https://roadmap.sh/frontend",
    contentMarkdown: {
      en: `# Preparing for Your Frontend Internship

Your internship is the first time you'll apply everything you've learned in a real team, on a real codebase, with real deadlines. Here's how to prepare.

## What companies actually expect

Based on common frontend internship job postings, the skills that come up most often are:

1. **HTML, CSS, JavaScript fundamentals** — not just knowing the syntax, but understanding *why* things work.
2. **A framework** — React is the most requested, followed by Vue and Svelte.
3. **Git** — branching, pull requests, merge conflicts.
4. **Communication** — asking questions, writing clear commit messages, status updates in standups.
5. **Reading and understanding existing code** — you'll rarely start from scratch.

## Your portfolio before you go

Your portfolio is your interview calling card. Before applying, make sure it includes:

- **2–3 real projects** with source code on GitHub (not just tutorials).
- Each project has a **README** explaining what it does, how to run it, and what you learned.
- Projects are **deployed** and accessible via a URL (Vercel, Netlify, GitHub Pages).
- Your code is **clean and readable** — as if a senior developer will review it (they will).

### Case study structure for each project

\`\`\`
1. Problem statement — what were you trying to build and why?
2. Process — how did you approach it? What did you try that didn't work?
3. Technical decisions — why this framework, why this data structure?
4. Result — what does it do? What would you do differently?
5. What you learned
\`\`\`

## Git workflow you should know

\`\`\`bash
# Standard feature branch workflow
git checkout -b feature/add-search-bar
# ... make changes
git add -p                          # stage selectively, not everything at once
git commit -m "feat: add search bar with debounced input"
git push origin feature/add-search-bar
# → open a Pull Request on GitHub
\`\`\`

**Commit message conventions (Conventional Commits):**

| Prefix | When to use |
|---|---|
| \`feat:\` | New feature |
| \`fix:\` | Bug fix |
| \`docs:\` | Documentation only |
| \`style:\` | Formatting (no logic change) |
| \`refactor:\` | Restructuring without changing behaviour |
| \`test:\` | Adding tests |

## Day-to-day professional habits

- **Ask questions early** — don't spend three hours stuck when a five-minute chat unblocks you.
- **Write down what you learn** — a private Notion doc or journal helps enormously.
- **Review your own PRs first** — read your diff before requesting a review.
- **Attend standups prepared** — know what you did yesterday, what you're doing today, and any blockers.
- **Timebox unfamiliar problems** — if you're stuck for 45 minutes, ask for help.

## Things to learn before week one

\`\`\`bash
# Make sure these work on your machine before day one
node --version     # 20+ recommended
npm --version
git --version
code .             # VS Code opens from terminal
\`\`\`

Install and configure:
- ESLint + Prettier (your company likely has a config — ask for it)
- [GitHub CLI](https://cli.github.com) for faster PR management
- Your company's VPN (if required)
`,
      nl: `# Voorbereiding op je Frontend Stage

Je stage is de eerste keer dat je alles wat je hebt geleerd toepast in een echt team, op een echte codebase, met echte deadlines.

## Wat bedrijven eigenlijk verwachten

1. **HTML, CSS, JavaScript-basis** — niet alleen de syntax kennen, maar begrijpen *waarom* dingen werken.
2. **Een framework** — React is het meest gevraagd, gevolgd door Vue en Svelte.
3. **Git** — branching, pull requests, merge-conflicten.
4. **Communicatie** — vragen stellen, duidelijke commit-berichten schrijven, statusupdates in standups.
5. **Bestaande code lezen en begrijpen** — je begint zelden van nul.

## Je portfolio vóór je vertrekt

- **2–3 echte projecten** met broncode op GitHub (geen tutorials).
- Elk project heeft een **README** met uitleg over wat het doet en hoe je het kunt starten.
- Projecten zijn **gedeployed** en toegankelijk via een URL.

## Git-workflow die je moet kennen

\`\`\`bash
git checkout -b feature/zoekbalk-toevoegen
git add -p
git commit -m "feat: zoekbalk toevoegen met debounced input"
git push origin feature/zoekbalk-toevoegen
\`\`\`

## Dagelijkse professionele gewoonten

- **Stel vroeg vragen** — besteed geen drie uur aan vastzitten als een gesprek van vijf minuten je deblokt.
- **Schrijf op wat je leert** — een privé notitiedocument helpt enorm.
- **Beoordeel je eigen PR's eerst** — lees je diff voordat je een review vraagt.
- **Kom voorbereid naar standups** — weet wat je gisteren deed, wat je vandaag doet en welke blockers je hebt.
`,
    },
    units: ["FED", "PROG"],
    semesters: ["Semester 5"],
    tags: ["internship", "portfolio", "git", "professional"],
    authorName: "Teacher Team",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-01",
    updatedAt: "2026-06-01",
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
    sourceUrl:
      "https://www.smashingmagazine.com/2022/08/portfolio-case-study-guide/",
    contentMarkdown: {
      en: `# Writing a Portfolio Case Study

A portfolio case study is the story of how you solved a problem. It's more valuable than a link to a finished product because it reveals how you *think* — which is what employers actually hire for.

## The case study structure

### 1. Project overview (2–3 sentences)

What did you build? For whom? What was the context?

> "FreshCart is a grocery shopping list app built as part of a four-workshop series teaching vanilla JavaScript and DOM manipulation. I was the lead developer, responsible for all JavaScript and the component structure."

### 2. The problem

What was the challenge? Describe it in terms of user needs and constraints, not just tech choices.

> "Students struggled to see how JavaScript connects to real user interfaces. We needed a project that felt genuinely useful but was small enough to complete in four sessions."

### 3. Your process

This is the most important section. Walk through what you did, what you tried, what failed, and why you made key decisions.

- **Research / discovery** — what did you learn about the problem first?
- **Ideation** — what options did you consider?
- **Design / architecture** — how did you structure the solution?
- **Build** — what were the key implementation decisions?
- **Testing / iteration** — what changed after feedback?

### 4. The result

Show the finished product. Include screenshots, a live link, and/or a short video.

Key metrics if you have them:
- Did user test results improve between iterations?
- How long did it take to build?
- What did you ship and what did you cut?

### 5. Reflection

What would you do differently? What did you learn?

> "In retrospect, I would have introduced TypeScript from the start rather than retrofitting it in session three. The type errors we caught were genuine bugs that would have been hard to debug later."

## Writing tips

- **Write for a reader who doesn't know your course** — avoid jargon like "semester 2 assignment". Explain it in plain language.
- **Show your thinking, not just your output.** Screenshots of wireframes, Figma explorations, and half-finished ideas are valuable.
- **Use active voice** — "I decided to use CSS Grid because…" not "CSS Grid was used."
- **Keep it scannable** — use headers, bullets, and captions. Recruiters read quickly.

## Length

- Minimum: 400 words + visuals.
- Ideal: 600–900 words with 4–8 images.
- Maximum: 1200 words — if you're writing more, cut.

## What to include visually

- [ ] Screenshot of the final product (desktop + mobile)
- [ ] Process sketches or wireframes
- [ ] Before/after comparisons if you iterated
- [ ] Code snippet of a key decision (max 20 lines)
`,
      nl: `# Een Portfolio Case Study Schrijven

Een portfolio case study is het verhaal van hoe je een probleem hebt opgelost. Het is waardevoller dan een link naar een afgewerkt product, omdat het laat zien hoe je *denkt* — en dat is waar werkgevers eigenlijk voor inhuren.

## De case study-structuur

### 1. Projectoverzicht (2–3 zinnen)

Wat heb je gebouwd? Voor wie? Wat was de context?

### 2. Het probleem

Wat was de uitdaging? Beschrijf het in termen van gebruikersbehoeften en beperkingen, niet alleen technische keuzes.

### 3. Je proces

Dit is het belangrijkste gedeelte. Loop door wat je deed, wat je probeerde, wat mislukte en waarom je belangrijke beslissingen nam.

### 4. Het resultaat

Toon het afgewerkte product. Voeg screenshots, een live link of een korte video toe.

### 5. Reflectie

Wat zou je anders doen? Wat heb je geleerd?

## Schrijftips

- **Schrijf voor een lezer die je opleiding niet kent** — vermijd jargon en leg het in gewone taal uit.
- **Toon je denkproces, niet alleen je output.**
- **Gebruik actieve stem** — "Ik besloot CSS Grid te gebruiken omdat…"
- **Zorg voor scanbaarheid** — gebruik headers, opsommingstekens en bijschriften.

## Lengte

- Minimum: 400 woorden + visueel materiaal.
- Ideaal: 600–900 woorden met 4–8 afbeeldingen.
`,
    },
    units: ["DES", "IM", "FED"],
    semesters: ["Semester 5"],
    tags: ["portfolio", "reflection", "presentation"],
    authorName: "Drew",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-17",
    updatedAt: "2026-06-09",
  },

  // ─── SEMESTER 6 & 7 – Human Centered Design ─────────────────────────────────

  {
    id: "27",
    slug: "human-centered-design-process",
    title: {
      en: "The Human-Centered Design Process",
      nl: "Het Human-Centered Design Proces",
    },
    summary: {
      en: "An overview of empathise, define, ideate, prototype and test — the HCD framework.",
      nl: "Een overzicht van empathize, define, ideate, prototype en test — het HCD-raamwerk.",
    },
    sourceUrl: "https://www.ideo.com/post/design-thinking",
    contentMarkdown: {
      en: `# The Human-Centered Design Process

Human-Centered Design (HCD) — also called Design Thinking — is a problem-solving framework that starts with deep empathy for the people who will use what you create. It was popularised by IDEO and Stanford's d.school and is now used across product, service, and policy design.

## The five phases

\`\`\`
Empathise → Define → Ideate → Prototype → Test
    ↑                                         |
    └─────────────── (iterate) ───────────────┘
\`\`\`

These phases are **not linear**. You'll move back and forth as you learn more.

## Phase 1: Empathise

Goal: understand users in their context — not as abstract personas, but as specific human beings with real goals, frustrations, and workarounds.

**Methods:**
- Contextual interviews (in the user's environment)
- Observation / shadowing
- Diary studies
- Empathy mapping

**Output:** rich qualitative data — stories, quotes, observed behaviours.

## Phase 2: Define

Goal: synthesise your research into a clear, actionable problem statement.

**Methods:**
- Affinity mapping (clustering observations)
- How Might We (HMW) questions
- Point of View (POV) statement

**POV format:**
> [User] needs [need] because [insight].

Example:
> "A first-year student needs to quickly locate lecture recordings because they often have part-time jobs that conflict with live sessions."

**A good problem statement is:**
- Focused on a human need, not a solution.
- Specific enough to give design direction.
- Open enough to allow creative solutions.

## Phase 3: Ideate

Goal: generate a large quantity of ideas — without self-censoring.

**Methods:**
- Brainstorming (quantity over quality)
- Worst Possible Idea (then invert them)
- Analogous inspiration (how do other industries solve similar problems?)
- Crazy 8s (8 sketches in 8 minutes)

**Rules during ideation:**
- Defer judgment.
- Build on others' ideas.
- Go for wild ideas.
- Stay on topic.

After generating ideas, vote and cluster to identify the most promising directions.

## Phase 4: Prototype

Goal: build a rough, cheap representation of your best idea — quickly enough to fail and learn.

**Fidelity spectrum:**

| Fidelity | What it looks like | When to use |
|---|---|---|
| Paper prototype | Hand-drawn screens | Explore concepts |
| Wireframe | Greyscale, no real content | Validate structure |
| Mid-fi mockup | Real layout, placeholder content | Test flows |
| Hi-fi prototype | Near-final visuals + interactions | Validate UI details |

> "Build to think, not to ship." — IDEO

## Phase 5: Test

Goal: observe real users interacting with your prototype and learn from what breaks.

**Think-aloud protocol:** ask users to say what they're thinking as they navigate.

**What to observe:**
- Where do they hesitate or get stuck?
- What do they *expect* to happen that doesn't?
- What words do they use to describe actions?

**After testing:** debrief immediately, capture insights while fresh, update your POV statement if you learned something new, and iterate on your prototype.

## Double Diamond

The UK Design Council frames HCD as a Double Diamond:

\`\`\`
Discover → Define → Develop → Deliver
(diverge)  (converge) (diverge) (converge)
\`\`\`

Both diamonds follow the same pattern: first *diverge* (open up possibilities) then *converge* (make decisions and focus).
`,
      nl: `# Het Human-Centered Design Proces

Human-Centered Design (HCD) — ook Design Thinking genoemd — is een probleemoplossend raamwerk dat begint met diepe empathie voor de mensen die zullen gebruiken wat je maakt.

## De vijf fasen

\`\`\`
Empathize → Define → Ideate → Prototype → Test
    ↑                                         |
    └─────────────── (itereren) ──────────────┘
\`\`\`

## Fase 1: Empathize

Doel: gebruikers begrijpen in hun context — niet als abstracte persona's, maar als specifieke mensen met echte doelen en frustraties.

## Fase 2: Define

Doel: je onderzoek samenvatten in een duidelijke, uitvoerbare probleemstelling.

**POV-formaat:**
> [Gebruiker] heeft [behoefte] nodig omdat [inzicht].

Voorbeeld:
> "Een eerstejaars student moet snel hoorcollege-opnames kunnen vinden omdat hij/zij vaak een bijbaan heeft die conflicteert met live sessies."

## Fase 3: Ideate

Doel: een grote hoeveelheid ideeën genereren — zonder zelfcensuur.

**Regels tijdens ideatie:**
- Oordeel uitstellen.
- Voortbouwen op andermans ideeën.
- Wilde ideeën verwelkomen.

## Fase 4: Prototype

Doel: een ruwe, goedkope representatie van je beste idee bouwen — snel genoeg om te mislukken en te leren.

> "Bouwen om te denken, niet om te deployen." — IDEO

## Fase 5: Test

Doel: echte gebruikers observeren terwijl ze met je prototype interageren.

**Think-aloud protocol:** vraag gebruikers hardop te zeggen wat ze denken terwijl ze navigeren.

## Double Diamond

\`\`\`
Discover → Define → Develop → Deliver
(divergeer) (convergeer) (divergeer) (convergeer)
\`\`\`
`,
    },
    units: ["DES", "IM"],
    semesters: ["Semester 6"],
    tags: ["hcd", "design-thinking", "ux", "research"],
    authorName: "Teacher Team",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-01",
    updatedAt: "2026-06-01",
  },

  {
    id: "28",
    slug: "accessibility-wcag-deep-dive",
    title: {
      en: "Accessibility: WCAG in Practice",
      nl: "Toegankelijkheid: WCAG in de Praktijk",
    },
    summary: {
      en: "Apply the four WCAG principles — Perceivable, Operable, Understandable, Robust — to real projects.",
      nl: "Pas de vier WCAG-principes — Perceivable, Operable, Understandable, Robust — toe op echte projecten.",
    },
    sourceUrl: "https://www.w3.org/WAI/WCAG22/quickref/",
    contentMarkdown: {
      en: `# Accessibility: WCAG in Practice

The Web Content Accessibility Guidelines (WCAG) 2.2 are the internationally recognised standard for web accessibility. They're organised around four principles, remembered as **POUR**.

## POUR: the four principles

### 1. Perceivable

Information must be presentable to users in ways they can perceive.

**Key success criteria:**
- **1.1.1 Non-text Content (A):** every image, chart, or icon needs an \`alt\` attribute.
- **1.3.1 Info and Relationships (A):** structure conveyed visually must also exist in code (headings, lists, tables).
- **1.4.3 Contrast Minimum (AA):** text needs 4.5:1 contrast ratio.
- **1.4.4 Resize Text (AA):** text must be resizable to 200% without losing functionality.

\`\`\`html
<!-- ✓ Descriptive alt text -->
<img src="bar-chart.png" alt="Bar chart showing monthly sales: Jan €12k, Feb €18k, Mar €15k">

<!-- ✓ Decorative image: empty alt hides it from screen readers -->
<img src="divider.svg" alt="" role="presentation">
\`\`\`

### 2. Operable

Users must be able to operate the interface.

**Key success criteria:**
- **2.1.1 Keyboard (A):** all functionality available by keyboard.
- **2.4.3 Focus Order (A):** focusable elements have a logical order.
- **2.4.7 Focus Visible (AA):** keyboard focus indicator is visible.
- **2.5.3 Label in Name (A):** visible label text is included in the accessible name.

\`\`\`css
/* ✓ Visible focus indicator */
:focus-visible {
  outline: 3px solid #0070f3;
  outline-offset: 2px;
  border-radius: 2px;
}

/* ❌ Never remove focus without replacement */
:focus { outline: none; }
\`\`\`

### 3. Understandable

Users must be able to understand the information and operation of the interface.

**Key success criteria:**
- **3.1.1 Language of Page (A):** \`lang\` attribute on the \`<html>\` element.
- **3.2.1 On Focus (A):** focus does not trigger unexpected changes.
- **3.3.1 Error Identification (A):** errors described in text.
- **3.3.2 Labels or Instructions (A):** form fields have descriptive labels.

\`\`\`html
<html lang="en">

<label for="email">Email address</label>
<input id="email" type="email" aria-describedby="email-hint" required>
<p id="email-hint">We'll only use this to send your receipt.</p>
\`\`\`

### 4. Robust

Content must be robust enough to be interpreted by current and future technologies.

**Key success criteria:**
- **4.1.1 Parsing (A):** valid HTML (no duplicate IDs, properly nested elements).
- **4.1.2 Name, Role, Value (A):** all UI components have accessible name, role, and state.
- **4.1.3 Status Messages (AA):** status messages can be programmatically determined.

\`\`\`html
<!-- ✓ Button with clear accessible name -->
<button type="button" aria-label="Close modal" aria-expanded="true">
  <svg aria-hidden="true">…</svg>
</button>

<!-- ✓ Live region for dynamic status messages -->
<div aria-live="polite" aria-atomic="true">
  Your changes have been saved.
</div>
\`\`\`

## Testing accessibility

Manual checks (do these for every project):
1. Navigate with keyboard only (Tab, Shift+Tab, Enter, Space, Arrow keys).
2. Zoom to 200% — does the layout break?
3. Use a screen reader (NVDA on Windows, VoiceOver on Mac/iOS).
4. Run axe DevTools browser extension — fixes all flagged issues.

Automated tools catch ~30–40% of accessibility issues. Manual testing is essential.

## Accessibility in HCD

Accessibility is not a checklist at the end of a project — it's a constraint that should inform design from the first wireframe. In a Human-Centered Design process, include users with disabilities in your research and testing from the start.
`,
      nl: `# Toegankelijkheid: WCAG in de Praktijk

De WCAG 2.2 zijn georganiseerd rond vier principes, onthouden als **POUR**.

## POUR: de vier principes

### 1. Perceivable (Waarneembaar)

Informatie moet op manieren worden aangeboden die gebruikers kunnen waarnemen.

- **1.1.1 Niet-tekstuele Content (A):** elke afbeelding heeft een \`alt\`-attribuut.
- **1.4.3 Contrast Minimum (AA):** tekst heeft een contrastverhouding van 4,5:1.

### 2. Operable (Bedienbaar)

Gebruikers moeten de interface kunnen bedienen.

\`\`\`css
:focus-visible {
  outline: 3px solid #0070f3;
  outline-offset: 2px;
}
\`\`\`

### 3. Understandable (Begrijpelijk)

Gebruikers moeten de informatie en bediening van de interface begrijpen.

\`\`\`html
<html lang="nl">
<label for="email">E-mailadres</label>
<input id="email" type="email" required>
\`\`\`

### 4. Robust (Robuust)

Content moet robuust genoeg zijn om te worden geïnterpreteerd door huidige en toekomstige technologieën.

\`\`\`html
<div aria-live="polite" aria-atomic="true">
  Je wijzigingen zijn opgeslagen.
</div>
\`\`\`

## Toegankelijkheid testen

1. Navigeer met alleen het toetsenbord.
2. Zoom naar 200% — breekt de lay-out?
3. Gebruik een schermlezer.
4. Voer de axe DevTools-browserextensie uit.

Geautomatiseerde tools vangen ~30–40% van toegankelijkheidsproblemen. Handmatig testen is essentieel.
`,
    },
    units: ["FED", "DES"],
    semesters: ["Semester 6"],
    tags: ["accessibility", "wcag", "html", "design"],
    authorName: "Teacher Team",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-02",
    updatedAt: "2026-06-02",
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
    sourceUrl:
      "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma",
    contentMarkdown: {
      en: `# Figma Prototyping Workflow

A prototype in Figma is a simulation of your design that stakeholders and users can click through — without a single line of code. Used well, it's one of the most powerful tools in a designer's arsenal.

## When to prototype (and when not to)

**Prototype when you need to:**
- Test a user flow (onboarding, checkout, search).
- Present interaction ideas to a client or team.
- Validate navigation before development starts.

**Don't prototype when you need to:**
- Explore visual direction (use static frames instead).
- Test isolated UI components (use a component playground in code).

## Setting up your prototype

### Frame sizes

Start with real device sizes:
- **Mobile:** 390 × 844 (iPhone 14)
- **Tablet:** 768 × 1024 (iPad)
- **Desktop:** 1440 × 900

### Connections (transitions)

In Figma's Prototype panel, drag the blue arrow from one frame to the next:

\`\`\`
[Frame: Product list]  →  Click on product card  →  [Frame: Product detail]
[Frame: Product detail] →  Click "Add to cart"   →  [Frame: Cart overlay]
\`\`\`

**Transition options:**
| Type | When to use |
|---|---|
| Instant | Form submission, toggle states |
| Dissolve | Content changes in-place |
| Smart Animate | Motion between similar elements |
| Push | Navigation (left/right, up/down) |
| Slide in | Modals, drawers, overlays |

## Interactive components

Use **variants** + **component properties** to simulate interactive states without duplicating frames.

\`\`\`
Button component
  ├── Variant: Default
  ├── Variant: Hover
  ├── Variant: Active
  └── Variant: Disabled
\`\`\`

With **Change to** interactions in the prototype panel, a hover state triggers automatically when you hover in presentation mode.

## Overlay interactions

For modals, drawers, and dropdowns — use overlays so you don't need a full copy of the page:

1. Create the modal as a separate frame.
2. Set the trigger to "Click" + action "Open overlay".
3. Position it "Centered" or offset from the trigger.

## Sharing and presenting

\`\`\`
Share → "Anyone with the link" → Copy link
\`\`\`

Presentation mode shortcut: **Cmd/Ctrl + Alt + Enter**

In presentation mode:
- Use **R** to restart the flow.
- Use arrow keys to step through frames manually.
- Enable the **device frame** in the share settings for a realistic preview.

## Handing off to developers

Before handing off, ensure:
- All layers are **named** (not "Frame 23" or "Rectangle 8").
- Spacing uses **auto layout** (not manually positioned elements).
- Colours and typography reference **styles** or **variables**.
- Interactive states have **component variants**.

Figma's Dev Mode (Cmd/Ctrl + Shift + D) lets developers inspect all CSS values, copy code snippets, and export assets.

## Prototype fidelity for testing

| Test goal | Recommended fidelity |
|---|---|
| Validate information architecture | Low-fi (greyscale, placeholder text) |
| Test task completion flows | Mid-fi (real layout, no final visuals) |
| Validate visual design | Hi-fi (near-final, real content) |
| Usability with real users | Hi-fi clickable prototype |
`,
      nl: `# Figma Prototype Workflow

Een prototype in Figma is een simulatie van je ontwerp die stakeholders en gebruikers door kunnen klikken — zonder een regel code.

## Wanneer prototypen (en wanneer niet)

**Prototypeer wanneer je:**
- Een gebruikersstroom wilt testen.
- Interactie-ideeën wilt presenteren.
- Navigatie wilt valideren vóór de ontwikkeling.

## Je prototype instellen

### Verbindingen (transities)

\`\`\`
[Frame: Productlijst]  →  Klik op productkaart  →  [Frame: Productdetail]
[Frame: Productdetail] →  Klik "Toevoegen aan winkelwagen" → [Frame: Winkelwagen]
\`\`\`

| Type | Wanneer gebruiken |
|---|---|
| Instant | Formulierindiening, toggle-staten |
| Dissolve | Content verandert op dezelfde plek |
| Smart Animate | Beweging tussen vergelijkbare elementen |
| Slide in | Modals, drawers, overlays |

## Overdracht aan ontwikkelaars

Zorg voor:
- Alle lagen zijn **benoemd**.
- Spatiëring gebruikt **auto layout**.
- Kleuren en typografie refereren aan **stijlen** of **variabelen**.

## Prototypefideliteit voor testen

| Testdoel | Aanbevolen fideliteit |
|---|---|
| Informatiearchitectuur valideren | Laag (grijstinten) |
| Taakvoltoeiingsstromen testen | Midden |
| Visueel ontwerp valideren | Hoog |
| Bruikbaarheid met echte gebruikers | Hoog, klikbaar |
`,
    },
    units: ["IM", "DES"],
    semesters: ["Semester 7"],
    tags: ["figma", "prototype", "ux"],
    authorName: "Emma",
    sourceType: "video",
    status: "approved",
    createdAt: "2026-06-08",
    updatedAt: "2026-06-18",
  },

  // ─── SEMESTER 8 – Afstuderen ─────────────────────────────────────────────────

  {
    id: "29",
    slug: "graduation-project-research-framework",
    title: {
      en: "Research Framework for Your Graduation Project",
      nl: "Onderzoeksraamwerk voor je Afstudeerproject",
    },
    summary: {
      en: "Structure your graduation project research using validated methods from DOT and Design Thinking.",
      nl: "Structureer het onderzoek van je afstudeerproject met bewezen methodes uit DOT en Design Thinking.",
    },
    sourceUrl: "https://ictresearchmethods.nl/",
    contentMarkdown: {
      en: `# Research Framework for Your Graduation Project

A graduation project is not just about building something — it's about producing a **defensible solution** based on **systematic research**. This article walks through a practical research framework that combines the ICT Research Methods (DOT framework) with HCD principles.

## What makes graduation research different?

In earlier semesters, you built things and learned by doing. In your graduation project:
- You must *justify* every major design and technical decision.
- You need to show that your solution is better than alternatives.
- Your process must be reproducible — someone else should be able to follow your steps.

## The DOT Framework

The Dutch ICT Research Methods (DOT) framework organises research strategies into five clusters:

| Strategy | Description | Example methods |
|---|---|---|
| **Library** | Use existing knowledge | Literature review, best practices, expert interviews |
| **Field** | Study the context | User interviews, observation, survey |
| **Workshop** | Generate with stakeholders | Brainstorm, co-creation, requirements workshop |
| **Lab** | Test in a controlled setting | Usability test, A/B test, performance benchmark |
| **Showroom** | Evaluate the product | Code review, accessibility audit, design critique |

A strong graduation project uses methods from **at least three strategies**.

## Structuring your research

### Research question hierarchy

\`\`\`
Main research question (1)
├── Sub-question 1 (Library: what does existing research say?)
├── Sub-question 2 (Field: what do users need?)
├── Sub-question 3 (Lab: which technical approach performs best?)
└── Sub-question 4 (Showroom: does the solution meet the requirements?)
\`\`\`

Each sub-question gets its own research method, data collection approach, and analysis strategy.

### Writing good research questions

A good research question is:
- **Focused** — answerable within your project scope.
- **Open** — starts with "How", "What", "Why", not "Is" or "Does".
- **Actionable** — the answer directly informs a design or technical decision.

| ❌ Weak | ✓ Strong |
|---|---|
| "Is React a good framework?" | "What are the performance trade-offs between React, Svelte, and Solid for a data-heavy dashboard?" |
| "Do users like the design?" | "Which navigation pattern reduces task completion time for users discovering articles for the first time?" |

## Evidence-based decisions

Every significant decision in your project should be traceable to evidence:

\`\`\`
Decision: "We chose to use a faceted search pattern for the filter component."

Evidence:
- Literature: Nielsen Norman Group research on faceted navigation shows 40% faster product discovery.
- Field: 4 out of 5 user interviews mentioned frustration with the current flat filter list.
- Lab: A/B test comparing flat list vs faceted: faceted reduced average task time by 28%.
\`\`\`

## Documentation as you go

Don't write the research report after the project — document throughout:
- Keep a **research journal** (weekly notes on what you learned and what changed).
- Save every **piece of evidence** (screenshots, transcripts, test recordings).
- Version-control your **design files** as well as your code.

## The graduation report structure

Typical structure for an ICT Media graduation report:

1. **Introduction** — context, problem statement, main research question.
2. **Context analysis** — who are the stakeholders, what already exists?
3. **Research methodology** — which DOT methods, and why?
4. **Research findings** — what did you learn from each method?
5. **Design / solution** — how do your findings translate to decisions?
6. **Validation** — does your solution work? Evidence?
7. **Conclusion** — answer the main research question.
8. **Reflection** — process quality, what would you do differently?
`,
      nl: `# Onderzoeksraamwerk voor je Afstudeerproject

Een afstudeerproject gaat niet alleen over bouwen — het gaat over het produceren van een **verdedigbare oplossing** op basis van **systematisch onderzoek**.

## Het DOT-raamwerk

| Strategie | Beschrijving | Voorbeeldmethoden |
|---|---|---|
| **Library** | Bestaande kennis gebruiken | Literatuuronderzoek, best practices, expertinterviews |
| **Field** | De context bestuderen | Gebruikersinterviews, observatie, enquête |
| **Workshop** | Genereren met stakeholders | Brainstorm, co-creatie |
| **Lab** | Testen in een gecontroleerde setting | Gebruikerstest, A/B-test, prestatiebenchmark |
| **Showroom** | Het product evalueren | Code review, toegankelijkheidsaudit, design critique |

Een sterk afstudeerproject gebruikt methoden uit **minstens drie strategieën**.

## Onderzoeksvragen structureren

\`\`\`
Hoofdonderzoeksvraag (1)
├── Deelvraag 1 (Library: wat zegt bestaand onderzoek?)
├── Deelvraag 2 (Field: wat hebben gebruikers nodig?)
├── Deelvraag 3 (Lab: welke technische aanpak presteert het best?)
└── Deelvraag 4 (Showroom: voldoet de oplossing aan de eisen?)
\`\`\`

## Structuur van het afstudeerverslag

1. **Inleiding** — context, probleemstelling, hoofdonderzoeksvraag.
2. **Contextanalyse** — wie zijn de stakeholders, wat bestaat er al?
3. **Onderzoeksmethodologie** — welke DOT-methoden, en waarom?
4. **Onderzoeksbevindingen** — wat heb je geleerd van elke methode?
5. **Ontwerp / oplossing** — hoe vertalen bevindingen zich naar beslissingen?
6. **Validatie** — werkt je oplossing? Bewijs?
7. **Conclusie** — beantwoord de hoofdonderzoeksvraag.
8. **Reflectie** — proceskwaliteit, wat zou je anders doen?
`,
    },
    units: ["FED", "DES", "IM", "PROG"],
    semesters: ["Semester 8"],
    tags: ["graduation", "research", "dot-framework", "methodology"],
    authorName: "Teacher Team",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-01",
    updatedAt: "2026-06-01",
  },

  {
    id: "30",
    slug: "pwa-service-workers-deep-dive",
    title: {
      en: "PWA & Service Workers: A Deep Dive",
      nl: "PWA & Service Workers: Een Diepgaande Uitleg",
    },
    summary: {
      en: "Build offline-capable, installable web apps using service workers and the Web App Manifest.",
      nl: "Bouw offline-capabele, installeerbare web-apps met service workers en het Web App Manifest.",
    },
    sourceUrl: "https://web.dev/learn/pwa",
    contentMarkdown: {
      en: `# PWA & Service Workers: A Deep Dive

A Progressive Web App (PWA) is a web app that uses modern browser APIs to deliver app-like experiences: offline access, push notifications, and home screen installation — all without an app store.

## The three pillars of a PWA

1. **HTTPS** — required for service workers and secure context APIs.
2. **Web App Manifest** — defines the app's name, icons, colours, and install behaviour.
3. **Service Worker** — a JavaScript file that runs in the background, intercepting network requests.

## Web App Manifest

\`\`\`json
{
  "name": "Recipe Book",
  "short_name": "Recipes",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#16a34a",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
\`\`\`

Link it from your HTML:
\`\`\`html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#16a34a">
\`\`\`

## Service Worker lifecycle

\`\`\`
Register → Install → Activate → Fetch (intercept requests)
\`\`\`

\`\`\`js
// Register from your main JS file
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}
\`\`\`

## Caching strategies

The power of a service worker is choosing *how* to respond to network requests.

### Cache First (great for static assets)

\`\`\`js
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(
      (cached) => cached ?? fetch(event.request)
    )
  );
});
\`\`\`

Return cached version if available; fall back to network.

### Network First (great for API data)

\`\`\`js
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open("api-cache").then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
\`\`\`

Try the network first; fall back to cache if offline.

### Stale While Revalidate (great for pages)

Return the cached version immediately, then update the cache in the background.

## Workbox — don't write service workers by hand

[Workbox](https://developer.chrome.com/docs/workbox/) is Google's library that wraps common caching strategies:

\`\`\`js
import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from "workbox-strategies";

// Static assets: cache first
registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({ cacheName: "images" })
);

// API: network first
registerRoute(
  ({ url }) => url.pathname.startsWith("/api/"),
  new NetworkFirst({ cacheName: "api" })
);
\`\`\`

## Background sync

Queue failed requests and replay them when connectivity is restored:

\`\`\`js
// In your app code
const registration = await navigator.serviceWorker.ready;
await registration.sync.register("sync-recipes");

// In sw.js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-recipes") {
    event.waitUntil(syncPendingRecipes());
  }
});
\`\`\`

## Testing your PWA

Use Chrome DevTools:
- **Application** tab → Manifest (check install criteria)
- **Application** tab → Service Workers (inspect, update, unregister)
- **Lighthouse** → PWA audit (score 100 = fully installable)

Use **Network** tab → throttle to "Offline" to test your fallback behaviour.

## PWA checklist

- [ ] HTTPS (required)
- [ ] Valid Web App Manifest with icons
- [ ] Service worker registered and active
- [ ] Offline fallback page
- [ ] \`start_url\` loads while offline
- [ ] Lighthouse PWA score ≥ 90
- [ ] \`display: standalone\` removes browser chrome when installed
`,
      nl: `# PWA & Service Workers: Een Diepgaande Uitleg

Een Progressive Web App (PWA) is een web-app die moderne browser-API's gebruikt voor app-achtige ervaringen: offline toegang, pushmeldingen en installatie op het startscherm.

## De drie pijlers van een PWA

1. **HTTPS** — vereist voor service workers.
2. **Web App Manifest** — definieert naam, iconen en installatiebehavior.
3. **Service Worker** — een JavaScript-bestand dat op de achtergrond draait.

## Web App Manifest

\`\`\`json
{
  "name": "Receptenboek",
  "short_name": "Recepten",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#16a34a",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" }
  ]
}
\`\`\`

## Cachingstrategieën

### Cache First (voor statische assets)
Retourneer gecachede versie als beschikbaar; val terug op netwerk.

### Network First (voor API-data)
Probeer eerst het netwerk; val terug op cache als offline.

### Stale While Revalidate (voor pagina's)
Retourneer de gecachede versie onmiddellijk, werk de cache op de achtergrond bij.

## PWA-checklist

- [ ] HTTPS (vereist)
- [ ] Geldig Web App Manifest met iconen
- [ ] Service worker geregistreerd en actief
- [ ] Offline fallback-pagina
- [ ] Lighthouse PWA-score ≥ 90
`,
    },
    units: ["FED", "PROG"],
    semesters: ["Semester 8"],
    tags: ["pwa", "service-worker", "offline", "javascript"],
    authorName: "Teacher Team",
    sourceType: "guide",
    status: "approved",
    createdAt: "2026-06-02",
    updatedAt: "2026-06-02",
  },

  // ─── OVERIGE BESTAANDE ARTIKELEN (completeness) ──────────────────────────────

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
    sourceUrl: "https://web.dev/learn/design",
    contentMarkdown: {
      en: `# Responsive CSS Foundations

Responsive web design means that a single codebase adapts to screens of all sizes — from a 320px phone to a 5K desktop display. It's not just a technique; it's the baseline expectation for every web project.

## The viewport meta tag

The first thing every responsive page needs:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1">
\`\`\`

Without this, mobile browsers render at desktop width and scale down, making text unreadably small.

## Fluid layouts with relative units

| Unit | Relative to | Use for |
|---|---|---|
| \`%\` | Parent element | Widths in flow layouts |
| \`em\` | Current element's font size | Component-level padding/spacing |
| \`rem\` | Root font size (typically 16px) | Typography, consistent spacing |
| \`vw\` / \`vh\` | Viewport width / height | Hero sections, full-screen layouts |
| \`ch\` | Width of the "0" character | Readable text widths |

\`\`\`css
/* Readable text column: never too narrow, never too wide */
.content {
  width: min(65ch, 100%);
  margin-inline: auto;
  padding-inline: 1rem;
}
\`\`\`

## Media queries

Media queries apply CSS rules conditionally based on device/viewport properties.

\`\`\`css
/* Mobile-first: start with mobile styles, enhance upward */

.grid {
  display: grid;
  grid-template-columns: 1fr;        /* single column on mobile */
  gap: 1rem;
}

@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
\`\`\`

### Why mobile-first?

Mobile-first means you start with the most constrained experience and layer on complexity. It tends to produce leaner, faster CSS and forces you to prioritise content.

## clamp() for fluid typography

\`\`\`css
/* Font size scales smoothly between 1rem and 1.5rem as viewport grows */
h1 {
  font-size: clamp(1.5rem, 2vw + 1rem, 3rem);
}
\`\`\`

- First value: minimum (never smaller).
- Middle value: preferred (scales with viewport).
- Last value: maximum (never larger).

## Logical properties

Use logical properties for international-friendly layouts (left-to-right *and* right-to-left scripts):

\`\`\`css
/* Instead of left/right, use start/end */
.card {
  padding-inline: 1.5rem;  /* left + right in LTR, right + left in RTL */
  margin-block: 2rem;       /* top + bottom */
}
\`\`\`

## Container Queries: the modern approach

Media queries respond to the viewport. Container Queries respond to the *component's container* — making truly portable components:

\`\`\`css
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
}
\`\`\`

The card switches to a horizontal layout when its container is wide enough — regardless of the viewport size.

## Testing responsive layouts

1. Chrome DevTools → Device toolbar (Cmd/Ctrl + Shift + M).
2. Test actual breakpoints, not just "popular" ones.
3. Test on a real device — DevTools emulation is not always accurate for touch, font rendering, and scroll behaviour.
`,
      nl: `# Basis van Responsive CSS

Responsive webdesign betekent dat één codebase zich aanpast aan schermen van alle formaten.

## De viewport meta-tag

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1">
\`\`\`

## Vloeiende lay-outs met relatieve eenheden

| Eenheid | Relatief aan | Gebruik voor |
|---|---|---|
| \`rem\` | Root-lettergrootte | Typografie, consistente spatiëring |
| \`vw\` / \`vh\` | Viewport-breedte / -hoogte | Hero-secties |
| \`ch\` | Breedte van het "0"-teken | Leesbare tekstbreedten |

## Media queries

\`\`\`css
/* Mobile-first: begin met mobielstylen, verbeter naar boven */
.grid { grid-template-columns: 1fr; }

@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
\`\`\`

## clamp() voor vloeiende typografie

\`\`\`css
h1 {
  font-size: clamp(1.5rem, 2vw + 1rem, 3rem);
}
\`\`\`

## Container Queries

\`\`\`css
.kaart-wrapper {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .kaart {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
}
\`\`\`

De kaart schakelt over naar een horizontale lay-out wanneer de container breed genoeg is — ongeacht de viewport-breedte.
`,
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
    sourceUrl: "https://www.nngroup.com/articles/user-interviews/",
    contentMarkdown: {
      en: `# UX Research Interview Guide

A user interview is one of the most valuable tools in UX research — and one of the most misused. This guide gives you a concrete, step-by-step process for planning, conducting, and analysing interviews as a student researcher.

## Step 1: Write a discussion guide

A discussion guide is not a list of questions to read out loud. It's a structured conversation framework.

**Structure:**

\`\`\`
1. Introduction (5 min)
   - Thank the participant.
   - Explain the session goal (understand behaviour, not test them).
   - Ask permission to record.
   - "There are no right or wrong answers."

2. Warm-up (5 min)
   - "Can you tell me a bit about what you study / work on?"
   - "How do you typically use technology in your daily routine?"

3. Core topics (20–30 min)
   - [Your topic-specific open questions]

4. Wrap-up (5 min)
   - "Is there anything we didn't cover that you think is important?"
   - "Do you have any questions for me?"
\`\`\`

## Step 2: Write good questions

| ❌ Avoid | ✓ Better | Why |
|---|---|---|
| "Do you use X?" | "Walk me through the last time you did X." | Behaviour, not preference |
| "Would you use this feature?" | "Tell me about a time you needed to do Y." | Avoid hypotheticals |
| "Don't you think X is hard?" | "What's been challenging about X for you?" | Avoid leading |
| "Why did you do that?" | "What was going through your mind when you did that?" | Less confrontational |

**The five whys:** when a participant gives a surface-level answer, follow up with "Why?" up to five times to get to the root motivation.

## Step 3: Recruit participants

For student projects, recruit from:
- Your own social network (but avoid friends who know your design).
- Fontys student communities or Discord servers.
- Relevant subreddits or Facebook groups (with moderator permission).

**Screener criteria:** write 2–3 criteria your ideal participant must meet. Exclude people who are too familiar with your topic (they'll give expert opinions, not user experiences).

## Step 4: Conduct the interview

**Setup:**
- Quiet space, no interruptions.
- Notebook ready for non-verbal observations.
- Recording tool ready (consent obtained).
- Facilitator and note-taker ideally separate roles.

**During the session:**
- Use silence — don't rush to fill pauses. Silence makes people elaborate.
- Follow tangents — the most interesting insights are often off-script.
- Avoid nodding too much — it suggests you're evaluating answers.
- Don't explain your design — you're here to listen, not pitch.

## Step 5: Analyse your notes

### Affinity mapping

1. After each interview, write one observation per note (digital: FigJam, Miro; physical: sticky notes).
2. After all interviews, spread all notes out.
3. Group related notes — without pre-defined categories.
4. Name each group with a sentence that captures the insight: "Users feel anxious when they can't undo an action."
5. Identify patterns across groups.

### Insight statement format

\`\`\`
[User type] [behaviour] because [underlying motivation/frustration].

Example:
"Students photograph grocery receipts instead of typing them because 
manual input feels tedious and error-prone on a small phone keyboard."
\`\`\`

## How many participants?

For qualitative research: **5–8 per user segment** is the practical standard for student projects. You'll start hearing the same themes repeat (saturation) around the fifth interview.
`,
      nl: `# UX Research Interviewgids

## Stap 1: Schrijf een discussiegids

\`\`\`
1. Introductie (5 min)
   - Bedank de deelnemer.
   - Leg het sessiedoel uit.
   - Vraag toestemming om op te nemen.

2. Opwarming (5 min)
   - "Kun je iets vertellen over wat je studeert?"

3. Kerntopics (20–30 min)

4. Afsluiting (5 min)
   - "Is er iets dat we niet besproken hebben?"
\`\`\`

## Stap 2: Goede vragen schrijven

| ❌ Vermijden | ✓ Beter |
|---|---|
| "Gebruik je X?" | "Beschrijf de laatste keer dat je X deed." |
| "Zou je deze functie gebruiken?" | "Vertel me over een keer dat je Y moest doen." |
| "Vind je X niet moeilijk?" | "Wat is uitdagend geweest aan X voor jou?" |

## Stap 5: Je aantekeningen analyseren

**Insight-statement formaat:**

\`\`\`
[Gebruikerstype] [gedrag] omdat [onderliggende motivatie/frustratie].
\`\`\`

## Hoeveel deelnemers?

**5–8 per gebruikerssegment** is de praktische standaard voor studentprojecten.
`,
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

  // ─── EXTERNE BRONNEN EN STUDENT-SOURCES (behouden) ───────────────────────────

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
    sourceUrl: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    contentMarkdown: {
      en: `# Student Source: CSS-Tricks Grid Guide

This resource was submitted by a student and links to the CSS-Tricks Complete Guide to Grid — one of the most comprehensive and widely recommended references for CSS Grid.

## Why this source is useful

- Covers every CSS Grid property with visual diagrams.
- Interactive examples you can edit in-browser.
- Regularly updated to reflect new browser support.

## URL

[https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)

## How to use it

Use this as a **reference** rather than a tutorial. When you're building a layout and need to recall what \`grid-auto-flow: dense\` does, look it up here. The diagrams make the abstract concrete.

## Highlights to bookmark

- The visual diagram of all \`grid-template-columns\` values.
- The explanation of \`auto-fill\` vs \`auto-fit\`.
- The "Fluid columns snippet" — one of the most useful Grid patterns.

> **Student tip:** open this alongside your own code editor and experiment with each property as you read about it.
`,
      nl: `# Studentenbron: CSS-Tricks Grid Guide

Deze bron werd ingediend door een student en verwijst naar de CSS-Tricks Complete Guide to Grid — een van de meest uitgebreide en aanbevolen referenties voor CSS Grid.

## URL

[https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Hoe te gebruiken

Gebruik dit als **naslagwerk**, niet als tutorial. Wanneer je een lay-out bouwt en moet weten wat \`grid-auto-flow: dense\` doet, zoek je het hier op.

> **Studenttip:** open dit naast je eigen code-editor en experimenteer met elke property terwijl je erover leest.
`,
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
    sourceUrl: "https://lawsofux.com/",
    contentMarkdown: {
      en: `# Student Source: Laws of UX

[lawsofux.com](https://lawsofux.com/) is a curated collection of psychological and design principles that every UX designer should know. Submitted by a student as a go-to reference during design critiques.

## What it covers

The site presents principles with clear explanations, examples, and origins. Key laws include:

**Hick's Law:** The time it takes to make a decision increases logarithmically with the number of options.
→ *Design implication:* reduce the number of choices in critical decision points (checkout, navigation, onboarding).

**Fitts's Law:** The time required to reach a target is a function of the target's size and distance.
→ *Design implication:* make clickable targets big enough and close to where users look.

**Jakob's Law:** Users spend most of their time on *other* websites, so they expect yours to work the same way.
→ *Design implication:* don't reinvent navigation or cart patterns — familiarity reduces friction.

**Miller's Law:** The average person can hold 7 ± 2 items in working memory.
→ *Design implication:* group items into chunks; don't show more than 5–9 navigation items.

**The Peak-End Rule:** People judge an experience based on how they felt at its peak and at the end.
→ *Design implication:* design for a great final confirmation screen, not just the form itself.

## URL

[https://lawsofux.com/](https://lawsofux.com/)

## How to use it in your work

1. At the start of a design critique, run through relevant laws and check whether your design addresses them.
2. Use the laws as *evidence* in design decisions: "We reduced the navigation to 6 items because of Miller's Law."
3. Include one or two laws in your portfolio case study to show that your design decisions are evidence-based.
`,
      nl: `# Studentenbron: Laws of UX

[lawsofux.com](https://lawsofux.com/) is een gecureerde verzameling psychologische en ontwerpprincipes die elke UX-ontwerper zou moeten kennen.

## Wat het behandelt

**Hick's Law:** De tijd die nodig is om een beslissing te nemen, neemt logaritmisch toe met het aantal opties.
→ *Ontwerpimplicatie:* verklein het aantal keuzes op kritieke beslissingsmomenten.

**Jakob's Law:** Gebruikers brengen het grootste deel van hun tijd door op *andere* websites, dus ze verwachten dat de jouwe hetzelfde werkt.
→ *Ontwerpimplicatie:* heruitvind navigatie- of winkelwagenpatronen niet.

**The Peak-End Rule:** Mensen beoordelen een ervaring op basis van hoe ze zich voelden op het hoogtepunt en aan het einde.
→ *Ontwerpimplicatie:* ontwerp voor een geweldig afsluitsscherm.

## URL

[https://lawsofux.com/](https://lawsofux.com/)

## Hoe het te gebruiken in je werk

Gebruik de wetten als *bewijs* in ontwerpbeslissingen: "We hebben de navigatie teruggebracht tot 6 items vanwege Miller's Law."
`,
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
    sourceUrl: "https://react.dev/learn/managing-state",
    contentMarkdown: {
      en: `# Video: React State Management

This video resource accompanies the React documentation on managing state and covers the foundational concepts needed for building interactive components.

## What the video covers

1. **Local state with \`useState\`** — simple counter, toggle, form input.
2. **Lifting state up** — why child components can't communicate directly, and how the parent acts as a single source of truth.
3. **Derived state** — computing values from existing state instead of creating redundant state variables.
4. **When to use \`useReducer\`** — complex state logic that involves multiple sub-values.

## Key concept: lifting state up

\`\`\`tsx
// ❌ Two sibling components each have their own count — can't sync
function ComponentA() { const [count, setCount] = useState(0); … }
function ComponentB() { const [count, setCount] = useState(0); … }

// ✓ Lift the state to the parent — both siblings share one source of truth
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ComponentA count={count} onIncrement={() => setCount(c => c + 1)} />
      <ComponentB count={count} />
    </>
  );
}
\`\`\`

## Key concept: derived state

\`\`\`tsx
// ❌ Redundant state: total is just a calculation of items
const [items, setItems]   = useState([]);
const [total, setTotal]   = useState(0); // ← this causes sync bugs

// ✓ Derive total from items — always in sync
const [items, setItems]   = useState([]);
const total = items.reduce((sum, item) => sum + item.price, 0);
\`\`\`

## When to use useReducer

If you have more than 3–4 related state values that change together, or if the next state depends on multiple previous values, \`useReducer\` is often cleaner than \`useState\`:

\`\`\`tsx
type State  = { items: Item[]; filter: string; sortBy: string };
type Action = { type: "SET_FILTER"; payload: string }
            | { type: "SET_SORT";   payload: string }
            | { type: "ADD_ITEM";   payload: Item };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FILTER": return { ...state, filter: action.payload };
    case "ADD_ITEM":   return { ...state, items: [...state.items, action.payload] };
    default:           return state;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

## Further reading

- [react.dev/learn/managing-state](https://react.dev/learn/managing-state)
- [react.dev/learn/lifting-state-up](https://react.dev/learn/lifting-state-up)
`,
      nl: `# Video: React State Management

## Wat de video behandelt

1. **Lokale state met \`useState\`** — eenvoudige teller, toggle, formulierveld.
2. **State omhoog tillen** — waarom childcomponenten niet direct communiceren en hoe de parent als één bron van waarheid fungeert.
3. **Afgeleide state** — waarden berekenen uit bestaande state in plaats van overbodige state-variabelen aanmaken.
4. **Wanneer \`useReducer\` gebruiken** — complexe state-logica.

## Kernconept: state omhoog tillen

\`\`\`tsx
// ✓ Til de state omhoog naar de parent — beide siblings delen één bron van waarheid
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ComponentA count={count} onIncrement={() => setCount(c => c + 1)} />
      <ComponentB count={count} />
    </>
  );
}
\`\`\`

## Kernconept: afgeleide state

\`\`\`tsx
// ✓ Leid het totaal af van items — altijd gesynchroniseerd
const [items, setItems] = useState([]);
const totaal = items.reduce((som, item) => som + item.prijs, 0);
\`\`\`
`,
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
    sourceUrl:
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility",
    contentMarkdown: {
      en: `# External Source: MDN Accessibility

MDN Web Docs is maintained by Mozilla and is one of the most reliable, comprehensive, and up-to-date references for web technologies. This curated section points to their Accessibility learning path.

## Why MDN for accessibility?

- Written and reviewed by browser engineers and accessibility specialists.
- Free, no account required.
- Covers both the *what* (WCAG criteria) and the *how* (code examples).

## Recommended reading order

1. [What is accessibility?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility) — motivation and scope.
2. [HTML: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML) — semantic elements, forms, tables.
3. [CSS and JavaScript accessibility best practices](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript) — visibility, focus, ARIA.
4. [WAI-ARIA basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) — when and how to use ARIA attributes.
5. [Accessible multimedia](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia) — video, audio, captions.

## URL

[https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility)

## How to use this with the course

- Use it as a **reference** when implementing accessible components.
- After building any form, check it against MDN's form accessibility checklist.
- Use the ARIA examples as starting points — don't copy blindly, understand each attribute.
`,
      nl: `# Externe Bron: MDN Accessibility

MDN Web Docs wordt onderhouden door Mozilla en is een van de meest betrouwbare, uitgebreide en actuele referenties voor webtechnologieën.

## Waarom MDN voor toegankelijkheid?

- Geschreven en beoordeeld door browseringenieurs en toegankelijkheidsspecialisten.
- Gratis, geen account vereist.
- Behandelt zowel het *wat* (WCAG-criteria) als het *hoe* (codevoorbeelden).

## Aanbevolen leesvolgorde

1. Wat is toegankelijkheid?
2. HTML als goede basis voor toegankelijkheid.
3. CSS- en JavaScript-best practices voor toegankelijkheid.
4. WAI-ARIA-basis.

## URL

[https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility)
`,
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
    sourceUrl: "https://nextjs.org/docs",
    contentMarkdown: {
      en: `# External Source: Vercel Next.js Docs

The official Next.js documentation at [nextjs.org/docs](https://nextjs.org/docs) is the authoritative reference for everything Next.js. It's written by the Next.js team at Vercel and kept up-to-date with every release.

## Why use the official docs?

Third-party tutorials quickly become outdated as Next.js releases new versions. The official docs always reflect the latest stable API, include migration guides, and link to codesandbox examples you can fork immediately.

## Key sections for students

| Section | What you'll find |
|---|---|
| [App Router](https://nextjs.org/docs/app) | Layouts, pages, loading, error boundaries |
| [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching) | fetch, caching, revalidation strategies |
| [Rendering](https://nextjs.org/docs/app/building-your-application/rendering) | Server vs Client Components explained |
| [Routing](https://nextjs.org/docs/app/building-your-application/routing) | Dynamic routes, parallel routes, intercepting routes |
| [Optimizing](https://nextjs.org/docs/app/building-your-application/optimizing) | Image, Font, Script optimisation |
| [Deploying](https://nextjs.org/docs/app/building-your-application/deploying) | Vercel, self-hosted, Docker |

## URL

[https://nextjs.org/docs](https://nextjs.org/docs)

## How to use it effectively

1. **Learn mode:** Work through the [official tutorial](https://nextjs.org/learn) before consulting the reference docs.
2. **Reference mode:** Use \`Cmd/Ctrl + K\` to search the docs while you're coding. It's faster than Google.
3. **API reference:** When a function behaves unexpectedly, check the API reference — behaviour often has subtle nuances that tutorials miss.
`,
      nl: `# Externe Bron: Vercel Next.js Docs

De officiële Next.js-documentatie op [nextjs.org/docs](https://nextjs.org/docs) is de gezaghebbende referentie voor alles omtrent Next.js.

## Belangrijke secties voor studenten

| Sectie | Wat je vindt |
|---|---|
| [App Router](https://nextjs.org/docs/app) | Layouts, pagina's, laden, foutgrenzen |
| [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching) | fetch, caching, revalidatiestrategieën |
| [Rendering](https://nextjs.org/docs/app/building-your-application/rendering) | Server vs Client Components uitgelegd |
| [Optimizing](https://nextjs.org/docs/app/building-your-application/optimizing) | Afbeelding, lettertype, scriptoptimalisatie |

## URL

[https://nextjs.org/docs](https://nextjs.org/docs)

## Hoe effectief te gebruiken

1. Werk eerst de [officiële tutorial](https://nextjs.org/learn) door.
2. Gebruik \`Cmd/Ctrl + K\` om tijdens het coderen in de docs te zoeken.
`,
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
];
