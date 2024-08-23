'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import ArtImages from '@/public/Art-Images-Tiled.png';
import WorkImages from '@/public/Work-Images-Tiled.png';
import ProjectImages from '@/public/Project-Images-Tiled.png';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <motion.section
      className="flex w-full flex-col gap-8 p-12 max-md:p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="flex gap-8  max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <Contact />
        </div>

        <div className="flex w-1/2 flex-col max-md:w-full">
          <Link
            href="/work"
            className="relative h-80 min-w-20 overflow-hidden rounded-xl max-md:w-full"
          >
            <Image
              alt="tiled-art-images"
              src={WorkImages}
              className="rounded-xl object-cover duration-300 hover:scale-110"
              placeholder="blur"
              fill
            />
          </Link>
          <h1 className="mt-3 text-wrap text-center text-sm font-medium uppercase text-slate-100">
            Work
          </h1>
          <h3 className="text-center text-sm font-light text-slate-300 opacity-80">
            Professional work experience
          </h3>
        </div>
      </section>

      <section className="flex gap-8 max-md:flex-col">
        <div className="flex w-1/2 flex-col max-md:w-full">
          <Link
            href="/art"
            className="relative h-80 min-w-20 overflow-hidden rounded-xl max-md:w-full"
          >
            <Image
              alt="tiled-art-images"
              src={ArtImages}
              className="rounded-xl object-cover duration-300 hover:scale-110"
              placeholder="blur"
              fill
            />
          </Link>
          <h1 className="mt-3 text-wrap text-center text-sm font-medium uppercase text-slate-100">
            Art
          </h1>
          <h3 className="text-center text-sm font-light text-slate-300 opacity-80">
            Ceramics, sketches, and paintings
          </h3>
        </div>

        <div className="flex w-1/2 flex-col max-md:-order-1 max-md:w-full">
          <Link
            href="/projects"
            className="relative h-80 min-w-20 overflow-hidden rounded-xl max-md:w-full"
          >
            <Image
              alt="tiled-art-images"
              src={ProjectImages}
              className="rounded-xl object-cover duration-300 hover:scale-110"
              placeholder="blur"
              fill
            />
          </Link>
          <h1 className="mt-3 text-wrap text-center text-sm font-medium uppercase text-slate-100">
            Projects
          </h1>
          <h3 className="text-center text-sm font-light text-slate-300 opacity-80">
            Personal software engineering projects
          </h3>
        </div>
      </section>
    </motion.section>
  );
};

export default Home;
