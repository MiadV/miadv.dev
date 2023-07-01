import React, { ReactNode } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import Pre from './Pre';

const CustomLink: React.FC<{
  children: ReactNode;
  copied: boolean;
  href: string;
}> = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link scroll={false} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const RoundedImage: React.FC<ImageProps> = (props) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image className="rounded-xl" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
  pre: Pre,
  Image: RoundedImage,
};

export default MDXComponents;
