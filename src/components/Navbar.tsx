import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import GithubIcon from "@/assets/Icons/GithubIcon";
import Logo from "@/assets/Logo";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/",
  },
  {
    title: "Projects",
    path: "/",
  },
  {
    title: "Blog",
    path: "/",
  },
  {
    title: "Contact",
    path: "/",
  },
];

export const Navbar = () => {
  const [isStiky, setIsSticky] = useState(false);

  useEffect(() => {
    let offset = 50;
    function onScroll() {
      if (!isStiky && window.scrollY > offset) {
        setIsSticky(true);
      } else if (isStiky && window.scrollY <= offset) {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isStiky]);

  return (
    <div
      id="navbar"
      className={clsx(
        "fixed inset-x-0 top-0 z-40 h-16 transition-colors duration-300",
        isStiky
          ? "border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-screen-2xl py-4 px-4 md:px-8">
        <div className="relative flex items-center">
          <Link href="/">
            <a className="flex-none">
              <span className="sr-only">MiadV personal blog</span>
              <Logo />
            </a>
          </Link>

          <div className="relative ml-auto hidden items-center lg:flex">
            <nav className="font-semibold leading-6 text-gray-900 dark:text-gray-200">
              <ul className="flex space-x-10">
                {navItems.map((item) => (
                  <li className="relative" key={item.title}>
                    <Link href={item.path}>
                      <a className="peer transition-all duration-150 hover:text-indigo-500">
                        {item.title}
                      </a>
                    </Link>
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-indigo-500 transition-all duration-150 peer-hover:scale-x-100" />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-6 flex items-center border-l border-gray-200 pl-6 dark:border-gray-800">
              <ThemeToggle panelClassName="mt-8" />
              <a
                href="https://github.com/miadv"
                rel="noopener noreferrer"
                target="_blank"
                className="ml-6"
              >
                <span className="sr-only">Miad Vosoughi on GitHub</span>
                <GithubIcon className="fill-gray-600 hover:fill-indigo-600 dark:fill-gray-400 dark:hover:fill-indigo-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
