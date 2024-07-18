'use client';

import { motion } from 'framer-motion';
import { workItems } from '@/lib/constants';

const Software = () => {
  return (
    <motion.section
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-y-8 max-md:gap-y-0">
        {workItems.map((item) => {
          return (
            <a
              key={item.company}
              href={item.website}
              target="_blank"
              className="rounded-lg p-4 pl-3 duration-300 hover:bg-slate-900 max-md:px-3"
            >
              <div className="flex gap-x-4 text-sm text-slate-300 max-md:flex-col max-md:gap-x-0">
                <p className="min-w-44 uppercase text-slate-300">{item.date}</p>
                <div className="flex flex-col">
                  <h6 className="mb-1 font-medium uppercase text-slate-100">
                    {item.company}
                  </h6>
                  <h6 className="mb-1 font-normal text-slate-100">
                    {item.role}
                  </h6>
                  <p className="font-light text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Software;
