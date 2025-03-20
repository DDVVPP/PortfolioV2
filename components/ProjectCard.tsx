import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format as formatDate } from 'date-fns';

import Tag from './shared/Tag';
import LinkWithIcon from './shared/LinkWithIcon';
import { Project, RepoCommit, RepoPR } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ProjectCard = ({
  project,
  pullRequests,
  commits,
}: {
  project: Project;
  pullRequests: RepoPR[];
  commits: RepoCommit[];
}) => {
  return (
    <section className="group flex gap-x-9 gap-y-4 rounded-lg bg-slate-900/50 p-6 pl-3 max-md:flex-col max-md:gap-y-3">
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

        <div className="flex flex-wrap gap-x-3 gap-y-2 max-md:justify-center">
          {project.tags.map((tag) => {
            return <Tag key={tag} text={tag} />;
          })}
        </div>

        {pullRequests.length > 0 ? (
          <Accordion
            type="single"
            collapsible
            className="mt-2 flex flex-col rounded-md bg-dark-800/65 border border-dark-800 hover:border-dark-700 hover:duration-300 p-4"
          >
            <AccordionItem value="pull-requests">
              <AccordionTrigger>
                {pullRequests.length > 1
                  ? 'Recent GitHub Pull Requests'
                  : 'Recent GitHub Pull Request'}
              </AccordionTrigger>

              {pullRequests.map((pullRequest) => {
                return (
                  <AccordionContent
                    key={pullRequest.title}
                    className="pb-0 py-3 px-4"
                  >
                    <section className="mb-1">
                      <p className="textHighlightFontSemiBold">
                        {' '}
                        {pullRequest.title}
                      </p>
                      <em>
                        {pullRequest.mergedAt
                          ? `Merged on ${formatDate(new Date(pullRequest.mergedAt), 'MMMM dd, yyyy')}`
                          : 'In Progress'}
                      </em>
                    </section>

                    <LinkWithIcon label="PR Link" href={pullRequest.url} />

                    <section className="mt-1">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h3: ({ node, ...props }) => (
                            <h3 className="font-semibold mt-1" {...props} />
                          ),
                          ul: ({ node, ...props }) => (
                            <ul className="list-disc ml-5 mt-0" {...props} />
                          ),
                        }}
                      >
                        {pullRequest.body}
                      </ReactMarkdown>
                    </section>
                  </AccordionContent>
                );
              })}
            </AccordionItem>
          </Accordion>
        ) : (
          <div className="rounded-md bg-dark-800/65 border border-dark-800 p-4">
            <p className="text-sm font-light text-slate-300 max-sm:text-[13px] 3xl:text-base">
              No pull requests created this year
            </p>
          </div>
        )}

        {commits.length > 0 ? (
          <Accordion
            type="single"
            collapsible
            className="mb-2 flex flex-col rounded-md bg-dark-800/65 border border-dark-800 hover:border-dark-700 hover:duration-300 p-4"
          >
            <AccordionItem value="commits">
              <AccordionTrigger>
                {commits.length > 1
                  ? 'Recent GitHub Commits'
                  : 'Recent GitHub Commit'}
              </AccordionTrigger>

              {commits.map((commit) => {
                return (
                  <AccordionContent key={commit.url} className="pb-0 py-3 px-4">
                    <section className="mb-1">
                      <em>
                        {formatDate(new Date(commit.date), 'MMMM dd, yyyy')}
                      </em>
                      <p>
                        {commit.message[0].toUpperCase() +
                          commit.message.slice(1)}
                      </p>
                    </section>

                    <LinkWithIcon label="Commit Link" href={commit.url} />
                  </AccordionContent>
                );
              })}
            </AccordionItem>
          </Accordion>
        ) : (
          <div className="rounded-md bg-dark-800/65 border border-dark-800 p-4">
            <p className="text-sm font-light text-slate-300 max-sm:text-[13px] 3xl:text-base">
              No commits created this year
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectCard;
