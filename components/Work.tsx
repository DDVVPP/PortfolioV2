'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import Software from './Software';
import Architecture from './Architecture';
import { workTabs } from '@/lib/constants';

const Work = () => {
  const [isSelected, setIsSelected] = useState('software');

  return (
    <motion.section
      className="m-10 flex flex-col max-md:m-0 xl:m-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="sticky flex gap-x-4 text-base font-light text-slate-400  max-md:mx-8 max-md:mt-8 max-md:justify-between max-md:text-sm max-sm:text-xs max-xs-362:mx-7 max-xs-345:mx-5">
        {workTabs.map((tab) => (
          <button
            key={tab.tabType}
            type="button"
            onClick={() => setIsSelected(tab.tabType)}
            className={`rounded-lg border border-slate-400 p-2 duration-300 hover:border-red-400 hover:text-slate-300 max-md:p-1.5 ${isSelected === tab.tabType && 'border-red-400 text-slate-300'}`}
          >
            {tab.buttonText}
          </button>
        ))}
      </section>

      <section className="mt-10 max-md:m-6 max-xs-362:my-4">
        {isSelected === 'software' ? <Software /> : <Architecture />}
      </section>
    </motion.section>
  );
};

export default Work;
