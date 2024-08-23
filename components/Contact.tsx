'use client';

import { useRouter } from 'next/navigation';

import Socials from './shared/Socials';

const Contact = () => {
  const router = useRouter();

  return (
    <>
      <section className="overflow-hidden rounded-xl">
        {/* Used div with onClick instead of Link to fix hydration error - using a button requires an outer div for styling */}
        <div
          className="group flex h-80 cursor-pointer flex-col justify-center  rounded-xl bg-[#172337] duration-300 hover:scale-110 hover:bg-[#1d2739] max-md:w-full"
          onClick={() => router.push('/about')}
        >
          <div className="flex flex-col text-center text-4xl font-bold text-slate-400 duration-300 hover:text-red-300 group-hover:text-slate-200 group-hover:duration-300 max-sm:text-3xl">
            <h1>Darshin</h1>
            <h1>Van Parijs</h1>
          </div>

          <Socials isHomePage={true} />
        </div>
      </section>

      <h1 className="mt-3 text-wrap text-center text-sm font-medium uppercase text-slate-100">
        About
      </h1>
      <h3 className="text-center text-sm font-light text-slate-300 opacity-80">
        Background and interests
      </h3>
    </>
  );
};

export default Contact;
