import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { GithubIcon } from '@/assets/Icons/GithubIcon';

const navItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/',
  },
  {
    title: 'Projects',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/',
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

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isStiky]);

  return (
    <div
      id='navbar'
      className={clsx(
        'sticky top-0 z-40 h-16 mx-auto w-full max-w-screen-2xl transition-colors duration-300',
        isStiky ? 'bg-white border-b border-gray-200' : 'bg-transparent'
      )}
    >
      <div className='py-4 mx-4 md:mx-8'>
        <div className='relative flex items-center'>
          <Link href='/'>
            <a className='flex-none text-2xl font-semibold'>
              <span className='sr-only'>MiadV personal blog</span>
              MiadV
            </a>
          </Link>

          <div className='relative hidden lg:flex items-center ml-auto'>
            <nav className='text-sm leading-6 font-semibold text-gray-700 dark:text-gray-200'>
              <ul className='flex space-x-8'>
                {navItems.map((item) => (
                  <li className='relative' key={item.title}>
                    <Link href={item.path}>
                      <a className='peer text-gray-900 text-lg font-semibold hover:text-indigo-600 transition-all duration-150'>
                        {item.title}
                      </a>
                    </Link>
                    <span className='scale-x-0 peer-hover:scale-x-100 transition-all duration-150 absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-indigo-600' />
                  </li>
                ))}
              </ul>
            </nav>
            <div className='flex items-center border-l border-gray-200 ml-6 pl-6 dark:border-gray-800'>
              <ThemeToggle panelClassName='mt-8' />
              <a
                href='https://github.com/miadv'
                className='ml-6 block text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
              >
                <span className='sr-only'>Miad Vosoughi on GitHub</span>
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
