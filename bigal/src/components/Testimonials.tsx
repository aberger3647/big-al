import { images } from "../assets/optimized_photos";
import { Header } from "./Header";
import { reviews } from "../assets/reviews.ts";
import { useState, useEffect } from "react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 2; // Desktop: 2 items
    if (window.innerWidth >= 768) return 2;  // Tablet: 2 items
    return 1; // Mobile: 1 item
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  // Update items per view on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = reviews.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Changed from 3000 to 5000 (5 seconds)

    // Clean up function
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]); // Add itemsPerView to dependency array

  return (
    <main>
      <Header
        src1600={images.nikkideadlift_1600}
        src1200={images.nikkideadlift_1200}
        src768={images.nikkideadlift_768}
        title="Testimonials"
      />
      
      <div className="flex flex-nowrap overflow-hidden m-8 max-w-full">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`flex flex-col h-80 px-4 transition ease-in duration-1000 ${
                itemsPerView === 2 ? 'min-w-1/2 w-1/2' : 
                'min-w-full w-full'
              }`}
            >
              <p className="text-center mb-4">{review.review}</p>
              <p className="text-xl text-center">{review.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p onClick={prevSlide} className="cursor-pointer">previous</p>
        <p onClick={nextSlide} className="cursor-pointer">next</p>
      </div>
    </main>
  );
};