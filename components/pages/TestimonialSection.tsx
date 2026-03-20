"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    role: "Community Member",
    text: "ThriveLink has been a game-changer for me. The resources and support have helped me grow both personally and professionally.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael S.",
    role: "Program Participant",
    text: "The programs offered by ThriveLink have provided me with invaluable skills and connections. I can't recommend it enough!",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophia L.",
    role: "Volunteer",
    text: "Volunteering with ThriveLink has been an incredibly rewarding experience. I've met amazing people and made a real impact in my community.",
    rating: 5,
  },
  {
    id: 4,
    name: "David K.",
    role: "Event Attendee",
    text: "Attending events hosted by ThriveLink has opened up new opportunities and allowed me to connect with like-minded individuals.",
    rating: 5,
  },
  {
    id: 5,
    name: "Olivia M.",
    role: "Resource User",
    text: "The resources provided by ThriveLink have been instrumental in helping me navigate challenges and achieve my goals.",
    rating: 4,
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            See what our community members are saying about their journey with
            us.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 text-orange-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 italic mb-8 flex-grow">
                    "{item.text}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      {/* Replace with your actual image component/path */}
                      <div className="w-full h-full bg-blue-100" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #f97316 !important; /* Matches orange theme */
        }
      `}</style>
    </section>
  );
}
