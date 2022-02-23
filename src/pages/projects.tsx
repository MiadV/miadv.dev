import React from 'react';
import Image from 'next/image';
import { widontString } from '@/utils/widontString';
import SEO from '@/components/SEO';
import Container from '@/layouts/Container';
import Tag from '@/components/Tag';
import GithubIcon from '@/Icons/GithubIcon';
import YoutubeIcon from '@/Icons/YoutubeIcon';
import ExternalLinkIcon from '@/Icons/ExternalLinkIcon';

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
                <article className="group flex flex-col overflow-hidden rounded-2xl bg-gray-200 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:saturate-100 dark:bg-gray-500">
                  <Image
                    src={project.thumbnail}
                    alt="project screenshot"
                    width={1280}
                    height={720}
                    className="saturate-50 transition-all duration-300 group-hover:scale-[1.02] group-hover:saturate-100"
                  />
                  <footer className="relative space-y-2 bg-white p-3 dark:bg-slate-800">
                    <div className="flex space-x-2">
                      {project.youtube && (
                        <a
                          href={project.youtube}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="fill-gray-600 hover:fill-indigo-600 dark:fill-gray-400 dark:hover:fill-indigo-400"
                        >
                          <span className="sr-only">{`watch on youtube`}</span>
                          <YoutubeIcon />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="fill-gray-600 hover:fill-indigo-600 dark:fill-gray-400 dark:hover:fill-indigo-400"
                        >
                          <span className="sr-only">{`github repo`}</span>
                          <GithubIcon />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="fill-gray-600 hover:fill-indigo-600 dark:fill-gray-400 dark:hover:fill-indigo-400"
                        >
                          <span className="sr-only">{`live website`}</span>
                          <ExternalLinkIcon />
                        </a>
                      )}
                    </div>
                    <h3
                      className="text-sm font-semibold text-gray-900 dark:text-gray-50 md:text-base"
                      title={project.title}
                    >
                      {project.title}
                    </h3>

                    <div className="space-x-1">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
