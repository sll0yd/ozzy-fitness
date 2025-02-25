import Image from "next/image";

const locations = [
  {
    name: "McGraths Hill, NSW",
    address: "B, Unit 19/5 Curtis Rd, McGraths Hill NSW 2756",
    contact: "+61 478 120 474",
    image: "/mcgraths-hill.jpg", // Replace with your image path
    mapUrl: "https://www.google.com/maps/embed?pb=...", // Replace with your Google Maps embed URL
  },
  {
    name: "Arundel, QLD",
    address: "83 Daintree Dr, Parkwood QLD 4214, Australie",
    contact: "+61 7 5563 3659",
    image: "/arundel.jpg", // Replace with your image path
    mapUrl: "https://www.google.com/maps/embed?pb=...", // Replace with your Google Maps embed URL
  },
  {
    name: "Upper Ferntree Gully, VIC",
    address: "1204 Burwood Hwy, Upper Ferntree Gully VIC 3156, Australie",
    contact: "+61 432 621 770",
    image: "/upper-ferntree-gully.jpg", // Replace with your image path
    mapUrl: "https://www.google.com/maps/embed?pb=...", // Replace with your Google Maps embed URL
  },
];

export default function GymLocations() {
  return (
    <div className="relative isolate bg-white px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-red-600 sm:text-4xl">
          OUR GYM LOCATIONS
        </h2>
        <p className="mt-4 text-xl font-medium text-gray-600 sm:text-2xl">
          Find a gym near you
        </p>
      </div>

      {/* Location Cards */}
      <div className="mx-auto mt-12 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Gym Photo */}
            <div className="relative h-48 w-full">
              <Image
                src={location.image}
                alt={location.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>

            {/* Location Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {location.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{location.address}</p>
              <p className="mt-2 text-sm text-gray-600">
                Contact: {location.contact}
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-auto">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-48"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}