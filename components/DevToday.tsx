'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { projects } from '@/lib/constants';
import Tag from './shared/Tag';

const DevToday = () => {
  const project = projects[1];

  return (
    <motion.section
      className="m-10 flex max-w-[600px] flex-col max-md:m-0 xl:m-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="mb-9 text-center ">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <h3 className="mt-2 text-sm font-light text-slate-300">
          {project.description}
        </h3>
      </header>

      <div className="relative mb-8 max-md:size-28">
        <Image
          alt="dev-today"
          src={project.image}
          className="rounded-xl"
          placeholder="blur"
        />
      </div>

      <section className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-base font-medium">Deployed Sites</h4>

          <div className="flex flex-col text-sm text-slate-100">
            <p>Version 2 (with updates) - Solo developer</p>
            <a
              href="https://dev-today-v2.vercel.app/posts"
              target="_blank"
              className="w-fit font-light text-slate-300 duration-300 hover:text-red-400"
            >
              https://dev-today-v2.vercel.app
            </a>
          </div>
          <div className="flex flex-col text-sm text-slate-100">
            <p>Version 1 - Two person team</p>
            <a
              href="https://dev-today-v2.vercel.app/posts"
              target="_blank"
              className="w-fit font-light text-slate-300 duration-300 hover:text-red-400"
            >
              https://capstone-darshin-adam.vercel.app
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-base font-medium">Overview</h4>
          <p className="text-sm font-light text-slate-300">
            DevToday features Clerk authorization for sign-up and login, a post
            and podcast feed, a list of groups and meetups, users with profiles,
            user specific actions including but not limited to, following other
            users, liking posts, podcasts, and comments, commenting on posts and
            podcasts, editing, creating, and deleting posts, groups, meetups,
            podcasts, and comments, a cmdK fuzzy search, and notifications.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-base font-medium">Tech Stack</h4>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {project.tags.map((tag) => {
              return <Tag key={tag} text={tag} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-base font-medium">Learning</h4>
          <p className="text-sm font-light text-slate-300">
            1. Gained extensive knowledge of full authentication & authorization
            implementation, including the use of industry-standard security
            protocols such as JWT
          </p>
          <p className="text-sm font-light text-slate-300">
            2. Sharpened my backend skills, specifically in optimizing database
            queries, improving performance, and handling server-side logic.
          </p>
          <p className="text-sm font-light text-slate-300">
            3. Learned how to properly handle files, including file upload,
            storage, and retrieval, ensuring that the apps data is organized &
            easily accessible while keeping it secure.
          </p>
          <p className="text-sm font-light text-slate-300">
            4. Acquired proficiency in NextJS and implemented various features
            utilizing industry-standard best practices.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-base font-medium">Challenges</h4>
          <p className="text-sm font-light text-slate-300">
            1. Gained extensive knowledge of full authentication & authorization
            implementation, including the use of industry-standard security
            protocols such as JWT
          </p>
          <p className="text-sm font-light text-slate-300">
            2. Sharpened my backend skills, specifically in optimizing database
            queries, improving performance, and handling server-side logic.
          </p>
          <p className="text-sm font-light text-slate-300">
            3. Learned how to properly handle files, including file upload,
            storage, and retrieval, ensuring that the apps data is organized &
            easily accessible while keeping it secure.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4>Future</h4>
          <p className="text-sm font-light text-slate-300">
            As we move forward, I am excited about the possibilities for
            Morrent. It is more than just a car rental application; it is a
            transformative force in an industry that often faces hurdles. Our
            journey doesnt end here. We are committed to refining and expanding{' '}
            <br />
            <br />A sincere thank you to the entire team for their dedication
            and hard work. Morrent represents the collective effort and passion
            we put into creating a product that redefines the car rental
            experience. I look forward to the journey ahead as we continue to
            elevate Morrent to new heights.
          </p>
        </div>
      </section>
    </motion.section>
  );
};

export default DevToday;
