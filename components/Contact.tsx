'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { aboutMeTech } from '@/lib/constants';
import Socials from './shared/Socials';
import Tag from './shared/Tag';

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
          className="group flex h-full cursor-pointer flex-col justify-center gap-y-3 rounded-xl bg-[#172337]/80 duration-300 hover:scale-110 max-md:h-80 max-md:w-full max-sm:gap-y-1"
          onClick={(event) => handleAboutClick(event)}
        >
          <div className="mb-2 flex flex-col text-center duration-300 group-hover:duration-300">
            <h1 className="flex flex-col text-wrap text-center text-3xl font-bold text-slate-300/80 duration-300 hover:text-red-300 group-hover:text-slate-200 group-hover:duration-300 max-sm:text-2xl">
              Darshin Van Parijs
            </h1>
            <h2 className="mb-1.5 text-lg text-slate-300/80 hover:text-red-300 group-hover:text-red-300 max-sm:text-base">
              Software Developer
            </h2>

            <div className="flex flex-col gap-y-2">
              <div className="flex flex-wrap justify-center gap-2">
                {aboutMeTech.slice(0, 3).map((tech) => {
                  return (
                    <Tag
                      key={tech}
                      text={tech}
                      pillWidth="w-[84px] max-sm:w-20"
                    />
                  );
                })}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {aboutMeTech.slice(3).map((tech) => {
                  return (
                    <Tag
                      key={tech}
                      text={tech}
                      pillWidth="w-[84px] max-sm:w-20"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <Socials isHomePage={true} />
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="mt-3 text-wrap text-center text-sm font-medium uppercase text-slate-100">
          About
        </h3>
        <h4 className="text-center text-sm font-light text-slate-300 opacity-80">
          Background and interests
        </h4>
      </div>
    </section>
  );
};

export default Contact;
