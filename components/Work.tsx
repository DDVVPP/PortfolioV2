'use client';

import { motion } from 'framer-motion';

const Work = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-y-10 p-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Work
    </motion.section>
  );
};

export default Work;
