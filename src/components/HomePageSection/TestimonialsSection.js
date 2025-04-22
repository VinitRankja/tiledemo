'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            text: "The quality of these tiles exceeded our expectations. Our kitchen renovation looks stunning, and we've received so many compliments from visitors.",
            author: "Sarah Johnson",
            role: "Homeowner",
            rating: 5,
            imageUrl: "https://th.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?rs=1&pid=ImgDetMain"
        },
        {
            id: 2,
            text: "As an interior designer, I need reliable suppliers with consistent quality. This company has never disappointed me. Their tile collections are versatile and my clients love the results.",
            author: "Michael Chen",
            role: "Interior Designer",
            rating: 5,
            imageUrl: "https://th.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?rs=1&pid=ImgDetMain"
        },
        {
            id: 3,
            text: "The customer service was exceptional. They helped me choose the perfect tiles for my bathroom renovation and provided expert installation advice.",
            author: "Emma Rodriguez",
            role: "DIY Enthusiast",
            rating: 4,
            imageUrl: "https://th.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?rs=1&pid=ImgDetMain"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Auto rotation
    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 8000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        {"Don't just take our word for it — hear from customers who have transformed their spaces with our tiles."}
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Testimonial carousel */}
                    <div className="overflow-hidden">
                        <div
                            className="transition-transform duration-500 ease-in-out flex"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 bg-white rounded-lg shadow-sm p-8 md:p-12"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    fill={i < testimonial.rating ? "currentColor" : "none"}
                                                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 text-lg mb-8 italic">{`"${testimonial.text}"`}</p>
                                        <div className="flex items-center">
                                            <Image
                                                src={testimonial.imageUrl}
                                                alt={testimonial.author}
                                                width={100}
                                                height={100}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div className="ml-4 text-left">
                                                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-white rounded-full shadow-md p-2 text-gray-800 hover:text-gray-600 transition-colors duration-300"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-white rounded-full shadow-md p-2 text-gray-800 hover:text-gray-600 transition-colors duration-300"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicator dots */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-gray-800 w-6"
                                        : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}