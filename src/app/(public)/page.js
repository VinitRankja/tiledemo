'use client'

import BlogSection from "@/components/HomePageSection/BlogSection";
import CTASection from "@/components/HomePageSection/CTASection";
import FeaturedCollections from "@/components/HomePageSection/FeaturedCollections";
import Header from "@/components/HomePageSection/Header";
import InspirationGallery from "@/components/HomePageSection/InspirationGallery";
import TestimonialsSection from "@/components/HomePageSection/TestimonialsSection";
import WhyChooseUs from "@/components/HomePageSection/WhyChooseUs";

export default function Home() {
    return (
        <>
            <Header />
            <FeaturedCollections />
            <WhyChooseUs />
            <InspirationGallery/>
            <TestimonialsSection/>
            <CTASection/>
            <BlogSection/>
        </>
    );
}