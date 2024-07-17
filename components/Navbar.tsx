import Link from 'next/link';
import Image from 'next/image';

import githubLogo from '@/public/github-mark.svg';
import linkedInLogo from '@/public/In-White-14.png';

const Navbar = () => {
  return (
    <section className="sticky flex flex-col gap-y-16">
      <section className="flex flex-col">
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

      <section className="flex flex-col items-end gap-y-4 text-base font-normal text-red-400">
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/hobbies">Hobbies</Link>
      </section>
    </section>
  );
};

export default Navbar;
