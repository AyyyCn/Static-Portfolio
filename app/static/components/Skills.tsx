'use client';
import { useEffect, useState } from 'react';

export default function Skills() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <div className={`transition-all duration-700 ease-out transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-8 w-[90%] md:w-[60%]`}>
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="space-y-2">
        <li><strong>Game Dev:</strong> Unity, Unreal, OpenGL, HLSL</li>
        <li><strong>AI:</strong> Python, Tensorflow, Deep Learning</li>
        <li><strong>Frontend:</strong> React, Angular, Next.js</li>
        <li><strong>Backend:</strong> NestJS, Spring Boot, .NET</li>
        <li><strong>Other:</strong> Git, RabbitMQ, Gurobi</li>
      </ul>
    </div>
  );
}
