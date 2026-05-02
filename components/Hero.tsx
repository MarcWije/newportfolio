"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-2 items-center gap-8 md:gap-16 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="w-full flex flex-col items-center text-center justify-self-center"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono mb-6">
          </div>
          <h2 className="text-sm md:text-base font-mono mb-0 leading-none text-cyber-cyan">Hello !, I Am</h2>
          <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold -mt-1 md:-mt-2 mb-4 sm:mb-8 tracking-tight text-[#00f2ff] leading-none text-balance">
            <motion.span
              animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] [text-shadow:0_0_30px_rgba(0,242,255,0.8),0_0_60px_rgba(0,242,255,0.4)]"
            >
              Shehan Uyanwatte
            </motion.span>
          </h1>
          <h3 className="text-[22px] sm:text-sm font-mono text-cyber-cyan/70 mb-4 uppercase tracking-wider">BSc IT Undergraduate | OUSL</h3>
          <p className="text-sm sm:text-lg md:text-xl text-[#00f2ff]/80 max-w-2xl leading-relaxed mb-10 font-light tracking-wide text-justify">
            <b>I'm a Proactive and results-driven student eager to contribute my skills and learn from industry experts. I'm actively seeking opportunities to gain hands-on experience and build professional connections</b>
          </p>
          
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full aspect-square max-w-[280px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[750px] justify-self-center"
        > 
          <div className="absolute inset-0 border border-cyber-cyan/30 rounded-full rotate-3 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 [box-shadow:0_0_20px_rgba(0,242,255,0.3),0_0_40px_rgba(0,242,255,0.1)]"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm [box-shadow:0_0_20px_rgba(0,242,255,0.5),0_0_40px_rgba(0,242,255,0.2)]">
            <Image 
              src="/me.png" 
              alt="Shehan Uyanwatte"
              width={800}
              height={800}
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