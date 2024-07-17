import Navbar from '@/components/Navbar';
import React from 'react';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen bg-slate-900">
      <div className="sticky my-10 w-1/4 content-center rounded-xl">
        <Navbar />
      </div>
      <div className="my-10 mr-10 w-full content-center rounded-2xl bg-slate-800">
        {' '}
        {children}
      </div>
    </main>
  );
};

export default Layout;
