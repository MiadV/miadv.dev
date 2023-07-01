import React, { ReactNode } from 'react';
import clsx from 'clsx';

export const Card: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={clsx(
      'rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-800',
      className
    )}
  >
    {children}
  </div>
);
