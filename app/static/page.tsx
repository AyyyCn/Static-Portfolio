'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import SlideCard from './components/SlideCard';
import ProjectSlider from './components/ProjectSlider';
import { sections } from './data/sections';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const iconMap = {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
};
const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function StaticPortfolio() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);

  const goTo = (i: number) => {
    const newIndex = (i + sections.length) % sections.length;
    const newDirection =
      newIndex > index || (index === sections.length - 1 && newIndex === 0) ? 1 : -1;
    setState([newIndex, newDirection]);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <main
      {...swipeHandlers}
      className="h-screen w-full flex items-center justify-center bg-cover bg-center text-white relative overflow-hidden px-4"
      style={{ backgroundImage: 'url("/bkg2.jpg")' }}
    >
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button onClick={prev} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button onClick={next} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-14 text-center shadow-2xl min-h-[70vh] max-w-6xl w-full flex flex-col justify-center items-center gap-10 overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute w-full"
          >
            <h2 className="text-4xl font-bold mb-6 text-white text-shadow">
              {sections[index].title}
            </h2>

            {'projects' in sections[index] ? (
              <ProjectSlider projects={sections[index].projects || []} />
            ) : 'images' in sections[index] ? (
              <div className="flex flex-col items-center gap-6">
                <SlideCard content={sections[index].content ?? ""} />
                <div className="flex flex-wrap justify-center gap-4">
                  {sections[index].images!.map((src: string, i: number) => (
                    <img
                      key={i}
                      src={src}
                      alt={`art ${i + 1}`}
                      className="rounded-lg shadow-md max-w-xs max-h-[200px] object-cover"
                    />
                  ))}
                </div>
              </div>
            ) : (
              'icons' in sections[index] ? (
  <div className="flex justify-center gap-8">
    {sections[index].icons!.map((item, i) => {
      const Icon = iconMap[item.icon as keyof typeof iconMap];
      return (
        <a
          key={i}
          href={item.url}
          target="_blank"
          aria-label={item.label}
          className="text-white text-5xl hover:text-[#f8918d] transition-all"

        >
          <Icon />
        </a>
      );
    })}
  </div>
) : (
  <SlideCard content={sections[index].content} />
)

            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? 'bg-white' : 'bg-white/30'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </main>
  );
}
