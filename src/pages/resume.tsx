import React, { ReactElement } from 'react';
import Image from 'next/image';
import SEO from '@/components/SEO';
import Container from '@/layouts/Container';
import EmailIcon from '@/Icons/EmailIcon';
import LinkedinIcon from '@/Icons/LinkedinIcon';
import YoutubeIcon from '@/Icons/YoutubeIcon';
import GithubIcon from '@/Icons/GithubIcon';
import ExperienceCard from '@/components/resume/ExperienceCard';
import EducationCard from '@/components/resume/EducationCard';
import SkillsCard from '@/components/resume/SkillsCard';
import StickyTOC from '@/components/resume/TOC';
import useSticky from '@/hooks/useSticky';

const socialLinks = [
  {
    lable: 'email address',
    Icon: <EmailIcon />,
    href: 'mailto:miadv.biz@gmail.com',
  },
  {
    lable: 'github profile',
    Icon: <GithubIcon />,
    href: 'https://github.com/miadv',
  },
  {
    lable: 'linkedin profile',
    Icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/in/miad-vosoughi/',
  },

  {
    lable: 'youtube',
    Icon: <YoutubeIcon />,
    href: 'https://www.youtube.com/c/MiadVosoughi/',
  },
];

const skills = {
  'Main Skills': ['JavaScript', 'TypeScript', 'React', 'Nextjs'],
  'Frontend Tooling': [
    'Vite',
    'Webpack',
    'Parcel',
    'Postcss',
    'npm',
    'pnpm',
    'Yarn',
  ],
  Other: [
    'git',
    'github',
    'github-actions',
    'linting',
    'aws-amplify',
    'Vercel',
  ],
};

