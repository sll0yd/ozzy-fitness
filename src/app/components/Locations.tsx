import Image from "next/image";
import location1 from "../../assets/location1.jpg";
import location2 from "../../assets/location2.jpg";
import location3 from "../../assets/location3.jpg";
import location4 from "../../assets/location4.png";

const locations = [
  {
    name: "McGraths Hill, NSW",
    address: "B, Unit 19/5 Curtis Rd, McGraths Hill NSW 2756",
    contact: "+61 478 120 474",
    image: location4, // Use imported image
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.309925959482!2d150.8335805757476!3d-33.623205173321566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0d63b1f0d904e1%3A0x9c1e6871b664d002!2sOZZY%2024HOUR%20FITNESS%20(Mc%27Graths%20Hill)!5e0!3m2!1sfr!2sfr!4v1740508770528!5m2!1sfr!2sfr",
  },
  {
    name: "Arundel, QLD",
    address: "83 Daintree Dr, Parkwood QLD 4214, Australie",
    contact: "+61 7 5563 3659",
    image: location1, // Use imported image
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.497925382966!2d153.34961137552844!3d-27.94803317604547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911126618eb0eb%3A0x8cd583566159eb48!2sOzzy%2024hr%20Fitness%20(Arundel)!5e0!3m2!1sfr!2sfr!4v1740508829102!5m2!1sfr!2sfr",
  },
  {
    name: "Upper Ferntree Gully, VIC",
    address: "1204 Burwood Hwy, Upper Ferntree Gully VIC 3156, Australie",
    contact: "+61 432 621 770",
    image: location2, // Use imported image
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.5735851331674!2d145.3063391759359!3d-37.89365377195572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63d19a9d5c8c9%3A0x56082c6968690da9!2sOZZY%2024HR%20FITNESS%20(Upper%20Fern%20Tree%20Gully)!5e0!3m2!1sfr!2sfr!4v1740508858906!5m2!1sfr!2sfr",
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
            {/* Gym Photo - Larger */}
            <div className="relative h-96 w-full"> {/* Adjusted height */}
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

      {/* Full-Width Club Photo */}
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
          <Image
            src={location3}
            alt="Our Club"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}