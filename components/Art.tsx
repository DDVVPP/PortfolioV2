'use client';

import { artImages } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Art = () => {
  return (
    <motion.section
      className="flex flex-wrap gap-2 p-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {artImages.map((image) => {
        return (
          <div
            key={image.id}
            className="relative size-28 grow max-md:size-28"
          >
            <Image
              alt={image.altText}
              src={image.src}
              fill
              className="rounded-xl object-cover"
              placeholder='blur'
              sizes='250px'
            />
          </div>
        );
      })}
    </motion.section>
  );
};

export default Art;
