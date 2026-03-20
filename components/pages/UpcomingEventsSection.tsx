"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Networking Workshop",
    description: "Connect with professionals in your field and expand your network.",
    date: "Oct 15, 2023",
    location: "San Francisco, CA",
    category: "Workshop"
  },
  {
    id: 2,
    title: "Career Development Seminar",
    description: "Learn strategies to advance your career and achieve your goals.",
    date: "Nov 20, 2023",
    location: "New York, NY",
    category: "Seminar"
  },
  {
    id: 3,
    title: "Leadership Summit",
    description: "Join industry leaders for insights on effective leadership.",
    date: "Dec 5, 2023",
    location: "Los Angeles, CA",
    category: "Summit"
  }
];

// Framer Motion Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function UpcomingEventsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Join our upcoming sessions, workshops, and networking events to accelerate your growth.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div 
              key={event.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs  transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="bg-gray-200 w-full h-full group-hover:scale-105 transition-transform duration-500" />
                {/* Once you have images, use:
                <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> 
                */}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm justify-between mb-3 font-medium">
                <div className="border-2 border-orange-500 text-orange-500 text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {event.category}
                </div>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {event.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {event.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                   <button className="text-orange-600 font-semibold cursor-pointer text-sm flex items-center gap-1 hover:gap-2 transition-all">
                     Read More <ArrowRight size={16} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>

                {/* View More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-white text-orange-500 border-2 border-orange-500 rounded-md  cursor-pointer hover:text-orange-600 hover:border-orange-600 transition-colors">
           View All
          </button>
        </div>
      </div>
    </section>
  );
}
