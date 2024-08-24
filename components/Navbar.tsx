'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navbarItems } from '@/lib/constants';
import Socials from './shared/Socials';

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

        <Socials isHomePage={false} />
      </section>

      <section className="navbar-mobile-tabs flex flex-col items-end text-base font-light text-slate-400">
        {navbarItems.map((item) => {
          const isSelected = pathname.includes(item.route);
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${isSelected ? 'rounded-xl bg-dark-800/65 px-6 py-4 font-normal text-red-400 duration-300 max-md:rounded-b-none max-md:p-3 md:rounded-r-none' : 'px-6 py-4 duration-300 hover:text-red-400 max-md:p-3'}`}
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
