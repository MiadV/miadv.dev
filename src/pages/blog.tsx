import React from "react";
import Link from "next/link";
import { getAllPostsFrontmatter } from "@/utils/getPosts";
import BlogLayout from "@/layouts/BlogLayout";
import { PostFrontMatterType } from "@/types";

export default function Blog({
  allBlogsData,
}: {
  allBlogsData: PostFrontMatterType[];
}) {
  return (
    <BlogLayout>
      <h2>Blog</h2>
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
    </BlogLayout>
  );
}

export async function getStaticProps() {
  const allBlogsData = await getAllPostsFrontmatter("blog");
  return {
    props: {
      allBlogsData,
    },
  };
}
