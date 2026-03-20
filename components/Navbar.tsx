"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Better for Next.js App Router
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../public/logo-w.png";

type NavLink = {
  name: string;
  href?: string;
  dropdown?: { name: string; href: string }[];
};

const navLinks = [
  { name: "About", href: "/about" },
  {
    name: "Initiatives", // Captures Programs, Events, Resources
    dropdown: [
      { name: "Programs", href: "/programs" },
      { name: "Events", href: "/events" },
      { name: "Resources", href: "/resources" },
    ],
  },
  {
    name: "Get Involved", // Captures Volunteer, Community, Partner
    dropdown: [
      { name: "Community", href: "/community" },
      { name: "Volunteer", href: "/volunteer" },
      { name: "Partner With Us", href: "/partners" },
    ],
  },
  { 
    name: "Our Impact", 
    dropdown: [
        { name: "Success Stories", href: "/impact" },
        { name: "Testimonials", href: "/testimonials" },
    ]
  },
  { name: "Contact", href: "/contact" },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (path?: string) =>
    `text-sm font-medium transition-colors hover:text-accent flex items-center space-x-1 ${
      path && pathname === path ? "text-accent" : "text-white"
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? 'bg-brand-blue shadow-lg' 
          : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="ThriveLink Logo" width={100} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button className={navLinkClass()}>
                      <span>{link.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-md shadow-xl z-50 animate-in fade-in slide-in-from-top-1">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-3 text-sm text-slate-900 hover:bg-slate-100 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href!} className={navLinkClass(link.href)}>
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <Link href="/community">
              <Button variant="secondary" size="default">
                Join Community
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.dropdown ? (
                   <>
                    <span className="text-white/60 text-xs font-bold uppercase px-2 mt-2">{link.name}</span>
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="text-white hover:text-accent py-2 px-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                   </>
                ) : (
                  <Link
                    href={link.href!}
                    className="text-white hover:text-accent py-2 px-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/community" className="block pt-4" onClick={() => setIsOpen(false)}>
              <Button variant="secondary" className="w-full">
                Join Community
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
