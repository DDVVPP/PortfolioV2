import React from 'react';
import Navbar from '@/components/Navbar';
import Children from '@/components/Children';
import Footer from '@/components/shared/Footer';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-900">
      <main className="flex min-h-fit max-md:flex-col">
        <div className="sticky ml-10 mt-[190px] rounded-xl max-md:mx-8 max-md:mt-10 md:w-1/4">
          <Navbar />
        </div>

        {/* Created Children component in order to access usePathname hook for custom rounded corners of background */}
        <Children>{children}</Children>
      </main>
      <Footer isHomePage={false} />
      {/* <footer className="flex w-full  py-5 pr-[51px] align-bottom text-xs font-light text-slate-400 max-md:justify-center max-md:text-wrap max-md:px-12 max-md:text-center">
        © Designed & Built by Darshin Van Parijs & Deployed with Vercel
      </footer> */}
    </div>
  );
};

export default Layout;
