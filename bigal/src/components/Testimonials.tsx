import React, { useCallback, useEffect, useState } from 'react'
import { images } from "@/assets/optimized_photos";
import { Header } from "./Header";
import { reviews } from "@/assets/reviews";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from '@/components/ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  return (
    <main>
      <Header
        src1600={images.nikkideadlift_1600}
        src1200={images.nikkideadlift_1200}
        src768={images.nikkideadlift_768}
        title="Testimonials"
      />
      <div className="w-full overflow-hidden p-6">
        <Carousel 
          setApi={setApi} 
          className="w-full max-w-4xl mx-auto" 
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: false,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center"
              >
                <div>
                  <p>{review.review}</p>
                  <p className="text-xl text-right text-teal-500">{review.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Navigation Controls - Desktop: horizontal, Mobile: stacked */}
        <div className="mt-4">
          {/* Desktop layout - arrows and dots in a row */}
          <div className="hidden sm:flex justify-center items-center space-x-4">
            <button
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-yellow-400 hover:bg-yellow-500 disabled:pointer-events-none disabled:opacity-50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full border border-black transition-colors duration-200 ${
                    index + 1 === current
                      ? 'bg-teal-500'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-yellow-400 hover:bg-yellow-500 disabled:pointer-events-none disabled:opacity-50"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile layout - dots on top, arrows below */}
          <div className="sm:hidden flex flex-col items-center space-y-4">
            <div className="flex space-x-2">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full border border-black transition-colors duration-200 ${
                    index + 1 === current
                      ? 'bg-teal-500'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-yellow-400 hover:bg-yellow-500 disabled:pointer-events-none disabled:opacity-50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              
              <button
                onClick={scrollNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-yellow-400 hover:bg-yellow-500 disabled:pointer-events-none disabled:opacity-50"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};