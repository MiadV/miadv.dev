import React from "react";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import type { PostFrontMatterType } from "@/types";
import ChevronRightIcon from "@/Icons/ChevronRightIcon";
import { Button } from "./Button";
import { Card } from "./Card";
import { widontString } from "@/utils/widontString";

export const BlogListItem: React.FC<{ blogItem: PostFrontMatterType }> = ({
  blogItem,
}) => {
  return (
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
              {format(parseISO(blogItem.publishedAt), "MMMM dd, yyyy")}
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
  );
};
