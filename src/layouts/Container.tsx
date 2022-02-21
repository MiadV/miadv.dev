import React from 'react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const Container: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="flex h-screen flex-col justify-between">
        <main className="mx-auto mt-24 w-full max-w-screen-lg px-6 sm:mt-32 sm:px-8 xl:px-12">
          {children}
        </main>
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Container;
