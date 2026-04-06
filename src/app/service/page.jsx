"use client";

import React from "react";
import { useRouter } from "next/navigation";

const services = [
  {
    id: "baby-care",
    title: "Baby Care",
    description: "Safe, loving, and attentive support for your child.",
    price: "$20/hr",
  },
  {
    id: "elderly-care",
    title: "Elderly Care",
    description: "Respectful daily assistance for senior family members.",
    price: "$25/hr",
  },
  {
    id: "home-recovery",
    title: "Home Recovery Care",
    description: "Comfortable recovery support after illness or treatment.",
    price: "$22/hr",
  },
];

export default function Service() {
  const router = useRouter();

  const handleBooking = (serviceId) => {
    // Placeholder login state for now.
    const isLoggedIn = false;

    if (isLoggedIn) {
      router.push(`/booking?service=${serviceId}`);
      return;
    }

    router.push("/login");
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Our Services</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Choose the care service that matches your family needs and book in a few clicks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <article
            key={service.id}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h2>
            <p className="text-gray-600 text-sm leading-6 mb-4">{service.description}</p>
            <p className="font-semibold text-indigo-700 mb-5">{service.price}</p>
            <button
              onClick={() => handleBooking(service.id)}
              className="w-full rounded-lg bg-indigo-600 text-white py-2.5 hover:bg-indigo-700 transition"
            >
              Book Now
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
