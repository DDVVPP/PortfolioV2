'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Tag from '@/components/shared/Tag';
import { ProcessedImage } from '@/lib/types';

const Art = ({ sortedArtImages }: { sortedArtImages: ProcessedImage[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? sortedArtImages.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return prev === sortedArtImages.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <>
      <motion.section
        className="flex flex-wrap gap-2 p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {sortedArtImages.map(({ id, src, altText, blurDataURL }, idx) => (
          <button
            key={id}
            className="relative size-28 grow cursor-pointer duration-300 hover:opacity-50 max-md:size-28"
            onClick={() => setActiveIndex(idx)}
          >
            <Image
              alt={altText}
              src={src}
              fill
              className="rounded-xl object-cover"
              placeholder="blur"
              sizes="250px"
              blurDataURL={blurDataURL}
            />
          </button>
        ))}
      </motion.section>

      <Dialog
        open={activeIndex !== null}
        onOpenChange={() => setActiveIndex(null)}
      >
        <DialogContent className="scrollbar-hide flex max-h-screen w-[95vw] max-w-[700px] flex-col items-center justify-center overflow-y-auto rounded-xl bg-white px-3 sm:py-10">
          {activeIndex !== null && (
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                layout
                key={sortedArtImages[activeIndex]?.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex min-h-0 w-full flex-col items-center justify-center gap-4"
              >
                <DialogHeader>
                  <DialogTitle className="text-center text-slate-800">
                    {sortedArtImages[activeIndex]?.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="flex w-full max-w-[95vw] items-center justify-between gap-2">
                  <button onClick={handlePrev} className="">
                    <ChevronLeft className="size-6 hover:stroke-corral hover:duration-300" />
                  </button>
                  <div className="relative aspect-[3/4] w-[60vw] max-w-[400px] overflow-hidden rounded-lg">
                    <Image
                      key={sortedArtImages[activeIndex]?.src}
                      alt={sortedArtImages[activeIndex]?.altText}
                      src={sortedArtImages[activeIndex]?.src}
                      fill
                      className="object-contain"
                      placeholder={
                        sortedArtImages[activeIndex]?.blurDataURL
                          ? 'blur'
                          : undefined
                      }
                      blurDataURL={sortedArtImages[activeIndex]?.blurDataURL}
                    />
                  </div>
                  <button onClick={handleNext} className="">
                    <ChevronRight className="size-6 hover:stroke-corral hover:duration-300" />
                  </button>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {sortedArtImages[activeIndex]?.tags.map((tag) => (
                    <Tag
                      key={tag}
                      text={tag}
                      textColor="text-slate-500"
                      borderColor="border-slate-500"
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Art;
