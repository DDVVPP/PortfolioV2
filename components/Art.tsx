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
import Tag from '@/components/shared/Tag';
import { ProcessedImage } from '@/lib/types';

const Art = ({ sortedArtImages }: { sortedArtImages: ProcessedImage[] }) => {
  return (
    <motion.section
      className="flex flex-wrap gap-2 p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {sortedArtImages.map(({ id, title, src, altText, tags, blurDataURL }) => {
        return (
          <Dialog key={id}>
            <DialogTrigger className="relative size-28 grow cursor-pointer duration-300 hover:opacity-50 max-md:size-28">
              <Image
                alt={altText}
                src={src}
                key={id}
                fill
                className="rounded-xl object-cover"
                placeholder="blur"
                sizes="250px"
                blurDataURL={blurDataURL}
              />
            </DialogTrigger>

            <DialogContent className="scrollbar-hide flex size-fit flex-col justify-center overflow-y-scroll rounded-xl bg-white max-md:max-h-[90%] max-md:max-w-[90%]">
              <DialogHeader>
                <DialogTitle className="text-center text-slate-800">
                  {title}
                </DialogTitle>
              </DialogHeader>
              <div className="relative">
                <Image
                  alt={altText}
                  src={src}
                  className="rounded-lg border border-slate-200"
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {tags.map((tag) => (
                  <Tag
                    key={tag}
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
