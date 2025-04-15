# import os

# project_dir = "app"
# public_dir = os.path.join(project_dir, "public")

# files = {
#     "globals.css": """html, body {
#   margin: 0;
#   padding: 0;
#   font-family: 'Inter', sans-serif;
#   background: radial-gradient(circle at center, #0f0f23, #000);
#   color: white;
#   min-height: 100vh;
#   overflow-x: hidden;
# }
# a {
#   color: inherit;
#   text-decoration: none;
# }""",

#     "layout.tsx": """import './globals.css';
# import type { ReactNode } from 'react';

# export default function RootLayout({ children }: { children: ReactNode }) {
#   return (
#     <html lang="en">
#       <body>{children}</body>
#     </html>
#   );
# }
# """,

#     "page.tsx": """import Link from 'next/link';

# export default function Home() {
#   return (
#     <main className="flex flex-col items-center justify-center h-screen text-center px-4">
#       <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio</h1>
#       <p className="mb-8 text-gray-300">Choose your experience:</p>
#       <div className="flex gap-6">
#         <button className="bg-white text-black px-6 py-3 rounded hover:scale-105 transition">
#           Static
#         </button>
#         <Link href="https://portfolio-ayyycns-projects.vercel.app" target="_blank">
#           <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
#             3D Portfolio
#           </button>
#         </Link>
#       </div>
#     </main>
#   );
# }
# """
# }

# # Create directory structure
# os.makedirs(project_dir, exist_ok=True)
# os.makedirs(public_dir, exist_ok=True)

# # Write files
# for filename, content in files.items():
#     filepath = os.path.join(project_dir, filename)
#     with open(filepath, 'w', encoding='utf-8') as f:
#         f.write(content)

# print("✅ Project structure generated.")
import os

# Define base directory
base_dir = "app/static"
components_dir = os.path.join(base_dir, "components")
os.makedirs(components_dir, exist_ok=True)

# Create the main page file
page_content = '''\
'use client';

import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function StaticPortfolio() {
  return (
    <main className="min-h-screen px-6 py-12 text-white bg-gradient-to-b from-[#0f0f23] to-[#1a1a2e]">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Adam</h1>
        <p className="text-xl max-w-xl mx-auto">
          Fullstack developer, game dev enthusiast, and AI explorer. Welcome to my static portfolio!
        </p>
      </section>

      <About />
      <Skills />
      <Contact />
    </main>
  );
}
'''

# About component
about_content = '''\
export default function About() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-semibold mb-2">About Me</h2>
      <p className="text-lg">
        I'm a software engineering student at INSAT with a love for reverse engineering,
        automation, shaders, and building tools that simplify or reveal how things work.
      </p>
    </section>
  );
}
'''

# Skills component
skills_content = '''\
export default function Skills() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc pl-6 text-lg space-y-1">
        <li><strong>Game Dev:</strong> Unity, Unreal Engine, HLSL</li>
        <li><strong>AI:</strong> Machine Learning, Prompt Engineering, Deep Learning</li>
        <li><strong>Web Dev:</strong> React, Next.js, Angular, NestJS, Symfony, Spring Boot</li>
        <li><strong>3D & Design:</strong> Blender, Substance Painter, Photoshop</li>
        <li><strong>Languages:</strong> Python, C++, Java, C#</li>
        <li><strong>Cloud:</strong> AWS</li>
      </ul>
    </section>
  );
}
'''

# Contact component
contact_content = '''\
export default function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-2">Contact</h2>
      <p className="text-lg">
        Feel free to reach out via <a href="mailto:adamldr3@gmail.com" className="underline">email</a>,
        or check out my <a href="https://portfolio-ayyycns-projects.vercel.app" target="_blank" className="underline">3D Portfolio</a>.
      </p>
    </section>
  );
}
'''

# Write files
with open(os.path.join(base_dir, "page.tsx"), "w", encoding="utf-8") as f:
    f.write(page_content)

with open(os.path.join(components_dir, "About.tsx"), "w", encoding="utf-8") as f:
    f.write(about_content)

with open(os.path.join(components_dir, "Skills.tsx"), "w", encoding="utf-8") as f:
    f.write(skills_content)

with open(os.path.join(components_dir, "Contact.tsx"), "w", encoding="utf-8") as f:
    f.write(contact_content)

"✅ Static portfolio separated into About, Skills, and Contact components."
