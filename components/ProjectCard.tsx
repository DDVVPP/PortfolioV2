import Image from 'next/image';
import Tag from './shared/Tag';
import LinkWithIcon from './shared/LinkWithIcon';
import { Project } from '@/lib/types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <section className="group flex gap-x-9 gap-y-4 rounded-lg bg-slate-900/50 p-6 pl-3 max-md:flex-col max-md:gap-y-3">
      <div className="relative w-80 min-w-20 pt-1 max-md:mt-1 max-md:w-full">
        <Image
          alt={project.altText}
          src={project.coverImage}
          className="rounded-lg"
          placeholder="blur"
        />
      </div>
      <div className="flex w-3/4 max-w-[1000px] flex-col justify-between gap-y-4 max-md:-order-1 max-md:w-full max-md:gap-y-3">
        <section className="flex flex-col gap-y-4 max-md:flex-row max-md:items-center max-md:justify-between max-md:gap-y-2.5 max-sm:flex-col">
          <h1 className="text-wrap text-sm font-medium text-slate-100 duration-300 group-hover:text-corral max-md:text-base max-sm:text-center max-sm:text-sm 3xl:text-lg">
            {project.title}
          </h1>
          <div className="flex gap-x-4">
            {project.demoLink && (
              <LinkWithIcon label="Demo Site" href={project.demoLink} />
            )}
            <LinkWithIcon label="Source Code" href={project.githubLink} />
          </div>
        </section>

        <p className="text-sm font-light text-slate-300 max-md:text-center max-sm:text-sm 3xl:text-base">
          {project.description}{' '}
          {project.demoCredentials && (
            <p className="mt-2">
              <em className="font-normal">
                <a
                  className="font-medium duration-300 hover:text-red-400"
                  href="mailto:darshinvp@gmail.com"
                >
                  *Contact me
                </a>{' '}
                for demo credentails to explore an existing account
              </em>
            </p>
          )}
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-2 max-md:justify-center">
          {project.tags.map((tag) => {
            return <Tag key={tag} text={tag} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
