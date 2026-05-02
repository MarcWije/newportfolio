"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2 flex flex-col items-center text-center"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono mb-6">
          </div>
          <p>Hello !, I Am </p>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight text-[#00f2ff] leading-tight [text-shadow:0_0_20px_rgba(0,242,255,0.8),0_0_40px_rgba(0,242,255,0.3)]">
            Shehan Uyanwatte
          </h1>
          <p className="text-lg md:text-xl text-[#00f2ff] max-w-2xl leading-relaxed mb-10 font-light tracking-wide mx-auto">
            IT Intern & AI Researcher. Designing intelligent systems and robust architectures.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full max-w-[400px] md:max-w-[500px] aspect-square shrink-0"
        >
          <div className="absolute inset-0 border border-cyber-cyan/30 rounded-2xl rotate-3 translate-x-2 translate-y-2"></div>
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <Image 
              src="/me.png" 
              alt="Shehan Uyanwatte"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}