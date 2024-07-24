/* eslint-disable @next/next/no-img-element */
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
            <DialogTrigger className="relative size-28 grow cursor-pointer max-md:size-28">
              <img
                alt={image.altText}
                src={image.src as string}
                key={image.id}
                className="size-full rounded-xl object-cover"
              />
            </DialogTrigger>

            <DialogContent className="size-fit rounded-xl bg-white">
              <DialogHeader>
                <DialogTitle className="text-center text-slate-800">
                  {image.title}
                </DialogTitle>
              </DialogHeader>
              <div className="relative size-fit">
                <img
                  alt={image.altText}
                  src={image.src as string}
                  className="rounded-lg border border-slate-200"
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
