import React from 'react';

// Simple icon components to replace lucide-react
const Icons = {
  Student: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Dumbbell: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M6 18V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
      <path d="M4 12h2" />
      <path d="M18 12h2" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

const MembershipCard = ({ title, price, period, features, accentColor, icon: Icon }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center mb-4">
          <div className={`w-8 h-8 rounded-full ${accentColor} flex items-center justify-center mr-3`}>
            <Icon />
          </div>
          <div className={`w-12 h-1 ${accentColor}`}></div>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-3xl font-light text-gray-900">${price}</span>
          <span className="ml-1 text-sm text-gray-500">/{period}</span>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <div className={`w-1.5 h-1.5 rounded-full ${accentColor} mt-1.5 mr-3 flex-shrink-0`}></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-6">
        <button className={`w-full py-2.5 border border-gray-200 rounded-lg text-sm font-medium transition-colors hover:${accentColor.replace('bg-', 'bg-')} hover:text-white hover:border-transparent text-gray-900`}>
          Select
        </button>
      </div>
    </div>
  );
};

const MembershipCards = () => {
  const memberships = [
    {
      title: "STUDENT",
      price: "29.99",
      period: "month",
      accentColor: "bg-blue-500",
      icon: Icons.Student,
      features: [
        "Valid student ID required",
        "Access during off-peak hours only",
        "Discounted rate for students"
      ]
    },
    {
      title: "OFF-PEAK",
      price: "39.99",
      period: "month",
      accentColor: "bg-violet-500",
      icon: Icons.Clock,
      features: [
        "Access during off-peak hours",
        "Weekdays 10am-4pm & after 8pm",
        "Weekends full access"
      ]
    },
    {
      title: "12-MONTH",
      price: "49.99",
      period: "month",
      accentColor: "bg-emerald-500",
      icon: Icons.Calendar,
      features: [
        "12-month commitment",
        "Lower monthly rate",
        "Full gym access anytime"
      ]
    },
    {
      title: "24 HOUR ACCESS",
      price: "59.99",
      period: "month",
      accentColor: "bg-rose-500",
      icon: Icons.Clock,
      features: [
        "Access the gym 24/7",
        "Including holidays",
        "Personal key fob included"
      ]
    },
    {
      title: "GROUP FITNESS",
      price: "69.99",
      period: "month",
      accentColor: "bg-amber-500",
      icon: Icons.Users,
      features: [
        "Full gym access",
        "Unlimited group classes",
        "Class reservation priority"
      ]
    },
    {
      title: "FITNESS PASSPORT",
      price: "89.99",
      period: "month",
      accentColor: "bg-teal-500",
      icon: Icons.MapPin,
      features: [
        "Access to all club locations",
        "Premium amenities",
        "Guest passes included"
      ]
    }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-center mb-12">
        <div className="mr-3 text-gray-900">
          <Icons.Dumbbell />
        </div>
        <h2 className="text-2xl font-light text-gray-900">Membership Options</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memberships.map((membership, index) => (
          <MembershipCard
            key={index}
            title={membership.title}
            price={membership.price}
            period={membership.period}
            features={membership.features}
            accentColor={membership.accentColor}
            icon={membership.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default MembershipCards;