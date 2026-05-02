"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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
          className="max-w-7xl mx-auto px-8 sm:px-16 md:px-24 py-20 md:py-32 min-h-screen box-border"
        >
          <Hero />

          {/* About Me Section */}
          <section className="mt-20">
            <h2 className="flex items-center text-sm font-mono tracking-[0.2em] mb-8">
              <span className="w-8 h-[1px] bg-gray-800 mr-4"></span>
              <motion.span
                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] [text-shadow:0_0_15px_rgba(0,242,255,0.5)] font-bold"
              >
                ABOUT ME
              </motion.span>
              <span className="ml-4 flex-grow h-[1px] bg-gray-800"></span>
            </h2>
            <div className="text-[#00f2ff]/80 font-light leading-relaxed space-y-4 max-w-4xl">
              <h2>Education</h2>
              <h3>St. Peter's College - Bambalapitiya (2006 - 2019)</h3>
              <p>= O/L - 7A 2C  | A/L - 2C 1W</p>
              <h3>The Open University of Sri Lanka (2021 - 2022)</h3>
              <p>= Adv. Certificate in Science</p>
              <h3>The Open University of Sri Lanka (2023 - Present)</h3>
              <p>= BSc Information Technology</p>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mt-20">
            <h2 className="flex items-center text-sm font-mono tracking-[0.2em] mb-8">
              <span className="w-8 h-[1px] bg-gray-800 mr-4"></span>
              <motion.span
                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] [text-shadow:0_0_15px_rgba(0,242,255,0.5)] font-bold"
              >
                CERTIFICATIONS
              </motion.span>
              <span className="ml-4 flex-grow h-[1px] bg-gray-800"></span>
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-24">
              {[
                { title: "Advanced Learning Algorithms", issuer: "Stanford University | DeepLearning.AI", image: "/CERT 1.png" },
                { title: "Supervised Machine Learning: Regression & Classification", issuer: "Stanford University | DeepLearning.AI", image: "/CERT 2.png" },
                { title: "Unsupervised Machine Learning, Recommenders, Reinforcement Learning", issuer: "Stanford University | DeepLearning.AI", image: "/CERT 3.png" },
                { title: "Machine Learning Specialization", issuer: "Stanford University | DeepLearning.AI", image: "/CERT 4.png" },
                { title: "Oracle Cloud Infrastructure Certified AI Foundations Associate", issuer: "Oracle University", image: "/CERT 5.png" }
              ].map((cert, i) => (
                <div key={i} className="group border border-white/5 bg-white/[0.02] backdrop-blur-sm p-4 rounded-sm flex flex-col gap-4 hover:border-cyber-cyan/30 transition-all duration-300">
                  <div className="flex flex-col">
                    <span className="text-[#00f2ff] font-bold">{cert.title}</span>
                    <span className="text-xs font-mono text-cyber-cyan/60 uppercase mt-1">{cert.issuer}</span>
                  </div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/10">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mt-20">
            <h2 className="flex items-center text-sm font-mono tracking-[0.2em] mb-12">
              <span className="w-8 h-[1px] bg-gray-800 mr-4"></span>
              <motion.span
                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] [text-shadow:0_0_15px_rgba(0,242,255,0.5)] font-bold"
              >
                SKILLS
              </motion.span>
              <span className="ml-4 flex-grow h-[1px] bg-gray-800"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 md:gap-24">
              {[
                { category: "Languages", items: "Python  TypeScript Java Prolog" },
                { category: "Frameworks", items: "React", "Next.js", "React Native", "Tailwind CSS" },
                { category: "Databases & Tools", items: "Firebase", "Firestore", "Neo4j", "Figma" }
                
              ].map((skill, i) => (
                <div key={i}>
                  <h3 className="text-cyber-cyan text-sm md:text-base font-mono uppercase tracking-widest mb-6 opacity-70">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-4 md:gap-6">
                    {skill.items.map((item, j) => (
                      <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/20 px-3 py-1.5 rounded-none inline-block">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <h2 className="flex items-center text-sm font-mono tracking-[0.2em] mb-12">
              <span className="w-8 h-[1px] bg-gray-800 mr-4"></span>
              <motion.span
                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] [text-shadow:0_0_15px_rgba(0,242,255,0.5)] font-bold"
              >
                PROJECTS
              </motion.span>
              <span className="ml-4 flex-grow h-[1px] bg-gray-800"></span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="GPS Navigation System" 
                points={[
                  "Developed a navigation system using Prolog language for logical route inference.",
                  "Calculates optimal paths based on distance, real-time traffic, and weather conditions.",
                  "Implemented reward functions to dynamically adjust route suggestions."
                ]}
                tech="PROLOG | ALGORITHMS"
              />
              <ProjectCard 
                title="Apparel Marketplace" 
                points={[
                  "Authored a comprehensive business case and designed high-fidelity Figma prototypes to define user journeys and stakeholders' requirements.",
                  "Architected a cross-platform marketplace using React Native (Expo) and TypeScript, integrating Firebase for streamlined authentication and account management.",
                  "Engineered a dual-role user system using Firestore (NoSQL) to manage permissions and secure data access for both vendors and customers.",
                  "Enhanced security by implementing biometric authentication (FaceID/Fingerprint) utilizing Expo’s native modules.",
                  "Developed comprehensive vendor management features, including real-time product inventoryupdates and account information updates."
                ]}
                tech="REACT | FIREBASE | NEO4J"
              />
            </div>
          </section>
        </motion.main>
      )}
    </>
  );
}