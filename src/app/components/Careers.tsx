import React from "react";
import DOMPurify from 'dompurify';

// Utility function for sanitizing text
function sanitizeText(text: string): string {
  return DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [],  // Strip all HTML tags
    ALLOWED_ATTR: []   // Strip all attributes
  });
}

// Define types for card and job opening data
interface CardData {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface JobOpeningData {
  title: string;
  description: string;
}

export default function Careers() {
  // Why Join Us Cards
  const whyJoinCards: CardData[] = [
    {
      title: sanitizeText("Constant Growth"),
      description: sanitizeText(
        "Join a team that promotes constant growth. We take care of each other and ensure no one is left behind."
      ),
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          {...props}
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
      ),
    },
    {
      title: sanitizeText("Best Trainers"),
      description: sanitizeText(
        "Be trained by our professional staff who will guide you through the entire process and ensure your success."
      ),
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          {...props}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: sanitizeText("Friendly Team"),
      description: sanitizeText(
        "Nothing is more important than loving what you do. Join a team where you feel included and valued."
      ),
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          {...props}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    }
  ];

  // Job Openings
  const jobOpenings: JobOpeningData[] = [
    {
      title: sanitizeText("Personal Trainer"),
      description: sanitizeText(
        "Help clients achieve their fitness goals with personalized training programs."
      ),
    },
    {
      title: sanitizeText("Group Fitness Instructor"),
      description: sanitizeText(
        "Lead group classes and inspire members to achieve their fitness goals."
      ),
    },
    {
      title: sanitizeText("Gym Maintenance"),
      description: sanitizeText(
        "Ensure our facilities are clean, safe, and ready for members to use."
      ),
    }
  ];

  return (
    <div className="relative isolate bg-white px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-base font-semibold tracking-wider text-red-600 uppercase">
          {sanitizeText("Career Opportunities")}
        </h2>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
          {sanitizeText("GROW WITH OZZY")}
        </h1>
        <p className="mt-6 text-xl text-gray-500 leading-relaxed">
          {sanitizeText(
            "Join our amazing, friendly team at Ozzy Fitness and take the next step in your fitness career. We're passionate about helping you grow and succeed in a supportive and inspiring environment."
          )}
        </p>
      </div>

      {/* Why Join Us Section */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {whyJoinCards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600 mx-auto mb-6">
              <card.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {card.title}
            </h3>
            <p className="text-gray-600">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Current Openings Section */}
      <div className="mx-auto max-w-7xl mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {sanitizeText("Current Openings")}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {sanitizeText(
              "Explore our current job openings and take the first step toward an exciting career at Ozzy Fitness."
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobOpenings.map((job, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {job.description}
              </p>
              <a
                href="#apply"
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                {sanitizeText("Apply Now")}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Job Application Form */}
      <div className="mx-auto max-w-7xl">
        <div id="apply" className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {sanitizeText("Apply to Join Our Team")}
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {sanitizeText("Full Name")}
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {sanitizeText("Email Address")}
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
              <label
                htmlFor="contact-number"
                className="block text-sm font-medium text-gray-700"
              >
                {sanitizeText("Contact Number")}
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
              <label
                htmlFor="why-join"
                className="block text-sm font-medium text-gray-700"
              >
                {sanitizeText("Why do you want to work with us?")}
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
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                {sanitizeText("Which role are you interested in?")}
              </label>
              <select
                id="role"
                name="role"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">
                  {sanitizeText("Select a role")}
                </option>
                <option value="personal-trainer">
                  {sanitizeText("Personal Trainer")}
                </option>
                <option value="group-fitness-instructor">
                  {sanitizeText("Group Fitness Instructor")}
                </option>
                <option value="gym-maintenance">
                  {sanitizeText("Gym Maintenance")}
                </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="cv"
                className="block text-sm font-medium text-gray-700"
              >
                {sanitizeText("Upload your CV and/or Cover Letter")}
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
                {sanitizeText("Submit Application")}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Expression of Interest */}
      <div className="mx-auto mt-20 max-w-7xl text-center">
        <p className="text-lg text-gray-600">
          {sanitizeText("Don't see any openings that interest you? Send your resume to")}{" "}
          <a
            href="mailto:admin@ozzyfitness.com.au"
            className="text-red-600 hover:underline"
          >
            {sanitizeText("admin@ozzyfitness.com.au")}
          </a>
          {", "}
          {sanitizeText("we'd love to hear from you!")}
        </p>
      </div>
    </div>
  );
}