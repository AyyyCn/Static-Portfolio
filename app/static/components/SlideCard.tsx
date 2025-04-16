'use client';

import React from 'react';

type SlideCardProps = {
  content: string;
};

export default function SlideCard({ content }: SlideCardProps) {
  const html = content.replace(
    /(https?:\/\/[^\s]+)/g,
    (url) => {
      if (url.includes('artstation.com')) {
        return `<a href="${url}" target="_blank" class="text-[#f8918d] underline font-medium">ArtStation</a>`;
      }
      return `<a href="${url}" target="_blank" class="text-blue-400 underline">${url}</a>`;
    }
  );

  return (
    <p
      className="text-lg leading-relaxed text-white/90 text-shadow whitespace-pre-line text-center"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
