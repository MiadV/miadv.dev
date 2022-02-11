import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import type { PostFrontMatterType } from "@/types";
import { getAllPostsFrontmatter, getPostBySlug } from "@/utils/getPosts";
import BlogLayout from "@/layouts/BlogLayout";
import MDXComponents from "@/components/MDXComponents";

export async function getStaticPaths() {
  let blogs = await getAllPostsFrontmatter("blog");
  return {
    paths: blogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export default function Blog({
  mdxSource,
  frontmatter,
}: {
  mdxSource: string;
  frontmatter: PostFrontMatterType;
}) {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
  return (
    <BlogLayout postMeta={frontmatter}>
      <Component components={{ ...MDXComponents }} />
    </BlogLayout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { mdxSource, frontmatter } = await getPostBySlug("blog", params.slug);

  if (mdxSource) {
    return { props: { mdxSource, frontmatter } };
  } else {
    return {
      notFound: true,
    };
  }
}
