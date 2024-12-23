'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { projects } from '@/lib/constants';
import Tag from './shared/Tag';
import Link from 'next/link';
import AngledArrow from './shared/AngledArrow';

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-10 my-32 flex flex-col gap-y-8 max-md:my-14">
        {projects.map((project) => {
          return project.isDisabled ? (
            <div
              key={project.title}
              className="flex animate-pulse gap-x-9 rounded-lg p-4 pl-3 max-md:flex-col max-md:gap-y-4 max-md:px-3"
            >
              <div className="relative w-80 min-w-20 max-md:w-full">
                <Image
                  alt={project.altText}
                  src={project.coverImage}
                  className="rounded-lg"
                  placeholder="blur"
                />
              </div>
              <div className="mb-3 flex w-3/4 max-w-[1000px] flex-col justify-between max-md:-order-1 max-md:mb-2 max-md:w-full">
                <div className="flex gap-x-0.5 max-md:justify-center">
                  <h1 className="text-wrap text-sm font-medium uppercase text-slate-100 xl:text-base">
                    {project.title} - COMING SOON!
                  </h1>
                </div>
                <h2 className="text-sm font-light text-slate-300 opacity-40 max-md:text-center xl:text-base">
                  {project.description}
                </h2>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 opacity-40 max-md:justify-center">
                  {project.tags.map((tag) => {
                    return <Tag key={tag} text={tag} textSize="xl:text-sm" />;
                  })}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={project.title}
              href={project.route}
              className="group flex gap-x-9 rounded-lg p-4 pl-3 duration-300 hover:bg-slate-900/50 max-md:flex-col max-md:gap-y-4 max-md:px-3"
            >
              <div className="relative w-80 min-w-20 cursor-pointer max-md:w-full">
                <Image
                  alt={project.altText}
                  src={project.coverImage}
                  className="rounded-lg"
                  placeholder="blur"
                />
              </div>
              <div className="mb-3 flex w-3/4 max-w-[1000px] flex-col justify-between max-md:-order-1 max-md:mb-2 max-md:w-full">
                <div className="flex gap-x-0.5 max-md:justify-center">
                  <h1 className="text-wrap text-sm font-medium uppercase text-slate-100 duration-300 group-hover:text-corral xl:text-base">
                    {project.title}
                  </h1>
                  <AngledArrow
                    alt="arrow-up-right"
                    className="flex stroke-slate-400 duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
                <h2 className="text-sm font-light text-slate-300 max-md:text-center xl:text-base">
                  {project.description}
                </h2>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 max-md:justify-center">
                  {project.tags.map((tag) => {
                    return <Tag key={tag} text={tag} textSize="xl:text-sm" />;
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
