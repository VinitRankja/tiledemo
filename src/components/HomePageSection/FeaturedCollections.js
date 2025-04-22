import Image from "next/image";

export default function FeaturedCollections() {
    const collections = [
        {
            id: 1,
            name: "Alchimia",
            description: "Inspired by ancient alchemy, these tiles blend traditional craftsmanship with modern design.",
            imageUrl: "https://kajariatiles.com.au/wp-content/uploads/kajaria_homepage_0003_Layer-5.jpg",
            category: "Indoor"
        },
        {
            id: 2,
            name: "Basaltino",
            description: "Natural stone-inspired tiles that bring the beauty of basalt to your home with improved durability.",
            imageUrl: "https://milesoftiles.co.uk/wp-content/uploads/1.112-Sand_003-1500x1061.jpg",
            category: "Indoor/Outdoor"
        },
        {
            id: 3,
            name: "Glyphstone",
            description: "Featuring subtle patterns reminiscent of ancient hieroglyphs, these tiles add character to any space.",
            imageUrl: "https://www.simpolo.net/images/products/sub-products/01_neo-slate-preview.jpg",
            category: "Indoor"
        },
        {
            id: 4,
            name: "Courtyard",
            description: "Weather-resistant tiles designed specifically for outdoor spaces with anti-slip properties.",
            imageUrl: "https://cdn.mos.cms.futurecdn.net/zL7tUYK3QbEwpFeDtf8Wd3.jpg",
            category: "Outdoor"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Featured Collections</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our most popular tile collections, crafted with precision and designed for beauty and durability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {collections.map((collection) => (
                        <div key={collection.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-w-3 aspect-h-2">
                                <Image
                                    src={collection.imageUrl}
                                    alt={collection.name}
                                    className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute top-4 right-4">
                                <span className="bg-white bg-opacity-90 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                                    {collection.category}
                                </span>
                            </div>
                            <div className="p-6 bg-white">
                                <h3 className="text-xl font-semibold text-gray-900">{collection.name}</h3>
                                <p className="mt-2 text-gray-600">{collection.description}</p>
                                <div className="mt-4">
                                    <a href="#" className="text-gray-800 font-medium inline-flex items-center border-b-2 border-gray-800 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300">
                                        View Collection
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}