export default function Resume() {
  const showBackToTop = useSticky(250);
  return (
    <>
      <SEO
        title="Resume, CV – Miad Vosoughi"
        description="Resume, CV – Miad Vosoughi"
      />

      <div className="flex-1 lg:grid lg:grid-cols-[250px_1fr] lg:gap-6 xl:grid-cols-[250px_1fr_250px] xl:gap-10">
        <aside className="sticky top-[100px] mb-12 hidden h-[100px] lg:block">
          <Image
            src="/static/images/miad-vosoughi.jpg"
            alt="Miad Vosoughi - MiadV"
            priority
            width={100}
            height={100}
            quality={100}
            className="block overflow-hidden rounded-xl border bg-gray-200"
          />

          <span className="text-md mt-4 block font-semibold text-gray-900 dark:text-gray-50">
            Miad Vosoughi Nia
          </span>
          <span className="text-xs font-medium italic">
            Software Engineer, Frontend Developer, Web Developer
          </span>

          <ul className="mt-4 flex items-center space-x-2">
            {socialLinks.map((link) => (
              <li key={link.lable}>
                <a
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="fill-gray-600 hover:fill-indigo-600 dark:fill-gray-400 dark:hover:fill-indigo-400"
                >
                  <span className="sr-only">{link.lable}</span>
                  {link.Icon}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <article className="mx-auto max-w-screen-sm">
          <div>
            <section id="summary" className="scroll-mt-16">
              <div className="mb-2 text-center lg:text-left">
                <Image
                  src="/static/images/miad-vosoughi.jpg"
                  alt="Miad Vosoughi - MiadV"
                  priority
                  width={120}
                  height={120}
                  quality={100}
                  className="mx-auto block overflow-hidden rounded-full bg-gray-200 lg:hidden"
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

            <section id="work-experience" className="mt-10 scroll-mt-16">
              <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-50 lg:text-left">
                <a className="anchor" href="#work-experience">
                  Work Experience
                </a>
              </h2>
              <span className="mx-auto mt-2 block h-1.5 w-[80px] rounded-full bg-indigo-600 lg:mx-0" />
              <div className="mt-6 space-y-8">
                <ExperienceCard
                  company={'Fave Sdn. Bhd.'}
                  logo={'/static/images/cv/fave.jpg'}
                  role={'Software Engineer • Full-time'}
                  timePeriod={'Aug 2022 - Present'}
                  location={'Kuala Lumpur, Malaysia'}
                  carouselItems={[]}
                  tags={[
                    'Typescript',
                    'javascript',
                    'React',
                    'nextjs',
                    'tailwindcss',
                    'Postcss',
                    'vite',
                    'webpack',
                    'react-query',
                    'swr',
                    'github',
                    'aws',
                    'amplify',
                  ]}
                >
                  <div className="prose prose-sm prose-slate dark:prose-invert">
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
                </ExperienceCard>

                <ExperienceCard
                  company={'TBG Sdn. Bhd.'}
                  logo={'/static/images/cv/tamay.jpg'}
                  role={'Web Developer • Contract'}
                  timePeriod={'Dec 2017 - May 2022'}
                  location={'Kuala Lumpur, Malaysia'}
                  carouselItems={[
                    {
                      id: 1,
                      alt: 'TAMAY Group Landing Page',
                      img: '/static/images/projects/tamay-group-landing-page.png',
                      href: 'https://tamaygroup.com',
                    },
                    {
                      id: 2,
                      alt: 'Store Management App',
                      img: '/static/images/projects/store-management.png',
                      href: 'https://github.com/MiadV/store-management',
                    },
                    {
                      id: 3,
                      alt: 'GilasCo Landing Page',
                      img: '/static/images/projects/gilasco-landing-page.png',
                      href: 'https://gilasco.com/',
                    },
                  ]}
                  tags={[
                    'PHP',
                    'Typescript',
                    'javascript',
                    'Laravel',
                    'React',
                    'React-Native',
                    'react-query',
                    'nextjs',
                    'Chakra-UI',
                    'HTML',
                    'css',
                    'jquery',
                    'github',
                    'webpack',
                    'Wordpress',
                  ]}
                >
                  <div className="prose prose-sm prose-slate dark:prose-invert">
                    <ul>
                      <li>
                        Developed and maintained a customized multi-store sales
                        and expense management system using React.js, Chakra-UI,
                        Typescript, Laravel.
                      </li>
                      <li>
                        Developed a customized multi-level referral dropshipper
                        management system using React.js, Chakra-UI, Typescript,
                        Laravel.
                      </li>
                      <li>
                        Developed and implemented membership system using
                        React-js, PHP backend, and React Native mobile app.
                      </li>
                      <li>Managed social media marketing campaigns (SMM).</li>
                    </ul>
                  </div>
                </ExperienceCard>

                <ExperienceCard
                  company={'FLTZ Logic Sdn. Bhd.'}
                  logo={'/static/images/cv/fltz_logic.jpg'}
                  role={'Web Developer • Full-time'}
                  timePeriod={'Dec 2017 - May 2020'}
                  location={'Kuala Lumpur, Malaysia'}
                  carouselItems={[]}
                  tags={[
                    'PHP',
                    'HTML',
                    'css',
                    'jquery',
                    'bootstrap',
                    'Wordpress',
                    'WooCommerce',
                  ]}
                >
                  <div className="prose prose-sm prose-slate dark:prose-invert">
                    <ul>
                      <li>
                        Designed and maintained several static and e-commerce
                        websites.
                      </li>
                    </ul>
                  </div>
                </ExperienceCard>

                <ExperienceCard
                  company={'Science & Technology Park'}
                  logo={'/static/images/cv/Hormozgan_STP.jpg'}
                  role={'Web Developer • Full-time'}
                  timePeriod={'Mar 2016 - May 2017'}
                  location={'Hormozgan, Iran'}
                  carouselItems={[]}
                  tags={['PHP', 'PrestaShop', 'HTML', 'css']}
                >
                  <div className="prose prose-sm prose-slate dark:prose-invert">
                    <ul>
                      <li>
                        Worked closely with investors to grow a newly lunched
                        startup.
                      </li>
                      <li>
                        Integrated several analytic tools to help scale the
                        project faster.
                      </li>
                      <li>
                        Developed customized plugins to better engage with
                        customers and maximize customer retention.
                      </li>
                    </ul>
                  </div>
                </ExperienceCard>
              </div>
            </section>

            <section id="education" className="mt-14 scroll-mt-16">
              <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-50 lg:text-left">
                <a className="anchor" href="#education">
                  Education
                </a>
              </h2>
              <span className="mx-auto mt-2 block h-1.5 w-[80px] rounded-full bg-indigo-600 lg:mx-0" />
              <div className="mt-6 space-y-8">
                <EducationCard
                  uni="Science And Research Branch of Fars University"
                  field="BS, Chemical Engineering"
                  location="Fars, Iran"
                  timePeriod="2011 - 2014"
                />
              </div>
            </section>

            <section id="skills" className="mt-14 scroll-mt-16">
              <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-50 lg:text-left">
                <a className="anchor" href="#education">
                  Skills
                </a>
              </h2>
              <span className="mx-auto mt-2 block h-1.5 w-[80px] rounded-full bg-indigo-600 lg:mx-0" />

              <div className="mt-6 space-y-4">
                {Object.keys(skills).map((k) => (
                  <SkillsCard
                    key={k}
                    title={k}
                    skills={skills[k as keyof typeof skills]}
                  />
                ))}
              </div>
            </section>
          </div>
        </article>
        <StickyTOC
          className="sticky top-[100px] hidden max-h-[100px] w-full xl:block"
          showBackToTop={showBackToTop}
          toc={{
            summary: { label: 'Summary' },
            'work-experience': { label: 'Experience' },
            education: { label: 'Education' },
            skills: { label: 'Skills' },
          }}
        />
      </div>
    </>
  );
}

Resume.getLayout = function getLayout(page: ReactElement) {
  return <Container className="max-w-screen-xl">{page}</Container>;
};
