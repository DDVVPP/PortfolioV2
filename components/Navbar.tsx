'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import githubLogo from '@/public/github-mark.svg';
import linkedInLogo from '@/public/linkedin.svg';
import { navbarItems } from '@/lib/constants';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky flex flex-col gap-y-16 max-md:gap-y-10">
      <section className="navbar-mobile-header mr-6 flex flex-col gap-y-1">
        <Link
          href="/"
          className="cursor-pointer text-4xl font-bold text-slate-400 duration-300 hover:text-red-300 max-sm:text-xl md:text-right"
        >
          <h1>Darshin</h1>
          <h1>Van Parijs</h1>
        </Link>

        <div className="mt-0 flex flex-col gap-y-1">
          <div className="navbar-mobile-info-links mb-0.5 mt-2 flex items-center justify-end gap-x-4 text-sm font-light text-slate-300">
            <a
              href="https://www.linkedin.com/in/DarshinVanParijs/"
              target="_blank"
              className="hover:animate-[wiggle_0.3s_ease-in-out_infinite]"
            >
              <Image priority src={linkedInLogo} alt="LogoLight" width={22} />
            </a>
            <a
              href="https://github.com/DDVVPP"
              target="_blank"
              className="hover:animate-[wiggle_0.3s_ease-in-out_infinite]"
            >
              <Image priority src={githubLogo} alt="LogoLight" width={19} />
            </a>
            <a
              href="/resume-2024.pdf"
              target="_blank"
              className="rounded-md border border-slate-500 p-1 duration-300 hover:border-red-400 hover:text-slate-300"
            >
              <p>Resume</p>
            </a>
          </div>
          <div className="flex justify-end">
            <a
              href="mailto:darshinvp@gmail.com"
              className="rounded-md border border-slate-500 p-1 text-end text-sm font-light text-slate-300 duration-300 hover:border-red-400 hover:text-slate-300 max-sm:text-xs"
            >
              darshinvp@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="navbar-mobile-tabs flex flex-col items-end text-base font-light text-slate-400">
        {navbarItems.map((item) => {
          const isSelected = pathname.includes(item.route);
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${isSelected ? 'rounded-xl bg-dark-800 px-6 py-4 font-normal text-red-400 duration-300 max-md:rounded-b-none max-md:p-3 md:rounded-r-none' : 'px-6 py-4 duration-300 hover:text-red-400 max-md:p-3'}`}
              prefetch={false}
            >
              {item.title}
            </Link>
          );
        })}
      </section>
    </section>
  );
};

export default Navbar;
