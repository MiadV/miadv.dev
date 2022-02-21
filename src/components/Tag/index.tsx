import React from 'react';
import { __DEV__ } from '@/utils/assertions';

const Tag: React.FC<React.HTMLProps<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={`cursor-pointer rounded-xl border border-slate-200 bg-slate-100 py-1 px-2 text-sm font-medium lowercase text-gray-500 transition-all hover:border-indigo-600 hover:bg-indigo-100 hover:text-gray-600 dark:border-slate-700 dark:bg-slate-600 dark:text-gray-200 dark:hover:bg-indigo-600 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
if (__DEV__) {
  Tag.displayName = 'Tag';
}
