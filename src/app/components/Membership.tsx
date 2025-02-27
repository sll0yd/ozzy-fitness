import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import members from "../../assets/members.png";

const tiers = [
  {
    name: "STUDENT MEMBERSHIP",
    id: "tier-student",
    href: "#",
    priceWeekly: "$14.95",
    description: "Perfect for students looking to stay fit on a budget.",
    features: [
      "1 month: $59.99",
      "3 months: $149",
      "6 months: $299",
      "12 months: $599",
    ],
  },
  {
    name: "OFF PEAK MEMBERSHIP",
    id: "tier-off-peak",
    href: "#",
    priceWeekly: "$10.95",
    description: "Access the gym during off-peak hours (8AM-4PM).",
    features: [
      "1 month: $35.99",
      "3 months: $99",
      "6 months: $249",
      "12 months: $499",
    ],
  },
  {
    name: "24/7 NO LOCK IN",
    id: "tier-24-7-no-lock-in",
    href: "#",
    priceWeekly: "$16.95",
    description: "24/7 access with no long-term commitment.",
    features: [
      "1 month: $59.99",
      "3 months: $199",
      "6 months: $399",
      "12 months: $849",
    ],
  },
  {
    name: "24/7 ACCESS LOCK IN",
    id: "tier-24-7-lock-in",
    href: "#",
    priceWeekly: "$15.95",
    description: "24/7 access with a 12-month commitment.",
    features: [
      "1 month: $59.99",
      "3 months: $159.99",
      "6 months: $339.99",
      "12 months: $719.99",
    ],
  },
  {
    name: "GROUP FITNESS",
    id: "tier-group-fitness",
    href: "#",
    priceWeekly: "$19.95",
    description: "Join group fitness classes and stay motivated.",
    features: [
      "1 month: $69.99",
      "3 months: $199",
      "6 months: $449",
      "12 months: $899",
    ],
  },
];

export default function Membership() {
  return (
    <div className="relative isolate bg-white px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        {/* Styled like WhyOzzy's header section */}
        <h2 className="text-base font-semibold tracking-wider text-red-600 uppercase">Fitness Plans</h2>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
          MEMBERSHIPS PLANS
        </h1>
        <p className="mt-6 text-xl text-gray-500 leading-relaxed">
          Select an affordable plan that fits your fitness goals and lifestyle. We offer flexible options for everyone, from students to fitness enthusiasts.
        </p>
      </div>

      {/* Membership Plans */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between bg-white rounded-xl p-6 ring-1 ring-gray-200 sm:p-8
                      shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
                      hover:border-red-200 relative overflow-hidden group"
          >
            {/* Red accent line at top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

            {/* Title Section with Fixed Height and Light Background */}
            <div className="flex flex-col justify-center mt-3 mb-6">
              <div className="bg-red-50 rounded-lg py-4 px-2 w-full h-16 flex items-center justify-center">
                <h3 className="text-lg font-bold text-red-600 text-center">
                  {tier.name}
                </h3>
              </div>
            </div>

            {/* Price Section */}
            <div className="mt-2 flex items-baseline justify-center gap-x-2">
              <span className="text-4xl font-bold tracking-tight text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                {tier.priceWeekly}
              </span>
              <span className="text-sm font-medium text-gray-500">/week</span>
            </div>

            {/* Description Section */}
            <p className="mt-4 text-sm text-gray-600 text-center h-12 flex items-center justify-center">
              {tier.description}
            </p>

            {/* Features List */}
            <ul role="list" className="mt-6 space-y-3 text-sm text-gray-600">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3 items-center">
                  <CheckIcon className="h-5 w-5 flex-none text-red-600" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Join Now Button */}
            <a
              href={tier.href}
              className="mt-8 block w-full rounded-md bg-red-600 px-3 py-3 text-center text-sm font-semibold text-white shadow-sm 
                        hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                        focus-visible:outline-red-600 transition-colors duration-300 transform hover:scale-105"
            >
              Join Now
            </a>
          </div>
        ))}
      </div>

      {/* Three-Day Free Trial Card - No red corner */}
      <div className="mx-auto mt-16 max-w-5xl">
        <div
          className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 ring-1 ring-red-100 
                      shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
        >
          <h3 className="text-2xl font-bold text-red-600">3-DAY FREE TRIAL</h3>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Try our gym for free for 3 days. No commitment required!
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded-md bg-red-600 px-6 py-3 text-base font-bold text-white shadow-md 
                      hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                      focus-visible:outline-red-600 transition-colors duration-300 transform hover:scale-105"
          >
            Start Your Trial
          </a>
        </div>
      </div>

      {/* Members Image Section */}
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={members}
            alt="Gym members working out"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}