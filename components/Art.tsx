'use client';

import { artImages } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Art = () => {
  return (
    <motion.section
      className="flex flex-wrap justify-between gap-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {artImages.map((image) => (
        <div
          key={image.altText}
          className="relative size-24 shrink-0 overflow-hidden align-middle max-md:size-24"
        >
          <Image
            priority
            alt={image.altText}
            src={image.src}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      ))}
    </motion.section>
  );
};

export default Art;
