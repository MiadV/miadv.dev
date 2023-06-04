import React, { ReactElement } from 'react';
import Image from 'next/image';
import { widontString } from '@/utils/widontString';
import SEO from '@/components/SEO';
import Container from '@/layouts/Container';
import { Button } from '@/components/Button';
import Tag from '@/components/Tag';
import GithubIcon from '@/Icons/GithubIcon';
import YoutubeIcon from '@/Icons/YoutubeIcon';
import ExternalLinkIcon from '@/Icons/ExternalLinkIcon';
import projectsList from '@/data/projects';

let reversedList = projectsList.reverse();

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects – Miad Vosoughi"
        description="Some of my public / personal projects."
      />

      <div className="mx-auto w-full max-w-screen-sm">
        <div className="space-y-4 pb-8 sm:text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl">
            Projects
          </h1>
          <p className="text-lg">
            {widontString('Some of my public / personal projects.')}
            <span className="block text-sm text-gray-400">
              you may check out github for a more up to date list
            </span>
          </p>
          <div>
            <Button
              as="a"
              isExternal
              href="https://github.com/miadv"
              variant="outline"
            >
              View on Github
            </Button>
          </div>
        </div>
        <ul className="space-y-8">
          {reversedList.map((project) => (
            <li key={project.id}>
              <article className="group flex flex-col overflow-hidden rounded-2xl border-slate-200 bg-gray-200 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:saturate-100 dark:border-slate-700 dark:bg-gray-500">
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
                        title="watch on youtube"
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
                        title="view on github"
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
                        title="live website"
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
                  <a className="inline-block" href={project.github}>
                    <h3
                      className="text-sm font-semibold text-gray-900 dark:text-gray-50 md:text-base"
                      title={project.title}
                    >
                      {project.title}
                    </h3>
                  </a>

                  <div className="space-x-1">
                    {project.tags.map((tag) => (
                      <Tag key={tag} size="sm">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Container>{page}</Container>;
};
