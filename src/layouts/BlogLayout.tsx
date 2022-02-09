import React from "react";

const BlogLayout: React.FC = ({ children }) => {
  return (
    <div className="prose prose-slate mx-auto mt-10 px-4 pb-28 dark:prose-invert sm:mt-16 sm:px-6 md:prose-lg md:px-8 xl:px-12">
      {children}
    </div>
  );
};
export default BlogLayout;
