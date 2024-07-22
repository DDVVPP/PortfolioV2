'use client';

import { artImages } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Art = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.section
      className="flex flex-wrap gap-2 p-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {artImages.map((image) => {
        return (
          <motion.div
            key={image.id}
            variants={item}
            className="relative min-h-28 min-w-28 grow overflow-hidden max-md:size-28"
          >
            <Image
              key={image.id}
              alt={image.altText}
              src={image.src}
              fill
              className="rounded-xl object-cover"
            />
          </motion.div>
        );
      })}
    </motion.section>
  );
};

export default Art;
