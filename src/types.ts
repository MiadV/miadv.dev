import type { ReadTimeResults } from 'reading-time';

export type PostType = 'blog';

export type PostFrontMatterType = {
  draft: boolean;
  title: string;
  publishedAt: string;
  modifiedAt?: string;
  summary: string;
  tags: string[];
  slug: string;
  image?: string;
  readTime: ReadTimeResults;
};
