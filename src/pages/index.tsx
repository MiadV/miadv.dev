import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Card } from '../components/Card';
import Image from 'next/image';
import { AboutMe } from '../components/AboutMe';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <div className="-mt-16 py-16 bg-gray-100">
          <div className="mt-16 max-w-screen-lg mx-auto">
            <section
              id="hero"
              className="px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center"
            >
              <h1>
                <span className="inline-block mb-4 text-gray-900 text-4xl md:text-5xl font-bold">
                  Hi, I am <span className="text-indigo-600">Miad</span>
                </span>
                <span className="text-3xl md:text-4xl font-semibold leading-tight">
                  <br /> I help SMEs improve <br /> their business
                  <br /> using web technologies.
                </span>
              </h1>

              <Card className="max-w-[400px] text-center mt-8 md:mt-0">
                <Image
                  src="/me.png"
                  alt="Miad Vosoughi - MiadV"
                  width={130}
                  height={130}
                  className="block bg-gray-200 rounded-full overflow-hidden"
                />
                <span className="block mt-2 text-gray-900 text-lg font-semibold">
                  Miad Vosoughi Nia
                </span>
                <span className="block mt-2 text-gray-700">
                  Self-taught Web Develoer | Front End Developer | React.js
                  Enthusiast
                </span>
              </Card>
            </section>
          </div>
        </div>
      </header>
      <main className="max-w-screen-lg mx-auto px-6 sm:px-8">
        <AboutMe />
      </main>
      <footer className="h-[500px]">footer</footer>
    </>
  );
}

Home.defaultProps = {
  layoutProps: {
    meta: {
      title: 'My Personal Blog | Projects, Articles...',
    },
  },
};
