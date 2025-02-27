import React from "react";
import Image from "next/image";
import members1 from "../../assets/members1.png";
import {
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
  SparklesIcon,
  HeartIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

export default function WhyOzzy() {
  // Main features section
  const mainFeatures = [
    {
      title: "24/7 ACCESS",
      description: "Our facilities are always open, allowing you to train whenever fits your schedule. Early bird or night owl, we&apos;re here for you around the clock.",
      icon: ClockIcon,
    },
    {
      title: "VARIETY OF CLASSES",
      description: "From high-intensity interval training to mind-body wellness sessions, our diverse class schedule ensures there&apos;s something for everyone, regardless of your fitness level or preference.",
      icon: UserGroupIcon,
    },
    {
      title: "EXPERT TRAINERS",
      description: "Our certified personal trainers are passionate about helping you reach your goals. With personalized guidance and motivation, you&apos;ll never feel lost on your fitness journey.",
      icon: AcademicCapIcon,
    },
    {
      title: "STATE-OF-THE-ART EQUIPMENT",
      description: "Train with the latest fitness technology and equipment designed to maximize your workout efficiency and results, all maintained to the highest standards.",
      icon: SparklesIcon,
    },
    {
      title: "SUPPORTIVE COMMUNITY",
      description: "Join a welcoming community of like-minded individuals who will encourage and inspire you to push beyond your limits and celebrate your achievements.",
      icon: HeartIcon,
    },
    {
      title: "NUTRITION GUIDANCE",
      description: "Access expert nutrition advice to complement your training regimen. Because we know that great results come from both exercise and proper nutrition.",
      icon: ScaleIcon,
    },
  ];

  // Promotional offers
  const promoOffers = [
    {
      title: "3 DAY FREE TRIAL",
      description: "Experience everything Ozzy Fitness has to offer with no commitment. Available with all memberships.",
      buttonText: "CLAIM NOW",
      href: "#",
    },
    {
      title: "FREE PERSONAL TRAINING SESSION",
      description: "Get a complimentary 1-hour session with one of our expert trainers to kickstart your journey.",
      buttonText: "BOOK SESSION",
      href: "#",
    },
    {
      title: "NO LOCK-IN CONTRACTS",
      description: "Flexible membership options that adapt to your lifestyle, with no long-term commitments required.",
      buttonText: "VIEW PLANS",
      href: "#",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Since joining Ozzy Fitness, I&apos;ve lost 30kg and gained confidence I never thought possible. The trainers are incredible and the 24/7 access fits perfectly with my busy schedule.",
      name: "Sarah M.",
      duration: "Member for 1.5 years",
    },
    {
      quote: "The variety of classes keeps my workouts fresh and exciting. I&apos;ve met amazing people and the community aspect of Ozzy Fitness has made all the difference in my consistency.",
      name: "Michael T.",
      duration: "Member for 2 years",
    },
    {
      quote: "As a busy professional, the 24/7 access is essential. The equipment is top-notch and always well-maintained. The nutrition guidance has completely changed my relationship with food.",
      name: "James R.",
      duration: "Member for 8 months",
    },
  ];

  return (
    <div className="relative isolate bg-white px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-base font-semibold tracking-wider text-red-600 uppercase">
          Your Fitness Journey
        </h2>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
          WHY CHOOSE OZZY FITNESS
        </h1>
        <p className="mt-6 text-xl text-gray-500 leading-relaxed">
          Ozzy Fitness is dedicated to helping you transform your life through
          fitness. We provide a comprehensive approach to wellness with flexible
          membership options, diverse classes, and expert guidance tailored to
          your individual needs.
        </p>
      </div>

      {/* Main Features Grid */}
      <div className="mx-auto mt-12 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        {mainFeatures.map((feature, index) => (
          <div
            key={`feature-${feature.title}-${index}`}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="p-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video or Image Banner */}
      <div className="mx-auto max-w-7xl relative rounded-2xl overflow-hidden shadow-xl mb-20 aspect-video">
        <Image
          src={members1}
          alt="Ozzy Fitness Training Environment"
          width={1200}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Member Testimonials */}
      <div className="mx-auto max-w-7xl mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            WHAT OUR MEMBERS SAY
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real stories from real members who transformed their lives with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={`testimonial-${testimonial.name}-${index}`} 
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="text-center">
                <p className="text-gray-600 italic mb-4">
                  {testimonial.quote}
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className="mx-auto max-w-7xl mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">SPECIAL OFFERS</h2>
          <p className="mt-4 text-lg text-gray-600">
            Start your fitness journey today with these exclusive offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promoOffers.map((offer, index) => (
            <div
              key={`offer-${offer.title}-${index}`}
              className="rounded-xl overflow-hidden shadow-lg group bg-white flex flex-col items-center text-center p-6 h-full"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {offer.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {offer.description}
              </p>
              <div className="mt-auto">
                <a
                  href={offer.href}
                  className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-opacity shadow-sm"
                >
                  {offer.buttonText}
                  <ArrowRightIcon
                    className="ml-2 -mr-1 h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mx-auto max-w-7xl bg-gradient-to-r from-red-600 to-red-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="px-6 py-8 sm:px-12 sm:py-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to start your journey?</span>
              <span className="block text-red-200">
                Join Ozzy Fitness today.
              </span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-white opacity-90">
              Sign up now and get access to exclusive member benefits, including
              our 3-day free trial.
            </p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/memberships"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 transition-colors"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}