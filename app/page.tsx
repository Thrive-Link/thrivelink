import Footer from "@/components/Footer";
import HeroSection from "@/components/pages/HeroSection";
import MissionSection from "@/components/pages/MissionSection";
import TestimonialSection from "@/components/pages/TestimonialSection";
import UpcomingEventsSection from "@/components/pages/UpcomingEventsSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Welcome to Thrive Link
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 text-center">
          Grow your network, share your story, and thrive together with Thrive Link.
        </p>
        <div className="flex justify-center">
          <Link href="/community">
            <button className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors">
              Join the Community
            </button>
          </Link>
        </div>
      </div>

      {/* Mission Section */}
      <MissionSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Upcoming Events Section */}
      <UpcomingEventsSection />


      {/* Footer */}
      <Footer />
    </div>
  );
}
