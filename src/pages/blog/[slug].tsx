import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPostsFrontmatter, getPostBySlug } from "@/utils/getPosts";
import BlogLayout from "@/layouts/BlogLayout";
import Pre from "@/components/Pre";
import type { PostFrontMatterType } from "@/types";

export async function getStaticPaths() {
  let blogs = await getAllPostsFrontmatter("blog");
  return {
    paths: blogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
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

export default function Blog({
  mdxSource,
  frontmatter,
}: {
  mdxSource: string;
  frontmatter: PostFrontMatterType;
}) {
  const Component = React.useMemo(
    () => getMDXComponent(mdxSource),
    [mdxSource]
  );
  return (
    <BlogLayout>
      <h2>{frontmatter.title}</h2>
      <Component
        components={{
          pre: (props) => <Pre {...props} />,
        }}
      />
    </BlogLayout>
  );
}
