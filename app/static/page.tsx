'use client';

import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const sections = [
  {
    title: 'About Me',
    content: `I'm a software engineering student at INSAT, passionate about game development, AI, and building tools that dig under the hood — from 3D engines to custom automation.`,
  },
  {
    title: 'Skills',
    content: `Game Development: Unity, Unreal Engine, OpenGL, HLSL\nAI: Machine Learning, Deep Learning, Prompt Engineering, TensorFlow, Gurobi\nProgramming: Python, C++, C#, Java\nWeb: React, Angular, NestJS, .NET, Spring Boot, RabbitMQ, Git, Symfony, Next.js, Three.js\n3D & Design: Blender, Substance Painter, Photoshop\nOther: Tools, Save Editors, Reverse Engineering, Custom Automation`,
  },
  {
    title: 'Projects',
    projects: [
      {
        title: '3D Portfolio',
        description: 'Interactive 3D portfolio made with Three.js and Blender, featuring a cozy floating plaza and camera navigation logic.',
      },
      {
        title: 'AI Comment Classifier',
        description: 'Built a sentiment classifier using YouTube and Reddit gaming data, featuring a custom fine-tuned model and sentiment pipeline.',
      },
      {
        title: 'Parki',
        description: 'Smart parking system with React + Flask admin panel, mobile app, and license plate recognition using YOLOv5.',
      },
      {
        title: 'Upwork Freelance Tools',
        description: 'Developed automation bots, custom scripts for financial trading (MQL4/5), and scraping utilities for clients.',
      },
      {
        title: 'Game Jam Projects',
        description: 'Participated and won game dev events at university, building narrative and gameplay prototypes under time pressure.',
      },
    ],
  },
  {
    title: 'Contact',
    content: `Email: adam1dr3@gmail.com\nLinkedIn: in/adam-ladhari-081b58276\nLocation: Sousse, Tunisia`,
  },
];

export default function StaticPortfolio() {
  const [index, setIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const isProject = sections[index].title === 'Projects';

  useEffect(() => {
    if (!isProject) setProjectIndex(0);
  }, [index]);

  const next = () => setIndex((index + 1) % sections.length);
  const prev = () => setIndex((index - 1 + sections.length) % sections.length);
  const nextProject = () =>
    setProjectIndex((projectIndex + 1) % sections[index].projects!.length);
  const prevProject = () =>
    setProjectIndex((projectIndex - 1 + sections[index].projects!.length) % sections[index].projects!.length);

  return (
    <main className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#0d0d1c] to-[#11111f] text-white relative overflow-hidden px-4">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={next}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      <div
        className="w-full max-w-6xl flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {sections.map((section, i) => (
          <div key={i} className="min-w-full flex justify-center items-center">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-10 w-full max-w-3xl text-center shadow-lg relative min-h-[60vh] flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">{section.title}</h2>

              {!section.projects ? (
                <p className="whitespace-pre-line text-lg leading-relaxed">
                  {section.content}
                </p>
              ) : (
                <div className="relative flex flex-col items-center">
                  <div className="absolute top-0">
                    <button
                      onClick={prevProject}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <ChevronUpIcon className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="transition-transform duration-500 ease-in-out pt-10 pb-10 w-full">
                    <div className="bg-white/10 p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-semibold mb-2">
                        {section.projects[projectIndex].title}
                      </h3>
                      <p className="text-md">
                        {section.projects[projectIndex].description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0">
                    <button
                      onClick={nextProject}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <ChevronDownIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
