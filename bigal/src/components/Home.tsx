import { images } from "../assets/optimized_photos";
import { Image } from "./Image";

export const Home= () => {
  return (
      <main className="p-4 md:p-8">
      <h1 className="text-3xl text-center">big al strength and conditioning</h1>

      <div className="m-4 gap-4 flex flex-col items-center">
        <div className="-mx-12">
          <Image
            src1600={images.masonsquat_768}
            src1200={images.masonsquat_1200}
            src768={images.masonsquat_768}
          />
        </div>

        <p>are you ready to take your fitness to the next level with in-person guidance?</p>
        <p>are you looking for a way to make working out a part of your lifestyle?</p>
        </div>
      </main>
  );
};
