import React from "react";
import Image from "next/image";
import { Button } from "./Button";

export const Projects = () => {
  return (
    <section id="projects" className="relative py-16">
      <span className="absolute inset-2/4 -z-10 h-[500px] max-h-full w-[500px] max-w-full -translate-y-1/2 -translate-x-1/2 rounded-full bg-gradient-radial from-indigo-500/40 via-fuchsia-400/20 blur-2xl" />
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="mx-auto max-w-md text-center lg:order-2 lg:mx-0 lg:ml-16 lg:max-w-sm lg:text-left">
          <h2 className="relative text-3xl font-semibold text-gray-900 dark:text-gray-50">
            Projects
          </h2>
          <span className="mx-auto mt-2 block h-1.5 w-[80px] rounded-full bg-indigo-600 lg:mx-0" />

          <p className="mt-6 break-words text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in at
            habitant ultrices ac gravida. Arcu, adipiscing rhoncus a suspendisse
            maecenas et nibh arcu. Interdum in curabitur ac magna cras.
          </p>

          <div className="mt-8">
            <Button as="a" href="https://github.com/miadv" isExternal>
              View on Github
            </Button>
          </div>
        </div>
        <div className="relative mx-auto mt-16 grid max-w-xl grid-cols-2 gap-6 md:gap-8 lg:order-1">
          <div className="row-span-2 rounded-2xl bg-gray-200 shadow-xl">
            <Image
              src="/a"
              alt="Miad Vosoughi - MiadV"
              width={250}
              height={300}
            />
          </div>
          <div className="row-span-1 rounded-2xl bg-gray-200 shadow-xl">
            <Image
              src="/a"
              alt="Miad Vosoughi - MiadV"
              width={250}
              height={200}
            />
          </div>
          <div className="row-span-2 rounded-2xl bg-gray-200 shadow-xl">
            <Image
              src="/a"
              alt="Miad Vosoughi - MiadV"
              width={250}
              height={300}
            />
          </div>
          <div className="row-span-1 rounded-2xl bg-gray-200 shadow-xl">
            <Image
              src="/a"
              alt="Miad Vosoughi - MiadV"
              width={250}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
