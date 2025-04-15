'use client';

import React from 'react';

type SlideCardProps = {
  title: string;
  content: string;
};

export default function SlideCard({ title, content }: SlideCardProps) {
  return (
    <div className="flex-shrink-0 w-full md:w-[600px] bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-lg text-center transition-all duration-500 mx-4">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg leading-relaxed">{content}</p>
    </div>
  );
}
