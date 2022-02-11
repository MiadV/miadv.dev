import React from "react";
import type { PostFrontMatterType } from "@/types";
import Container from "./Container";
import { widontString } from "../utils/widontString";
import { format, parseISO } from "date-fns";

const BlogLayout: React.FC<{ postMeta: PostFrontMatterType }> = ({
  children,
  postMeta,
}) => {
  return (
    <Container>
      <article className="prose prose-slate mx-auto max-w-3xl prose-a:font-semibold prose-a:text-indigo-600 dark:prose-invert prose-a:dark:text-indigo-400">
        <time dateTime={postMeta.publishedAt}>
          {format(parseISO(postMeta.publishedAt), "MMMM dd, yyyy")}
        </time>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50  sm:text-4xl">
          {widontString(postMeta.title)}
        </h1>
        <div className="mt-8">{children}</div>
      </article>
    </Container>
  );
};
export default BlogLayout;
