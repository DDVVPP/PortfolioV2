import Image from 'next/image';
import Tag from './shared/Tag';
import LinkWithIcon from './shared/LinkWithIcon';
import { Project } from '@/lib/types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <section className="group flex gap-x-9 rounded-lg p-4 pl-3 duration-300 hover:bg-slate-900/50 max-md:flex-col max-md:gap-y-4 max-md:px-3">
      <div className="relative w-80 min-w-20 max-md:w-full pt-1">
        <Image
          alt={project.altText}
          src={project.coverImage}
          className="rounded-lg"
          placeholder="blur"
        />
      </div>
      <div className="flex w-3/4 max-w-[1000px] flex-col justify-between max-md:-order-1 max-md:mb-2 max-md:w-full gap-y-2">
        <h1 className="text-wrap text-sm font-medium uppercase text-slate-100 duration-300 group-hover:text-corral">
          {project.title}
        </h1>

        <div className="flex gap-x-4">
          <LinkWithIcon label="Demo Site" href={project.demoLink} />
          <LinkWithIcon label="Source Code" href={project.githubLink} />
        </div>
        <h2 className="text-sm font-light text-slate-300 max-md:text-center">
          {project.description}
        </h2>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 max-md:justify-center">
          {project.tags.map((tag) => {
            return <Tag key={tag} text={tag} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
