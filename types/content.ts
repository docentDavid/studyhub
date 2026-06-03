export type ContentStatus = "draft" | "pending" | "approved" | "archived";

export type SourceType =
  | "guide"
  | "article"
  | "video"
  | "external-source"
  | "student-source";

export type EducationalUnit = "FED" | "IM" | "DES" | "PROG" | "GENERAL";

export type Article = {
  id: string;
  slug: string;

  title: string;
  summary: string;
  contentMarkdown: string;

  units: EducationalUnit[];
  semesters: string[];
  tags: string[];

  authorName: string;

  sourceType: SourceType;
  status: ContentStatus;

  url?: string;

  createdAt: string;
  updatedAt: string;
};
