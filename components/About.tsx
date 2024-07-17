'use client';

import Image from 'next/image';
import profile from '@/public/profile-pic.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-y-10 p-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative size-64 shrink-0 align-middle">
        <Image
          priority
          alt="profile-photo"
          src={profile}
          fill
          className="rounded-full"
        />
      </div>
      <div className="w-3/4 justify-center max-md:text-sm">
        <p className="text-center font-light text-slate-300">
          Hi! I am an Architectural Designer turned{' '}
          <span className="text-red-400">Software Developer</span> who lives in
          Los Angeles, California and likes to eat delicious food, workout,
          hike, and dance Brazilian Zouk (a latin partner dance). <br />
          <br />I have experience building applications in{' '}
          <span className="text-red-400">
            Typescript, Javascript, React, Next.js, PosGreSQL, and GraphQL using
            agile methodologies.
          </span>
          <br />
          <br />
          My previous career in{' '}
          <span className="text-red-400">architecture</span> has provided me
          with valuable skills, such as the implementation of the iterative
          process of design, team collaboration and coordination, and analysis
          and problem solving, which I have carried with me into my software
          engineer career.
          <br />
          <br />I enjoy coding on the frontend - natural capacity for - visuals
          testing- immediate- design. Enjoy backend - manage and be aware of
          entire process debuggin easier
        </p>
      </div>
    </motion.section>
  );
};

export default About;
