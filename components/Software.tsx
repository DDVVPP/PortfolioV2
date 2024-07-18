'use client';

import { motion } from 'framer-motion';
import { workItems } from '@/lib/constants';

const Software = () => {
  return (
    <motion.section
      className="ml-2 mt-10 flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-y-8">
        {workItems.map((item) => {
          return (
            <div
              key={item.company}
              className="flex gap-x-4 text-sm text-slate-300"
            >
              <p className="min-w-44 uppercase text-slate-300">{item.date}</p>
              <div className="flex flex-col">
                <h6 className="mb-1 font-medium uppercase text-slate-100">
                  {item.company}
                </h6>
                <h6 className="mb-1 font-normal text-slate-100">{item.role}</h6>
                <p className="font-light text-slate-300">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Software;
