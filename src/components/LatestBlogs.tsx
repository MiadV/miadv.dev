import React from "react";
import Link from "next/link";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";
import { Button } from "./Button";
import ChevronRightIcon from "@/assets/Icons/ChevronRightIcon";
import FeatherIcon from "@/assets/Icons/FeatherIcon";
import { widontString } from "@/utils/widontString";

const latesBlogs = [
  {
    title: "first blog test test",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero.",
    link: "/#",
    date: "2021-04-12T19:45:00.0Z",
  },
  {
    title: "first blog test test",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero.",
    link: "/#",
    date: "2021-04-12T19:45:00.0Z",
  },
  {
    title: "first blog test test",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero.",
    link: "/#",
    date: "2021-04-12T19:45:00.0Z",
  },
];

export const LatestBlogs = () => {
  return (
    <section id="latest-blogs" className="relative py-16">
      <h2 className="relative text-center text-3xl font-semibold text-gray-900 dark:text-gray-50">
        Latest Blogs
      </h2>
      <span className="mx-auto mt-2 mb-8 block h-1.5 w-[80px] rounded-full bg-indigo-600" />

      <div id="latest-blogs__carousel" className="!-m-8">
        <Swiper
          className="!p-8" // !p-8 to fix box-shadow cropping due to overflow:hidden
          modules={[Mousewheel, Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-item",
            bulletActiveClass: "swiper-pagination-item-active",
          }}
          spaceBetween={46}
          slidesPerView={1}
          breakpoints={{
            "640": {
              slidesPerView: 2,
            },
          }}
        >
          {latesBlogs.map((blog, i) => (
            <SwiperSlide key={i}>
              <BlogSliderItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

function BlogSliderItem() {
  return (
    <Card>
      <article>
        <div className="flex items-center">
          <div>
            <Link href="/#">
              <a>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                  {widontString(" Blog Title sample text hire I am")}
                </h3>
              </a>
            </Link>
            <span className="text-xs font-medium text-gray-500">
              July 7, 2022 • 10 min read
            </span>
          </div>
          <span className="ml-auto basis-[70px]">
            <FeatherIcon className="h-[70px] w-[70px] fill-gray-200 dark:fill-gray-600" />
          </span>
        </div>
        <p className="prose my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet
          consectetur adipisicing elit.
        </p>
        <Link href="/#" passHref>
          <Button as="a" variant="ghost" size="sm">
            Read More
            <ChevronRightIcon className="ml-2 h-5 w-5 fill-indigo-500" />
          </Button>
        </Link>
      </article>
    </Card>
  );
}
