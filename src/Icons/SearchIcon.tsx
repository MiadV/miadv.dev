import React from "react";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 50, width = 50, className, ...otherProps } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      stroke="currentColor"
      fill="none"
      className={className}
      {...otherProps}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

export default SearchIcon;
