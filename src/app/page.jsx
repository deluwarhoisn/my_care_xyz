"use client"; // Client Component because we might add interactivity

import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Baby Care",
      description: "Trusted care for your little ones.",
      image: "/baby-care.jpg",
    },
    {
      title: "Elderly Care",
      description: "Compassionate care for seniors.",
      image: "/elderly-care.jpg",
    },
    {
      title: "Sick People Service",
      description: "Support for home recovery.",
      image: "/sick-care.jpg",
    },
  ];

  const testimonials = [
    { name: "Sarah", feedback: "Amazing service! Highly recommend.", rating: 5 },
    { name: "John", feedback: "Professional caregivers, very reliable.", rating: 4 },
    { name: "Emma", feedback: "Peace of mind for my family.", rating: 5 },
  ];

  return (
    <div className="space-y-20">
      {/* Banner / Hero */}
      <section className="relative h-96 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-center px-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Caring Hands, Happy Hearts</h1>
          <p className="text-lg md:text-xl">Providing trusted care for your loved ones</p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg">
          Care.xyz connects families with trained and reliable caregivers for children, elderly,
          and special care at home. We aim to make caregiving stress-free, safe, and trustworthy.
        </p>
      </section>

      {/* Services Overview */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white shadow rounded-lg p-6 text-center hover:scale-105 transition">
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={150}
                className="mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials / Success Metrics */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-6 shadow rounded-lg">
                <p className="text-gray-700 mb-4">"{t.feedback}"</p>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-yellow-500">{"⭐".repeat(t.rating)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
