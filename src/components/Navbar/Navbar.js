'use client'

import Link from 'next/link'
import { Fragment, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
    categories: [
        {
            id: 'tile',
            name: 'Tiles',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'location',
                    name: 'Location',
                    items: [
                        { name: 'Living Room', href: '/tiles?location=living-room' },
                        { name: 'Bathroom', href: '/tiles?location=bathroom' },
                        { name: 'Bedroom', href: '/tiles?location=bedroom' },
                        { name: 'Kitchen', href: '/tiles?location=kitchen' },
                        { name: 'Outdoor', href: '/tiles?location=outdoor' },
                        { name: 'Balcony', href: '/tiles?location=balcony' },
                        { name: 'Staircase', href: '/tiles?location=staircase' },
                        { name: 'Elevation', href: '/tiles?location=elevation' },
                        { name: 'Commercial', href: '/tiles?location=commercial' },
                        { name: 'Countertop', href: '/tiles?location=countertop' },
                    ],
                },
                {
                    id: 'look&feel',
                    name: 'Look & Feel',
                    items: [
                        { name: 'Concrete', href: '/tiles?look_and_feel=concrete' },
                        { name: 'Decor', href: '/tiles?look_and_feel=decor' },
                        { name: 'Marble', href: '/tiles?look_and_feel=marble' },
                        { name: 'Matallic', href: '/tiles?look_and_feel=matallic' },
                        { name: 'Rustic', href: '/tiles?look_and_feel=rustic' },
                        { name: 'Stone', href: '/tiles?look_and_feel=stone' },
                        { name: 'Wood', href: '/tiles?look_and_feel=wood' },
                    ],
                },
                {
                    id: 'color',
                    name: 'Color',
                    items: [
                        { name: 'Black', href: '/tiles?color=black' },
                        { name: 'Gray', href: '/tiles?color=gray' },
                        { name: 'White', href: '/tiles?color=white' },
                        { name: 'Brown', href: '/tiles?color=brown' },
                        { name: 'Cream', href: '/tiles?color=cream' },
                        { name: 'Special', href: '/tiles?color=special' },
                    ],
                },
                {
                    id: 'collection',
                    name: 'Collection',
                    items: [
                        { name: 'Alchimia', href: '/tiles?collection=alchimia' },
                        { name: 'Basaltino', href: '/tiles?collection=basaltino' },
                        { name: 'Glyphstone', href: '/tiles?collection=glyphstone' },
                        { name: 'Sparko', href: '/tiles?collection=sparko' },
                        { name: 'Venitto', href: '/tiles?collection=venitto' },
                        { name: 'Courtyard', href: '/tiles?collection=courtyard' },
                        { name: 'Spectra', href: '/tiles?collection=spectra' },
                        { name: 'Ricco', href: '/tiles?collection=ricco' },
                        { name: 'Ottimo', href: '/tiles?collection=ottimo' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Where to buy', href: '/where-to-buy' },
        { name: '', href: '#' },
    ],
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    

    // Custom Link component that closes menus on navigation
    const NavLink = ({ href, children, className, close }) => {
        return (
            <Link
                href={href}
                className={className}
                onClick={() => {
                    setMobileMenuOpen(false);
                    // If a close function is provided, call it
                    if (typeof close === 'function') {
                        close();
                    }
                }}
            >
                {children}
            </Link>
        );
    };

    return (
        <div className="bg-white z-10">
            {/* Mobile menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
                    >
                        <div className="flex px-4 pt-5 pb-2">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        {/* Links */}
                        <TabGroup className="mt-2">
                            <div className="border-b border-gray-200">
                                <TabList className="-mb-px flex space-x-8 px-4">
                                    {navigation.categories.map((category) => (
                                        <Tab
                                            key={category.name}
                                            className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                                        >
                                            {category.name}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                            <TabPanels as={Fragment}>
                                {navigation.categories.map((category) => (
                                    <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                                        {category.sections.map((section) => (
                                            <div key={section.name}>
                                                <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                    {section.name}
                                                </p>
                                                <ul
                                                    role="list"
                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                    className="mt-6 flex flex-col space-y-6"
                                                >
                                                    {section.items.map((item) => (
                                                        <li key={item.name} className="flow-root">
                                                            <NavLink href={item.href} className="-m-2 block p-2 text-gray-500">
                                                                {item.name}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <NavLink href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                        {page.name}
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <header className="relative bg-white">
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center justify-between">
                            {/* Logo */}
                            <div className="flex">
                                <Link href="/" className='flex items-center gap-4' onClick={() => setMobileMenuOpen(false)}>
                                    <img
                                        alt=""
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                    <h2 className="text-xl">Tile Demo</h2>
                                </Link>
                            </div>

                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </button>

                            {/* Flyout menus */}
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {({ open, close }) => {

                                                return (
                                                    <>
                                                        <div className="relative flex">
                                                            <PopoverButton
                                                                className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600"
                                                            >
                                                                {category.name}
                                                            </PopoverButton>
                                                        </div>

                                                        <PopoverPanel
                                                            transition
                                                            className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in z-10"
                                                        >
                                                            {/* Presentational element used to render the bottom shadow */}
                                                            <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />

                                                            <div className="relative bg-white">
                                                                <div className="mx-auto max-w-7xl px-8">
                                                                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-16">
                                                                        <div className="grid grid-cols-4 gap-x-8 gap-y-10 text-sm">
                                                                            {category.sections.map((section) => (
                                                                                <div key={section.name}>
                                                                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                                        {section.name}
                                                                                    </p>
                                                                                    <ul
                                                                                        role="list"
                                                                                        aria-labelledby={`${section.name}-heading`}
                                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                    >
                                                                                        {section.items.map((item) => (
                                                                                            <li key={item.name} className="flex">
                                                                                                <NavLink 
                                                                                                    href={item.href} 
                                                                                                    className="hover:text-gray-800"
                                                                                                    close={close}
                                                                                                >
                                                                                                    {item.name}
                                                                                                </NavLink>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </PopoverPanel>
                                                    </>
                                                );
                                            }}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <NavLink
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </PopoverGroup>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}