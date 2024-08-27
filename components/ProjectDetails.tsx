'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import Tag from './shared/Tag';
import LinkWithIcon from './shared/LinkWithIcon';
import DevTodayUpdates from './DevTodayUpdates';

type ProjectProp = {
  title: string;
  description: string;
  coverImage: StaticImageData;
  mainImage: StaticImageData;
  route: string;
  demoLinkV1: string;
  demoLinkV2?: string;
  githubLink: string;
  altText: string;
  tags: string[];
  overview: string;
  learnings: string[];
  challenges: string[];
};

const ProjectDetails = ({ project }: { project: ProjectProp }) => {
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
          <LinkWithIcon
            label="v2.0 Demo Site"
            href={project.demoLinkV2 as string}
          />
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
            alt={project.altText}
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
        <div className="rounded-md bg-slate-800/70 p-6 text-slate-300">
          <p className="mb-3 text-base font-semibold text-slate-200 max-sm:text-sm">
            Overview
          </p>
          <p className="text-sm font-light max-sm:text-xs">
            {project.overview}
          </p>
        </div>

        <div className="rounded-md bg-slate-800/70 p-6 text-slate-300">
          <p className="mb-3 text-base font-semibold text-slate-200 max-sm:text-sm">
            Learnings
          </p>
          <ol className="ml-4 flex list-decimal flex-col gap-y-1">
            {project.learnings.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-sm font-light text-slate-300 max-sm:text-xs"
                >
                  {item}
                </li>
              );
            })}
          </ol>
        </div>

        <div className="rounded-md bg-slate-800/70 p-6 text-slate-300">
          <p className="mb-3 text-base font-semibold text-slate-200 max-sm:text-sm">
            Challenges
          </p>
          <ol className="ml-4 flex list-decimal flex-col gap-y-1 ">
            {project.challenges.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-sm font-light text-slate-300 max-sm:text-xs"
                >
                  {item}
                </li>
              );
            })}
          </ol>
        </div>
        {project.altText === 'dev-today' && <DevTodayUpdates />}
      </section>
    </motion.section>
  );
};

export default ProjectDetails;
