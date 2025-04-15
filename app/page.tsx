'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-b from-[#0d0d1c] to-[#0f0f23] px-4 text-white">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-xl text-center shadow-lg border border-white/20 max-w-xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to my portfolio
        </h1>
        <p className="mb-8 text-lg text-gray-300">
          Choose your experience:
        </p>

        <div className="inline-flex rounded-md shadow-sm" role="group">
        <Link href="/static">
  <button
    className="px-6 py-3 text-sm font-medium text-white bg-gray-700 border border-gray-600 rounded-l-lg hover:bg-gray-600"
  >
    Static
  </button>
</Link>

          <Link href="https://portfolio-ayyycns-projects.vercel.app" target="_blank">
            <button
              className="px-6 py-3 text-sm font-medium text-white bg-gray-700 border border-gray-600 rounded-r-lg hover:bg-gray-600 transition-all"
            >
              3D Portfolio
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
