import { images } from "../assets/optimized_photos";
import { Image } from "./Image";
import { reviews } from "../assets/reviews.ts";
export const Testimonials = () => {
  return (
    <main className="p-4 md:p-8">
      <h1 className="text-3xl text-center">testimonials</h1>

      <div className="m-4 space-y-4 flex flex-col items-center">
        <div className="-mx-12">
          <Image
            src1600={images.nikkishoulderpress_1600}
            src1200={images.nikkishoulderpress_1200}
            src768={images.nikkishoulderpress_768}
          />
        </div>
        <div className='max-w-xl flex flex-col gap-8'>
          {reviews.map((review, index) => (
            <div key={index}>
              <p>{review.review}</p>
              <p>{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
