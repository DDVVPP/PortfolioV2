'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Socials from './shared/Socials';

const Contact = () => {
  const router = useRouter();

  const handleAboutClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const div = event.currentTarget;
    const links = div.querySelector('#socials');
    if (links === event.target) {
      return;
    }

    router.push('/about');
  };

  return (
    <section className="flex h-full flex-col">
      <div className="h-full overflow-hidden rounded-xl">
        {/* Used div with onClick instead of Link to fix hydration error - using a button requires an outer div for styling - added an id for screen readers */}
        <div
          id="about-link"
          className="group flex h-full cursor-pointer flex-col justify-center rounded-xl bg-[#172337] duration-300 hover:scale-110 hover:bg-[#1d2739] max-md:h-80 max-md:w-full"
          onClick={(event) => handleAboutClick(event)}
        >
          <div className="flex flex-col text-center text-4xl font-bold text-slate-400 duration-300 hover:text-red-300 group-hover:text-slate-200 group-hover:duration-300 max-sm:text-3xl">
            <h1>Darshin</h1>
            <h1>Van Parijs</h1>
          </div>

          <Socials isHomePage={true} />
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="mt-3 text-wrap text-center text-sm font-medium uppercase text-slate-100">
          About
        </h1>
        <h3 className="text-center text-sm font-light text-slate-300 opacity-80">
          Background and interests
        </h3>
      </div>
    </section>
  );
};

export default Contact;
