import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pre from "./Pre";

const CustomLink: React.FC<{ href: string }> = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
  pre: (props) => <Pre {...props} />,
  Image,
};

export default MDXComponents;
