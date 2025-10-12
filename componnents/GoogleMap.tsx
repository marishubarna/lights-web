import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "ma1nname",
    avatar: "https://i.pravatar.cc/100?img=3",
    text: "I hired Skyshine for internal and external window cleaning, and they did an excellent job!",
  },
  {
    name: "Allex Nikolae",
    avatar: "https://i.pravatar.cc/100?img=4",
    text: "Thrilled with Skyshine's screen cleaning service. The team was friendly and professional!",
  },
  {
    name: "Vitaliy Ivasiv",
    avatar: "https://i.pravatar.cc/100?img=5",
    text: "I recently hired Skyshine for window and gutter cleaning — results were exceptional.",
  },
  {
    name: "Andriy Pukailo",
    avatar: "https://i.pravatar.cc/100?img=6",
    text: "Was hesitant at first, but Skyshine exceeded all expectations. Highly recommend!",
  },
];

const cities = [
  "Hamilton",
  "Brampton",
  "Richmond Hill",
  "Oakville",
  "Mississauga",
  "Vaughan",
  "Markham",
  "Oshawa",
];

export default function GoogleMap() {
  return (
    <section className="bg-[#2B2B2F] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE - CITIES */}
        <div>
          <h2 className="text-4xl font-extrabold mb-8 uppercase">
            We Service the Entire Greater Toronto Area!
          </h2>
          <ul className="space-y-3 text-lg">
            {cities.map((city, index) => (
              <li
                key={index}
                className="flex items-center gap-3 border-b border-gray-700 pb-2"
              >
                <FaMapMarkerAlt className="text-amber-400" />
                {city}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE - MAP + REVIEWS */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dlikxo3e2/image/upload/v1760305368/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-10-12_233226_z4maox.png"
            alt=""
            className="w-full h-full max-w-[100%] max-h-[100%] rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
