"use client";

import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Baby Care",
      description: "Trusted and loving care for your little ones.",
      image: "/cleaning-natural-and-organic-baby-care-products-photo.jpeg",
    },
    {
      title: "Elderly Care",
      description: "Compassionate support for senior family members.",
      image: "/elderly-care.jpg",
    },
    {
      title: "Sick People Service",
      description: "Professional home recovery assistance.",
      image: "/sick-care.jpg",
    },
  ];

  const testimonials = [
    { name: "Sarah", feedback: "Amazing service! Highly recommend.", rating: 5 },
    { name: "John", feedback: "Professional caregivers and reliable support.", rating: 4 },
    { name: "Emma", feedback: "They gave us peace of mind.", rating: 5 },
  ];

  return (
    <div className="space-y-24">

      {/* Hero Section */}
      <section className="relative h-[420px] flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Caring Hands, Happy Hearts
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Reliable caregiving services for your loved ones
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Care.xyz connects families with trained, verified, and compassionate caregivers
          for children, elderly, and special home care needs. Our mission is to make
          caregiving safe, stress-free, and accessible.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-indigo-600 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold">5,000+</h3>
            <p className="text-white/80">Happy Families</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">1,200+</h3>
            <p className="text-white/80">Verified Caregivers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-white/80">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="text-gray-700 mb-4 italic">
                  “{t.feedback}”
                </p>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-yellow-500 mt-1">
                  {"⭐".repeat(t.rating)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
