import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/Card";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";
import { LatestBlogs } from "@/components/LatestBlogs";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <div className="bg-gray-100 py-16">
          <div className="mx-auto mt-16 max-w-screen-lg">
            <section
              id="hero"
              className="flex flex-col items-center justify-between px-6 sm:px-8 md:flex-row"
            >
              <h1>
                <span className="mb-4 inline-block text-4xl font-bold text-gray-900 md:text-5xl">
                  Hi, I am <span className="text-indigo-600">Miad</span>
                </span>
                <span className="text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
                  <br /> I help SMEs improve <br /> their business
                  <br /> using web technologies.
                </span>
              </h1>

              <Card className="mt-8 max-w-[400px] text-center md:mt-0 md:max-w-[350px] lg:max-w-[400px]">
                <Image
                  src="/me.png"
                  alt="Miad Vosoughi - MiadV"
                  width={130}
                  height={130}
                  className="block overflow-hidden rounded-full bg-gray-200"
                />
                <span className="mt-2 block text-lg font-semibold text-gray-900">
                  Miad Vosoughi Nia
                </span>
                <span className="mt-2 block text-gray-700">
                  Self-taught Web Develoer | Front End Developer | React.js
                  Enthusiast
                </span>
              </Card>
            </section>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-screen-lg px-6 sm:px-8">
        <AboutMe />
        <Projects />
        <LatestBlogs />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}

Home.defaultProps = {
  layoutProps: {
    meta: {
      title: "My Personal Blog | Projects, Articles...",
    },
  },
};
