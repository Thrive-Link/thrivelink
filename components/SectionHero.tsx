"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function SectionHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  // Animations for the hero section
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Delay between each child
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

return (
  <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-gray-950 text-white px-6">
    {/* Background Glows */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px]" />
    </div>

    <div className="absolute top-0 w-full z-30">
      <Navbar />
    </div>

    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 flex flex-col items-center text-center"
    >
      <motion.h1
        variants={item}
        className="text-5xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500"
      >
        {title}
      </motion.h1>
      
      <motion.p 
        variants={item} 
        className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  </section>
);


}
