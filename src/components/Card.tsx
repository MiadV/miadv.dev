import React from "react";
import clsx from "clsx";

export const Card: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-600 dark:bg-slate-700",
        className
      )}
    >
      {children}
    </div>
  );
};
