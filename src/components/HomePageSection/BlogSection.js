import Image from "next/image";

export default function BlogSection() {
    const blogPosts = [
        {
            id: 1,
            title: "Top Tile Trends for 2025",
            excerpt: "Explore the hottest tile designs and patterns that are transforming homes this year.",
            imageUrl: "https://kajariatiles.com.au/wp-content/uploads/kajaria_homepage_0003_Layer-5.jpg",
            date: "April 15, 2025",
            readTime: "5 min read",
            category: "Design Trends"
        },
        {
            id: 2,
            title: "How to Choose the Perfect Kitchen Backsplash",
            excerpt: "Essential tips for selecting a backsplash that complements your kitchen style and stands the test of time.",
            imageUrl: "https://www.simpolo.net/images/products/sub-products/01_neo-slate-preview.jpg",
            date: "April 8, 2025",
            readTime: "7 min read",
            category: "Guides"
        },
        {
            id: 3,
            title: "Sustainable Tiling: Eco-Friendly Options",
            excerpt: "Discover environmentally responsible tile materials that don't compromise on style or durability.",
            imageUrl: "https://cdn.mos.cms.futurecdn.net/zL7tUYK3QbEwpFeDtf8Wd3.jpg",
            date: "March 29, 2025",
            readTime: "6 min read",
            category: "Sustainability"
        }
    ];

    return (
        <section className="py-16 bg-secondary-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary-dark">From Our Blog</h2>
                        <p className="mt-4 text-lg text-secondary">
                            Insights, ideas, and inspiration for your tiling projects.
                        </p>
                    </div>
                    <a href="#" className="hidden md:inline-block px-6 py-2 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-white transition-colors duration-300">
                        View All Posts
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="relative">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white px-3 py-1 text-xs font-medium text-primary-dark rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-secondary mb-3">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                                    <a href="#" className="hover:text-primary transition-colors duration-300">
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="text-secondary mb-4">{post.excerpt}</p>
                                <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-300">
                                    Read More
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <a href="#" className="inline-block px-6 py-2 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-white transition-colors duration-300">
                        View All Posts
                    </a>
                </div>
            </div>
        </section>
    );
}