'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import githubLogo from '@/public/github-mark.svg';
import linkedInLogo from '@/public/In-White-14.png';
import { navbarItems } from '@/lib/constants';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky flex flex-col gap-y-16">
      <section className="mr-4 flex flex-col ">
        <div className="text-right text-4xl font-bold text-slate-400">
          <h1>Darshin</h1>
          <h1>Van Parijs</h1>
        </div>
        <div className="mt-2 flex justify-end gap-x-2 text-sm font-light text-slate-300">
          <a href="/resume-2024.pdf" target="_blank">
            <p>Resume</p>
          </a>
          <a
            href="https://www.linkedin.com/in/DarshinVanParijs/"
            target="_blank"
          >
            <Image priority src={linkedInLogo} alt="LogoLight" width={20} />
          </a>
          <a href="https://github.com/DDVVPP" target="_blank">
            <Image priority src={githubLogo} alt="LogoLight" width={24} />
          </a>
        </div>
        <a
          href="mailto:darshinvp@gmail.com"
          className="text-right text-sm font-light text-slate-300"
        >
          darshinvp@gmail.com
        </a>
      </section>

      <section className="flex flex-col items-end gap-y-4 text-base font-light text-slate-400">
        {navbarItems.map((item) => {
          const isSelected = pathname.includes(item.route);
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${isSelected ? 'rounded-xl rounded-r-none bg-slate-800 p-4 font-normal text-red-400 transition duration-300' : ' mr-4'}`}
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
