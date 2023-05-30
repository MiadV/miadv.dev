import React from 'react';
import Script from 'next/script';
import type { InferGetStaticPropsType } from 'next';
import { getAllPostsFrontmatter } from '@/utils/getPosts';
import { AboutMe } from '@/components/AboutMe';
import { Projects } from '@/components/Projects';
import { ContactMe } from '@/components/ContactMe';
import { LatestBlogs } from '@/components/LatestBlogs';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';

export default function Home({
  latestBlogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`/static/script/fluid-simulation.js`}
      />
      <SEO />
      <header>
        <Navbar />
      </header>
      <Hero />
      <main className="mx-auto max-w-screen-lg px-6 sm:px-8 xl:px-12">
        <AboutMe />
        <Projects />
        <LatestBlogs latestBlogs={latestBlogs} />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allFrontMatter = await getAllPostsFrontmatter('blog');

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
