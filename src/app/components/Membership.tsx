'use client'

import React from 'react';

const Membership = () => {
  const memberships = [
    {
      title: 'STUDENT',
      price: '$29.99/month',
      description: 'Valid student ID required',
      features: [
        'Access during off-peak hours only',
        'Discounted rate for students',
      ],
      titleBg: 'bg-red-600', // Red background for STUDENT
    },
    {
      title: 'OFF-PEAK',
      price: '$39.99/month',
      description: 'Access during off-peak hours',
      features: [
        'Weekdays 10am-4pm & after 8pm',
        'Weekends full access',
      ],
      titleBg: 'bg-gray-700', // Dark grey background for OFF-PEAK
    },
    {
      title: '12-MONTH',
      price: '$49.99/month',
      description: '12-month commitment',
      features: [
        'Lower monthly rate',
        'Full gym access anytime',
      ],
      titleBg: 'bg-gray-900', // Black background for 12-MONTH
    },
    {
      title: '24 HOUR ACCESS',
      price: '$59.99/month',
      description: 'Access the gym 24/7',
      features: [
        'Including holidays',
        'Personal key fob included',
      ],
      titleBg: 'bg-red-700', // Darker red background for 24 HOUR ACCESS
    },
    {
      title: 'GROUP FITNESS',
      price: '$69.99/month',
      description: 'Full gym access',
      features: [
        'Unlimited group classes',
        'Class reservation priority',
      ],
      titleBg: 'bg-gray-800', // Medium grey background for GROUP FITNESS
    },
    {
      title: 'FITNESS PASSPORT',
      price: '$89.99/month',
      description: 'Access to all club locations',
      features: [
        'Premium amenities',
        'Guest passes included',
      ],
      titleBg: 'bg-red-800', // Deep red background for FITNESS PASSPORT
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memberships.map((membership, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg rounded-lg overflow-hidden text-white"
            >
              {/* Title Section with Unique Background */}
              <div className={`${membership.titleBg} p-4 text-center`}>
                <h3 className="text-2xl font-bold text-white">{membership.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-center text-red-600 mb-4">
                  {membership.price}
                </p>
                <p className="text-sm text-center text-gray-300 mb-6">
                  {membership.description}
                </p>
                <ul className="space-y-3">
                  {membership.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-800 px-6 py-4">
                <button className="w-full px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;