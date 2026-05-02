"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="inline-block px-3 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono mb-6">
          <span className="animate-pulse mr-2">●</span><span className="tracking-[0.2em]">SYSTEM_READY</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent leading-[0.9]">
          Shehan Uyanwatte
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10 font-light tracking-wide">
          IT Intern & AI Researcher. Designing intelligent systems and robust architectures.
        </p>
      </motion.div>
    </section>
  );
}