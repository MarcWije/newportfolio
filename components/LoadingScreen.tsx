"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [text, setText] = useState("");
  const fullText = "INITIALIZING_SYSTEM_SECURE_LINK...";
  const [progress, setProgress] = useState(0);
  const [isShrinking, setIsShrinking] = useState(false);
  const isDescending = useRef(false);

  useEffect(() => {
    let currentText = "";
    let i = 0;

    const textInterval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText[i];
        setText(currentText);
        i++;
      } else {
        clearInterval(textInterval);
      }
    }, 40);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (!isDescending.current) {
          if (prev >= 100) {
            isDescending.current = true;
            return 100;
          }
          return prev + 1;
        } else {
          return Math.max(0, prev - 4);
        }
      });
    }, 20);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    // Safely trigger completion outside the state update cycle
    if (isDescending.current && progress <= 0 && !isShrinking) {
      setIsShrinking(true);
    }
  }, [progress, isShrinking]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 w-full h-full z-[100] grid place-items-center bg-[#030303]/80 backdrop-blur-2xl font-mono text-cyber-cyan overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-[0.9] z-[-1]"
      >
        <source src="/loading.mp4" type="video/mp4" />
      </video>
      <motion.div 
        initial={{ width: 0, height: 2, opacity: 0 }}
        animate={isShrinking 
          ? { width: 0, height: 2, opacity: 0 } 
          : { width: 340, height: "auto", opacity: 1 }
        }
        exit={{ width: 0, height: 2, opacity: 0 }}
        transition={{ 
          duration: isShrinking ? 0.6 : 0.8, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        onAnimationComplete={() => {
          if (isShrinking) onComplete();
        }}
        className="overflow-hidden p-10 border border-cyber-cyan/20 bg-black/60 rounded-sm shadow-[0_0_50px_rgba(0,242,255,0.05)]"
      >
        <div className="mb-8 text-[11px] tracking-[0.4em] h-4 text-center uppercase whitespace-nowrap min-w-[260px]">
          {text}<span className="animate-pulse">_</span>
        </div>
        <div className="h-[2px] w-full bg-white/5 overflow-hidden relative border border-white/10 min-w-[260px]">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-cyber-cyan shadow-[0_0_15px_#00F2FF]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-[10px] text-gray-400 flex justify-between">
          <span>STATUS: BOOTING</span>
          <span>{progress}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
}