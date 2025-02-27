"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import getintouch from "../../assets/getintouch.png"; // Replace with your image path

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Add refs for both the component and the form title
  const componentRef = useRef(null);
  const formTitleRef = useRef(null);

  // Effect to handle scrolling based on device type
  useEffect(() => {
    if (window.location.hash === "#get-in-touch") {
      // Slightly longer delay to ensure component is fully rendered
      setTimeout(() => {
        // Check if it's mobile view (using window width as a simple way to detect)
        const isMobile = window.innerWidth < 768; // 768px is the md breakpoint in Tailwind

        if (isMobile && formTitleRef.current) {
          // Mobile: scroll to the form title with offset for the navbar
          const navbarHeight = 70; // Approximate height of the navbar in mobile view
          const titlePosition =
            formTitleRef.current.getBoundingClientRect().top;
          const offsetPosition =
            titlePosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else if (componentRef.current) {
          // Desktop: scroll to the beginning of the component
          componentRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Increased delay to ensure everything is loaded
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
      id="get-in-touch"
      ref={componentRef}
      className="flex flex-col md:flex-row w-full bg-gray-50 scroll-mt-24"
    >
      {/* Left Side (Image) - Removed darkening overlays */}
      <div className="w-full md:w-1/2 relative overflow-hidden h-[500px] md:h-auto">
        <Image
          src={getintouch}
          alt="Get In Touch"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
        <div className="absolute bottom-20 right-10 text-white text-right max-w-xs">
          <p className="text-xl md:text-2xl italic">
            « We're here to help! Get in touch and we'll get back to you as soon
            as possible. »
          </p>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center bg-white shadow-lg rounded-lg">
        <div className="max-w-md w-full">
          <h2
            ref={formTitleRef}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900"
          >
            GET IN TOUCH
          </h2>
          <p className="text-sm md:text-base mb-6 text-gray-800 leading-relaxed">
            We'd love to hear from you! Please fill out the form below, and
            we'll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-5 py-2 bg-red-600 text-white font-medium text-sm rounded-md shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
