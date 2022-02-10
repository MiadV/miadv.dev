import React from "react";

const MainLayout: React.FC = ({ children }) => {
  return (
    <main className="mx-auto mt-24 max-w-screen-lg px-6 sm:px-8 xl:px-12">
      {children}
    </main>
  );
};
export default MainLayout;
