import { images } from "../assets/optimized_photos";
import { Button } from "./Button";
import { Image } from "./Image";

export const Home = () => {
  return (
    <main className="flex flex-col">

        <h1 className="ba-h1">
          Big Al Strength &amp; Conditioning
        </h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div>
          <Image
            src1600={images.headshot2_1000}
            src1200={images.headshot2_1000}
            src768={images.headshot2_768}
            className="h-full w-full object-cover"
            alt="Headshot of Alex"
          />
        </div>

      <div className="m-4 gap-4 flex flex-col items-center">
        <span className="inline-block bg-brand-blue text-white text-sm font-bold uppercase tracking-[0.08em] px-4 py-2">
          Currently fully booked &mdash; waitlist open
        </span>
        <p className="text-2xl text-center">
          Are you ready to take your fitness to the next level with in-person
          guidance?
        </p>
        <p className="text-2xl text-center">
          Are you looking for a way to make working out a part of your
          lifestyle?
        </p>
      <Button />
      </div>

      </div>

    </main>
  );
};
