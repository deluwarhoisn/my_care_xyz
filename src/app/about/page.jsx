import React from "react";

const highlights = [
    { title: "Verified Caregivers", text: "Background-checked professionals you can trust." },
    { title: "Flexible Booking", text: "Book short-term or long-term care in minutes." },
    { title: "Family First", text: "Compassionate support designed around your needs." },
];

export default function About() {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
            <div className="max-w-3xl mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Care.xyz</h1>
                <p className="text-gray-600 leading-7">
                    Care.xyz is a trusted caregiving platform that connects families with experienced
                    caregivers for baby care, elderly support, and home recovery assistance.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((item) => (
                    <article
                        key={item.title}
                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h2>
                        <p className="text-gray-600 text-sm leading-6">{item.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}