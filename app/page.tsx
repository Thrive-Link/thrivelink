import Footer from "@/components/Footer";
import HeroSection from "@/components/pages/HeroSection";
import MissionSection from "@/components/pages/MissionSection";
import ProgramsSection from "@/components/pages/ProgramsSection";
import TestimonialSection from "@/components/pages/TestimonialSection";
import UpcomingEventsSection from "@/components/pages/UpcomingEventsSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Section */}
      <MissionSection />

      {/* Programs Section */}
      <ProgramsSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Upcoming Events Section */}
      <UpcomingEventsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
