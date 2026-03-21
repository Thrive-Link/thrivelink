"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Mentorship Program",
    description: "Connect with industry professionals and accelerate your career growth."
  },
  {
    id: 2,
    title: "Tech Bootcamp",
    description: "Learn the latest web development technologies and build impressive portfolios."
  }
];

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-gray-500 max-w-lg">
            Comprehensive learning paths designed to take you from beginner to industry-ready professional.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-3xl mb-6 shadow-lg">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                <div className="bg-gray-200 w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" />
                {/* 
                  When you have images, use:
                  <Image 
                    src={program.image} 
                    alt={program.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  /> 
                */}
                
                {/* Floating Badge/Icon on Hover */}
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white p-3 rounded-full shadow-xl">
                    <ArrowUpRight className="text-orange-500" size={24} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {program.description}
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-orange-600 font-bold text-sm cursor-pointer tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More <span className="text-lg"><ChevronRight /></span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
