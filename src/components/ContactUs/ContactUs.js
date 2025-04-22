'use client'

import { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Simulate API request with a delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            setFormStatus({
                submitted: true,
                error: false,
                message: 'Thank you for your message! We will get back to you shortly.'
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                message: '',
            });
        } catch (error) {
            setFormStatus({
                submitted: true,
                error: true,
                message: 'There was an error submitting your message. Please try again.'
            });
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-light text-gray-900">
                        Contact Us
                    </h1>
                    <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
                        Have questions about our tile products or services? We're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Company Info Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100">
                            {/* <h2 className="text-2xl font-light text-gray-900 mb-6">Company Information</h2> */}

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Address</h3>
                                    <p className="text-gray-700">
                                        234 Street Name, <br />
                                        City, State, 12345 <br />
                                        Zip Code, XYZ
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Hours</h3>
                                    <p className="text-gray-700">
                                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                                        Saturday: 9:00 AM - 4:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Contact</h3>
                                    <p className="text-gray-700">
                                        Toll Free: 91 9876543221 <br />
                                        WhatsApp: +91 9876543221 <br />
                                        Email:  tile.demo@tile.com
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-gray-400 hover:text-gray-600">
                                            <span className="sr-only">Facebook</span>
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-600">
                                            <span className="sr-only">Instagram</span>
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-gray-600">
                                            <span className="sr-only">Pinterest</span>
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Section */}
                        {/* <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-light text-gray-900 mb-4">Find Us</h2>
                            <div className="bg-gray-100 rounded-lg">
                                <div className="w-full h-48 flex items-center justify-center text-gray-400">
                                    Map Placeholder
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Contact Form Section */}
                    <div className="lg:col-span-3">
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-light text-gray-900 mb-6">Send Us a Message</h2>

                            {formStatus.submitted ? (
                                <div className={`p-4 mb-6 rounded-md ${formStatus.error ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                                    {formStatus.message}
                                </div>
                            ) : null}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="block w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-gray-900 text-gray-900"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="block w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-gray-900 text-gray-900"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-500 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-gray-900 text-gray-900"
                                            placeholder="Your phone number"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-500 mb-1">
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="block w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-gray-900 text-gray-900"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Product Information</option>
                                            <option>Quote Request</option>
                                            <option>Installation Services</option>
                                            <option>Support</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="block w-full border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:border-gray-900 text-gray-900"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white rounded-md py-3 px-4 text-base font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-150"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}