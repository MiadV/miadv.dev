import React, { forwardRef } from 'react';
import { __DEV__ } from '@/utils/assertions';

type BaseTagProps = Omit<React.HTMLProps<HTMLSpanElement>, 'size'>;
export interface TagProps extends BaseTagProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md';
}

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ children, size = 'md', className, ...rest }, ref) => {
    let tempClassNames: string[] = [];

    const sharedClasses = [
      'cursor-pointer',
      'rounded-xl',
      'border',
      'border-slate-200',
      'bg-slate-100',
      'text-sm',
      'font-medium',
      'lowercase',
      'text-gray-500',
      'transition-all',
      'hover:border-indigo-600',
      'hover:bg-indigo-100',
      'hover:text-gray-600',
      'dark:border-slate-700',
      'dark:bg-slate-600',
      'dark:text-gray-200',
      'dark:hover:bg-indigo-600',
    ];

    // handle sizes
    let sizeSm = ['py-1', 'px-2', 'text-xs'];
    let sizeMd = ['py-1', 'px-2'];

    if (size === 'sm') {
      tempClassNames = [...sharedClasses, ...sizeSm];
    } else if (size === 'md') {
      tempClassNames = [...sharedClasses, ...sizeMd];
    }

    let classes = tempClassNames.join(' ');
    return (
      <span ref={ref} className={`${classes} ${className}`} {...rest}>
        {children}
      </span>
    );
  }
);

export default Tag;
if (__DEV__) {
  Tag.displayName = 'Tag';
}
