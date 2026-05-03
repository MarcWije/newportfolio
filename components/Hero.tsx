"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { jost } from "@/app/ui/fonts";

export default function Hero() {
  return (
    <section className={` ${jost.className} p-12 md:p-20`}>
      <div className="grid grid-cols-2 md:grid-cols-2 items-center gap-12 md:gap-16 w-2xl ">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="w-full flex flex-col items-center p-6 md:items-start text-center md:text-left justify-self-center"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 text-white text-xs mb-6">
          </div>
          <h2 className="text-sm md:text-base mb-0 leading-none">Hello !, I Am</h2>
          <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold -mt-1 md:-mt-2 mb-4 sm:mb-8 tracking-tight text-white leading-none text-balance">
            <motion.span
              animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] [text-shadow:0_0_30px_rgba(0,242,255,0.8),0_0_60px_rgba(0,242,255,0.4)]"
            >
              Shehan Uyanwatte
            </motion.span>
          </h1>
          <h3 className="text-[22px] sm:text-sm font-mono text-white mb-4 uppercase tracking-wider">BSc IT Undergraduate | OUSL</h3>
          <p className="text-sm sm:text-lg md:text-xl p-6 text-white w-xl mb-10 font-light ">
            <b>I'm a Proactive and results-driven student eager to contribute my skills and learn from industry experts. I'm actively seeking opportunities to gain hands-on experience and build professional connections</b>
          </p>
          
          <div className="flex flex-row justify-center md:justify-start gap-10 mt-4">
            <a href="https://www.linkedin.com/in/shehan-uyanwatte-b94805272/" target="_blank" rel="noopener noreferrer" className="text-[#00f2ff] visited:text-[#00f2ff] hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/shehan2k" target="_blank" rel="noopener noreferrer" className="text-[#00f2ff] visited:text-[#00f2ff] hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-3-7-2"/></svg>
            </a>
            <a href="mailto:shehanuyanwatte2000@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#00f2ff] visited:text-[#00f2ff] hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a
  href="/CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white visited:text-white hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45.057 45.057"
    width="55"
    height="32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g>
      <g>
        <g>
          <path d="M19.558,25.389c-0.067,0.176-0.155,0.328-0.264,0.455c-0.108,0.129-0.24,0.229-0.396,0.301c-0.156,0.072-0.347,0.107-0.57,0.107c-0.313,0-0.572-0.068-0.78-0.203c-0.208-0.137-0.374-0.316-0.498-0.541c-0.124-0.223-0.214-0.477-0.27-0.756c-0.057-0.279-0.084-0.564-0.084-0.852c0-0.289,0.027-0.572,0.084-0.853c0.056-0.281,0.146-0.533,0.27-0.756c0.124-0.225,0.29-0.404,0.498-0.541c0.208-0.137,0.468-0.203,0.78-0.203c0.271,0,0.494,0.051,0.666,0.154c0.172,0.105,0.31,0.225,0.414,0.361c0.104,0.137,0.176,0.273,0.216,0.414c0.04,0.139,0.068,0.25,0.084,0.33h2.568c-0.112-1.08-0.49-1.914-1.135-2.502c-0.644-0.588-1.558-0.887-2.741-0.895c-0.664,0-1.263,0.107-1.794,0.324c-0.532,0.215-0.988,0.52-1.368,0.912c-0.38,0.392-0.672,0.863-0.876,1.416c-0.204,0.551-0.307,1.165-0.307,1.836c0,0.631,0.097,1.223,0.288,1.77c0.192,0.549,0.475,1.021,0.847,1.422s0.825,0.717,1.361,0.949c0.536,0.23,1.152,0.348,1.849,0.348c0.624,0,1.18-0.105,1.668-0.312c0.487-0.209,0.897-0.482,1.229-0.822s0.584-0.723,0.756-1.146c0.172-0.422,0.259-0.852,0.259-1.283h-2.593C19.68,25.023,19.627,25.214,19.558,25.389z" />
          <path d="M26.62,24.812L25.192,19.616H22.528L25.084,28.184H28.036L30.713,19.616H28z" />
          <path d="M33.431,0H5.179v45.057h34.699V6.251L33.431,0z M36.878,42.056H8.179V3h23.706v4.76h4.992L36.878,42.056z" />
        </g>
      </g>
    </g>
  </svg>
</a>
          </div>
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