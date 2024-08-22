'use client';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      className="m-12 flex min-h-[800px] w-full flex-col gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="flex gap-4">
        <div className="flex w-1/2 flex-col">
          <div className="h-96 rounded-md bg-slate-100"></div>
          <h6 className="mt-2 text-center text-base font-medium uppercase text-slate-100">
            Dev Today
          </h6>
          <p className="text-center text-sm font-light text-slate-300 opacity-60">
            Description laalal{' '}
          </p>
        </div>
        <div className="h-96 w-1/2 rounded-md bg-slate-100"></div>
      </section>
    </motion.section>
  );
};

export default Home;
