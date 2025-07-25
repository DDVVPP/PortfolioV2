'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const Children = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isRounded = () => {
    switch (pathname) {
      case '/about':
        return 'max-md:rounded-tl-none max-md:rounded-tr-2xl';
      case '/art':
        return 'max-md:rounded-tr-none max-md:rounded-tl-2xl';
      default:
        return '';
    }
  };

  return (
    <div
      className={`mr-10 mt-12 flex max-w-[1600px] justify-center rounded-2xl bg-dark-800/65 max-md:mx-8 max-md:mt-0 md:w-full ${isRounded()}`}
    >
      {' '}
      {children}
    </div>
  );
};

export default Children;
