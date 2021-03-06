import React from 'react';
import clsx from 'clsx';

function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 24, width = 24, className, ...otherProps } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      className={clsx('fill-inherit', className)}
      {...otherProps}
    >
      <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
      <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
    </svg>
  );
}
export default EmailIcon;
