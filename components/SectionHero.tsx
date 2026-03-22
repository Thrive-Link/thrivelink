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
    <section className="relative bg-gray-900 text-white py-20">
      <div className="relative z-30 w-full">
        <Navbar />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p variants={item} className="text-lg md:text-xl mb-8">
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}
