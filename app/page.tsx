"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <LoadingScreen key="loader" onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      {isLoaded && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0.4, 1, 0.8, 1],
            x: [0, -4, 4, -2, 2, 0],
            skewX: [0, 10, -10, 5, -5, 0],
            filter: [
              'none',
              'hue-rotate(90deg) blur(1px)',
              'none',
              'hue-rotate(-90deg) contrast(120%)',
              'none'
            ]
          }}
          transition={{ 
            duration: 0.5,
            times: [0, 0.1, 0.2, 0.3, 0.4, 1],
            ease: "easeInOut"
          }}
          className="max-w-5xl mx-auto px-6 py-12 min-h-screen"
        >
          <Hero />

          <section className="mt-12">
            <h2 className="flex items-center text-sm font-mono text-[#00f2ff] tracking-[0.2em] mb-12">
              <span className="w-8 h-[1px] bg-gray-800 mr-4"></span>
              PROJECTS
              <span className="ml-4 flex-grow h-[1px] bg-gray-800"></span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="GPS Navigation System" 
                desc="Developed a navigation system using Prolog, inferring routes based on distance, traffic, and weather reward functions."
                tech="PROLOG / ALGORITHMS"
              />
              <ProjectCard 
                title="Apparel Marketplace" 
                desc="Hyper-niche marketplace featuring dual-role user systems, biometric login, and Neo4j graph relationships."
                tech="REACT / FIREBASE / NEO4J"
              />
            </div>
          </section>
        </motion.main>
      )}
    </>
  );
}