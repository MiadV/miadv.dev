export type LayoutProps = {
  meta?: {
    title: string;
    description: string;
  };
  Layout: React.ElementType;
};

export type BlogMetaType = {
  title: string;
  publishedAt: string;
  excerpt: string;
  image?: string;
  tags?: string[];
};

export type BlogItemType = {
  meta: BlogMetaType;
  slug: string;
  /**
   * the input string, with matter stripped.
   */
  content: string;
};
