import React from 'react';
import Image from 'next/image';
import { Card } from './Card';
import useTypingText from '@/hooks/useTypingText';
import { Button } from './Button';
import Link from 'next/link';
import ChevronRightIcon from '../Icons/ChevronRightIcon';

const Hero: React.FC = () => {
  const { typingText } = useTypingText(
    'Software Engineer, Front-end Developer, Web Developer',
    100,
    1000
  );
  return (
    <div className="relative bg-gray-100 pb-16 pt-16 dark:bg-gray-800">
      <div className="pointer-events-none relative z-10 mx-auto mt-16 max-w-screen-lg">
        <section
          id="hero"
          className="flex flex-col items-center justify-between px-6 sm:px-8 md:flex-row"
        >
          <h1>
            <span className="mb-4 inline-block text-4xl font-bold text-gray-900 dark:text-gray-50 md:text-5xl">
              {"Hi, I'm"} <span className="text-indigo-600">{'Miad'}</span>
            </span>
            <span className="text-3xl font-semibold leading-tight text-gray-900 dark:text-gray-50 md:text-4xl">
              <br /> I help SMEs improve <br /> their business
              <br /> using web technologies.
            </span>
          </h1>

          <div className="pointer-events-auto mt-8">
            <Link href={'#about'} passHref>
              <Button variant="outline">
                <span className="block">Scroll Down</span>
                <ChevronRightIcon className="rotate-90" />
              </Button>
            </Link>
          </div>

          <Card className="mt-8 h-[270px] w-[330px] rounded-2xl border border-slate-200 bg-white/80 p-6 text-center  shadow-xl backdrop-blur-lg dark:border-slate-700 dark:bg-slate-800/80 md:mt-0 md:w-[350px] lg:w-[400px]">
            <Image
              src="/static/images/miad-vosoughi.jpg"
              alt="Miad Vosoughi - MiadV"
              priority
              width={120}
              height={120}
              quality={100}
              className="block overflow-hidden rounded-full bg-gray-200"
            />
            <span className="mt-2 block text-lg font-semibold text-gray-900 dark:text-gray-50">
              Miad Vosoughi Nia
            </span>
            <span className="mt-2 block">{typingText}</span>
          </Card>
        </section>
      </div>

      <canvas
        id="animation_bg"
        className="absolute inset-0 h-full w-full"
      ></canvas>
    </div>
  );
};

export default Hero;
