"use client";

import { motion } from "framer-motion";
import { Target, Users, Globe } from "lucide-react";

const missions = [
  {
    id: 1,
    icon: <Target />,
    title: "Our Vision",
    description:
      "To create a world where travel is accessible to everyone, regardless of their background or financial situation.",
  },
  {
    id: 2,
    icon: <Users />,
    title: "Our Values",
    description:
      "We believe in the power of travel to transform lives and build bridges between cultures.",
  },
  {
    id: 3,
    icon: <Globe />,
    title: "Our Goal",
    description:
      "To inspire and enable people to explore the world with confidence and curiosity.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Building pathways to success through community, education, and
            opportunity
          </p>{" "}
        </motion.div>

        {/* Desktop View: Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors group"
            >
              <div className="w-16 h-16 mb-6 rounded-full  flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                <div className="group-hover:text-white text-brand-blue transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
