'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="flex items-center justify-center h-screen bg-cover bg-center px-4 text-white"
      style={{ backgroundImage: 'url("/bkg2.jpg")' }}
    >
      <div className="bg-black/30 backdrop-blur-md p-10 rounded-2xl text-center shadow-2xl border border-white/20 max-w-xl w-full space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to my portfolio
        </h1>

        <p className="text-lg text-white/80">
          Choose your experience:
        </p>

        {/* Primary CTA: 3D Portfolio */}
        <Link href="3d.adam-ladhari.me">
        <button
    className="w-full px-6 py-4 text-lg font-semibold text-black rounded-lg transition-all hover:brightness-110"
    style={{ backgroundColor: '#eab076' }}
  >
            Enter 3D Portfolio 
          </button>
        </Link>

        {/* Secondary CTA: Static */}
        <Link href="/static">
          <button className="w-full px-6 py-3 text-sm font-medium text-white bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-all">
            View Static Version
          </button>
        </Link>
      </div>
    </main>
  );
}
