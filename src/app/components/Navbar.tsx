"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ozzyLogo from "../../assets/OZFITWHITE.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1B1D1F]/90 shadow-lg py-3" : "bg-[#1B1D1F] py-4"
      } overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex-shrink-0 md:-ml-4 ml-2">
            <Link href="/">
              <div className="h-12 w-32 md:h-16 md:w-48 relative">
                <Image
                  src={ozzyLogo}
                  alt="Ozzy Gym Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex items-center space-x-4 lg:space-x-8">
              <li>
                <Link
                  href="/locations"
                  className="text-white relative overflow-hidden group font-roboto text-sm lg:text-base uppercase tracking-wide"
                >
                  <span>Locations</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-red-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/memberships"
                  className="text-white relative overflow-hidden group font-roboto text-sm lg:text-base uppercase tracking-wide"
                >
                  <span>Memberships</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-red-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/whyozzy"
                  className="text-white relative overflow-hidden group font-roboto text-sm lg:text-base uppercase tracking-wide"
                >
                  <span>Why Ozzy</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-red-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white relative overflow-hidden group font-roboto text-sm lg:text-base uppercase tracking-wide"
                >
                  <span>Careers</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-red-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#get-in-touch"
                  className="text-white relative overflow-hidden group font-roboto text-sm lg:text-base uppercase tracking-wide"
                >
                  <span>Get in Touch</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-red-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 ml-auto -mr-4">
            <Link href="/join-now">
              <button className="px-4 py-1.5 bg-red-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-red-600 hover:shadow-xl font-roboto text-sm lg:text-base">
                JOIN NOW
              </button>
            </Link>
            <Link href="/free-trial">
              <button className="px-4 py-1.5 bg-[#1B1D1F] text-white font-bold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white hover:text-[#1B1D1F] hover:shadow-xl font-roboto text-sm lg:text-base">
                FREE TRIAL
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-600/20 transition-colors duration-200 focus:outline-none"
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
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-[#1B1D1F]/95 backdrop-blur-sm">
          <ul className="space-y-2">
            <li>
              <Link
                href="/locations"
                className="text-white block px-3 py-2 hover:bg-red-600/20 rounded-md font-roboto text-base uppercase tracking-wide transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/memberships"
                className="text-white block px-3 py-2 hover:bg-red-600/20 rounded-md font-roboto text-base uppercase tracking-wide transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Memberships
              </Link>
            </li>
            <li>
              <Link
                href="/whyozzy"
                className="text-white block px-3 py-2 hover:bg-red-600/20 rounded-md font-roboto text-base uppercase tracking-wide transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Ozzy
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-white block px-3 py-2 hover:bg-red-600/20 rounded-md font-roboto text-base uppercase tracking-wide transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/#get-in-touch"
                className="text-white block px-3 py-2 hover:bg-red-600/20 rounded-md font-roboto text-base uppercase tracking-wide transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
          <div className="flex space-x-3 mt-4 pb-2">
            <Link href="/join-now" className="w-1/2">
              <button 
                className="w-full py-2 bg-red-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700 font-roboto text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                JOIN NOW
              </button>
            </Link>
            <Link href="/free-trial" className="w-1/2">
              <button 
                className="w-full py-2 bg-transparent text-white font-bold rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/10 font-roboto text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FREE PASS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;