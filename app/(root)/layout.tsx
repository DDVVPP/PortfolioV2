import React from 'react';
import Navbar from '@/components/Navbar';
import Children from '@/components/Children';
import Footer from '@/components/shared/Footer';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="flex max-md:flex-col">
        <div className="sticky ml-10 mt-[190px] rounded-xl max-md:mx-8 max-md:mt-10 md:w-1/4">
          <Navbar />
        </div>

        {/* Created Children component in order to access usePathname hook for custom rounded corners of background */}
        <Children>{children}</Children>
      </section>
      <Footer isHomePage={false} />
    </div>
  );
};

export default Layout;
