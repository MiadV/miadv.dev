import React, { forwardRef } from "react";
import { __DEV__ } from "../utils/assertions";

const SearchInput = forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>((props, ref) => {
  return (
    <div className="relative mb-4 w-full">
      <input
        aria-label="Search articles"
        type="text"
        placeholder="Search articles"
        className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-50"
        ref={ref}
        {...props}
      />
      <svg
        className="absolute right-3 top-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
});

export default SearchInput;

if (__DEV__) {
  SearchInput.displayName = "SearchInput";
}
