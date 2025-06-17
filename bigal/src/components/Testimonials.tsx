import { images } from "../assets/optimized_photos";
import { Header } from "./Header";
import { reviews } from "../assets/reviews.ts";
import { useState, useEffect } from "react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === reviews.length - 1) {
      return setCurrentIndex(currentIndex + 1);
    }
    useEffect(() => {
      const interval = setInterval(() => {
        carouselInfiniteScroll();
      }, 3000);
      // clean up function
      return () => clearInterval(interval);
    });
  };
  return (
    <main>
      <Header
        src1600={images.nikkideadlift_1600}
        src1200={images.nikkideadlift_1200}
        src768={images.nikkideadlift_768}
        title="Testimonials"
      />

      <div className="flex flex-nowrap overflow-hidden gap-8 m-8 max-w-xl">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col h-80 min-w-full w-full content-center transition ease-in duration-1000"
          >
            <p>{review.review}</p>
            <p className="text-xl">{review.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
