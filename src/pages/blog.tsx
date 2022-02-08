import { getSortedBlogsData } from "@/utils/getSortedBlogsData";
import BlogLayout from "@/layouts/BlogLayout";
import { BlogItemType } from "@/types";
import Link from "next/link";

export async function getStaticProps() {
  const allBlogsData = getSortedBlogsData();
  return {
    props: {
      allBlogsData,
    },
  };
}

export default function Blog({
  allBlogsData,
}: {
  allBlogsData: BlogItemType[];
}) {
  return (
    <BlogLayout>
      <h2>Blog</h2>
      <ul>
        {allBlogsData.map(({ slug, meta: { title, publishedAt } }) => (
          <li key={slug}>
            {title}
            <br />
            <Link href={`blog/${slug}`}>
              <a>{slug}</a>
            </Link>
            <br />
            {publishedAt}
          </li>
        ))}
      </ul>
    </BlogLayout>
  );
}
