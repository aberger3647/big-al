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

      <Carousel>
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem>
              <div key={index}>
                <p>{review.review}</p>
                <p>{review.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
};
