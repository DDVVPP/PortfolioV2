import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import React from 'react';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen bg-slate-900 max-md:flex-col">
      <div className="sticky my-10 ml-10 w-1/4 content-center rounded-xl max-md:hidden">
        <Navbar />
      </div>
      <div className="sticky mx-8 mt-8 rounded-xl md:hidden">
        <NavbarMobile />
      </div>
      <div className="my-10 mr-10 rounded-2xl bg-dark-800 max-md:mx-8 max-md:mt-0 max-md:rounded-t-none md:w-full">
        {' '}
        {children}
      </div>
      {/* <a target="_blank" href="https://icons8.com/icon/8808/linkedin">
        LinkedIn
      </a>{' '}
      icon by{' '}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a> */}
    </main>
  );
};

export default Layout;
