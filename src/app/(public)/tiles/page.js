'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ProductList from '@/components/ProductList/ProductList';

const filterOptions = [
    {
        id: 'location',
        name: 'Location',
        options: [
            { value: 'living-room', label: 'Living Room', checked: false },
            { value: 'bathroom', label: 'Bathroom', checked: false },
            { value: 'bedroom', label: 'Bedroom', checked: false },
            { value: 'kitchen', label: 'Kitchen', checked: false },
            { value: 'outdoor', label: 'Outdoor', checked: false },
            { value: 'balcony', label: 'Balcony', checked: false },
            { value: 'staircase', label: 'Staircase', checked: false },
            { value: 'elevation', label: 'Elevation', checked: false },
            { value: 'commercial', label: 'Commercial', checked: false },
            { value: 'countertop', label: 'Countertop', checked: false },
        ],
        isRadio: true, // Added isRadio flag to mark this filter as radio type
    },
    {
        id: 'collection',
        name: 'Collection',
        options: [
            { value: 'alchimia', label: 'Alchimia', checked: false },
            { value: 'basaltino', label: 'Basaltino', checked: false },
            { value: 'glyphstone', label: 'Glyphstone', checked: false },
            { value: 'sparko', label: 'Sparko', checked: false },
            { value: 'venitto', label: 'Venitto', checked: false },
            { value: 'courtyard', label: 'Courtyard', checked: false },
            { value: 'spectra', label: 'Spectra', checked: false },
            { value: 'ricco', label: 'Ricco', checked: false },
            { value: 'ottimo', label: 'Ottimo', checked: false },
        ],
        isRadio: true,
    },
    {
        id: 'look_and_feel',
        name: 'Look and Feel',
        options: [
            { value: 'concrete', label: 'Concrete', checked: false },
            { value: 'decor', label: 'Decor', checked: false },
            { value: 'marble', label: 'Marble', checked: false },
            { value: 'matallic', label: 'Matallic', checked: false },
            { value: 'rustic', label: 'Rustic', checked: false },
            { value: 'stone', label: 'Stone', checked: false },
            { value: 'wood', label: 'Wood', checked: false },
        ],
    },
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'black', label: 'Black', checked: false },
            { value: 'gray', label: 'Gray', checked: false },
            { value: 'white', label: 'White', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'cream', label: 'Cream', checked: false },
            { value: 'special', label: 'Special', checked: false },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductListPage() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState({});

    const router = useRouter();
    const searchParams = useSearchParams();

    // Initialize type from URL params
    const getTypeFromParams = () => {
        const locationParam = searchParams.get('location');
        const collectionParam = searchParams.get('collection');

        if (locationParam) {
            return locationParam.split(',')[0];
        } else if (collectionParam) {
            return collectionParam.split(',')[0];
        }
        return 'Products';
    };

    const [type, setType] = useState(getTypeFromParams());

    // Initialize filters from URL params on component mount
    useEffect(() => {
        const newActiveFilters = {};

        // Process each filter section
        filterOptions.forEach(section => {
            const paramValue = searchParams.get(section.id);
            if (paramValue) {
                const values = paramValue.split(',');
                
                // For radio buttons (location), only keep the first value
                if (section.isRadio) {
                    newActiveFilters[section.id] = [values[0]];
                    section.options.forEach(option => {
                        option.checked = option.value === values[0];
                    });
                } else {
                    newActiveFilters[section.id] = values;
                    section.options.forEach(option => {
                        option.checked = values.includes(option.value);
                    });
                }
            }
        });

        setActiveFilters(newActiveFilters);
        setType(getTypeFromParams());
    }, [searchParams]);

    // Handle filter change
    const handleFilterChange = (sectionId, optionValue, checked) => {
        // Create a copy of the current active filters
        const updatedFilters = { ...activeFilters };
        
        // Get the section to check if it's a radio
        const section = filterOptions.find(s => s.id === sectionId);
        const isRadio = section?.isRadio || false;

        if (checked) {
            if (isRadio) {
                // For radio buttons, replace the entire array with the new value
                updatedFilters[sectionId] = [optionValue];
                
                // Update checked state in filterOptions
                section.options.forEach(option => {
                    option.checked = option.value === optionValue;
                });
            } else {
                // For checkboxes, add the option to active filters
                if (!updatedFilters[sectionId]) {
                    updatedFilters[sectionId] = [optionValue];
                } else if (!updatedFilters[sectionId].includes(optionValue)) {
                    updatedFilters[sectionId] = [...updatedFilters[sectionId], optionValue];
                }
            }
        } else {
            // Remove the option from active filters
            if (updatedFilters[sectionId]) {
                updatedFilters[sectionId] = updatedFilters[sectionId].filter(val => val !== optionValue);
                if (updatedFilters[sectionId].length === 0) {
                    delete updatedFilters[sectionId];
                }
            }
        }

        // Update active filters state
        setActiveFilters(updatedFilters);

        // Update URL search params
        updateUrlParams(updatedFilters);

        // Update type based on the new filters
        if (sectionId === 'location' || sectionId === 'collection') {
            const newType = checked && optionValue ?
                (optionValue.charAt(0).toUpperCase() + optionValue.slice(1)) :
                getTypeFromParams();
            setType(newType);
        }
    };

    // Update URL search parameters
    const updateUrlParams = (filters) => {
        const params = new URLSearchParams();

        // Add each filter to the URL params
        Object.entries(filters).forEach(([key, values]) => {
            if (values.length > 0) {
                params.set(key, values.join(','));
            }
        });

        // Push the new URL with updated search params
        const query = params.toString();
        router.push(`${window.location.pathname}${query ? '?' + query : ''}`);
    };

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                {filterOptions.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                                                    <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex gap-3">
                                                        <div className="flex h-5 shrink-0 items-center">
                                                            {section.isRadio ? (
                                                                <div className="group grid size-4 grid-cols-1">
                                                                    <input
                                                                        value={option.value}
                                                                        checked={activeFilters[section.id]?.[0] === option.value || false}
                                                                        onChange={(e) => {
                                                                            if (e.target.checked) {
                                                                                handleFilterChange(section.id, option.value, true);
                                                                            }
                                                                        }}
                                                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}-mobile`}
                                                                        type="radio"
                                                                        className="col-start-1 row-start-1 appearance-none rounded-full border border-gray-300 bg-white checked:border-indigo-600 checked:ring-1 checked:ring-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                    />
                                                                    <div className="pointer-events-none col-start-1 row-start-1 size-2 self-center justify-self-center rounded-full bg-indigo-600 group-has-checked:group-has-enabled:opacity-100 opacity-0" />
                                                                </div>
                                                            ) : (
                                                                <div className="group grid size-4 grid-cols-1">
                                                                    <input
                                                                        value={option.value}
                                                                        checked={activeFilters[section.id]?.includes(option.value) || false}
                                                                        onChange={(e) => handleFilterChange(section.id, option.value, e.target.checked)}
                                                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}`}
                                                                        type="checkbox"
                                                                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                    />
                                                                    <svg
                                                                        fill="none"
                                                                        viewBox="0 0 14 14"
                                                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    >
                                                                        <path
                                                                            d="M3 8L6 11L11 3.5"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="opacity-0 group-has-checked:opacity-100"
                                                                        />
                                                                        <path
                                                                            d="M3 7H11"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="opacity-0 group-has-indeterminate:opacity-100"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <label
                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                            className="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-6 sm:px-8">
                    <div className="flex items-center justify-between border-b border-gray-200 pt-6 pb-6">
                        <h1 className="text-1xl capitalize tracking-wide text-gray-900">
                            <span> <Link href='/' >Home</Link> </span> / Tiles / {type.replace('-', ' ')}
                        </h1>

                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon aria-hidden="true" className="size-5" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                {/* Active filters section */}
                                {Object.keys(activeFilters).length > 0 && (
                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="font-medium text-gray-900">Active Filters</h3>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {Object.entries(activeFilters).flatMap(([sectionId, values]) =>
                                                values.map(value => {
                                                    const section = filterOptions.find(s => s.id === sectionId);
                                                    const option = section?.options.find(o => o.value === value);
                                                    return option ? (
                                                        <button
                                                            key={`${sectionId}-${value}`}
                                                            type="button"
                                                            onClick={() => handleFilterChange(sectionId, value, false)}
                                                            className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700"
                                                        >
                                                            {option.label}
                                                            <XMarkIcon className="ml-1 size-4" />
                                                        </button>
                                                    ) : null;
                                                })
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setActiveFilters({});
                                                    router.push(window.location.pathname);
                                                }}
                                                className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-sm text-red-700 hover:bg-red-100"
                                            >
                                                Clear all
                                            </button>
                                        </div>
                                    </div>
                                )}


                                {filterOptions.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6" defaultOpen={false}>
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                                                    <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex gap-3">
                                                        <div className="flex h-5 shrink-0 items-center">
                                                            {section.isRadio ? (
                                                                <div className="group grid size-4 grid-cols-1">
                                                                    <input
                                                                        value={option.value}
                                                                        checked={activeFilters[section.id]?.[0] === option.value || false}
                                                                        onChange={(e) => {
                                                                            if (e.target.checked) {
                                                                                handleFilterChange(section.id, option.value, true);
                                                                            }
                                                                        }}
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}`}
                                                                        type="radio"
                                                                        className="col-start-1 row-start-1 appearance-none rounded-full border border-gray-300 bg-white checked:border-indigo-600 checked:ring-1 checked:ring-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                    />
                                                                    <div className="pointer-events-none col-start-1 row-start-1 size-2 self-center justify-self-center rounded-full bg-indigo-600 group-has-checked:group-has-enabled:opacity-100 opacity-0" />
                                                                </div>
                                                            ) : (
                                                                <div className="group grid size-4 grid-cols-1">
                                                                    <input
                                                                        value={option.value}
                                                                        checked={activeFilters[section.id]?.includes(option.value) || false}
                                                                        onChange={(e) => handleFilterChange(section.id, option.value, e.target.checked)}
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}`}
                                                                        type="checkbox"
                                                                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                    />
                                                                    <svg
                                                                        fill="none"
                                                                        viewBox="0 0 14 14"
                                                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    >
                                                                        <path
                                                                            d="M3 8L6 11L11 3.5"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="opacity-0 group-has-checked:opacity-100"
                                                                        />
                                                                        <path
                                                                            d="M3 7H11"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="opacity-0 group-has-indeterminate:opacity-100"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}


                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-4">
                                <ProductList filters={activeFilters}/>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}