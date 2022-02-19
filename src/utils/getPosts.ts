import { bundleMDX } from 'mdx-bundler';
import fs from 'fs';
import readingTime from 'reading-time';
import matter from 'gray-matter';
import path from 'path';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeCodeMetaAttribute } from './rehypeCodeMetaAttribute';
import type { PostFrontMatterType, PostType } from '@/types';

const root = path.join(process.cwd(), '/src');

export async function getPostBySlug(postType: PostType, slug: string) {
  const pathPrefix = path.join(root, 'posts', postType);
  const files = fs.readdirSync(pathPrefix);
  const file = files.find((f) => f.replace(/\.mdx$/, '') === slug);

  if (!file) return Promise.reject('no files found');

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      root,
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      root,
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

  const { code, frontmatter } = await bundleMDX({
    file: path.join(root, 'posts', postType, file),
    cwd: path.join(root, 'components'),
    esbuildOptions(options) {
      options.minify = false;
      options.target = ['es2020'];
      return options;
    },
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeCodeMetaAttribute,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: 'anchor',
            },
          },
        ],
        [rehypePrismPlus, { ignoreMissing: true }],
      ];
      return options;
    },
  });

  const readTime = readingTime(code);
  return {
    mdxSource: code,
    frontmatter: {
      ...frontmatter,
      tags: frontmatter.tags
        ? frontmatter.tags.map((tag: string) => tag.split(' ').join('-'))
        : [],
      readTime,
      slug,
    },
  };
}

export async function getAllPostsFrontmatter(
  postType: PostType
): Promise<PostFrontMatterType[]> {
  const pathPrefix = path.join(root, 'posts', postType);
  const files = fs.readdirSync(pathPrefix);

  let allFrontMatter: any = [];

  files.forEach((file) => {
    // Remove Unexpected Files
    if (path.extname(file) !== '.md' && path.extname(file) !== '.mdx') {
      return;
    }

    const fullPath = path.join(pathPrefix, file);
    const { data: frontmatter, content } = matter.read(fullPath);

    const readTime = readingTime(content);
    const fileName = file.replace(/\.mdx$/, '');

    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        tags: frontmatter.tags
          ? frontmatter.tags.map((tag: string) => tag.split(' ').join('-'))
          : [],
        slug: fileName,
        readTime: readTime,
      });
    }
  });

  return allFrontMatter;
}
