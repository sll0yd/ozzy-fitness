import React from "react";
import Image from "next/image";

export default function Careers() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wider text-red-600 uppercase">
            GROW WITH OZZY
          </h2>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
            Kickstart Your Fitness Career
          </h1>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Join our amazing, friendly team at Ozzy Fitness and take the next step in your fitness career. We’re passionate about helping you grow and succeed in a supportive and inspiring environment.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Growth */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600 mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Constant Growth</h3>
            <p className="text-gray-600">
              Join a team that promotes constant growth. We take care of each other and ensure no one is left behind.
            </p>
          </div>

          {/* Card 2: Best Trainers */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600 mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Best Trainers</h3>
            <p className="text-gray-600">
              Be trained by our professional staff who will guide you through the entire process and ensure your success.
            </p>
          </div>

          {/* Card 3: Friendly Team */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600 mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Friendly Team</h3>
            <p className="text-gray-600">
              Nothing is more important than loving what you do. Join a team where you feel included and valued.
            </p>
          </div>
        </div>

        {/* Current Openings Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Current Openings</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our current job openings and take the first step toward an exciting career at Ozzy Fitness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Trainer */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Trainer</h3>
              <p className="text-gray-600 mb-6">
                Help clients achieve their fitness goals with personalized training programs.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                Apply Now
              </a>
            </div>

            {/* Group Fitness Instructor */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Group Fitness Instructor</h3>
              <p className="text-gray-600 mb-6">
                Lead group classes and inspire members to achieve their fitness goals.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                Apply Now
              </a>
            </div>

            {/* Gym Maintenance */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gym Maintenance</h3>
              <p className="text-gray-600 mb-6">
                Ensure our facilities are clean, safe, and ready for members to use.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        {/* Job Application Form */}
        <div id="apply" className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Apply to Join Our Team
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-number" className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                id="contact-number"
                name="contact-number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div>
              <label htmlFor="why-join" className="block text-sm font-medium text-gray-700">
                Why do you want to work with us?
              </label>
              <textarea
                id="why-join"
                name="why-join"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Which role are you interested in?
              </label>
              <select
                id="role"
                name="role"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">Select a role</option>
                <option value="personal-trainer">Personal Trainer</option>
                <option value="group-fitness-instructor">Group Fitness Instructor</option>
                <option value="gym-maintenance">Gym Maintenance</option>
              </select>
            </div>
            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                Upload your CV and/or Cover Letter
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>

        {/* Expression of Interest */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600">
            Don’t see any openings that interest you? Send your resume to{" "}
            <a href="mailto:admin@ozzyfitness.com.au" className="text-red-600 hover:underline">
              admin@ozzyfitness.com.au
            </a>
            , we’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
}