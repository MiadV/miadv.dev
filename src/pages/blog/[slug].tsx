import React, { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import type { PostFrontMatterType } from '@/types';
import { getAllPostsFrontmatter, getPostBySlug } from '@/utils/getPosts';
import BlogLayout from '@/layouts/BlogLayout';
import MDXComponents from '@/components/MDXComponents';
import SEO from '@/components/SEO';

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
    <>
      <SEO
        type="article"
        title={`${frontmatter.title} – Miad Vosoughi`}
        description={frontmatter.summary}
        image={frontmatter.image}
        publishTime={new Date(frontmatter.publishedAt).toISOString()}
        modifiedTime={new Date(
          frontmatter.modifiedAt ?? frontmatter.publishedAt
        ).toISOString()}
        tags={frontmatter.tags}
      />
      <BlogLayout postMeta={frontmatter} nextBlog={next} prevBlog={prev}>
        <Component components={{ ...MDXComponents } as any} />
      </BlogLayout>
    </>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { mdxSource, frontmatter } = await getPostBySlug('blog', params.slug);

  const allPosts = await getAllPostsFrontmatter('blog');
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
  let blogs = await getAllPostsFrontmatter('blog');
  return {
    paths: blogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}
