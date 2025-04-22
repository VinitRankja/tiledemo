import { Shield, Award, Truck, ThumbsUp } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            name: "Quality Guaranteed",
            description: "Our tiles undergo rigorous quality testing to ensure durability, longevity, and consistent quality in every piece.",
            icon: <Shield className="h-8 w-8 text-gray-800" />
        },
        {
            name: "Award-Winning Designs",
            description: "Our innovative designs have earned recognition in the industry for their beauty and functionality.",
            icon: <Award className="h-8 w-8 text-gray-800" />
        },
        {
            name: "Fast & Reliable Shipping",
            description: "We partner with trusted logistics providers to ensure your tiles arrive safely and on time.",
            icon: <Truck className="h-8 w-8 text-gray-800" />
        },
        {
            name: "Customer Satisfaction",
            description: "Join thousands of satisfied customers who have transformed their spaces with our premium tiles.",
            icon: <ThumbsUp className="h-8 w-8 text-gray-800" />
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We combine craftsmanship, quality materials, and innovative designs to deliver tiles that transform your spaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}