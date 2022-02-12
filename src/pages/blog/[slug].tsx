import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import type { PostFrontMatterType } from "@/types";
import { getAllPostsFrontmatter, getPostBySlug } from "@/utils/getPosts";
import BlogLayout from "@/layouts/BlogLayout";
import MDXComponents from "@/components/MDXComponents";

export default function Blog({
  mdxSource,
  frontmatter,
  next,
  prev,
}: {
  mdxSource: string;
  frontmatter: PostFrontMatterType;
  next: PostFrontMatterType;
  prev: PostFrontMatterType;
}) {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
  return (
    <BlogLayout postMeta={frontmatter} nextBlog={next} prevBlog={prev}>
      <Component components={{ ...MDXComponents }} />
    </BlogLayout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { mdxSource, frontmatter } = await getPostBySlug("blog", params.slug);

  const allPosts = await getAllPostsFrontmatter("blog");
  const blogIndex = allPosts.findIndex((blog) => blog.slug === params.slug);
  const prev = allPosts[blogIndex + 1] || null;
  const next = allPosts[blogIndex - 1] || null;

  if (mdxSource) {
    return { props: { mdxSource, frontmatter, prev, next } };
  } else {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  let blogs = await getAllPostsFrontmatter("blog");
  return {
    paths: blogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}
