import { images } from "../assets/optimized_photos";
import { Button } from "./Button";
import { Image } from "./Image";

export const Home = () => {
  return (
    <main className="flex flex-col">

        <h1 className="text-3xl md:text-6xl text-center m-4 mb-6">
          Big Al Strength & Conditioning
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
        <p>
          are you ready to take your fitness to the next level with in-person
          guidance?
        </p>
        <p>
          are you looking for a way to make working out a part of your
          lifestyle?
        </p>
      <Button />
      </div>

      </div>

    </main>
  );
};
