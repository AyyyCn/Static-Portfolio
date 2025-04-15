// app/static/components/About.tsx
'use client';
import { useEffect, useState } from 'react';

export default function About() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <div className={`transition-all duration-700 ease-out transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-8 w-[90%] md:w-[60%]`}>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg">
        I'm a software engineering student at INSAT, passionate about game development, AI, and building tools that dig under the hood — from 3D engines to custom automation.
      </p>
    </div>
  );
}
