import React, { forwardRef } from 'react';
import { __DEV__ } from '@/utils/assertions';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: React.ReactElement;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { fullWidth = false, icon, ...otherProps } = props;

  return (
    <div className={`relative mb-4 ${fullWidth && 'w-full'}`}>
      <input
        className="block h-10 w-full rounded-xl border border-gray-200 bg-gray-200 px-4 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-700 dark:text-gray-50"
        ref={ref}
        {...otherProps}
      />
      {icon}
    </div>
  );
});

export default Input;

if (__DEV__) {
  Input.displayName = 'Input';
}
