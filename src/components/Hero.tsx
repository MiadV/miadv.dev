import React from 'react';
import Image from 'next/image';
import { Card } from './Card';
import useTypingText from '@/hooks/useTypingText';

const Hero: React.FC = () => {
  const { typingText } = useTypingText(
    'Web Developer, Front End Developer, React.js Enthusiast',
    100,
    1000
  );
  return (
    <div className="bg-gray-100 py-16 dark:bg-gray-800">
      <div className="mx-auto mt-16 max-w-screen-lg">
        <section
          id="hero"
          className="flex flex-col items-center justify-between px-6 sm:px-8 md:flex-row"
        >
          <h1>
            <span className="mb-4 inline-block text-4xl font-bold text-gray-900 dark:text-gray-50 md:text-5xl">
              Hi, I am <span className="text-indigo-600">Miad</span>
            </span>
            <span className="text-3xl font-semibold leading-tight text-gray-900 dark:text-gray-50 md:text-4xl">
              <br /> I help SMEs improve <br /> their business
              <br /> using web technologies.
            </span>
          </h1>

          <Card className="mt-8 h-[260px] w-[330px] text-center md:mt-0 md:w-[350px] lg:w-[400px]">
            <Image
              src="/me.png"
              alt="Miad Vosoughi - MiadV"
              width={110}
              height={110}
              className="block overflow-hidden rounded-full bg-gray-200"
            />
            <span className="mt-2 block text-lg font-semibold text-gray-900 dark:text-gray-50">
              Miad Vosoughi Nia
            </span>
            <span className="mt-2 block">{typingText}</span>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Hero;
