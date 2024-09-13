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
      transition={{ duration: 1 }}
    >
      <div className="relative size-64 shrink-0 align-middle max-md:size-60">
        <Image
          priority
          alt="profile-photo"
          src={profile}
          fill
          className="rounded-full"
          placeholder="blur"
        />
      </div>
      <div className="mt-7 w-4/5 justify-center max-md:w-full max-md:text-sm xl:mt-10 xl:w-3/4">
        <p className="text-center font-light text-slate-300">
          Hi! I am an Architectural Designer turned{' '}
          <span className="text-red-300">Software Developer</span> based in Los
          Angeles, California. Outside of programming, I dedicate my time to
          working out, climbing, and dancing Brazilian Zouk — activities that
          require significant technique and commitment. I also find fulfillment
          in painting, drawing, and sculpting, which allows me to explore and
          refine my creative skills. <br />
          <br />I have experience building applications in{' '}
          <span className="text-red-300">
            Typescript, Javascript, React, Next.js, PostgreSQL,
          </span>{' '}
          and <span className="text-red-300">GraphQL</span> using{' '}
          <span className="text-red-300">agile methodologies.</span>
          <br />
          <br />
          My previous career in{' '}
          <span className="text-red-300">architecture</span> has provided me
          with valuable skills in iterative design, team collaboration and
          coordination, and problem-solving. Architecture projects often involve
          tight deadlines, budget constraints, and frequent changes, which have
          honed my ability to adapt quickly and stay calm under pressure. I’ve
          carried these skills into my software development career, allowing me
          to address diverse project needs effectively.
          <br />
          <br />I am passionate about writing{' '}
          <span className="text-red-300">clean code</span> and have a natural
          inclination towards visual design and attention to details. I
          particularly enjoy the immediate visual feedback that{' '}
          <span className="text-red-300">frontend</span> development provides. I
          also value having read/write access to the{' '}
          <span className="text-red-300">backend</span> which provides a
          holistic view of the app, and allows for more efficient debugging and
          consistency within the codebase.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
