import type { ReadTimeResults } from "reading-time";

export type PostType = "blog";

export type PostFrontMatterType = {
  draft: boolean;
  title: string;
  publishedAt: string;
  excerpt: string;
  tags: string[];
  image?: string;
  slug?: string;
  readTime: ReadTimeResults;
};
