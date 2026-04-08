"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "Mastering Next.js 15: The App Router Guide",
      description: "Exploring the nuances of server components and partial prerequiste rendering in the latest release.",
      date: "2026",
      readTime: "6 MIN READ",
      tag: "DEVELOPMENT"
    },
    {
      title: "The Ethics of Micro-Interactions",
      description: "How subtle animations can either enhance user flow or become a digital distraction.",
      date: "2026",
      readTime: "4 MIN READ",
      tag: "DESIGN"
    },
    {
      title: "Building Craft-O-Card: A Brand Journey",
      description: "The technical and creative challenges of building a personalized branding platform.",
      date: "2026",
      readTime: "10 MIN READ",
      tag: "CASE STUDY"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white font-space selection:bg-purple-500/30">
      
      {/* MINIMAL NAV */}
      <nav className="nav-blur flex gap-8 items-center text-[10px] uppercase tracking-[0.2em] font-bold">
        <Link href="/" className="hover:text-purple-400 transition opacity-50">← Back to Work</Link>
        <span className="text-purple-500">Writing</span>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/*  STICKY HEADER */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6"
            >
              Notes<span className="text-purple-500">.</span>
            </motion.h1>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A collection of thoughts on frontend engineering, 
              minimalist design, and the evolution of the web.
            </p>
            
            <div className="mt-12 flex flex-col gap-4 text-[10px] uppercase tracking-widest font-bold text-white/20">
              <span className="text-white/60">Categories:</span>
              <button className="text-left hover:text-purple-500 transition">Development</button>
              <button className="text-left hover:text-purple-500 transition">Design </button>
              <button className="text-left hover:text-purple-500 transition">Life </button>
            </div>
          </div>

          {/* FEED */}
          <div className="lg:col-span-8 flex flex-col border-t border-white/10">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative py-12 border-b border-white/5 cursor-pointer"
              >
                <Link href={`/blog/${index}`} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em]">
                    <span className="text-purple-500">{post.tag}</span>
                    <span className="text-white/20">{post.date}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {post.title}
                  </h2>
                  
                  <p className="text-white/40 text-base leading-relaxed max-w-2xl">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/20 group-hover:text-white transition-colors">
                    READ ARTICLE <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

        </div>
      </div>

      {/* REUSED FOOTER MINI */}
      <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-white/5 opacity-30 text-[10px] uppercase tracking-[0.2em]">
        <div className="flex justify-between items-center">
          <span>&copy; 2026 Ayushi Chowdhury</span>
          <div className="flex gap-6">
            <a href="https://github.com/Ayushireal17" className="hover:text-white">GH</a>
            <a href="https://linkedin.com" className="hover:text-white">LI</a>
          </div>
        </div>
      </footer>
    </main>
  );
}