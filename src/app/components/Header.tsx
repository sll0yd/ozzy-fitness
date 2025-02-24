'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ozzyLogo from '../../assets/OZFITWHITE.png';

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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1B1D1F] shadow-lg py-3' : 'bg-[#1B1D1F] py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-4">
            <Link href="/">
              <div className="h-16 w-48 relative">
                <Image
                  src={ozzyLogo}
                  alt="Ozzy Gym Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-center space-x-8">
              <li>
                <Link href="/locations" className="text-white relative overflow-hidden group font-roboto font-bold text-lg">
                  <span>Locations</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-white relative overflow-hidden group font-roboto font-bold text-lg">
                  <span>Classes</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="text-white relative overflow-hidden group font-roboto font-bold text-lg">
                  <span>Coaching</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link href="/why-ozzy" className="text-white relative overflow-hidden group font-roboto font-bold text-lg">
                  <span>Why Ozzy</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link href="/get-in-touch" className="text-white relative overflow-hidden group font-roboto font-bold text-lg">
                  <span>Get in Touch</span>
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 mr-4">
            <Link href="/free-trial">
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] transform hover:-translate-y-1 font-roboto text-lg">
                Free Trial
              </button>
            </Link>
            <Link href="/join-now">
              <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.7)] transform hover:-translate-y-1 font-roboto text-lg">
                Join Now
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
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <ul className="space-y-2">
            <li>
              <Link href="/locations" className="text-white block px-3 py-2 hover:bg-[#1B1D1F] rounded-md font-roboto font-bold">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/classes" className="text-white block px-3 py-2 hover:bg-[#1B1D1F] rounded-md font-roboto font-bold">
                Classes
              </Link>
            </li>
            <li>
              <Link href="/coaching" className="text-white block px-3 py-2 hover:bg-[#1B1D1F] rounded-md font-roboto font-bold">
                Coaching
              </Link>
            </li>
            <li>
              <Link href="/why-ozzy" className="text-white block px-3 py-2 hover:bg-[#1B1D1F] rounded-md font-roboto font-bold">
                Why Ozzy
              </Link>
            </li>
            <li>
              <Link href="/get-in-touch" className="text-white block px-3 py-2 hover:bg-[#1B1D1F] rounded-md font-roboto font-bold">
                Get in Touch
              </Link>
            </li>
          </ul>
          <div className="flex flex-col space-y-2 mt-4 px-3">
            <Link href="/free-trial">
              <button className="w-full py-2 bg-white text-black font-semibold rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] font-roboto text-lg">
                Free Trial
              </button>
            </Link>
            <Link href="/join-now">
              <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)] font-roboto text-lg">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;