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
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary-light via-white to-primary-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading with stylish accents */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark to-primary-dark">
                        Featured Collections
                    </h2>
                    <p className="mt-5 text-lg text-secondary max-w-3xl mx-auto font-light leading-relaxed">
                        Explore our most popular tile collections, crafted with precision and designed for beauty and durability.
                    </p>
                </div>

                {/* Grid of transparent glass-effect cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {collections.map((collection) => (
                        <a
                            href="#"
                            key={collection.id}
                            className="group cursor-pointer block relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/60 border border-primary-light shadow-sm shadow-black/10 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Image container */}
                            <div className="relative h-56 md:h-64 overflow-hidden">
                                <Image
                                    src={collection.imageUrl}
                                    alt={collection.name}
                                    width={500}
                                    height={300}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Category tag with glass effect */}
                                <div className="absolute top-4 right-4">
                                    <span className="backdrop-blur-md bg-white/70 text-primary-dark text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                                        {collection.category}
                                    </span>
                                </div>

                                {/* Gradient overlay that reveals on hover */}
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                            </div>

                            {/* Content area with glass effect */}
                            <div className="p-6 pb-12 backdrop-blur-sm bg-white/60 border-t border-white/30">
                                <h3 className="text-xl font-semibold tracking-tight text-secondary-dark group-hover:text-primary transition-colors">
                                    {collection.name}
                                </h3>

                                <p className="text-secondary text-sm leading-relaxed">
                                    {collection.description}
                                </p>

                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}