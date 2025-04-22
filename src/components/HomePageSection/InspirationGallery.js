'use client';

import Image from "next/image";
import { useState } from "react";

export default function InspirationGallery() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filters = [
        { id: "all", name: "All" },
        { id: "kitchen", name: "Kitchen" },
        { id: "bathroom", name: "Bathroom" },
        { id: "living", name: "Living Space" },
        { id: "outdoor", name: "Outdoor" }
    ];

    const projects = [
        {
            id: 1,
            title: "Modern Kitchen Backsplash",
            category: "kitchen",
            imageUrl: "https://www.simpolo.net/images/products/sub-products/01_neo-slate-preview.jpg"
        },
        {
            id: 2,
            title: "Luxury Bathroom Remodel",
            category: "bathroom",
            imageUrl: "https://milesoftiles.co.uk/wp-content/uploads/1.112-Sand_003-1500x1061.jpg"
        },
        {
            id: 3,
            title: "Contemporary Living Room",
            category: "living",
            imageUrl: "https://kajariatiles.com.au/wp-content/uploads/kajaria_homepage_0003_Layer-5.jpg"
        },
        {
            id: 4,
            title: "Elegant Patio Design",
            category: "outdoor",
            imageUrl: "https://cdn.mos.cms.futurecdn.net/zL7tUYK3QbEwpFeDtf8Wd3.jpg"
        },
        {
            id: 5,
            title: "Farmhouse Kitchen Design",
            category: "kitchen",
            imageUrl: "https://www.simpolo.net/images/products/sub-products/01_neo-slate-preview.jpg"
        },
        {
            id: 6,
            title: "Zen Bathroom Retreat",
            category: "bathroom",
            imageUrl: "https://milesoftiles.co.uk/wp-content/uploads/1.112-Sand_003-1500x1061.jpg"
        }
    ];

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Inspiration Gallery</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Get inspired by these beautiful projects featuring our tiles in real-world applications.
                    </p>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeFilter === filter.id
                                    ? "bg-gray-800 text-white"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Gallery grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={400}
                                    height={500}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end justify-start p-6">
                                    <h3 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="inline-block px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
}