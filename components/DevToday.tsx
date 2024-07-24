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
      <header className="mb-8 text-center ">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <h3 className="text-sm font-light text-slate-300">
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
          <h4>Deployed Site</h4>
          <a
            href="https://dev-today-v2.vercel.app/posts"
            target="_blank"
            className="text-xs text-slate-300"
          >
            https://dev-today-v2.vercel.app/
          </a>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4>Overview</h4>
          <p className="text-xs text-slate-300">
            Morrent, our cutting-edge car rental application developed using the
            robust MERN stack, is revolutionizing the car rental industry. With
            a dynamic homepage showcasing featured vehicles, convenient pickup
            and drop-off locations, and a comprehensive list of available cars,
            It ensures a seamless and visually appealing experience for users.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4>Tech Stack</h4>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {project.tags.map((tag) => {
              return <Tag key={tag} text={tag} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4>Reflection</h4>
          <p className="text-xs text-slate-300">
            The journey of developing Morrent has been both challenging and
            rewarding. We addressed a prevalent problem of finding a reliable
            and user-friendly platform for car rentals, offering a solution that
            caters to the needs of both renters and car owners. <br />
            <br />
            The dynamic homepage and user-friendly listing and details pages
            reflect our commitment to creating an application that is not only
            functional but also visually engaging. Working with the MERN stack
            allowed us to integrate seamlessly, resulting in a robust and
            responsive platform.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4>Learning</h4>
          <p className="text-xs text-slate-300">
            1. Gained extensive knowledge of full authentication & authorization
            implementation, including the use of industry-standard security
            protocols such as JWT
          </p>
          <p className="text-xs text-slate-300">
            2. Sharpened my backend skills, specifically in optimizing database
            queries, improving performance, and handling server-side logic.
          </p>
          <p className="text-xs text-slate-300">
            3. Learned how to properly handle files, including file upload,
            storage, and retrieval, ensuring that the apps data is organized &
            easily accessible while keeping it secure.
          </p>
          <p className="text-xs text-slate-300">
            4. Acquired proficiency in NextJS and implemented various features
            utilizing industry-standard best practices.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4>Challenges</h4>
          <p className="text-xs text-slate-300">
            1. Gained extensive knowledge of full authentication & authorization
            implementation, including the use of industry-standard security
            protocols such as JWT
          </p>
          <p className="text-xs text-slate-300">
            2. Sharpened my backend skills, specifically in optimizing database
            queries, improving performance, and handling server-side logic.
          </p>
          <p className="text-xs text-slate-300">
            3. Learned how to properly handle files, including file upload,
            storage, and retrieval, ensuring that the apps data is organized &
            easily accessible while keeping it secure.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4>Future</h4>
          <p className="text-xs text-slate-300">
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
