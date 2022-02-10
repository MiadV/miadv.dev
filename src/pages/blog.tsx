import React from "react";
import Link from "next/link";
import MainLayout from "@/layouts/MainLayout";
import { getAllPostsFrontmatter } from "@/utils/getPosts";
import type { PostFrontMatterType } from "@/types";
import { widontString } from "../utils/widontString";

export default function Blog({
  allBlogsData,
}: {
  allBlogsData: PostFrontMatterType[];
}) {
  return (
    <>
      <header className="pb-8 sm:text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl">
          Blog
        </h1>
        <p className="text-lg">
          {widontString("My Personal Blog | Projects, Articles...")}
        </p>
      </header>

      <div className="relative mb-4 w-full">
        <input
          aria-label="Search articles"
          type="text"
          // onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <ul>
        {allBlogsData.map(({ slug, title, publishedAt, readTime }) => (
          <li key={slug}>
            {title}
            <br />
            <Link href={`/blog/${slug}`}>
              <a>{slug}</a>
            </Link>
            <br />
            {publishedAt} {` • `}
            {readTime.text}
          </li>
        ))}
      </ul>
    </>
  );
}

Blog.defaultProps = {
  layoutProps: {
    Layout: MainLayout,
    meta: {
      title: "My Personal Blog | Projects, Articles...",
    },
  },
};

export async function getStaticProps() {
  const allBlogsData = await getAllPostsFrontmatter("blog");
  return {
    props: {
      allBlogsData,
    },
  };
}
