'use client'


import Link from 'next/link';
import { useState } from 'react';
import { Search, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

// Sample dealer data - replace with your actual data or API fetch
const dealersData = [
  {
    id: 1,
    name: "Premium Tile Supply",
    address: "123 Main Street, New York, NY 10001",
    phone: "(212) 555-1234",
    email: "info@premiumtile.com",
    website: "https://www.premiumtile.com",
    products: ["Ceramic Tiles", "Porcelain Tiles", "Marble Tiles"]
  },
  {
    id: 2,
    name: "Luxury Flooring Solutions",
    address: "456 Market Ave, San Francisco, CA 94103",
    phone: "(415) 555-6789",
    email: "sales@luxuryflooring.com",
    website: "https://www.luxuryflooring.com",
    products: ["Ceramic Tiles", "Wood-Look Tiles", "Outdoor Tiles"]
  },
  {
    id: 3,
    name: "Designer Tile Gallery",
    address: "789 Oak Blvd, Chicago, IL 60611",
    phone: "(312) 555-9012",
    email: "hello@designertile.com",
    website: "https://www.designertile.com",
    products: ["Porcelain Tiles", "Decorative Tiles", "Mosaic Tiles"]
  },
  {
    id: 4,
    name: "Modern Surface Co.",
    address: "321 Pine Road, Miami, FL 33101",
    phone: "(305) 555-3456",
    email: "contact@modernsurface.com",
    website: "https://www.modernsurface.com",
    products: ["Ceramic Tiles", "Porcelain Tiles", "Natural Stone Tiles"]
  },
  {
    id: 5,
    name: "The Tile Warehouse",
    address: "654 Cedar Lane, Austin, TX 78701",
    phone: "(512) 555-7890",
    email: "info@tilewarehouse.com",
    website: "https://www.tilewarehouse.com",
    products: ["Ceramic Tiles", "Porcelain Tiles", "Glass Tiles"]
  }
];

export default function WhereToBuy() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  
  // Get unique product types from data
  const productTypes = Array.from(
    new Set(dealersData.flatMap(dealer => dealer.products))
  );
  
  // Filter dealers based on search and product filter
  const filteredDealers = dealersData.filter(dealer => {
    const matchesSearch = dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         dealer.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProduct = selectedProduct === '' || dealer.products.includes(selectedProduct);
    return matchesSearch && matchesProduct;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Where to Buy Our Tiles</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find authorized dealers and retailers that carry our premium tile products near you.
        </p>
      </div>
      
      {/* Search and filter section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name or location"
              className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-200 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="md:w-64">
            <select
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-gray-200 focus:outline-none"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="">All Products</option>
              {productTypes.map(product => (
                <option key={product} value={product}>{product}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Dealers listing */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredDealers.length > 0 ? (
          filteredDealers.map(dealer => (
            <div key={dealer.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{dealer.name}</h2>
              
              <div className="flex items-start mt-4">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-600">{dealer.address}</p>
              </div>
              
              <div className="flex items-center mt-3">
                <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <p className="text-gray-600">{dealer.phone}</p>
              </div>
              
              <div className="flex items-center mt-3">
                <Mail className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <a href={`mailto:${dealer.email}`} className="text-blue-600 hover:underline">{dealer.email}</a>
              </div>
              
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-1">Available Products:</p>
                <div className="flex flex-wrap gap-2">
                  {dealer.products.map(product => (
                    <span key={product} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a 
                  href={dealer.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-600">No dealers found matching your criteria. Please try a different search.</p>
          </div>
        )}
      </div>
      
      {/* Contact section */}
      <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{"Can't find a dealer near you?"}</h2>
        <p className="text-gray-600 mb-6">
          Contact our sales team for assistance in finding the nearest retailer or to inquire about becoming an authorized dealer.
        </p>
        <div className="flex justify-center">
          <Link 
            href="/contact-us" 
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}