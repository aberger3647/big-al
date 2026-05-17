import { images } from "@/assets/optimized_photos";
import { Header } from "./Header";
import { reviews } from "@/assets/reviews";

export const Testimonials = () => {
  return (
    <main>
      <Header
        src1600={images.nikkideadlift_1600}
        src1200={images.nikkideadlift_1200}
        src768={images.nikkideadlift_768}
        title="Testimonials"
      />

    <div className='mx-auto max-w-5xl flex flex-col items-center my-2'>
 {reviews.map((review, index) => (
   <div key={index} className={`max-w-2xl mx-4 my-2 p-6 bg-brand-blue border ${
     index % 2 === 0 ? 'self-start' : 'self-end'
   }`}>
     <p>{review.review}</p>
     <p className="text-xl text-right text-white pt-5">{review.name}</p>
   </div>
 ))}
</div>
    </main>
  );
};
