
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

const sections = [
    {
        id: "links",
        name: "Quick Links",
        items: [
            { name: "Tile", href: "/tiles" },
            { name: "Blog", href: "#" },
            { name: "Where to Buy", href: "/where-to-buy" },
        ],
    },
];

// Contact information data structure
const contactInfo = [
    { 
        id: 'address', 
        label: 'Address',
        value: '1234 Street Name, City, State, 12345 Zip Code, XYZ',
        icon: <MapPin size={16} className="mr-2 flex-shrink-0" />
    },
    { 
        id: 'phone', 
        label: 'Toll Free',
        value: '+91 9876543221',
        href: 'tel:+919876543221',
        icon: <Phone size={16} className="mr-2 flex-shrink-0" />
    },
    { 
        id: 'whatsapp', 
        label: 'WhatsApp',
        value: '+91 9876543221',
        href: 'https://wa.me/919876543221',
        icon: <MessageSquare size={16} className="mr-2 flex-shrink-0" />
    },
    { 
        id: 'email', 
        label: 'Email',
        value: 'tile.demo@tile.com',
        href: 'mailto:TileDemo@tile.com',
        icon: <Mail size={16} className="mr-2 flex-shrink-0" />
    }
];

export default function Footer() {
    return (
        <footer className="bg-white text-gray-800 py-12 shadow-sm border-t border-gray-200">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                    {/* Brand section */}
                    <div className="lg:col-span-4 flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image
                                alt="Logo"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                width={100}
                                height={100}
                                className="h-10 w-auto"
                            />
                            <h2 className="text-2xl font-bold text-gray-800">Tile Demo</h2>
                        </div>
                        <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                            This is a demo for a tile component. It is built with Next.js and Tailwind CSS.
                            It is a simple and easy to use component that can be used in any project.
                        </p>

                        <div className="flex mt-6 space-x-5">
                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Push sections to the right */}
                    <div className="lg:col-span-2"></div>

                    {/* Navigation sections */}
                    {sections.map((section) => (
                        <div key={section.id} className="lg:col-span-3">
                            <p id={`${section.id}-heading`} className="font-semibold text-lg text-gray-800 mb-4">
                                {section.name}
                            </p>
                            <ul
                                role="list"
                                aria-labelledby={`${section.id}-heading`}
                                className="space-y-3"
                            >
                                {section.items.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-gray-500 hover:text-gray-800 transition-colors duration-200 text-sm flex items-center"
                                        >
                                            <span className="border-b border-transparent hover:border-gray-300 pb-1">
                                                {item.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="lg:col-span-3">
                        <p id='contact-us' className="font-semibold text-lg text-gray-800 mb-4">
                            Contact Us
                        </p>
                        <ul
                            role="list"
                            aria-labelledby='contact-us'
                            className="space-y-4"
                        >
                            {contactInfo.map((item) => (
                                <li key={item.id} className="text-sm">
                                    {item.href ? (
                                        <Link 
                                            href={item.href}
                                            className="text-gray-500 hover:text-gray-800 transition-colors duration-200 flex items-start"
                                        >
                                            {item.icon}
                                            <span>
                                                <span className="font-medium text-gray-600">{item.label}: </span>
                                                {item.value}
                                            </span>
                                        </Link>
                                    ) : (
                                        <div className="text-gray-500 flex items-start">
                                            {item.icon}
                                            <span>
                                                <span className="font-medium text-gray-600">{item.label}: </span>
                                                {item.value}
                                            </span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                    <p className="text-gray-500 text-sm text-center">
                        &copy; {new Date().getFullYear()} Tile Demo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}