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
            description: "Sleek contemporary design with premium materials",
            imageUrl: "https://www.simpolo.net/images/products/sub-products/01_neo-slate-preview.jpg"
        },
        {
            id: 2,
            title: "Luxury Bathroom Remodel",
            category: "bathroom",
            description: "Spa-like elegance for ultimate relaxation",
            imageUrl: "https://milesoftiles.co.uk/wp-content/uploads/1.112-Sand_003-1500x1061.jpg"
        },
        {
            id: 3,
            title: "Contemporary Living Room",
            category: "living",
            description: "Bold statement pieces with timeless appeal",
            imageUrl: "https://kajariatiles.com.au/wp-content/uploads/kajaria_homepage_0003_Layer-5.jpg"
        },
        {
            id: 4,
            title: "Elegant Patio Design",
            category: "outdoor",
            description: "Weather-resistant beauty for outdoor enjoyment",
            imageUrl: "https://cdn.mos.cms.futurecdn.net/zL7tUYK3QbEwpFeDtf8Wd3.jpg"
        },
        {
            id: 5,
            title: "Farmhouse Kitchen Design",
            category: "kitchen",
            description: "Rustic charm meets modern functionality",
            imageUrl: "https://www.simpolo.net/images/products/sub-products/01_neo-slate-preview.jpg"
        },
        {
            id: 6,
            title: "Zen Bathroom Retreat",
            category: "bathroom",
            description: "Tranquil space inspired by natural elements",
            imageUrl: "https://milesoftiles.co.uk/wp-content/uploads/1.112-Sand_003-1500x1061.jpg"
        }
    ];

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section className="py-20 bg-gradient-to-br from-secondary-light via-white to-secondary-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-secondary-dark tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-accent-dark">Inspiration Gallery</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto my-4"></div>
                    <p className="mt-6 text-xl text-secondary max-w-3xl mx-auto font-light leading-relaxed">
                        Get inspired by these beautiful projects featuring our tiles in real-world applications.
                    </p>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-14">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                                activeFilter === filter.id
                                    ? "bg-primary text-white shadow-md transform scale-105"
                                    : "bg-white text-secondary border border-secondary-light hover:bg-secondary-light"
                                }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Gallery grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={400}
                                    height={500}
                                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-primary-light mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a href="#" className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                        View All Projects
                    </a>
                    <p className="text-secondary mt-4 text-sm">Discover more stunning designs in our complete gallery</p>
                </div>
            </div>
        </section>
    );
}