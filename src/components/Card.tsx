import clsx from 'clsx';
import React from 'react';

export const Card: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-2xl border border-gray-200 shadow-xl p-6',
        className
      )}
    >
      {children}
    </div>
  );
};
