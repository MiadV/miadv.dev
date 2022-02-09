import { bundleMDX } from "mdx-bundler";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeCodeMetaAttribute } from "./rehypeCodeMetaAttribute";
import { h } from "hastscript";
import type { PostFrontMatterType, PostType } from "@/types";

const root = path.join(process.cwd(), "/src");

export async function getPostBySlug(postType: PostType, slug: string) {
  const pathPrefix = path.join(root, "posts", postType);
  const files = fs.readdirSync(pathPrefix);
  const file = files.find((f) => f.replace(/\.mdx$/, "") === slug);

  if (!file) return Promise.reject("no files found");

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      root,
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      root,
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const { code, frontmatter } = await bundleMDX({
    file: path.join(root, "posts", postType, file),
    cwd: root,
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeCodeMetaAttribute,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
            properties: {
              class: "",
            },
            content() {
              return [h("span.icon.icon-link", { ariaHidden: "true" })];
            },
          },
        ],
        [rehypePrismPlus, { ignoreMissing: true }],
      ];
      return options;
    },
  });

  return {
    mdxSource: code,
    frontmatter,
  };
}

export async function getAllPostsFrontmatter(
  postType: PostType
): Promise<PostFrontMatterType[]> {
  const pathPrefix = path.join(root, "posts", postType);
  const files = fs.readdirSync(pathPrefix);

  let allFrontMatter: any = [];

  files.forEach((file) => {
    // Remove Unexpected Files
    if (path.extname(file) !== ".md" && path.extname(file) !== ".mdx") {
      return;
    }

    const fullPath = path.join(pathPrefix, file);
    const { data: frontmatter } = matter.read(fullPath);

    const fileName = file.replace(/\.mdx$/, "");

    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: fileName,
      });
    }
  });

  // @ts-ignore
  return allFrontMatter.sort(({ publishedAt: a }, { publishedAt: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
