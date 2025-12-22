"use client"; // make this a Client Component

import { useRouter } from "next/navigation";
import React from "react";

// Example service data
const services = [
  { id: "1", title: "Baby Care", description: "Trusted care for your little ones.", price: "$20/hr" },
  { id: "2", title: "Elderly Care", description: "Compassionate care for seniors.", price: "$25/hr" },
  { id: "3", title: "Sick People Service", description: "Support for home recovery.", price: "$22/hr" },
];

const Service = ({ params }) => {
  const router = useRouter();
  const { service_id } = params; // App Router passes params as props

  // Find selected service
  const service = services.find((s) => s.id === service_id);

  if (!service) return <p className="text-center mt-10">Service not found.</p>;

  // Dummy login check
  const isLoggedIn = false; // replace with your auth logic

  const handleBooking = () => {
    if (isLoggedIn) {
      router.push(`/booking/${service.id}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700 mb-4">{service.description}</p>
      <p className="text-lg font-semibold mb-8">Price: {service.price}</p>

      <button
        onClick={handleBooking}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Book Service
      </button>
    </div>
  );
};

export default Service;
