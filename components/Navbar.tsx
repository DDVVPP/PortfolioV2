import Link from 'next/link';
import Image from 'next/image';

import githubLogo from '@/public/github-mark.svg';
import linkedInLogo from '@/public/In-White-14.png';

const Navbar = () => {
  return (
    <section className="flex flex-col gap-y-8">
      <section className="flex flex-col">
        <div className="text-4xl font-bold">
          <h1>Darshin</h1>
          <h1>Van Parijs</h1>
        </div>
        <div className="mt-4 flex gap-x-2">
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
        <a href="mailto:darshinvp@gmail.com">darshinvp@gmail.com</a>
      </section>

      <section className="flex flex-col gap-y-4">
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/hobbies">Hobbies</Link>
      </section>
    </section>
  );
};

export default Navbar;
