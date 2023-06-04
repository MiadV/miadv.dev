import React, { ReactNode } from 'react';
import Image from 'next/image';
import { A11y, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tag from '@/components/Tag';
import CollapsibleSection from '@/components/resume/CollapsibleSection';

type ExperienceCardProps = {
  company: string;
  logo: string;
  role: string;
  timePeriod: string;
  location: string;
  children: ReactNode;
  carouselItems: { id: number; alt: string; img: string; href?: string }[];
  tags: string[];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  children,
  company,
  logo,
  role,
  timePeriod,
  location,
  carouselItems = [],
  tags = [],
}) => {
  return (
    <div className="">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex flex-col items-center md:flex-row">
          <Image
            src={logo}
            alt={company}
            priority
            width={44}
            height={44}
            quality={100}
            className="block overflow-hidden rounded-xl border bg-gray-200"
          />
          <div className="mt-4 text-center md:ml-4 md:mt-0 md:text-left">
            <span className="block text-lg font-bold">{company}</span>

            <span className="block text-sm font-semibold">{role}</span>
          </div>
        </div>
        <div className="mt-2 flex justify-center gap-4 md:mt-0 md:flex-col md:gap-0">
          <span className="mb-1 block text-xs font-semibold">{timePeriod}</span>
          <span className="mb-1 block text-xs ">{location}</span>
        </div>
      </div>
      <CollapsibleSection className="mt-6">{children}</CollapsibleSection>

      {carouselItems.length > 0 && (
        <div id="work-experience__carousel" className="relative mt-4">
          <Swiper
            // !p-6 to fix box-shadow cropping caused by overflow:hidden
            className="!py-6"
            modules={[A11y, Mousewheel, Pagination]}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-item',
              bulletActiveClass: 'swiper-pagination-item-active',
            }}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
            }}
          >
            <ul>
              {carouselItems.map(({ id, alt, img, href }) => (
                <SwiperSlide key={id}>
                  <li>
                    <a href={href} target="_blank">
                      <article className="group flex flex-col overflow-hidden rounded-xl border-slate-200 bg-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:saturate-100 dark:border-slate-700 dark:bg-gray-500">
                        <Image
                          src={img}
                          alt={alt}
                          width={1280}
                          height={720}
                          className="saturate-50 transition-all duration-300 group-hover:scale-[1.02] group-hover:saturate-100"
                        />
                      </article>
                    </a>
                  </li>
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        </div>
      )}

      {tags.length > 0 && (
        <div id="tags" className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} size="sm">
              {tag}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
