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
    <section className="sticky flex flex-col gap-y-6">
      <section className="flex items-center justify-between">
        <Link
          href="/about"
          className="text-base font-bold text-slate-400 duration-300 hover:text-red-300"
        >
          <h1>Darshin</h1>
          <h1>Van Parijs</h1>
        </Link>

        <div className="mt-0">
          <div className="mb-0.5 flex items-center justify-end gap-x-[18px] text-xs font-light text-slate-300">
            <a
              href="https://www.linkedin.com/in/DarshinVanParijs/"
              target="_blank"
            >
              <Image priority src={linkedInLogo} alt="LogoLight" width={22} />
            </a>
            <a href="https://github.com/DDVVPP" target="_blank">
              <Image priority src={githubLogo} alt="LogoLight" width={19} />
            </a>
            <a
              href="/resume-2024.pdf"
              target="_blank"
              className="rounded-md border border-slate-500 p-1"
            >
              <p>Resume</p>
            </a>
          </div>
          <div className="flex justify-end">
            <a
              href="mailto:darshinvp@gmail.com"
              className="rounded-md border border-slate-500 p-1 text-end text-xs font-light text-slate-300"
            >
              darshinvp@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="flex justify-between text-base font-light text-slate-400 max-md:text-sm">
        {navbarItems.map((item) => {
          const isSelected = pathname.includes(item.route);
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${isSelected ? 'rounded-xl rounded-b-none bg-dark-800 p-3 font-normal text-red-400 duration-300' : 'p-3'}`}
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
