export type LayoutProps = {
  meta?: {
    title: string;
    description: string;
  };
  Layout: React.ElementType;
};

export type PostType = "blog";

export type PostFrontMatterType = {
  draft: boolean;
  title: string;
  publishedAt: string;
  excerpt: string;
  image?: string;
  tags?: string[];
  slug?: string;
};
