import { Shield, Award, Truck, ThumbsUp } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            name: "Quality Guaranteed",
            description: "Our tiles undergo rigorous quality testing to ensure durability, longevity, and consistent quality in every piece.",
            icon: <Shield className="h-8 w-8 text-primary" />,
            color: "primary"
        },
        {
            name: "Award-Winning Designs",
            description: "Our innovative designs have earned recognition in the industry for their beauty and functionality.",
            icon: <Award className="h-8 w-8 text-primary" />,
            color: "primary"
        },
        {
            name: "Fast & Reliable Shipping",
            description: "We partner with trusted logistics providers to ensure your tiles arrive safely and on time.",
            icon: <Truck className="h-8 w-8 text-accent" />,
            color: "primary"
        },
        {
            name: "Customer Satisfaction",
            description: "Join thousands of satisfied customers who have transformed their spaces with our premium tiles.",
            icon: <ThumbsUp className="h-8 w-8 text-accent" />,
            color: "primary"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-secondary-light">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-primary-light text-primary text-sm font-medium tracking-wide mb-4">
                        OUR ADVANTAGES
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-secondary-dark tracking-tight">
                        Why Choose <span className="text-primary">Us</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto my-3 rounded-full"></div>
                    <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
                        We combine craftsmanship, quality materials, and innovative designs to deliver tiles
                        that elevate and transform your spaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group bg-white p-8 rounded-xl border border-${feature.color}-light shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center hover:border-${feature.color} cursor-pointer`}
                        >
                            <div className={`inline-flex items-center justify-center p-4 rounded-full mb-6 bg-${feature.color}-light group-hover:bg-${feature.color}-light transition-colors duration-300 border border-${feature.color}-light`}>
                                {feature.icon}
                            </div>
                            <h3 className={`text-xl font-semibold text-secondary-dark mb-3 group-hover:text-${feature.color} transition-colors duration-300`}>
                                {feature.name}
                            </h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                {feature.description}
                            </p>
                            <div className={`mt-6 w-0 group-hover:w-full h-1 bg-${feature.color} rounded-full transition-all duration-500 ease-out`}></div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-secondary italic">
                        {`"Our commitment to excellence has made us the preferred choice for designers and homeowners alike."`}
                    </p>
                </div>
            </div>
        </section>
    );
}