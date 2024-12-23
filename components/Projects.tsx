'use client';

import { motion } from 'framer-motion';

import { projects } from '@/lib/constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-10 my-32 flex flex-col gap-y-8 max-md:my-14">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
