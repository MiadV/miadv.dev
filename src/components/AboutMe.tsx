import { WebDevIcon } from '@/assets/Icons/webDevIcon';
import React from 'react';
import { Card } from './Card';

export const AboutMe = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16">
        <div className="text-center lg:text-left mx-auto lg:mx-0 lg:w-1/2 max-w-md">
          <h2 className="relative text-gray-900 dark:text-gray-100 text-3xl md:text-4xl font-semibold">
            About Me
          </h2>
          <span className="block mx-auto lg:mx-0 mt-2 h-1.5 w-[80px] rounded-full bg-indigo-600" />

          <p className="mt-6 text-lg break-word">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in at
            habitant ultrices ac gravida. Arcu, adipiscing rhoncus a suspendisse
            maecenas et nibh arcu. Interdum in curabitur ac magna cras. Leo dui
            nulla fames elementum morbi eget etiam sed magnis.
          </p>
        </div>

        <div className="relative mt-16 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-10 xl:-right-20">
          <span className="absolute -z-10 -translate-y-1/2 inset-y-2/4 right-0 w-96 h-96 rounded-full bg-gradient-radial from-indigo-500/40 via-fuchsia-400/10 blur-2xl" />
          <Card className="text-center md:text-left px-4 py-6">
            <span className="mx-auto md:mx-0 flex justify-center items-center w-20 h-20 rounded-full bg-indigo-50">
              <WebDevIcon className="stroke-indigo-600" />
            </span>

            <span className="mt-6 block text-lg font-semibold">
              Web Development
            </span>
            <p className="text-sm text-gray-700">
              React, Javascript, Wordpress, woocommerce, Laravel ...
            </p>
          </Card>
          <Card className="text-center md:text-left px-4 py-6 lg:relative lg:top-1/2">
            <span className="mx-auto md:mx-0 flex justify-center items-center w-20 h-20 rounded-full bg-indigo-50">
              <WebDevIcon className="stroke-indigo-600" />
            </span>

            <span className="mt-6 block text-lg font-semibold">
              Graphic Design
            </span>
            <p className="text-sm text-gray-700">
              Adobe XD, Figma, Photoshop, Lightroom, Capture one ...
            </p>
          </Card>
          <Card className="text-center md:text-left px-4 py-6">
            <span className="mx-auto md:mx-0 flex justify-center items-center w-20 h-20 rounded-full bg-indigo-50">
              <WebDevIcon className="stroke-indigo-600" />
            </span>

            <span className="mt-6 block text-lg font-semibold">
              Consultation
            </span>
            <p className="text-sm text-gray-700">
              Help you make smarter decisions in your business ...
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
