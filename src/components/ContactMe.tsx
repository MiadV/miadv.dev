import React from "react";
import { IconButton } from "./Button";
import { Card } from "./Card";
import EmailIcon from "@/assets/Icons/EmailIcon";
import InstagramIcon from "@/assets/Icons/InstagramIcon";
import LinkedinIcon from "@/assets/Icons/LinkedinIcon";
import PaperPlaneIcon from "@/assets/Icons/PaperPlaneIcon";

const socialLinks = [
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

export const ContactMe = () => {
  return (
    <section id="contact-me" className="py-16">
      <Card className="relative z-0 text-center">
        <span className="absolute top-8 left-8 -z-10 hidden sm:block">
          <PaperPlaneIcon className="h-[100px] w-[100px] fill-gray-200 dark:fill-gray-600" />
        </span>

        <h2 className="text-lg font-semibold">Get in Touch</h2>
        <a
          href="mailto:miadv.biz@gmail.com"
          className="mt-2 inline-block text-2xl font-semibold text-indigo-600"
        >
          miadv.biz@gmail.com
        </a>
        <ul className="mt-4 flex items-center justify-center space-x-4">
          {socialLinks.map((link) => (
            <li key={link.lable}>
              <IconButton
                variant="outline"
                as="a"
                isExternal
                aria-label={link.lable}
                href={link.href}
                className="dark:fill-gray-400 dark:hover:fill-indigo-600"
              >
                {link.Icon}
              </IconButton>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};
