'use client';

import { motion } from 'framer-motion';

import { projects } from '@/lib/constants';
import ProjectCard from './ProjectCard';
import { RepoCommit, RepoPR } from '@/lib/types';

const Projects = ({
  repoPRs,
  repoCommits,
}: {
  repoPRs: RepoPR[];
  repoCommits: RepoCommit[];
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mx-7 my-32 flex flex-col gap-y-8 max-md:my-12 max-md:gap-y-10"
    >
      {projects.map((project) => {
        const repoName = project.githubLink.split('/').pop();
        const pullRequests = repoPRs.filter(
          (pullRequest: RepoPR) => pullRequest.repoName === repoName
        );
        const commits = repoCommits.filter(
          (commit: RepoCommit) => commit.repoName === repoName
        );

        return (
          <ProjectCard
            project={project}
            key={project.altText}
            pullRequests={pullRequests}
            commits={commits}
          />
        );
      })}
    </motion.section>
  );
};

export default Projects;
