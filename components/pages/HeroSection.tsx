"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HeroSection() {
    
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
    <div className="relative min-h-[70vh] md:h-[70vh] flex flex-col bg-blue-100 text-white">
      {/* Navbar Wrapper */}
      <div className="relative z-30 w-full">
        <Navbar />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          Main Headline
        </motion.h1>
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-300 mb-8 text-center"
        >
          {" "}
          Grow your network, share your story, and thrive together with Thrive
          Link.
        </motion.p>
      </motion.div>
    </div>
  );
}
