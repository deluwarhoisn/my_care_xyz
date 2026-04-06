import React from "react";

const tutorials = [
    {
        title: "Baby Feeding Basics",
        level: "Beginner",
        duration: "12 min",
        summary: "Learn safe feeding positions and hygiene tips for newborn care.",
    },
    {
        title: "Elderly Mobility Support",
        level: "Intermediate",
        duration: "18 min",
        summary: "How to assist seniors while reducing fall risks at home.",
    },
    {
        title: "Home Recovery Checklist",
        level: "Beginner",
        duration: "10 min",
        summary: "Daily routine and monitoring tips for faster, safer recovery.",
    },
];

export default function Tutorials() {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Tutorials</h1>
            <p className="text-gray-600 mb-10 max-w-2xl">
                Simple caregiver training resources to improve confidence and care quality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map((item) => (
                    <article
                        key={item.title}
                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
                                {item.level}
                            </span>
                            <span className="text-xs text-gray-500">{item.duration}</span>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h2>
                        <p className="text-gray-600 text-sm leading-6">{item.summary}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}