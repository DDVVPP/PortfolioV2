'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import Software from './Software';
import Architecture from './Architecture';

const Work = () => {
  const [isSelected, setIsSelected] = useState('software');
  const ref = useRef('software');

  return (
    <motion.section
      className="m-10 flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="sticky flex gap-x-4 text-base font-light text-slate-400">
        <button
          type="button"
          onClick={() => {
            setIsSelected('software');
            ref.current = 'software';
          }}
          // className="rounded-lg border border-slate-400 p-2 duration-300 hover:border-red-400 hover:text-slate-300 focus:border-red-400 focus:text-slate-300"
          className={`rounded-lg border border-slate-400 p-2 duration-300 hover:border-red-400 hover:text-slate-300 ${ref.current === 'software' && 'focus:border-red-400'}`}
        >
          Software Engineering
        </button>
        <button
          type="button"
          onClick={() => setIsSelected('architecture')}
          className="rounded-lg border border-slate-400 p-2 duration-300 hover:border-red-400 hover:text-slate-300 focus:border-red-400 focus:text-slate-300"
        >
          Architecture
        </button>
      </section>

      {isSelected === 'software' && <Software />}
      {isSelected === 'architecture' && <Architecture />}
    </motion.section>
  );
};

export default Work;
