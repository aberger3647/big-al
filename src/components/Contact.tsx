import { images } from "../assets/optimized_photos";
import { Image } from "./Image";
import { InquiryForm } from "./InquiryForm";
import { Header } from "./Header";
import { reviews } from "@/assets/reviews";

const featuredReviews = reviews.slice(0, 3);

export const Contact = () => {
  return (
    <main>
      <Header
        src1600={images.nikkishoulderpress_1600}
        src1200={images.nikkishoulderpress_1200}
        src768={images.nikkishoulderpress_768}
        title="Join the Waitlist"
        alt="A client performing a barbell shoulder press"
      />

      <div className="max-w-3xl mx-auto px-4 mt-8 text-center flex flex-col items-center gap-4">
        <span className="inline-block bg-brand-blue text-black text-sm font-bold uppercase tracking-[0.08em] px-4 py-2">
          Coaching is currently full
        </span>
        <p className="text-xl">
          Spots are limited and open up rarely. Add your name to the waitlist
          and I'll reach out the moment one frees up.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 grid gap-4 md:grid-cols-3">
        {featuredReviews.map((review, index) => (
          <div key={index} className="bg-brand-blue border p-4 flex flex-col">
            <p className="flex-grow">{review.review}</p>
            <p className="text-right text-black pt-3 font-semibold">
              {review.name}
            </p>
          </div>
        ))}
      </div>

<div className="flex justify-center">

      <InquiryForm />
</div>

      <div className="m-4 gap-4 flex flex-col items-center">
        <div className="md:-mx-12">
          <Image
            src1600={images.joe_pullup_768}
            src1200={images.joe_pullup_1200}
            src768={images.joe_pullup_768}
            alt="A client performing a pull-up"
            className="max-h-[55vh]"
          />
        </div>
      </div>
    </main>
  );
};
