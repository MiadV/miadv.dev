import React from 'react';
import Image from 'next/image';
import { widontString } from '@/utils/widontString';
import SEO from '@/components/SEO';
import Container from '@/layouts/Container';
import Tag from '@/components/Tag';

const mockProjects = [
  {
    id: 1,
    title: 'Ecommerce Fashion Products Carousel With SwiperJs',
    tags: ['reactjs', 'nextjs', 'typescript'],
    thumbnail:
      '/static/images/projects/ecommerce-fashion-products-carousel/thumbnail.png',
    github: 'https://github.com/MiadV/ecommerce-fashion-products-carousel',
    youtube: 'https://youtube.com',
    live: 'https://test.com',
  },
  {
    id: 2,
    title: 'Ecommerce Fashion Products Carousel With SwiperJs',
    tags: ['reactjs', 'nextjs', 'typescript'],
    thumbnail:
      '/static/images/projects/ecommerce-fashion-products-carousel2/thumbnail.png',
    github: 'https://github.com/MiadV/ecommerce-fashion-products-carousel',
    live: 'https://test.com',
  },
];

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects – Miad Vosoughi"
        description="Some of my public / personal projects."
      />

      <Container>
        <div className="mx-auto w-full max-w-screen-sm">
          <div className="pb-8 sm:text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl">
              Projects
            </h1>
            <p className="mb-4 text-lg">
              {widontString('Some of my public / personal projects.')}
            </p>
          </div>
          <ul className="space-y-8">
            {mockProjects.map((project) => (
              <li key={project.id}>
                <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-200 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:saturate-100">
                  <div className="absolute top-2 left-2 z-10">actions</div>
                  <Image
                    src={project.thumbnail}
                    alt="project screenshot"
                    width={1280}
                    height={720}
                    className="saturate-50 transition-all duration-300 group-hover:scale-[1.02] group-hover:saturate-100"
                  />
                  <div className="bg-white p-3 dark:bg-slate-800">
                    <h3
                      className="text-sm font-semibold text-gray-900 dark:text-gray-50 md:text-base"
                      title={project.title}
                    >
                      {project.title}
                    </h3>
                    <div className="mt-2 space-x-1">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
