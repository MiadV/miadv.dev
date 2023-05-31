import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import useTypingText from '@/hooks/useTypingText';

import ChevronDoubleDownIcon from '@/Icons/ChevronDoubleDownIcon';
import Script from 'next/script';

const Hero: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(false);

  // const { typingText } = useTypingText(
  //   'Software Engineer, Front-end Developer, Web Developer',
  //   100,
  //   1000
  // );

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  const [state, setState] = useState(0);
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`/static/script/fluid-simulation.js`}
      />
      <div className="relative h-[80vh] bg-gray-100 pb-16 pt-4 dark:bg-gray-800 md:h-auto md:pt-16">
        <div className="pointer-events-none relative z-10 mx-auto mt-16 max-w-screen-lg ">
          <section
            id="hero"
            className="flex flex-col items-center justify-between px-6 sm:px-8 md:flex-row"
          >
            <h1 className="hidden md:block">
              <span className="mb-4 inline-block text-3xl font-bold text-gray-900 dark:text-gray-50 md:text-5xl">
                {"Hi, I'm"} <span className="text-indigo-600">{'Miad'}</span>
              </span>
              <span className="text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-50 md:text-4xl">
                <br /> I help SMEs improve <br /> their business
                <br /> using web technologies.
              </span>
            </h1>

            <div className="mt-8 min-h-[260px] rounded-2xl border-slate-200 text-center md:w-[350px] md:border md:bg-white/80 md:p-6 md:shadow-xl md:backdrop-blur-lg md:dark:border-slate-700 md:dark:bg-slate-800/80 lg:w-[400px]">
              <Image
                src="/static/images/miad-vosoughi.jpg"
                alt="Miad Vosoughi - MiadV"
                width={120}
                height={120}
                quality={100}
                className="mx-auto block overflow-hidden rounded-full bg-gray-200"
              />
              <span className="mt-2 block text-lg font-semibold text-gray-900 dark:text-gray-50">
                Miad Vosoughi Nia
              </span>
              {/* <span className="mt-2 block">{typingText}</span> */}
            </div>
          </section>

          <div className="mt-8 flex justify-center md:mt-16">
            <a
              href={'#about'}
              className="pointer-events-auto inline-flex flex-col items-center justify-center"
            >
              <span className="block text-sm">Scroll Down</span>
              <ChevronDoubleDownIcon className="mt-2 h-4 w-4 animate-bounce" />
            </a>

            <button
              className="pointer-events-auto inline-flex flex-col items-center justify-center"
              onClick={() => {
                setState(state + 1);
              }}
            >
              re-render {renderCount.current}
            </button>
          </div>
        </div>

        {shouldRender && (
          <canvas
            key={renderCount.current + ' '}
            id="fluid_canvas"
            className="absolute inset-0 h-full w-full"
          ></canvas>
        )}
      </div>
    </>
  );
};

export default Hero;
