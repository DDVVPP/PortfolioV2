'use client';

import Image from 'next/image';
import profile from '@/public/profile-pic.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="m-10 flex flex-col items-center max-xs-362:mx-8 xl:m-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative size-64 shrink-0 align-middle max-md:size-60">
        <Image
          priority
          alt="profile-photo"
          src={profile}
          fill
          className="rounded-full"
        />
      </div>
      <div className="mt-7 w-4/5 justify-center max-md:w-full max-md:text-sm xl:mt-10 xl:w-3/4">
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
