export type ContentStatus = "draft" | "pending" | "approved" | "archived";

export type SourceType =
  | "guide"
  | "article"
  | "video"
  | "external-source"
  | "student-source";

export type EducationalUnit = "FED" | "IM" | "DES" | "PROG" | "GENERAL";

export type LocalizedText = {
  en: string;
  nl: string;
};

export type Article = {
  id: string;
  slug: string;

  title: LocalizedText;
  summary: LocalizedText;
  contentMarkdown: LocalizedText;

  units: EducationalUnit[];
  semesters: string[];
  tags: string[];

  authorName: string;
  sourceUrl: string;
  sourceType: SourceType;
  status: ContentStatus;
  url?: string;

  createdAt: string;
  updatedAt: string;
};
