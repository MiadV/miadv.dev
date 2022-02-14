import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import type { PostFrontMatterType } from "@/types";
import Container from "./Container";
import { widontString } from "@/utils/widontString";
import SubscribeCard from "@/components/SubscribeCard";
import Tag from "@/components/Tag";

const editUrl = (slug: string) =>
  `https://github.com/miadv/miadv.dev/edit/main/posts/blog/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://miadv.dev/blog/${slug}`
  )}`;

const BlogLayout: React.FC<{
  postMeta: PostFrontMatterType;
  nextBlog: PostFrontMatterType;
  prevBlog: PostFrontMatterType;
}> = ({ children, postMeta, prevBlog, nextBlog }) => {
  return (
    <Container>
      <article className="prose prose-slate mx-auto prose-a:font-semibold prose-a:text-indigo-600 dark:prose-invert prose-a:dark:text-indigo-400">
        <header className="not-prose">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            {widontString(postMeta.title)}
          </h1>

          <div className="mt-6 flex flex-col xs:flex-row xs:items-center">
            <div className="flex items-center">
              <Image
                alt="Miad Vosoughi Nia"
                height={25}
                width={25}
                src="/avatar.jpg"
                className="overflow-hidden rounded-full bg-gray-400"
              />
              <div className="ml-2">
                <a
                  href="https://twitter.com/Miad_Vosoughi"
                  className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                >
                  @Miad_Vosoughi
                </a>
              </div>
            </div>
            <span className="mt-2 block text-sm font-medium text-gray-500 dark:text-gray-400 xs:ml-auto xs:mt-0">
              <time dateTime={postMeta.publishedAt}>
                {format(parseISO(postMeta.publishedAt), "MMMM dd, yyyy")}
              </time>
              {" • "}
              {postMeta.readTime.text}
            </span>
          </div>
        </header>

        <div className="mt-6">{children}</div>
        <footer className="not-prose mt-8">
          <div className="mt-8 border-y border-slate-200 py-4 text-sm font-medium dark:border-slate-700">
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

          <div className="mt-4 space-x-2 space-y-2">
            {postMeta.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="my-8">
            <SubscribeCard />
          </div>

          <nav className="mt-8 flex flex-col justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            {(nextBlog || prevBlog) && (
              <>
                <div className="md:w-1/2">
                  {prevBlog && (
                    <>
                      <span className="mb-2 block text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {"← "} Previous Article
                      </span>
                      <div>
                        <Link href={`/blog/${prevBlog.slug}`}>
                          <a className="font-medium capitalize text-indigo-600 hover:underline dark:text-indigo-400">
                            {prevBlog.title}
                          </a>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
                <div className="md:w-1/2">
                  {nextBlog && (
                    <div className="md:flex md:flex-col">
                      <span className="mb-2 block text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 md:text-right">
                        Next Article {" →"}
                      </span>
                      <div className="ml-auto">
                        <Link href={`/blog/${nextBlog.slug}`}>
                          <a className="font-medium capitalize text-indigo-600 hover:underline dark:text-indigo-400">
                            {nextBlog.title}
                          </a>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </nav>
        </footer>
      </article>
    </Container>
  );
};
export default BlogLayout;
