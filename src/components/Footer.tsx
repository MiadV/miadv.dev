import React from "react";
import EmailIcon from "@/assets/Icons/EmailIcon";
import InstagramIcon from "@/assets/Icons/InstagramIcon";
import GithubIcon from "@/assets/Icons/GithubIcon";
import LinkedinIcon from "@/assets/Icons/LinkedinIcon";
import Logo from "@/assets/Logo";

const socialLinks = [
  {
    lable: "github profile",
    Icon: <GithubIcon />,
    href: "https://github.com/miadv",
  },
  {
    lable: "email address",
    Icon: <EmailIcon />,
    href: "mailto:miadv.biz@gmail.com",
  },
  {
    lable: "linkedin profile",
    Icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/miad-vosoughi/",
  },
  {
    lable: "instagram",
    Icon: <InstagramIcon />,
    href: "https://www.instagram.com/miadv.dev/",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-800">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between space-y-4 py-4 px-4 sm:flex-row sm:space-y-0 md:px-8">
        <span className="basis-1/3">
          <Logo />
        </span>
        <ul className="flex basis-1/3 items-center justify-center space-x-4">
          {socialLinks.map((link) => (
            <li key={link.lable}>
              <a
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                className="fill-gray-600 hover:fill-indigo-600 dark:fill-gray-400 dark:hover:fill-indigo-600"
              >
                <span className="sr-only">{link.lable}</span>
                {link.Icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="basis-1/3">
          <p className="text-right text-sm">
            Copyright &copy; {new Date().getFullYear()} Miad V.
          </p>
        </div>
      </div>
    </footer>
  );
};
