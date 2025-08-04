import { images } from "@/assets/optimized_photos";
import { Header } from "./Header";
import { reviews } from "@/assets/reviews";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  return (
    <main>
      <Header
        src1600={images.nikkideadlift_1600}
        src1200={images.nikkideadlift_1200}
        src768={images.nikkideadlift_768}
        title="Testimonials"
      />

      <div className="w-full overflow-hidden p-12">
        <Carousel className="w-full max-w-4xl mx-auto">
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
};
