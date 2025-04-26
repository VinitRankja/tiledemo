import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample product data with attributes for filtering
const allProducts = [
  {
    id: 1,
    name: '#01',
    href: '/tile/01',
    price: '$48',
    imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FALCHIMIA%2FALCHIMIA%2520GRAPHITE_preview.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
    imageAlt: 'Alchimia Graphite tile',
    location: ['living-room', 'kitchen'],
    collection: ['alchimia'],
    look_and_feel: ['marble'],
    color: ['gray', 'black']
  },
  {
    id: 2,
    name: '#02',
    href: '/tile/02',
    price: '$35',
    imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FMARMORICA%2FI03.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
    imageAlt: 'Marmorica tile sample',
    location: ['bathroom', 'kitchen'],
    collection: ['basaltino'],
    look_and_feel: ['marble', 'stone'],
    color: ['white', 'cream']
  },
  {
    id: 3,
    name: '#03',
    href: '/tile/03',
    price: '$89',
    imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FKITCHDECK%2Fkitchdeck-livingroom.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
    imageAlt: 'Kitchen deck living room tile',
    location: ['living-room'],
    collection: ['courtyard'],
    look_and_feel: ['wood', 'rustic'],
    color: ['brown']
  },
  {
    id: 4,
    name: '#04',
    href: '/tile/04',
    price: '$35',
    imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FSPECTRA%2Fspectra-living.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
    imageAlt: 'Spectra living room tile',
    location: ['living-room', 'balcony'],
    collection: ['spectra'],
    look_and_feel: ['decor', 'concrete'],
    color: ['gray']
  },
  {
    id: 5,
    name: '#05',
    href: '/tile/05',
    price: '$52',
    imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FGLYPHSTONE%2FGLYPHSTONE_PERLA_Livingroom.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
    imageAlt: 'Glyphstone Perla living room tile',
    location: ['living-room', 'bedroom'],
    collection: ['glyphstone'],
    look_and_feel: ['stone'],
    color: ['white', 'cream']
  },
  {
    id: 6,
    name: '#06',
    href: '/tile/06',
    price: '$68',
    imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FSPARKO%2Fsparko-bathroom.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
    imageAlt: 'Sparko bathroom tile',
    location: ['bathroom'],
    collection: ['sparko'],
    look_and_feel: ['marble'],
    color: ['white']
  },
  {
    id: 7,
    name: '#07',
    href: '/tile/07',
    price: '$72',
    imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FVENITTO%2FVENITTO%2520CREME_BATHROOM.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
    imageAlt: 'Venitto Creme bathroom tile',
    location: ['bathroom'],
    collection: ['venitto'],
    look_and_feel: ['stone', 'marble'],
    color: ['cream']
  },
  {
    id: 8,
    name: '#08',
    href: '/tile/08',
    price: '$59',
    imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FRICCO%2FRICCO%2520MOCHA_KITCHEN.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
    imageAlt: 'Ricco Mocha kitchen tile',
    location: ['kitchen', 'countertop'],
    collection: ['ricco'],
    look_and_feel: ['stone', 'rustic'],
    color: ['brown']
  }
];

export default function ProductList({ activeFilters }) {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Filter products based on active filters
    setIsLoading(true);
    
    const applyFilters = () => {
      // If no filters are applied, show all products
      if (Object.keys(activeFilters).length === 0) {
        return allProducts;
      }
      
      // Filter products based on each active filter
      return allProducts.filter(product => {
        // Check if product matches all active filter categories
        return Object.entries(activeFilters).every(([filterType, selectedValues]) => {
          // If this filter category isn't applicable to the product, skip it
          if (!product[filterType]) {
            return false;
          }
          
          // Check if any of the selected values for this filter type match the product
          return selectedValues.some(value => 
            product[filterType].includes(value)
          );
        });
      });
    };
    
    // Short delay to show loading state
    setTimeout(() => {
      const results = applyFilters();
      setFilteredProducts(results);
      setIsLoading(false);
    }, 300);
  }, [activeFilters]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-2">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-lg font-medium text-secondary-dark">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
          </h2>
          
          {/* Optional: Add sorting dropdown here */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-secondary">Sort by:</span>
            <select className="border border-secondary-light rounded py-1 px-2 text-sm text-secondary-dark focus:outline-none focus:ring-1 focus:ring-primary">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group">
                <div className="aspect-[12/9] w-full rounded-lg bg-secondary-light"></div>
                <div className="mt-4 h-4 w-20 bg-secondary-light rounded"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-3">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={product.href} className="group">
                <div className="relative aspect-[12/9] overflow-hidden rounded-lg shadow-sm">
                  <Image
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    // width={700}
                    // height={450}
                    fill={true}
                    className="w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-secondary-dark group-hover:text-primary-dark transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {product.collection.map(collection => (
                      <span key={collection} className="inline-block text-xs bg-primary-light text-primary-dark rounded-full px-2 py-0.5">
                        {collection.charAt(0).toUpperCase() + collection.slice(1)}
                      </span>
                    ))}
                  </div>
                  
                  {/* Location tags with subtle styling */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {product.location.slice(0, 2).map(loc => (
                      <span key={loc} className="inline-block text-xs bg-secondary-light text-secondary rounded-full px-2 py-0.5">
                        {loc.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    ))}
                    {product.location.length > 2 && (
                      <span className="inline-block text-xs text-secondary">+{product.location.length - 2}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <div className="inline-flex rounded-full bg-accent-light p-4 mb-4">
              <div className="rounded-full bg-accent p-2 text-white">
                {/* Filter icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-secondary-dark">No products match your filters</h3>
            <p className="mt-2 text-sm text-secondary">Try adjusting your filter criteria to find what you're looking for.</p>
            <button 
              onClick={() => {
                // This would need to be connected to the clear filters function
                // Could be passed as a prop from the parent
              }}
              className="mt-6 inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}