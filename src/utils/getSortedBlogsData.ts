import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogMetaType } from "@/types";

const blogsDirectory = path.join(process.cwd(), "src/data/blogs");

export function getSortedBlogsData() {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(blogsDirectory, fileName);
    const matterResult = matter.read(fullPath);

    return {
      meta: { ...(matterResult.data as BlogMetaType) },
      slug,
      content: matterResult.content,
    };
  });

  // Sort posts by date
  return allBlogsData.sort(
    ({ meta: { publishedAt: a } }, { meta: { publishedAt: b } }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    }
  );
}
