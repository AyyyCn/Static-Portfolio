'use client';

import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence, Variants } from 'framer-motion';

type Project = {
  title: string;
  description: string;
};

type Props = {
  projects: Project[];
};

const variants: Variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

export default function ProjectSlider({ projects }: Props) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    const nextIndex = (index + newDirection + projects.length) % projects.length;
    setState([nextIndex, newDirection]);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-[330px] w-full">
      <button
        onClick={() => paginate(-1)}
        className="absolute top-0 p-2 rounded-full bg-white/10 hover:bg-white/20 z-10"
      >
        <ChevronUpIcon className="h-6 w-6" />
      </button>

      <div className="w-full max-w-3xl h-[350px] relative overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute w-full h-full flex items-center justify-center"
          >
<div className="bg-white/10 p-10 rounded-xl shadow-xl w-full text-center max-w-3xl backdrop-blur-md">
  <h3 className="text-3xl font-bold mb-4 text-white drop-shadow">
    {projects[index].title}
  </h3>
  <p className="text-lg leading-relaxed text-white/90 whitespace-pre-line drop-shadow">
    {projects[index].description}
  </p>
</div>

          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => paginate(1)}
        className="absolute bottom-0 p-2 rounded-full bg-white/10 hover:bg-white/20 z-10"
      >
        <ChevronDownIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
