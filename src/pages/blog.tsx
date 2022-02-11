import React, { useState, useMemo } from "react";
import { format, parseISO } from "date-fns";
import debounce from "lodash.debounce";
import Link from "next/link";
import type { InferGetStaticPropsType } from "next";
import { getAllPostsFrontmatter } from "@/utils/getPosts";
import { widontString } from "@/utils/widontString";
import Container from "@/layouts/Container";
import SearchInput from "@/components/SearchInput";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import ChevronRightIcon from "@/Icons/ChevronRightIcon";

export default function Blog({
  allBlogsSorted,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = allBlogsSorted.filter((blog) => {
    const searchContent = blog.title + blog.excerpt + blog.tags.join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const onChangeDebounced = useMemo(
    () => debounce((e) => setSearchValue(e.target.value), 500),
    []
  );

  return (
    <Container>
      <div className="mx-auto w-full max-w-screen-sm">
        <div className="pb-8">
          <div className="sm:text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl">
              Blog
            </h1>
            <p className="mb-4 text-lg">
              {widontString("My Personal Blog | Projects, Articles...")}
            </p>
          </div>
          <SearchInput onChange={onChangeDebounced} />
        </div>
        <ul className="space-y-8">
          {filteredBlogPosts.map((blogItem) => (
            <li key={blogItem.slug}>
              <Card className="flex h-full flex-col justify-between">
                <div className="flex items-center">
                  <div>
                    <Link href={`/blog/${blogItem.slug!}`}>
                      <a>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                          {widontString(blogItem.title)}
                        </h3>
                      </a>
                    </Link>
                    <div className="mt-2 text-xs font-medium text-gray-500">
                      <time dateTime={blogItem.publishedAt}>
                        {" "}
                        {format(
                          parseISO(blogItem.publishedAt),
                          "MMMM dd, yyyy"
                        )}
                      </time>
                      {" • "}
                      {blogItem.readTime.text}
                    </div>
                  </div>
                </div>
                <p className="mt-4">{blogItem.excerpt}</p>
                <div className="mt-4">
                  <Link href={`/blog/${blogItem.slug!}`} passHref>
                    <Button as="a" variant="ghost" size="sm">
                      Read More
                      <ChevronRightIcon className="ml-2 h-5 w-5 fill-indigo-500" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const allFrontMatter = await getAllPostsFrontmatter("blog");

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
