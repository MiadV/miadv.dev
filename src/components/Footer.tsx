import React from 'react';
import EmailIcon from '@/Icons/EmailIcon';
import InstagramIcon from '@/Icons/InstagramIcon';
import LinkedinIcon from '@/Icons/LinkedinIcon';
import YoutubeIcon from '@/Icons/YoutubeIcon';
import TwitterIcon from '@/Icons/TwitterIcon';

const socialLinks = [
  {
    lable: 'twitter profile',
    Icon: <TwitterIcon />,
    href: 'https://twitter.com/Miad_Vosoughi',
  },
  {
    lable: 'email address',
    Icon: <EmailIcon />,
    href: 'mailto:miadv.biz@gmail.com',
  },
  {
    lable: 'linkedin profile',
    Icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/in/miad-vosoughi/',
  },
  {
    lable: 'instagram',
    Icon: <InstagramIcon />,
    href: 'https://www.instagram.com/miadv.dev/',
  },
  {
    lable: 'youtube',
    Icon: <YoutubeIcon />,
    href: 'https://www.youtube.com/c/MiadVosoughi/',
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-800">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between space-y-4 px-4 py-4 sm:flex-row sm:space-y-0 md:px-8">
        <ul className="flex items-center justify-center space-x-4">
          {socialLinks.map((link) => (
            <li key={link.lable}>
              <a
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                className="fill-gray-600 hover:fill-indigo-600 dark:fill-gray-400 dark:hover:fill-indigo-400"
              >
                <span className="sr-only">{link.lable}</span>
                {link.Icon}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <p className="text-right text-sm">
            Copyright &copy; {new Date().getFullYear()} Miad V.
          </p>
        </div>
      </div>
    </footer>
  );
};
