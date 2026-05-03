"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { jost } from "./ui/fonts";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full">
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
              'hue-rotate(-90deg) contrast(12%)',
              'none'
            ]
          }}
          transition={{ 
            duration: 0.5,
            times: [0, 0.1, 0.2, 0.3, 0.4, 1],
            ease: "easeInOut"
          }}
          className="max-w-2xl w-11/12 text-white mx-auto px-8 sm:px-16 md:px-24 py-20 md:py-32 min-h-screen box-border"
        >
          <Hero />

          {/* About Me Section */}
          <section className={`max-w-4xl`}>
            <h2 className="items-center text-lg font-mono tracking-[0.2em] mb-8 text-white">
              <span className="w-8 h-[1px] bg-gray-800 mr-4"></span>
              <motion.span
                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="bg-clip-text p-6 text-white text-transparent bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] [text-shadow:0_0_15px_rgba(0,242,255,0.5)] font-bold"
              >
                ABOUT ME
              </motion.span>
              <span className="ml-4 flex-grow h-[1px] bg-gray-800"></span>
            </h2>
            <div className="text-white text-xl font-light space-y-4 max-w-4xl">
              <h2>Education</h2>
              <h4 className="ml-[1rem]">❖ St. Peter's College - Bambalapitiya (2006 - 2019)</h4>
              <p className="ml-[3rem]">➢ O/L - 7A 2C  | A/L - 2C 1W</p>
              <h4 className="ml-[1rem]">❖ The Open University of Sri Lanka (2021 - 2022)</h4>
              <p className="ml-[3rem]">➢ Adv. Certificate in Science</p>
              <h4 className="ml-[1rem]">❖ The Open University of Sri Lanka (2023 - Present)</h4>
              <p className="ml-[3rem]">➢ BSc Information Technology</p>
              <h2>Work Experience</h2>
              <h4 className="ml-[1rem]">❖ Data Entry Operator - Commercial Bank Nugegoda (2021 Apr - 2022 Nov)</h4>
              <p className="ml-[3rem]">➢ Contributed to the branch's operational efficiency by accurately updating data in various databases.</p>
              <p className="ml-[3rem]">➢ Collaborated with team members to ensure all data entry tasks were completed efficiently and on time</p>
              <h4 className="ml-[1rem]">❖ Data Entry Operator - AV Business Solutions Pvt Ltd (2022 Nov - 2023 May)</h4>
              <p className="ml-[3rem]">➢ Handled all aspects of customer payment updates, ensuring precision and professionalism in every transaction.</p>
              <p className="ml-[3rem]">➢ Promoted to a role handling company-wide email inquiries from customers, demonstrating a strong ability to manage communication and resolve issues.</p>
              <h4 className="ml-[1rem]">❖ Quality Control Specialist - AV Business Solutions Pvt Ltd (2023 May - 2024 July)</h4>
              <p className="ml-[3rem]">➢ Evaluated and analyzed customer care agent interactions to measure performance and identify training needs.</p>
              <h4 className="ml-[1rem]">❖ Quality Control Supervisor - AV Business Solutions Pvt Ltd (2024 July - 2025 Jan)</h4>
              <p className="ml-[3rem]">➢ Supervised a four-member team on Quality Control tasks while also assisting in the training and development of new customer care agents.</p>
              <h4 className="ml-[1rem]">❖ IT Intern - AMW Capital Leasing And Finance PLC (2026 Feb - Present)</h4>
              <p className="ml-[3rem]">➢ Working as an IT Intern at AMW Capital Leasing And Finance PLC, where I am gaining hands-on experience in IT support, system maintenance, and troubleshooting, while also contributing to various IT projects and initiatives within the company.</p>
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
              ].map((cert) => (
                <div key={cert.title} className="group border border-white/5 bg-white/[0.02] backdrop-blur-sm p-4 rounded-sm flex flex-col gap-4 hover:border-cyber-cyan/30 transition-all duration-300">
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
                TECHNICAL EXPERIENCE & SKILLS
              </motion.span>
              <span className="ml-4 flex-grow h-[1px] bg-gray-800"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 md:gap-24">
              {[
                { category: "Machine Learning", items: "Supervised Learning | Unsupervised Learning | Reinforcement Learning " },
                { category: "Neural Networks", items: "Deep Learning | Neural Networks | TensorFlow | Numpy" },
                { category: "Specialized AI", items: "Neuro Symbolic AI | Knowledge-based Systems | Recommender Systems" },
                { category: "Logic & Search", items: "Symbolic AI | Search Algorithms | Prolog" },
                { category: "LLMs & GenAI", items: "LLMOps | LangChain | Vertex AI " },
                { category: "Mobile & Web Development", items: "React Native | React.js | Expo React | NX Framework" },
                { category: "Programming Languages", items: "Python | Java | C | TypeScript | HTML | CSS" },
                { category: "Databases & Cloud", items: "Firestore | Neo4j | SQL | NoSQL | Firebase | AuraDB" },
                { category: "UI/UX & Design Thinking", items: " Figma | User Experience Design | User Interface Design" },
                { category: "Business & Analysis", items: "Business Analysis | Quality Control | Product Knowledge | Financial Services" },
                { category: "Customer Excellence", items: "Customer Service | Customer Satisfaction | Call Quality | Phone Etiquette | Problem Solving | Troubleshooting" },
                { category: "Administrative & Productivity", items: "Microsoft Office | Teamwork | Interpersonal Skills | Communication" }
              ].map((skill) => (
                <div key={skill.category}>
                  <h3 className="text-cyber-cyan text-sm md:text-base font-mono uppercase tracking-widest mb-6 opacity-90">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-12 md:gap-14">
                    {skill.items.split(" | ").map((item) => (
                      <span key={item} className="text-xs md:text-sm uppercase tracking-[0.2em] font-mono text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/20 px-6 py-3 rounded-none inline-block">
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
                title="Neuro Symbolic AI Math Solver" 
                points={[
                  "Designed and implemented a Neuro-Symbolic AI Math Solver using Python, combining a Llama 3.2:1B model for natural language processing and Sympy for symbolic mathematics to solve complex mathematical problems. It uses the speed and efficiency of the 1B parameter model to interpret and process Natural Language, while leveraging Sympy's powerful symbolic computation capabilities to provide accurate solutions."
                ]}
                tech="PYTHON | LLMS | SYMPY | LANGCHAIN"
                images={["/Graph.png", "/Performance.png"]}
              />
               <ProjectCard 
                title="Medical Diagnosis Expert System" 
                points={[
                  "Developed a Medical Expert System using PROLOG, simulating a diagnostic system for common medical conditions via a given number of symptoms. Uses a Knowledge Base and Predicates to Infer and provide possible diagnoses based on user input."
                ]}
                tech="PROLOG | KNOWLEDGE-BASED SYSTEMS | INFERENCE ENGINES"
                images={["/MED1.png", "/MED2.png"]}
              />
              <ProjectCard 
                title="GPS Navigation System" 
                points={[
                  "Developed a navigation system using Prolog language for logical route inference.",
                  "Calculates optimal paths based on distance, real-time traffic, and weather conditions.",
                  "Implemented reward functions to dynamically adjust route suggestions."
                ]}
                tech="PROLOG | SEARCH ALGORITHMS | REWARD FUNCTIONS"
                images={["/MAP.png", "/MAP2.png"]}
              />
              <ProjectCard 
                title="Apparel Marketplace" 
                points={[
                  "Authored a comprehensive business case and designed high-fidelity Figma prototypes to define user journeys and stakeholders' requirements.",
                  "Architected a cross-platform marketplace using React Native (Expo) and TypeScript, integrating Firebase for streamlined authentication and account management.",
                  "Engineered a dual-role user system using Firestore (NoSQL) to manage permissions and secure data access for both vendors and customers.",
                  "Enhanced security by implementing biometric authentication (FaceID/Fingerprint) utilizing Expo’s native modules.",
                  "Developed comprehensive vendor management features, including real-time product inventoryupdates and account information updates.",
                  "Integrated Neo4j graph database to implement a personalized recommendation system."
                ]}
                tech="REACT | FIREBASE | NEO4J | TYPESCRIPT | EXPO REACT | FIGMA | AURADB | FIRESTORE | FIREBASE AUTHENTICATION"
                images={["/APP 1.png", "/APP 2.png"]}
              />
              <ProjectCard 
                title="Mock ATM System" 
                points={[
                  "Developed a mock ATM system using Java, simulating core banking functionalities like Authentication, Deposit, Withdrawal, Account balance inquiry etc ."
                ]}
                tech="JAVA | OOP "
                images={["/ATM1.png", "/ATM2.png"]}
              />
            </div>
          </section>
        </motion.main>
      )}
    </div>
  );
}