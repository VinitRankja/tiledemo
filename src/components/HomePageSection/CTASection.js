'use client'

import Image from "next/image";

export default function CTASection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-primary-light rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">Ready to Transform Your Space?</h2>
                            <p className="text-lg text-secondary mb-8">
                                Explore our collections and find the perfect tiles for your next project. Our expert team is ready to assist you with product selection and design advice.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#"
                                    className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300"
                                >
                                    Shop Collections
                                </a>
                                <a
                                    href="#"
                                    className="inline-block px-6 py-3 border-2 border-accent text-accent font-medium rounded-lg hover:bg-accent hover:text-white transition-colors duration-300"
                                >
                                    Request Consultation
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <Image
                                src="https://milesoftiles.co.uk/wp-content/uploads/1.112-Sand_003-1500x1061.jpg"
                                alt="Interior design with premium tiles"
                                width={400}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}