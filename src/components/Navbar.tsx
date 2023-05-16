import React, { Fragment, useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react';
import { ThemeToggle } from './ThemeToggle';
import GithubIcon from '@/Icons/GithubIcon';
import { CompactLogo } from '@/components/Logo';

const navItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/#about',
  },
  {
    title: 'Projects',
    path: '/projects/#top',
  },
  {
    title: 'Blog',
    path: '/blog/#top',
  },
  {
    title: 'Contact',
    path: '/#contact-me',
  },
];

export const Navbar = () => {
  const [isStiky, setIsSticky] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let offset = 50;
    function onScroll() {
      if (!isStiky && window.scrollY > offset) {
        setIsSticky(true);
      } else if (isStiky && window.scrollY <= offset) {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isStiky]);

  return (
    <div
      id="navbar"
      className={clsx(
        'fixed inset-x-0 top-0 z-40 h-16 transition-colors duration-300',
        isStiky || router.asPath !== '/'
          ? 'border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-4 md:px-8">
        <div className="relative flex items-center">
          <Link href="/">
            <a className="flex-none">
              <span className="sr-only">MiadV personal blog</span>
              <span className="flex items-center space-x-2">
                <CompactLogo className="h-[28px] w-[28px]" />
              </span>
            </a>
          </Link>

          <div className="relative ml-auto items-center md:flex">
            <nav className="hidden font-semibold leading-6 text-gray-900 dark:text-gray-200 md:block">
              <ul className="flex space-x-10">
                {navItems.map((item) => (
                  <li className="relative" key={item.title}>
                    <Link href={item.path}>
                      <a
                        className={clsx(
                          'peer transition-all duration-150 hover:text-indigo-500',
                          router.asPath === item.path ? 'text-indigo-500' : ''
                        )}
                      >
                        {item.title}
                      </a>
                    </Link>
                    <span
                      className={clsx(
                        'absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-indigo-500 transition-all duration-150 peer-hover:scale-x-100',
                        router.asPath === item.path ? 'scale-x-100' : ''
                      )}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center space-x-4 pl-6 md:space-x-6">
              <ThemeToggle />
              <a
                href="https://github.com/miadv"
                rel="noopener noreferrer"
                target="_blank"
                className=""
              >
                <span className="sr-only">Miad Vosoughi on GitHub</span>
                <GithubIcon className="fill-gray-600 hover:fill-indigo-600 dark:fill-gray-400 dark:hover:fill-indigo-400" />
              </a>
              <MenuPopOver display="flex md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuPopOver = ({ display }: { display: string }) => {
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className={display}>
      <button aria-label="Navigation Menu" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="h-6 w-6 hover:stroke-indigo-600 dark:hover:stroke-indigo-400"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Transition
        show={isOpen}
        appear
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-300 delay-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog
          as="div"
          className={clsx('fixed inset-0 z-50 ', display)}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed bottom-0 left-0 top-0 w-full max-w-xs rounded-r-2xl bg-white p-6 shadow-lg dark:bg-gray-800 ">
            <a className="mx-auto mt-4">
              <span className="flex items-center space-x-2">
                <CompactLogo className="h-[32px] w-[32px]" />
              </span>
            </a>

            <ul className="mt-16 space-y-6">
              {navItems.map((item) => (
                <li className="relative" key={item.title}>
                  <Link href={item.path}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        'peer block text-lg font-semibold transition-all duration-150 hover:text-indigo-500',
                        router.asPath === item.path ? 'text-indigo-500' : ''
                      )}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <button
              aria-label="Close Navigation Menu"
              className="absolute right-5 top-5"
              onClick={() => setIsOpen(false)}
            >
              <svg viewBox="0 0 10 10" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
