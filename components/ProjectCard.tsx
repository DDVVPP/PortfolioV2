import Image from 'next/image';

import Tag from './shared/Tag';
import LinkWithIcon from './shared/LinkWithIcon';
import { Project, RepoCommit, RepoPR } from '@/lib/types';

import PullRequestsAccordion from './PullRequestsAccordion';
import CommitsAccordion from './CommitsAccordion';

const ProjectCard = ({
  project,
  pullRequests,
  commits,
}: {
  project: Project;
  pullRequests: RepoPR[];
  commits: RepoCommit[];
}) => {
  const renderImage = () => {
    return (
      <div className="relative ml-4 w-[500px] min-w-20 pt-1 max-md-projects:mx-0 max-md-projects:my-2 max-md-projects:flex max-md-projects:w-full max-md-projects:flex-wrap max-md-projects:justify-center">
        <Image
          alt={project.altText}
          src={project.coverImage}
          className="rounded-lg"
          placeholder="blur"
        />
      </div>
    );
  };

  return (
    <section className="group flex gap-x-9 gap-y-4 rounded-lg bg-slate-900/50 p-6 pl-3 max-md-projects:flex-col max-md-projects:gap-y-3 max-md-projects:p-6">
      <div className="max-md-projects:hidden md-projects:block">
        {renderImage()}
      </div>
      <div className="flex w-3/4 max-w-[1000px] flex-col justify-between gap-y-4 max-md-projects:w-full max-md-projects:gap-y-3">
        <section className="flex flex-col gap-y-4 max-md-projects:flex-row max-md-projects:items-center max-md-projects:justify-between max-md-projects:gap-y-2.5 max-sm:flex-col">
          <h1 className="text-wrap text-sm font-medium text-slate-100 duration-300 group-hover:text-corral max-md-projects:text-base max-sm:text-center max-sm:text-sm 3xl:text-lg">
            {project.title}
          </h1>
          <div className="flex gap-x-4">
            {project.demoLink && (
              <LinkWithIcon label="Demo Site" href={project.demoLink} />
            )}
            <LinkWithIcon label="Source Code" href={project.githubLink} />
          </div>
        </section>

        <div className="md-projects:hidden">{renderImage()}</div>

        <p className="text-sm font-light text-slate-300 max-md-projects:text-center max-sm:text-sm 3xl:text-base">
          {project.description}{' '}
          {project.demoCredentials && (
            <p className="mt-2">
              <em className="font-normal">
                <a
                  className="group/contact-me font-medium hover:text-red-400 hover:duration-300"
                  href="mailto:darshinvp@gmail.com"
                >
                  <span className="project-card-contact-me">*Contact</span>{' '}
                  <span className="project-card-contact-me [animation-delay:0.1s]">
                    me
                  </span>
                </a>{' '}
                for demo credentials to explore an existing account
              </em>
            </p>
          )}
        </p>

        <div className="mb-2 flex flex-wrap gap-x-3 gap-y-2 max-md-projects:justify-center">
          {project.tags.map((tag) => {
            return <Tag key={tag} text={tag} />;
          })}
        </div>

        {pullRequests.length > 0 && (
          <PullRequestsAccordion pullRequests={pullRequests} />
        )}

        {commits.length > 0 && <CommitsAccordion commits={commits} />}
      </div>
    </section>
  );
};

export default ProjectCard;
