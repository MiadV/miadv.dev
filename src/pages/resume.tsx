import React, { ReactElement } from 'react';
import Image from 'next/image';
import SEO from '@/components/SEO';
import Container from '@/layouts/Container';
import { Card } from '../components/Card';
import Tag from '../components/Tag';

export default function Resume() {
  return (
    <>
      <SEO
        title="Resume, CV – Miad Vosoughi"
        description="Resume, CV – Miad Vosoughi"
      />

      <div className="flex-1 lg:grid lg:grid-cols-[250px_1fr] lg:gap-6 xl:grid-cols-[250px_1fr_250px]">
        <div className="sticky top-[100px] mb-12 hidden h-[100px] lg:block">
          <span className="mt-2 block text-lg font-semibold text-gray-900 dark:text-gray-50">
            Miad Vosoughi Nia
          </span>
          <span className="text-xs font-medium italic">
            Software Engineer, Frontend Developer, Web Developer
          </span>
        </div>

        <article className="mx-auto max-w-screen-sm">
          <div>
            <section id="about-me">
              <div className="mb-2 text-center lg:text-left">
                <Image
                  src="/static/images/miad-vosoughi.jpg"
                  alt="Miad Vosoughi - MiadV"
                  priority
                  width={120}
                  height={120}
                  quality={100}
                  className="block overflow-hidden rounded-full bg-gray-200"
                />

                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-50">
                  <span>Miad Vosoughi Nia</span>
                  <span className="block text-base font-medium italic text-gray-500 dark:text-gray-400">
                    Software Engineer
                  </span>
                </h1>
              </div>

              <p className="pt-6 text-base">
                Software Engineer with a focus on frontend. Passionate about
                creating responsive, performant, and user-friendly web
                applications using modern web development tools and continuously
                learning and exploring new technologies to stay up-to-date with
                the latest industry trends. Throughout my career, I have
                experienced working on a variety of projects, including
                eCommerce, static websites, and full-stack web applications and
                I am always excited to take on new challenges.
              </p>
            </section>

            <section id="about-me" className="mt-10">
              <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-50 lg:text-left">
                Work Experience
              </h2>
              <span className="mx-auto mt-2 block h-1.5 w-[80px] rounded-full bg-indigo-600 lg:mx-0" />
              <div className="mt-6 space-y-4">
                <Card>
                  <div className="flex flex-col justify-between md:flex-row">
                    <div className="flex flex-col items-center md:flex-row">
                      <Image
                        src="/static/images/cv/fave.jpg"
                        alt="Fave Sdn bhd"
                        priority
                        width={44}
                        height={44}
                        quality={100}
                        className="block overflow-hidden rounded-xl bg-gray-200"
                      />
                      <div className="mt-4 text-center md:ml-4 md:mt-0 md:text-left">
                        <span className="block text-lg font-bold">
                          Fave Sdn. Bhd.
                        </span>

                        <span className="block text-sm font-semibold">
                          Software Engineer • Full-time
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-center gap-4 md:mt-0 md:flex-col md:gap-0">
                      <span className="mb-1 block text-xs font-semibold">
                        Aug 2022 - Present
                      </span>
                      <span className="mb-1 block text-xs ">
                        Kuala Lumpur, Malaysia
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 text-sm">
                    <ul>
                      <li>
                        Led the complete revamp of the storefront utilizing
                        technologies such as React and Next.js.
                      </li>
                      <li>
                        Created proof-of-concepts and researched innovative
                        methods to enhance frontend applications, resulting in
                        improved user experiences and better SEO.
                      </li>
                      <li>
                        Collaborated closely with product managers and product
                        designers to assess the feasibility of designs and
                        proposed new features, in order to increased customer
                        satisfaction.
                      </li>
                      <li>
                        Provided training and mentorship to junior frontend
                        developers, resulting in improved team productivity and
                        skill development.
                      </li>
                      <li>
                        Worked closely with backend developers to ensure
                        seamless integration of frontend and backend systems,
                        resulting in a more eficient and reliable platform.
                      </li>
                      <li>
                        Utilized performance optimization techniques such as
                        lazy loading and code splitting to improve website load
                        times and increase user retention.
                      </li>
                      <li>
                        Developed and currently maintain multiple frontend
                        repositories, ensuring the scalability and functionality
                        of each application.
                      </li>
                    </ul>
                  </div>

                  <div id="projects"></div>

                  <div id="tags" className="mt-4 flex flex-wrap gap-2">
                    <Tag size="sm">Typescript</Tag>
                    <Tag size="sm">javascript</Tag>
                    <Tag size="sm">React</Tag>
                    <Tag size="sm">nextjs</Tag>
                    <Tag size="sm">tailwindcss</Tag>
                    <Tag size="sm">Postcss</Tag>
                    <Tag size="sm">aws</Tag>
                    <Tag size="sm">amplify</Tag>
                    <Tag size="sm">vite</Tag>
                    <Tag size="sm">github</Tag>
                    <Tag size="sm">webpack</Tag>
                    <Tag size="sm">react-query</Tag>
                    <Tag size="sm">swr</Tag>
                  </div>
                </Card>
              </div>
            </section>
          </div>
        </article>

        <aside className="sticky top-[100px] hidden max-h-[100px] w-full bg-red-300 xl:block">
          sidebars
        </aside>
      </div>
    </>
  );
}

Resume.getLayout = function getLayout(page: ReactElement) {
  return <Container className="max-w-screen-xl">{page}</Container>;
};
