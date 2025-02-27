"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import ozzyLogo from "../../assets/OZFITWHITE.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Watch for hash changes to update active link and force background
  useEffect(() => {
    const updateActiveLink = () => {
      const hash = window.location.hash;
      if (hash === "#get-in-touch") {
        setActiveLink("/#get-in-touch");
        setScrolled(true); // Ensure navbar stays visible
      } else {
        setActiveLink(window.location.pathname);
      }
    };

    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);
    return () => window.removeEventListener("hashchange", updateActiveLink);
  }, []); 

  // Check if we're on the get-in-touch section when the component mounts
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#get-in-touch") {
      setActiveLink("/#get-in-touch");
      setScrolled(true); // Force background to stay visible
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else if (window.location.hash !== "#get-in-touch") {
        // Only unset scrolled if not on get-in-touch section
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force background to persist when hash changes to #get-in-touch
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#get-in-touch") {
        setScrolled(true); // Force background to stay visible
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Check localStorage for active link on mount
  useEffect(() => {
    const savedActiveLink = localStorage.getItem("activeNavLink");
    if (savedActiveLink) {
      setActiveLink(savedActiveLink);
      if (savedActiveLink === "/#get-in-touch") {
        setScrolled(true); // Force background to stay visible
      }
    }
  }, []);

  // Type-safe scrollToSection
  const scrollToSection = (
    e: MouseEvent<HTMLAnchorElement>, 
    sectionId: string
  ) => {
    e.preventDefault();

    // Special handling for get-in-touch
    if (sectionId === "get-in-touch") {
      setActiveLink("/#get-in-touch");
      localStorage.setItem("activeNavLink", "/#get-in-touch");
      setScrolled(true); // Ensure navbar stays visible
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });

      // Wait for scroll to finish before closing menu
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 600);
    } else {
      // If not found, navigate to it
      window.location.href = `/#${sectionId}`;

      // Force background to be visible
      setScrolled(true);

      // Close menu after navigation
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 600);
    }
  };

  // Define type for nav links
  interface NavLink {
    name: string;
    path: string;
    isScroll?: boolean;
    sectionId?: string;
  }

  const navLinks: NavLink[] = [
    { name: "Locations", path: "/locations" },
    { name: "Memberships", path: "/memberships" },
    { name: "Why Ozzy", path: "/whyozzy" },
    { name: "Careers", path: "/careers" },
    {
      name: "Get in Touch",
      path: "/#get-in-touch",
      isScroll: true,
      sectionId: "get-in-touch",
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1B1D1F] shadow-lg py-3" : "bg-[#1B1D1F] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex-shrink-0 md:-ml-4 ml-2 transition-all duration-300">
            <Link href="/">
              <div className="h-12 w-32 md:h-16 md:w-48 relative">
                <Image
                  src={ozzyLogo}
                  alt="Ozzy Gym Logo"
                  fill
                  className="object-contain hover:opacity-90 transition-opacity duration-300"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex items-center space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={
                      link.isScroll
                        ? (e) => scrollToSection(e, link.sectionId || "")
                        : undefined
                    }
                    className={`text-white relative inline-block group font-roboto text-sm lg:text-base uppercase tracking-wide transition-colors duration-300 hover:text-red-200 ${
                      link.isScroll ? "cursor-pointer" : ""
                    }`}
                  >
                    <span className="relative inline-block">
                      {link.name}
                      <span
                        className={`absolute bottom-[-6px] left-0 right-0 h-0.5 bg-red-600 transform origin-center transition-transform duration-300 ${
                          (link.path === "/#get-in-touch" &&
                            activeLink === "/#get-in-touch") ||
                          (!link.isScroll && activeLink === link.path)
                            ? "scale-x-0"
                            : "group-hover:scale-x-100 scale-x-0"
                        }`}
                      ></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 ml-auto -mr-4">
            <Link href="/memberships">
              <button className="px-4 py-1.5 bg-red-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-red-600 hover:shadow-xl hover:scale-105 font-roboto text-sm lg:text-base">
                JOIN NOW
              </button>
            </Link>
            <Link href="/memberships">
              <button className="px-4 py-1.5 bg-[#1B1D1F] text-white font-bold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white hover:text-[#1B1D1F] hover:shadow-xl hover:scale-105 font-roboto text-sm lg:text-base">
                FREE TRIAL
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                // Force the background to be visible if we're on get-in-touch
                if (window.location.hash === "#get-in-touch") {
                  setScrolled(true);
                }
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-600/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600/50"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - with improved animation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-[#1B1D1F] shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-red-400 transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-4 pt-2 pb-4 space-y-2">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path} className="w-full">
                    {link.isScroll ? (
                      <Link
                        href={link.path}
                        onClick={(e) => scrollToSection(e, link.sectionId || "")}
                        className="block w-full px-3 py-2 rounded-md font-roboto text-base uppercase tracking-wide transition-colors duration-200 cursor-pointer text-white hover:text-red-400"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        href={link.path}
                        className={`block w-full px-3 py-2 rounded-md font-roboto text-base uppercase tracking-wide transition-colors duration-200 text-white hover:text-red-400`}
                        onClick={() => {
                          setActiveLink(link.path);
                          localStorage.setItem("activeNavLink", link.path);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col space-y-3 mt-8 pb-2">
                <Link href="/memberships" className="w-full">
                  <button
                    className="w-full py-2 bg-red-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700 active:scale-95 font-roboto text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    JOIN NOW
                  </button>
                </Link>
                <Link href="/memberships" className="w-full">
                  <button
                    className="w-full py-2 bg-transparent text-white font-bold rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/10 active:scale-95 font-roboto text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FREE PASS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;