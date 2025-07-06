'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
            <>
              <DialogHeader>
                <DialogTitle className="text-center text-slate-800">
                  {sortedArtImages[activeIndex]?.title}
                </DialogTitle>
              </DialogHeader>

              <div className="relative flex w-full max-w-[700px] items-center justify-between">
                <button onClick={handlePrev} className="p-2">
                  <ChevronLeft className="size-6" />
                </button>

                <div className="flex w-[85%] items-center justify-center ">
                  <Image
                    alt={sortedArtImages[activeIndex].altText}
                    src={sortedArtImages[activeIndex].src}
                    width={700}
                    height={700}
                    className="h-auto rounded-lg border border-slate-200 object-contain"
                    placeholder="blur"
                    blurDataURL={sortedArtImages[activeIndex].blurDataURL}
                  />
                </div>

                <button onClick={handleNext} className="p-2 ">
                  <ChevronRight className="size-6 hover:stroke-corral" />
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {sortedArtImages[activeIndex].tags.map((tag) => (
                  <Tag
                    key={tag}
                    text={tag}
                    textColor="text-slate-500"
                    borderColor="border-slate-500"
                  />
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Art;
