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
          {/* Logo */}
          <div className="flex-shrink-0 -ml-4">
            <Link href="/">
              <div className="h-12 w-32 md:h-16 md:w-48 relative">
                <Image
                  src={ozzyLogo}
                  alt="Ozzy Gym Logo"
                  fill
                  className="object-contain"
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
                  className="text-white relative overflow-hidden group font-roboto text-sm lg:text-base uppercase"
                >
                  <span>Locations</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/memberships"
                  className="text-white relative overflow-hidden group font-roboto text-sm lg:text-base uppercase"
                >
                  <span>Memberships</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/whyozzy"
                  className="text-white relative overflow-hidden group font-roboto text-sm lg:text-base uppercase"
                >
                  <span>Why Ozzy</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white relative overflow-hidden group font-roboto text-sm lg:text-base uppercase"
                >
                  <span>Careers</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/get-in-touch"
                  className="text-white relative overflow-hidden group font-roboto text-sm lg:text-base uppercase"
                >
                  <span>Get in Touch</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#1B1D1F] focus:outline-none"
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

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          <ul className="space-y-2">
            <li>
              <Link
                href="/locations"
                className="text-white block px-3 py-2 hover:bg-[#1B1D1F] rounded-md font-roboto text-base uppercase"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/memberships"
                className="text-white block px-3 py-2 hover:bg-[#1B1D1F] rounded-md font-roboto text-base uppercase"
              >
                Memberships
              </Link>
            </li>
            <li>
              <Link
                href="/coaching"
                className="text-white block px-3 py-2 hover:bg-[#1B1D1F] rounded-md font-roboto text-base uppercase"
              >
                Coaching
              </Link>
            </li>
            <li>
              <Link
                href="/whyozzy"
                className="text-white block px-3 py-2 hover:bg-[#1B1D1F] rounded-md font-roboto text-base uppercase"
              >
                Why Ozzy
              </Link>
            </li>
            <li>
              <Link
                href="/get-in-touch"
                className="text-white block px-3 py-2 hover:bg-[#1B1D1F] rounded-md font-roboto text-base uppercase"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
          <div className="flex space-x-2 mt-4">
            <Link href="/join-now" className="w-1/2">
              <button className="w-full py-1.5 bg-red-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-red-600 hover:shadow-xl font-roboto text-base">
                JOIN NOW
              </button>
            </Link>
            <Link href="/free-trial" className="w-1/2">
              <button className="w-full py-1.5 bg-[#1B1D1F] text-white font-bold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white hover:text-[#1B1D1F] hover:shadow-xl font-roboto text-base">
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