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
  const renderNoCommitsOrNoPRsDiv = (type: string) => {
    return (
      <div className="rounded-md bg-dark-800/65 border border-dark-800 p-4">
        <p className="text-sm font-light text-slate-300 max-sm:text-[13px] 3xl:text-base">
          No {type} created this year
        </p>
      </div>
    );
  };

  return (
    <section className="group flex gap-x-9 gap-y-4 rounded-lg bg-slate-900/50 p-6 pl-3 max-md:p-6 max-md:flex-col max-md:gap-y-3">
      <div className="relative ml-4 w-80 min-w-20 content-center pt-1 max-md:mx-0  max-md:mt-1 max-md:w-full">
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

        <div className="flex flex-wrap gap-x-3 gap-y-2 max-md:justify-center mb-2">
          {project.tags.map((tag) => {
            return <Tag key={tag} text={tag} />;
          })}
        </div>

        {pullRequests.length > 0 ? (
          <PullRequestsAccordion pullRequests={pullRequests} />
        ) : (
          renderNoCommitsOrNoPRsDiv('pull requests')
        )}

        {commits.length > 0 ? (
          <CommitsAccordion commits={commits} />
        ) : (
          renderNoCommitsOrNoPRsDiv('commits')
        )}
      </div>
    </section>
  );
};

export default ProjectCard;
