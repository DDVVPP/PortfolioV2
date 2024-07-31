import React from 'react';
import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import Children from '@/components/Children';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-fit bg-slate-900 max-md:flex-col">
      <div className="sticky ml-10 mt-[190px] rounded-xl max-md:mx-8 max-md:mt-10 md:w-1/4">
        <Navbar />
      </div>

      {/* Created Children component in order to access usePathname hook for custom rounded corners of background */}
      <Children>{children}</Children>

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
