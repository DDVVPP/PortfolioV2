import Image from 'next/image';
import Link from 'next/link';

import githubLogo from '@/public/github-mark.svg';
import linkedInLogo from '@/public/linkedin.svg';

const Contact = () => {
  return (
    <>
      <div className="overflow-hidden rounded-xl">
        <Link
          href="/about"
          className="group flex h-80 min-w-20 cursor-pointer flex-col justify-center  rounded-xl bg-[#172337] duration-300 hover:scale-110 hover:bg-[#1d2739] max-md:w-full"
        >
          <div className="text-center text-4xl font-bold text-slate-400 duration-300 hover:text-red-300 group-hover:text-slate-200 group-hover:duration-300 max-sm:text-xl">
            <h1>Darshin</h1>
            <h1>Van Parijs</h1>
          </div>

          <div className="mt-0 flex flex-col gap-y-1">
            <div className="mb-0.5 mt-2 flex items-center justify-center gap-x-4 text-sm font-light text-slate-300">
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
                className="rounded-md border border-slate-500 p-1 duration-300 hover:border-red-400 hover:text-slate-300 group-hover:text-slate-200 group-hover:duration-300"
              >
                <p>Resume</p>
              </a>
            </div>

            <div className="flex justify-center">
              <a
                href="mailto:darshinvp@gmail.com"
                className="rounded-md border border-slate-500 p-1 text-end text-sm font-light text-slate-300 duration-300 hover:border-red-400 hover:text-slate-300 group-hover:text-slate-200 group-hover:duration-300 max-sm:text-xs"
              >
                darshinvp@gmail.com
              </a>
            </div>
          </div>
        </Link>
      </div>

      <h1 className="mt-3 text-wrap text-center text-sm font-medium uppercase text-slate-100">
        About
      </h1>
      <h3 className="text-center text-sm font-light text-slate-300 opacity-40">
        Background and interests
      </h3>
    </>
  );
};

export default Contact;
