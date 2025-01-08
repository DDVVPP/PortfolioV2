import Image from 'next/image';

import githubLogo from '@/public/github-mark.svg';
import linkedInLogo from '@/public/linkedin.svg';

const Socials = ({ isHomePage }: { isHomePage: boolean }) => {
  return (
    <div
      id="socials"
      className={`mt-0 flex flex-col ${isHomePage ? 'gap-y-2' : 'gap-y-1'}`}
    >
      <div
        className={`flex items-center gap-x-4 text-sm font-light text-slate-300 ${isHomePage ? 'justify-center' : 'navbar-mobile-info-links mt-2 justify-end'}`}
      >
        <a
          href="https://www.linkedin.com/in/DarshinVanParijs/"
          target="_blank"
          className="hover:animate-[wiggle_0.3s_ease-in-out_infinite]"
          onClick={(event) => event.stopPropagation()}
        >
          <Image priority src={linkedInLogo} alt="LogoLight" width={22} />
        </a>
        <a
          href="https://github.com/DDVVPP"
          target="_blank"
          className="hover:animate-[wiggle_0.3s_ease-in-out_infinite]"
          onClick={(event) => event.stopPropagation()}
        >
          <Image priority src={githubLogo} alt="LogoLight" width={19} />
        </a>
        <a
          href="/resume-2025.pdf"
          target="_blank"
          className="rounded-md border border-slate-500 p-1 duration-300 hover:border-red-400 hover:text-slate-300 group-hover:text-slate-200 group-hover:duration-300 max-sm:text-xs"
          onClick={(event) => event.stopPropagation()}
        >
          <p>Resume</p>
        </a>
      </div>

      <div className={`flex ${isHomePage ? 'justify-center' : 'justify-end'}`}>
        <a
          href="mailto:darshinvp@gmail.com"
          className="rounded-md border border-slate-500 p-1 text-end text-sm font-light text-slate-300 duration-300 hover:border-red-400 hover:text-slate-300 group-hover:text-slate-200 group-hover:duration-300 max-sm:text-xs"
          onClick={(event) => event.stopPropagation()}
        >
          darshinvp@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Socials;
