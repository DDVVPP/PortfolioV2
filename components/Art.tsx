'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { artImages } from '@/lib/constants';
import Tag from '@/components/shared/Tag';

const Art = () => {
  return (
    <motion.section
      className="flex flex-wrap gap-2 p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {artImages.map((image) => {
        return (
          <Dialog key={image.id}>
            <DialogTrigger className="relative size-28 grow cursor-pointer duration-300 hover:opacity-50 max-md:size-28">
              <Image
                alt={image.altText}
                src={image.src}
                key={image.id}
                fill
                className="rounded-xl object-cover"
                placeholder="blur"
                sizes="250px"
              />
            </DialogTrigger>

            <DialogContent className="scrollbar-hide size-fit max-h-[90%] overflow-y-scroll rounded-xl bg-white">
              <DialogHeader>
                <DialogTitle className="text-center text-slate-800">
                  {image.title}
                </DialogTitle>
              </DialogHeader>
              <div className="relative size-fit">
                <Image
                  alt={image.altText}
                  src={image.src}
                  className="rounded-lg border border-slate-200"
                  placeholder="blur"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {image.tags.map((tag) => (
                  <Tag
                    key={image.id}
                    text={tag}
                    textColor={'text-slate-500'}
                    borderColor={'border-slate-500'}
                  />
                ))}
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </motion.section>
  );
};

export default Art;
