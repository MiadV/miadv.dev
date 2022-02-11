import React from "react";
import { format, parseISO } from "date-fns";
import type { PostFrontMatterType } from "@/types";
import Container from "./Container";
import { widontString } from "../utils/widontString";
import { Card } from "@/components/Card";

const editUrl = (slug: string) =>
  `https://github.com/miadv/miadv.dev/edit/main/posts/blog/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://miadv.dev/blog/${slug}`
  )}`;

const BlogLayout: React.FC<{ postMeta: PostFrontMatterType }> = ({
  children,
  postMeta,
}) => {
  return (
    <Container>
      <article className="prose prose-slate mx-auto prose-a:font-semibold prose-a:text-indigo-600 dark:prose-invert prose-a:dark:text-indigo-400">
        <header>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            {widontString(postMeta.title)}
          </h1>
          <span className="block text-sm font-medium text-gray-500">
            <time dateTime={postMeta.publishedAt}>
              {format(parseISO(postMeta.publishedAt), "MMMM dd, yyyy")}
            </time>
            {" • "}
            {postMeta.readTime.text}
          </span>
        </header>

        <div className="mt-4">{children}</div>
        <footer className="not-prose mt-8 space-y-4">
          <div className="text-sm font-medium">
            <a
              href={discussUrl(postMeta.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-indigo-600 dark:hover:text-indigo-500"
            >
              {"Discuss on Twitter"}
            </a>
            {` • `}
            <a
              href={editUrl(postMeta.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-indigo-600 dark:hover:text-indigo-500"
            >
              {"Edit on GitHub"}
            </a>
          </div>
          <Card>Subscribe</Card>
        </footer>
      </article>
    </Container>
  );
};
export default BlogLayout;
