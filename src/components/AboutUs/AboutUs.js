'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import { Phone, Mail, MapPin, Clock, Check, Route } from 'lucide-react';

export default function AboutUs() {

    const router = useRouter();

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-secondary-light py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-secondary-dark mb-6">About Tile Demo</h1>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">
                        This is a demo for a tile component. It is built with Next.js and Tailwind CSS. It is a simple and easy to use component that can be used in any project.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary-dark mb-6">Our Story</h2>
                            <p className="text-secondary mb-4">
                                Founded in 1995 by the Anderson family, Superior Tiles began as a small workshop
                                dedicated to sourcing and supplying quality tiles to local contractors.
                            </p>
                            <p className="text-secondary mb-4">
                                {"Over 30 years later, we've grown into one of the region's most trusted names intile supply and installation, serving both residential and commercial clients."}
                            </p>
                            <p className="text-secondary">
                                While our business has expanded, our commitment to quality, craftsmanship,
                                and customer satisfaction remains unchanged.
                            </p>
                        </div>
                        <div className="bg-secondary-light h-64 flex items-center justify-center">
                            <p className="text-secondary italic">Company Image Placeholder</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-secondary-light py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-secondary-dark mb-12 text-center">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded shadow-sm">
                            <div className="mb-4 flex justify-center">
                                <div className="bg-primary-light w-16 h-16 rounded-full flex items-center justify-center">
                                    <Check className="w-8 h-8 text-primary-dark" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-secondary-dark mb-3 text-center">Quality</h3>
                            <p className="text-secondary text-center">
                                We never compromise on the quality of our materials, workmanship, or service.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm">
                            <div className="mb-4 flex justify-center">
                                <div className="bg-primary-light w-16 h-16 rounded-full flex items-center justify-center">
                                    <Check className="w-8 h-8 text-primary-dark" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-secondary-dark mb-3 text-center">Innovation</h3>
                            <p className="text-secondary text-center">
                                We continually research new materials, techniques, and designs to offer cutting-edge solutions.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm">
                            <div className="mb-4 flex justify-center">
                                <div className="bg-primary-light w-16 h-16 rounded-full flex items-center justify-center">
                                    <Check className="w-8 h-8 text-primary-dark" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-secondary-dark mb-3 text-center">Integrity</h3>
                            <p className="text-secondary text-center">
                                We operate with transparency, honesty, and respect in all our relationships and transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-secondary-dark mb-12 text-center">Our Team</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((member) => (
                            <div key={member} className="text-center">
                                <div className="bg-secondary-light rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                                    <p className="text-secondary">Photo</p>
                                </div>
                                <h3 className="text-lg font-semibold text-secondary-dark">Team Member {member}</h3>
                                <p className="text-secondary">Position</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="bg-secondary-light py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-secondary-dark mb-10 text-center">Visit Our Showroom</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-secondary h-80 flex items-center justify-center">
                            <p className="text-white">Map Placeholder</p>
                        </div>
                        <div>
                            <div className="flex items-start mb-6">
                                <MapPin className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                                <p className="text-secondary">
                                    234 Street Name, <br />
                                    City, State, 12345 <br />
                                    Zip Code, XYZ
                                </p>
                            </div>
                            <div className="flex items-center mb-6">
                                <Phone className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                                <p className="text-secondary">Toll Free: 91 9876543221 </p>
                            </div>
                            <div className="flex items-center mb-6">
                                <Mail className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                                <p className="text-secondary">tile.demo@tile.com</p>
                            </div>
                            <div className="flex items-start">
                                <Clock className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-secondary mb-2">Monday - Friday: 9am - 6pm</p>
                                    <p className="text-secondary mb-2">Saturday: 10am - 4pm</p>
                                    <p className="text-secondary">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-secondary-dark mb-6">Transform Your Space With Superior Tiles</h2>
                    <p className="text-xl text-secondary mb-8">
                        Schedule a consultation or visit our showroom to explore our comprehensive collection.
                    </p>
                    <button 
                    className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded transition-colors"
                    onClick={() => router.push('/contact-us')}
                    >
                        Contact Us Today
                    </button>
                </div>
            </section>
        </div>
    );
}