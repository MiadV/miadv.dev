import React from 'react';

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="mt-16 space-y-20">ss</div>
      </main>
    </>
  );
}

Home.defaultProps = {
  layoutProps: {
    meta: {
      title: 'My Personal Blog | Projects, Articles...',
    },
  },
};
