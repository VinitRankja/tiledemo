'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);
  
  // Sample images - replace with your actual images
  const images = [
    {
      src: "https://kajariatiles.com.au/wp-content/uploads/kajaria_homepage_0003_Layer-5.jpg",
      alt: "Modern interior design with elegant furniture",
      title: "Premium Tile Collection",
      description: "Transform your space with our exclusive designer tiles"
    },
    {
      src: "https://milesoftiles.co.uk/wp-content/uploads/1.112-Sand_003-1500x1061.jpg",
      alt: "Bathroom with luxurious tiles",
      title: "Bathroom Elegance",
      description: "Create a spa-like experience in your own home"
    },
    {
      src: "https://www.simpolo.net/images/products/sub-products/01_neo-slate-preview.jpg",
      alt: "Kitchen with stylish backsplash tiles",
      title: "Kitchen & Backsplash",
      description: "Durable and beautiful solutions for your kitchen"
    },
    {
      src: "https://cdn.mos.cms.futurecdn.net/zL7tUYK3QbEwpFeDtf8Wd3.jpg",
      alt: "Outdoor patio with decorative tiles",
      title: "Outdoor Solutions",
      description: "Weather-resistant tiles for your patio and garden"
    },
  ];

  // Auto-scroll setup
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying, images.length]);

  // Pause auto-scroll when user interacts
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    // Resume after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNextSlide = () => {
    pauseAutoPlay();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    pauseAutoPlay();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    pauseAutoPlay();
    setCurrentIndex(index);
  };

  return (
    <section className="relative overflow-hidden bg-white w-full h-[300px] md:h-[90vh] z-0">
      {/* Carousel container */}
      <div className="relative w-full h-full">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill={true}
              className="object-cover w-full h-full"
            />
            {/* Text overlay */}
            <div className="absolute inset-0 bg-opacity-40 flex items-end justify-center p-15">
              <div className="text-center text-white px-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{image.title}</h1>
                <p className="text-xl md:text-2xl">{image.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-opacity-10 hover:bg-opacity-50 rounded-full p-2 text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24}/>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-opacity-10 hover:bg-opacity-50 rounded-full p-2 text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}