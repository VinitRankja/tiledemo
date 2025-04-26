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
    <section className="relative overflow-hidden bg-white w-full h-[500px] sm:h-[550px] md:h-[650px] lg:h-[750px] xl:h-[100vh] z-0">
      {/* Carousel container */}
      <div className="relative w-full h-full">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"> {/* Consistent dark overlay */}
              <Image
                src={image.src}
                alt={image.alt}
                fill={true}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                priority={index === 0}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text overlay with enhanced styling */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 sm:pb-18 md:pb-22 px-4">
              <div className="text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <h1 className="
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                  font-bold mb-3 tracking-tight
                  text-transparent bg-clip-text
                  bg-gradient-to-b from-white to-transparent
                  [text-shadow:_0_0px_0px_rgba(200,200,200,0.05)]
                ">
                  {image.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-md mx-auto text-white">
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows - enhanced for better visibility and responsiveness */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-black opacity-30 hover:opacity-70 rounded-full p-1 sm:p-2 md:p-3 text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-black opacity-30 hover:opacity-70 rounded-full p-1 sm:p-2 md:p-3 text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={16} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </button>

        {/* Indicator dots - improved styling and responsiveness */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${index === currentIndex
                ? "bg-white scale-125 w-3 sm:w-4"
                : "bg-white opacity-50 hover:opacity-75"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}