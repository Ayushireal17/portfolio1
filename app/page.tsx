"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TypingEffect from "@/components/TypingEffect";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const projects = [
    { title: "Focusly App", tag: "Productivity", img: "/p2.png", color: "from-purple-500/20 to-blue-500/20" },
    { title: "SmartNest", tag: "Fintech", img: "/p3.png", color: "from-emerald-500/20 to-teal-500/20" },
    { title: "Admin Dashboard", tag: "UI/UX", img: "/p4.png", color: "from-orange-500/20 to-red-500/20" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto selection:bg-purple-500/30">

      {/* NAVIGATION */}
      <nav className="nav-blur text-[10px] uppercase tracking-[0.2em] font-bold">
        <Link href="/" className="text-purple-500">Work</Link>
        <Link href="/blog" className="opacity-50 hover:opacity-100 transition">Blog</Link>
        <div className="h-4 w-px bg-(--text-main) opacity-10" />
        <a href="/resume.pdf" target="_blank" className="opacity-50 hover:opacity-100 transition">Resume</a>
        <div className="flex gap-4 items-center border-l border-(--text-main) border-opacity-10 pl-5 md:pl-8">
          <a href="https://github.com/Ayushireal17" target="_blank" className="opacity-50 hover:opacity-100 transition">Git</a>
          <a href="https://www.linkedin.com/in/ayushichowdhury67" target="_blank" className="opacity-50 hover:opacity-100 transition">In</a>
        </div>
        <ThemeToggle />
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[180px]">

        {/* HERO CARD */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="md:col-span-8 md:row-span-2 ramx-card p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Available for Hire</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none">
            I'm Ayushi. <br />
            <TypingEffect texts={["Front-End Dev.", "UI/UX Designer.", "Web Dev."]} />
          </h1>
        </motion.div>

        {/* LOCATION CARD */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 md:row-span-1 ramx-card p-8 flex flex-col justify-center"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Based in</span>
          <h3 className="text-xl font-medium tracking-tight">Kolkata, India</h3>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 md:row-span-1 ramx-card p-8 flex flex-wrap gap-4 items-center justify-center text-[10px] font-bold tracking-widest uppercase group relative overflow-hidden"
        >
          {/* Subtitle Purple Glow Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {["Next.js", "React", "Tailwind"].map((tech) => (
            <span
              key={tech}
              className="relative z-10 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 hover:bg-purple-500/30 hover:border-purple-500/50 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* PROJECT GRID */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 md:row-span-3 ramx-card group cursor-pointer"
          >
            <div className="h-full flex flex-col p-8">
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-bold">{project.tag}</span>
              <h2 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-purple-500 transition-colors">{project.title}</h2>
              <div className={`mt-auto h-64 bg-linear-to-br ${project.color} rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden relative`}>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
              </div>
            </div>
          </motion.div>
        ))}

        {/* CONTACT CARD */}
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="md:col-span-12 md:row-span-1 ramx-card p-8 flex flex-col md:flex-row items-center justify-between gap-6 mt-6"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter">Have a great idea in mind?</h2>
          <a
            href="mailto:ayushichowdhury72@gmail.com"
            className="px-10 py-4 bg-(--text-main) text-(--bg-main) rounded-full font-bold text-sm hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 active:scale-95"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="mt-40 pt-16 border-t border-(--text-main) border-opacity-10 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[10px] uppercase tracking-[0.2em]">
          <span>&copy; {new Date().getFullYear()} Ayushi Chowdhury</span>
          <span>Crafted with &hearts; in Kolkata</span>
        </div>
      </footer>

      {/* NOISE TEXTURE */}
      <div className="bg-noise" />
    </main>
  );
}