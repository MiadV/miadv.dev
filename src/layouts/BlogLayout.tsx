import React from "react";

const BlogLayout: React.FC = ({ children }) => {
  return (
    <div className="mt-24 px-4 sm:px-6 md:px-8 xl:px-12">
      <article className="prose prose-slate mx-auto prose-a:font-semibold prose-a:text-indigo-600 dark:prose-invert prose-a:dark:text-indigo-400">
        {children}
      </article>
    </div>
  );
};
export default BlogLayout;
