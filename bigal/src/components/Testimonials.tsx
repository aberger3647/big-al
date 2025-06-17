import { images } from "../assets/optimized_photos";
import { Header } from "./Header";
import { reviews } from "../assets/reviews.ts";

export const Testimonials = () => {
  return (
    <main>
      <Header
        src1600={images.nikkideadlift_1600}
        src1200={images.nikkideadlift_1200}
        src768={images.nikkideadlift_768}
        title="Testimonials"
      />

      <div className="max-w-xl flex flex-col gap-8">
        {reviews.map((review, index) => (
          <div key={index}>
            <p>{review.review}</p>
            <p>{review.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
