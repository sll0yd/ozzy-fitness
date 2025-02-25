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
    name: "24/7 ACCESS LOCK IN (12 MONTH)",
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
      <div className="mx-auto max-w-4xl text-center">
        {/* MEMBERSHIPS PLANS - Bigger */}
        <h2 className="text-3xl font-semibold text-red-600 sm:text-4xl">
          MEMBERSHIPS PLANS
        </h2>

        {/* Choose the right plan for you - Smaller */}
        <p className="mt-4 text-xl font-medium text-gray-600 sm:text-2xl">
          Choose the right plan for you
        </p>
      </div>

      <p className="mx-auto mt-4 max-w-2xl text-center text-base font-medium text-gray-600 sm:text-lg">
        Select an affordable plan that fits your fitness goals and lifestyle.
      </p>

      {/* Membership Plans */}
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between bg-white rounded-lg p-6 ring-1 ring-gray-900/10 sm:p-8"
          >
            {/* Title Section with Fixed Height */}
            <div className="h-24 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-red-600 text-center">
                {tier.name}
              </h3>
            </div>

            {/* Price Section */}
            <div className="mt-4 flex items-baseline justify-center gap-x-2">
              <span className="text-3xl font-semibold tracking-tight text-gray-900">
                {tier.priceWeekly}
              </span>
              <span className="text-sm text-gray-500">/week</span>
            </div>

            {/* Description Section */}
            <p className="mt-4 text-sm text-gray-600 text-center">
              {tier.description}
            </p>

            {/* Features List */}
            <ul role="list" className="mt-6 space-y-2 text-sm text-gray-600">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-5 w-5 flex-none text-red-600" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Join Now Button */}
            <a
              href={tier.href}
              className="mt-8 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Join Now
            </a>
          </div>
        ))}
      </div>

      {/* Three-Day Free Trial Card */}
      <div className="mx-auto mt-12 max-w-6xl">
        <div className="bg-white rounded-lg p-6 ring-1 ring-gray-900/10 sm:p-8 text-center">
          <h3 className="text-lg font-semibold text-red-600">
            3-DAY FREE TRIAL
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Try our gym for free for 3 days. No commitment required!
          </p>
          <a
            href="#"
            className="mt-4 inline-block rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Start Your Trial
          </a>
        </div>
      </div>

    {/* Members Image Section */}
    <div className="mx-auto mt-16 max-w-6xl">
        <div className="rounded-lg overflow-hidden">
          <Image src={members} alt="" className="w-full h-auto" />
        </div>
        </div>
      </div>
  );
}