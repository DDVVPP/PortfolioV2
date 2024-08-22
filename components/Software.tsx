'use client';

import { motion } from 'framer-motion';
import { softwareWorkItems } from '@/lib/constants';
import Tag from './shared/Tag';
import AngledArrow from './shared/AngledArrow';

const Software = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-y-8 max-md:gap-y-0">
        {softwareWorkItems.map((item) => {
          return (
            <a
              key={item.company}
              href={item.website}
              target="_blank"
              className="group rounded-lg p-4 pl-3 duration-300 hover:bg-slate-900 max-md:px-3"
            >
              <div className="flex gap-x-4 text-sm text-slate-300 max-md:flex-col max-md:gap-x-0">
                <p className="min-w-44 uppercase text-slate-300">{item.date}</p>
                <div className="flex flex-col">
                  <div className="flex gap-x-0.5">
                    <h6 className="flex items-center font-medium uppercase text-slate-100">
                      {item.company}
                    </h6>
                    <AngledArrow
                      alt="arrow-up-right"
                      className="flex stroke-slate-400 duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                  <p className="mb-3 text-sm font-light text-slate-400">
                    {item.description}
                  </p>

                  <h6 className="mb-1 font-normal text-slate-100 duration-300 group-hover:text-corral">
                    {item.role}
                  </h6>
                  <p className="font-light text-slate-300">{item.details}</p>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                    {item.tags.map((tag) => {
                      return <Tag key={tag} text={tag} />;
                    })}
                  </div>
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
