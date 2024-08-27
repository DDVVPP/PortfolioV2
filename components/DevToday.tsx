'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { projectDetails, projects } from '@/lib/constants';
import Tag from './shared/Tag';
import LinkWithIcon from './shared/LinkWithIcon';
import ProjectDetailsCard from './shared/ProjectDetailsCard';

const DevToday = () => {
  const project = projects[0];

  return (
    <motion.section
      className="m-10 flex flex-col justify-center xl:m-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="mb-7 flex flex-col text-center">
        <h1 className="text-3xl font-bold text-slate-200 max-sm:text-xl">
          {project.title}
        </h1>
        <p className="text-sm font-light text-slate-300 max-sm:text-xs">
          {project.description}
        </p>

        <div className="mt-3 flex justify-center gap-x-2 max-sm:flex-col max-sm:items-center max-sm:gap-y-2">
          <LinkWithIcon label="v2.0 Demo Site" href={project.demoLinkV2} />
          <LinkWithIcon label="v2.0 Source Code" href={project.githubLink} />
        </div>
        <div className="mt-2 flex justify-center gap-x-2">
          <LinkWithIcon label="v1.0 Demo Site" href={project.demoLinkV1} />
        </div>
        <p className="mt-2 text-xs text-slate-300 max-sm:text-[11px]">
          *{' '}
          <a
            href="mailto:darshinvp@gmail.com"
            className=" duration-300 hover:text-red-400"
          >
            Contact me
          </a>{' '}
          for <span className="text-red-300">Demo User</span> credentials
        </p>
      </header>

      <section className="flex flex-col items-center justify-center max-md:w-full">
        <div className="relative mb-6 max-sm:mb-3">
          <Image
            alt="dev-today"
            src={project.mainImage}
            className="shrink-0 rounded-xl xl:max-w-[850px]"
            placeholder="blur"
          />
        </div>

        <div className="flex max-w-[850px] flex-wrap justify-center gap-x-3 gap-y-2">
          {project.tags.map((tag) => {
            return <Tag key={tag} text={tag} />;
          })}
        </div>
      </section>

      <section className="mt-8 flex w-full flex-col gap-y-4">
        {projectDetails.map((project) => (
          <ProjectDetailsCard
            key={project.title}
            overview={project.overview}
            learnings={project.learnings}
            challenges={project.challenges}
          />
        ))}
      </section>
    </motion.section>
  );
};

export default DevToday;
