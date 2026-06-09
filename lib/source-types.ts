import { SourceType } from "@/types/content";

export type Language = "en" | "nl";

const sourceTypeNames: Record<SourceType, Record<Language, string>> = {
  guide: {
    en: "Guide",
    nl: "Handleiding",
  },
  article: {
    en: "Article",
    nl: "Artikel",
  },
  video: {
    en: "Video",
    nl: "Video",
  },
  "external-source": {
    en: "External source",
    nl: "Externe bron",
  },
  "student-source": {
    en: "Student source",
    nl: "Studentenbron",
  },
};

const sourceTypeIcons: Record<SourceType, string> = {
  guide: "📘",
  article: "📰",
  video: "🎥",
  "external-source": "🔗",
  "student-source": "🎓",
};

export function getSourceTypeName(sourceType: SourceType, language: Language) {
  return sourceTypeNames[sourceType][language];
}

export function getSourceTypeLabel(sourceType: SourceType, language: Language) {
  return `${sourceTypeIcons[sourceType]} ${getSourceTypeName(
    sourceType,
    language,
  )}`;
}
