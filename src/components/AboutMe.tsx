import React from "react";
import clsx from "clsx";
import WebDevIcon from "@/assets/Icons/WebDevIcon";
import GraphicDesignIcon from "@/assets/Icons/GraphicDesignIcon";
import ConsultationIcon from "@/assets/Icons/ConsultationIcon";
import { Button } from "./Button";
import { Card } from "./Card";

const FloatingItems: React.FC<{
  className?: string;
  Icon: JSX.Element;
  title: string;
  subtitle: string;
}> = ({ className, Icon, title, subtitle }) => {
  return (
    <Card className={clsx("px-4 py-6 text-center md:text-left", className)}>
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 md:mx-0">
        {Icon}
      </span>

      <span className="mt-6 block text-lg font-semibold">{title}</span>
      <p className="text-sm text-gray-700">{subtitle}</p>
    </Card>
  );
};

export const AboutMe = () => {
  return (
    <section id="about-me" className="py-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:max-w-sm lg:text-left">
          <h2 className="relative text-3xl font-semibold text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <span className="mx-auto mt-2 block h-1.5 w-[80px] rounded-full bg-indigo-600 lg:mx-0" />

          <p className="break-word mt-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in at
            habitant ultrices ac gravida. Arcu, adipiscing rhoncus a suspendisse
            maecenas et nibh arcu. Interdum in curabitur ac magna cras. Leo dui
            nulla fames elementum morbi eget etiam sed magnis.
          </p>

          <div className="mt-8">
            <Button>Download CV</Button>
          </div>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:mt-0 xl:-right-20">
          <span className="absolute inset-y-2/4 right-0 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-radial from-indigo-500/40 via-fuchsia-400/10 blur-2xl" />
          <FloatingItems
            Icon={<WebDevIcon className="fill-indigo-600" />}
            title="Web Development"
            subtitle="React, Javascript, Wordpress, woocommerce, Laravel ..."
          />
          <FloatingItems
            Icon={<GraphicDesignIcon className="fill-indigo-600" />}
            title="Graphic Design"
            subtitle="Adobe XD, Figma, Photoshop, Lightroom, Capture one ..."
            className="lg:relative lg:top-1/2"
          />
          <FloatingItems
            Icon={<ConsultationIcon className="fill-indigo-600" />}
            title="Consultation"
            subtitle="Help you make smarter decisions in your business ..."
          />
        </div>
      </div>
    </section>
  );
};
