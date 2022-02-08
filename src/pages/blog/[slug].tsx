import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import BlogLayout from "@/layouts/BlogLayout";
import { getSortedBlogsData } from "@/utils/getSortedBlogsData";
import { BlogItemType } from "@/types";

let blogs = getSortedBlogsData();

export async function getStaticPaths() {
  return {
    paths: blogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const blog = blogs.find((post) => post.slug === params.slug);

  let mdxSource;
  if (blog) {
    mdxSource = await serialize(blog?.content, { scope: blog.meta });
  } else {
    return {
      notFound: true,
    };
  }

  return { props: { blog, mdxSource } };
}

export default function Blog({
  blog,
  mdxSource,
}: {
  blog: BlogItemType;
  mdxSource: any;
}) {
  return (
    <BlogLayout>
      <h2>{blog.slug}</h2>
      <MDXRemote {...mdxSource} />
    </BlogLayout>
  );
}
