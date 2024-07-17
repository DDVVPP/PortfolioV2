'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Work = () => {
  const [isSelected, setIsSelected] = useState('work');

  return (
    <motion.section
      className="m-5 flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="sticky flex gap-x-4 text-base font-light text-slate-400">
        <button
          type="button"
          onClick={() => {
            setIsSelected('softwareEngineering');
          }}
          className="rounded-lg border border-slate-400 p-2 focus:border-red-400 focus:text-slate-300"
        >
          Software Engineering
        </button>
        <button
          type="button"
          onClick={() => setIsSelected('architecture')}
          className="rounded-lg border border-slate-400 p-2 focus:border-red-400 focus:text-slate-300"
        >
          Architecture
        </button>
      </section>

      {isSelected === 'softwareEngineering' && (
        <section className="mt-5">
          <p>all software eng work</p>
        </section>
      )}
      {isSelected === 'architecture' && (
        <section>
          <p>all architecture work</p>
        </section>
      )}
    </motion.section>
  );
};

export default Work;
