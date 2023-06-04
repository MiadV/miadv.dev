import React from 'react';
import clsx from 'clsx';

function ChevronDoubleDownIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 24, width = 24, className, ...otherProps } = props;

  return (
    <svg
      viewBox="0 0 256 256"
      height={height}
      width={width}
      className={clsx('fill-current', className)}
      {...otherProps}
    >
      <path d="M216.49,119.51a12,12,0,0,1,0,17l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,1,1,17-17L128,191l71.51-71.52A12,12,0,0,1,216.49,119.51Zm-97,17a12,12,0,0,0,17,0l80-80a12,12,0,0,0-17-17L128,111,56.49,39.51a12,12,0,0,0-17,17Z"></path>
    </svg>
  );
}
export default ChevronDoubleDownIcon;
