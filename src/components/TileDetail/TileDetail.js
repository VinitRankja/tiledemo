'use client'

// pages/tiles/[id].js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function TileDetail({ tile }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // This would normally come from your API or props
  // I'm using placeholder data for this example
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
    <div className="mx-auto max-w-7xl px-6 sm:px-8">

      {/* Navigation Breadcrumbs */}
        <div className="flex items-center justify-between border-b border-gray-200 pt-6 pb-6">
            <h1 className="text-1xl capitalize tracking-wide text-gray-900">
                <span> <Link href='/' >Home</Link> </span> / Tiles / {tileData.name.replace('-', ' ')}
            </h1>
        </div>
        {/* <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href="/tiles" className="ml-2 text-gray-500 hover:text-gray-700">
                Tiles
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href={`/tiles/${tileData.category.toLowerCase()}`} className="ml-2 text-gray-500 hover:text-gray-700">
                {tileData.category}
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-900 font-medium">{tileData.name}</span>
            </li>
          </ol>
        </nav> */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image Gallery */}
          <div className="lg:max-w-lg lg:self-start">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <div className="relative h-96 w-full">
                <Image 
                  src={tileData.images[selectedImage]} 
                  alt={tileData.name}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {tileData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 overflow-hidden rounded ${
                    selectedImage === index ? 'ring-2 ring-black' : 'ring-1 ring-gray-200'
                  }`}
                >
                  <Image 
                    src={image} 
                    alt={`${tileData.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{tileData.name}</h1>
            
            {/* Rating */}
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg
                    key={rating}
                    className={`h-5 w-5 flex-shrink-0 ${
                      tileData.rating > rating ? 'text-yellow-400' : 'text-gray-300'
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
              <p className="ml-2 text-sm text-gray-500">{tileData.reviewCount} reviews</p>
            </div>

            <div className="mt-6">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${tileData.price} <span className="text-lg text-gray-500">{tileData.unit}</span></p>
            </div>

            {/* Availability */}
            <div className="mt-4">
              <p className={`text-sm ${tileData.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {tileData.inStock ? 'In stock' : 'Out of stock'}
              </p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <div className="mt-2 space-y-6">
                <p className="text-base text-gray-700">{tileData.description}</p>
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-sm font-medium text-gray-900">Specifications</h3>
              <div className="mt-4 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">{tileData.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Dimensions</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">{tileData.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Thickness</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">{tileData.thickness}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Finish</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">{tileData.finishType}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Options */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Available Colors</h3>
              <div className="mt-2 flex items-center space-x-2">
                {tileData.colors.map((color) => (
                  <span 
                    key={color} 
                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended Applications */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Recommended For</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {tileData.applications.map((app) => (
                  <span 
                    key={app} 
                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Features</h3>
              <div className="mt-4">
                <ul className="pl-4 list-disc space-y-2 text-sm text-gray-700">
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
                <div className="flex border border-gray-300 rounded-md">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-gray-500 hover:text-gray-600"
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
                    className="w-12 text-center border-x border-gray-300 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-gray-500 hover:text-gray-600"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  className="ml-4 flex-1 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Add to Cart
                </button>
              </div>
              <button
                type="button"
                className="mt-4 w-full border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Request Sample
              </button>
            </div>

            {/* Contact for more info */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-sm text-gray-500">
                  Need help or have questions? <a href="/contact" className="text-black font-medium hover:underline">Contact our team</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">You might also like</h2>
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

// This function would fetch the tile data from your API
// export async function getServerSideProps({ params }) {
//   // In a real application, you would fetch the tile data using the ID
//   // const res = await fetch(`https://your-api.com/tiles/${params.id}`)
//   // const tile = await res.json()
  
//   // For this example, we'll return null and use the placeholder data in the component
//   return {
//     props: {
//       tile: null
//     },
//   };
// }