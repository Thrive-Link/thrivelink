"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Instagram} from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Footer() {
  return (
    // The wrapper defines the total height the reveal takes up
    <footer
      className="relative h-[400px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 left-0 w-full h-[400px] bg-brand-blue text-white flex flex-col justify-between p-10 -z-10">
        {/* Footer Content with Framer Motion Stagger */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">ThriveLink</h3>
            <p className="text-white/70">
              Building communities through shared resources and impactful
              programs.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="font-bold mb-2 text-accent">The Organization</h4>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/programs" className="hover:underline">
              Our Impact
            </Link>
            <Link href="/events" className="hover:underline">
              Contact
            </Link>
          </div>


          <div className="flex flex-col space-y-2">
            <h4 className="font-bold mb-2 text-accent">Our Initiatives</h4>
            <Link href="/events" className="hover:underline">
              Events
            </Link>
            <Link href="/programs" className="hover:underline">
              Programs
            </Link>
            <Link href="/resources" className="hover:underline">
             Resources
            </Link>
            <Link href="/community" className="hover:underline">
              Community
            </Link>
            <Link href="/volunteer" className="hover:underline">
             Volunteer
            </Link>
            <Link href="/partners" className="hover:underline">
              Support/ Partner
            </Link>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-accent">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://twitter.com/ThriveLink" target="_blank">
                  <Twitter />
                </Link>
                <Link href="https://instagram.com/ThriveLink" target="_blank">
                  <Instagram />
                </Link>

            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Join our Newsletter</h4>
            <div className="flex flex-col lg:flex-row gap-2">
              <input
                type="email"
                placeholder="email@example.com"
                className="bg-white/10 border border-white/20 p-2 rounded flex-1 outline-none focus:border-accent"
              />
              <Button variant="secondary" className="bg-secondary text-primary px-4 py-2 rounded font-bold hover:bg-white transition-colors">
                Join
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-sm text-white/50">
          <div className="flex justify-between space-x-4 mb-4">
            <p>
              {" "}
              © {new Date().getFullYear()} ThriveLink. All rights reserved.
            </p>

            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
