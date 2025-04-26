'use client'

// pages/tiles/[id].js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function TileDetail({ tile }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);


  const tileData = tile || {
    id: "modern-marble-01",
    name: "Modern Marble Tile",
    price: 24.99,
    unit: "per square foot",
    category: "Porcelain",
    dimensions: "12\" x 24\"",
    thickness: "10mm",
    finishType: "Matte",
    colors: ["White", "Light Gray", "Beige"],
    applications: ["Bathroom", "Kitchen", "Floor", "Wall"],
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
    description: "Our Modern Marble tiles offer the elegant look of natural marble with the durability and easy maintenance of porcelain. Perfect for creating a sophisticated atmosphere in any space.",
    features: [
      "Stain resistant",
      "Frost resistant",
      "Easy to clean",
      "Low water absorption",
      "Suitable for underfloor heating"
    ],
    images: [
      "https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fproducts%2FINFB0RW0326%2FALCHIMIA%20PEARL%20_preview.jpg&w=2048&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs",
      "https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fproducts%2FINFB0RW0326%2FAlchimia%20Pearl%20R1.jpg&w=2048&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs",
      "https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fproducts%2FINFB0RW0326%2FAlchimia%20Pearl%20R2.jpg&w=2048&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs",
    ]
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value > 0 ? value : 1);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 bg-secondary-light">
      {/* Navigation Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-accent-light pt-6 pb-6">
        <h1 className="text-1xl capitalize tracking-wide text-secondary-dark">
          <span> <Link href='/' className="text-primary hover:text-primary-dark">Home</Link> </span> /
          <span className="text-primary hover:text-primary-dark"> Tiles</span> /
          <span className="text-secondary-dark"> {tileData.name.replace('-', ' ')}</span>
        </h1>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image Gallery */}
          <div className="lg:max-w-lg lg:self-start">
            <div className="rounded-lg overflow-hidden aspect-square bg-gray-100">
              <div className="relative w-full h-full">
                <Image
                  src={tileData.images[selectedImage]}
                  alt={tileData.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 32rem"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {tileData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 overflow-hidden rounded flex justify-center items-center ${selectedImage === index ? 'ring-2 ring-primary-dark' : 'ring-1 ring-primary-light'
                    }`}
                >
                  <Image
                    src={image}
                    alt={`${tileData.name} thumbnail ${index + 1}`}
                    width={50}
                    height={100}
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-primary-dark">{tileData.name}</h1>

            {/* Rating */}
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg
                    key={rating}
                    className={`h-5 w-5 flex-shrink-0 ${tileData.rating > rating ? 'text-accent-dark' : 'text-secondary-light'
                      }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.585l-7.682 4.035a.5.5 0 01-.724-.527l1.468-8.572L.278 6.238a.5.5 0 01.277-.854l8.406-1.227 3.762-7.618a.5.5 0 01.896 0l3.762 7.618 8.406 1.227a.5.5 0 01.277.854l-6.784 6.618 1.468 8.572a.5.5 0 01-.724.527L10 15.585z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-sm text-secondary">{tileData.reviewCount} reviews</p>
            </div>

            <div className="mt-6">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-primary-dark">${tileData.price} <span className="text-lg text-secondary">{tileData.unit}</span></p>
            </div>

            {/* Availability */}
            <div className="mt-4">
              <p className={`text-sm ${tileData.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {tileData.inStock ? 'In stock' : 'Out of stock'}
              </p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-primary-dark">Description</h3>
              <div className="mt-2 space-y-6">
                <p className="text-base text-secondary-dark">{tileData.description}</p>
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-8 border-t border-accent-light pt-8">
              <h3 className="text-sm font-medium text-primary-dark">Specifications</h3>
              <div className="mt-4 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-secondary">Category</p>
                    <p className="mt-1 text-sm font-medium text-secondary-dark">{tileData.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary">Dimensions</p>
                    <p className="mt-1 text-sm font-medium text-secondary-dark">{tileData.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary">Thickness</p>
                    <p className="mt-1 text-sm font-medium text-secondary-dark">{tileData.thickness}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary">Finish</p>
                    <p className="mt-1 text-sm font-medium text-secondary-dark">{tileData.finishType}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Options */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-primary-dark">Available Colors</h3>
              <div className="mt-2 flex items-center space-x-2">
                {tileData.colors.map((color) => (
                  <span
                    key={color}
                    className="px-3 py-1 text-xs font-medium bg-primary-light text-primary-dark rounded-full"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended Applications */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-primary-dark">Recommended For</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {tileData.applications.map((app) => (
                  <span
                    key={app}
                    className="px-3 py-1 text-xs font-medium bg-accent-light text-accent-dark rounded-full"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-primary-dark">Features</h3>
              <div className="mt-4">
                <ul className="pl-4 list-disc space-y-2 text-sm text-secondary-dark">
                  {tileData.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Add to cart section */}
            <div className="mt-10">
              <div className="flex items-center">
                <label htmlFor="quantity" className="sr-only">
                  Quantity
                </label>
                <div className="flex border border-accent-light rounded-md">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-secondary hover:text-primary"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-12 text-center border-x border-accent-light focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-secondary hover:text-primary"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  className="ml-4 flex-1 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Add to Cart
                </button>
              </div>
              <button
                type="button"
                className="mt-4 w-full border border-accent-light rounded-md py-3 px-8 flex items-center justify-center text-sm font-medium text-secondary-dark hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              >
                Request Sample
              </button>
            </div>

            {/* Contact for more info */}
            <div className="mt-8 border-t border-accent-light pt-8">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-sm text-secondary">
                  Need help or have questions? <a href="/contact" className="text-primary font-medium hover:underline">Contact our team</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-primary-dark">You might also like</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                  <div className="relative h-64 w-full">
                    <Image
                      src="https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fproducts%2FINFB0RX0326%2FAlchimia%20Graphite%20R1.jpg&w=640&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs"
                      alt="Related tile product"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Similar Tile {item}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">White / Gray</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${(tileData.price - 2 + item).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}