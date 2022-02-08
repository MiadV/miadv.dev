import { getSortedBlogsData } from "@/utils/getSortedBlogsData";
import BlogLayout from "@/layouts/BlogLayout";

export async function getStaticProps() {
  const allBlogsData = getSortedBlogsData();
  return {
    props: {
      allBlogsData,
    },
  };
}

export default function Blog({ allBlogsData }) {
  return (
    <BlogLayout>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}

      <h2>Blog</h2>
      <ul>
        {allBlogsData.map(({ slug, publishedAt, title }) => (
          <li key={slug}>
            {title}
            <br />
            {slug}
            <br />
            {publishedAt}
          </li>
        ))}
      </ul>
    </BlogLayout>
  );
}
