import React, { useState, useMemo, ReactElement } from 'react';
import debounce from 'lodash.debounce';
import type { InferGetStaticPropsType } from 'next';
import { getAllPostsFrontmatter } from '@/utils/getPosts';
import { widontString } from '@/utils/widontString';
import Container from '@/layouts/Container';
import Input from '@/components/Input';
import SearchIcon from '@/Icons/SearchIcon';
import { BlogListItem } from '@/components/BlogListItem';
import SEO from '@/components/SEO';

export default function Blog({
  allBlogsSorted,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = allBlogsSorted.filter((blog) => {
    const searchContent = blog.title + blog.summary + blog.tags.join(' ');
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const onChangeDebounced = useMemo(
    () => debounce((e) => setSearchValue(e.target.value), 500),
    []
  );

  return (
    <>
      <SEO
        title="Blog – Miad Vosoughi"
        description="My Personal Blogs, Snippets, Articles about web development, front-end, javscript, react-js."
      />
      <div className="mx-auto w-full max-w-screen-sm">
        <div className="pb-8">
          <div className="sm:text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl">
              Blog
            </h1>
            <p className="mb-4 text-lg">
              {widontString('My Personal Blogs, Snippets, Articles...')}
            </p>
          </div>
          <Input
            onChange={onChangeDebounced}
            type="text"
            placeholder="Search articles"
            aria-label="search for articles"
            icon={<SearchIcon className="absolute right-3 top-2.5 h-5 w-5" />}
          />
        </div>
        <ul className="space-y-8">
          {filteredBlogPosts.map((blogItem) => (
            <li key={blogItem.slug}>
              <BlogListItem blogItem={blogItem} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Container>{page}</Container>;
};

export async function getStaticProps() {
  const allFrontMatter = await getAllPostsFrontmatter('blog');

  const allBlogsSorted = allFrontMatter.sort(
    ({ publishedAt: a }, { publishedAt: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    }
  );
  return {
    props: {
      allBlogsSorted,
    },
  };
}
