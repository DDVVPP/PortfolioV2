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
    <section className="flex flex-wrap gap-2">
      {artImages.map((image, idx) => {
        return (
          <div
            key={idx}
            className="relative size-24 shrink-0 overflow-hidden align-middle max-md:size-24"
          >
            <p className="z-50 text-xl text-red-500">{idx}</p>
            <Image
              alt={image.altText}
              src={image.src}
              fill
              className="rounded-xl object-cover"
              key={idx}
            />
          </div>
        );
      })}
    </section>
    // <motion.section
    //   className="flex flex-wrap gap-2"
    //   variants={container}
    //   initial="hidden"
    //   animate="show"
    // >
    //   {artImages.map((image, idx) => {
    //     return (
    //       <motion.div
    //         key={idx}
    //         variants={item}
    //         className="relative size-24 shrink-0 overflow-hidden align-middle max-md:size-24"
    //       >
    //         <p className="text-xl text-red-500">{idx}</p>
    //         <Image
    //           alt={image.altText}
    //           src={image.src}
    //           fill
    //           className="rounded-xl object-cover"
    //           key={idx}
    //         />
    //       </motion.div>
    //     );
    //   })}
    // </motion.section>
  );
};

export default Art;
