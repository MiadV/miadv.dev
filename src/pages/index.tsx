import React from "react";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { ContactMe } from "@/components/ContactMe";
import { LatestBlogs } from "@/components/LatestBlogs";
import Hero from "@/components/Hero";
import { getAllPostsFrontmatter } from "@/utils/getPosts";
import type { PostFrontMatterType } from "@/types";

const Home: React.FC<{ latestBlogs: PostFrontMatterType[] }> = ({
  latestBlogs,
}) => {
  return (
    <>
      <Hero />
      <main className="max-w-screen-lg px-6 sm:px-8 lg:mx-auto xl:px-12">
        <AboutMe />
        <Projects />
        <LatestBlogs latestBlogs={latestBlogs} />
        <ContactMe />
      </main>
    </>
  );
};
// Home.defaultProps = {
//   layoutProps: {
//     meta: {
//       title: "My Personal Blog | Projects, Articles...",
//     },
//   },
// };

export default Home;

export async function getStaticProps() {
  const allFrontMatter = await getAllPostsFrontmatter("blog");

  const latestBlogs = allFrontMatter
    .sort(({ publishedAt: a }, { publishedAt: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, 4);

  return {
    props: {
      latestBlogs,
    },
  };
}
