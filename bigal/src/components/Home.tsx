import { images } from "../assets/optimized_photos";
import { Button } from "./Button";
import { Header } from "./Header";

export const Home = () => {
  return (
    <main>
      <Header
        src1600={images.masonsquat_768}
        src1200={images.masonsquat_1200}
        src768={images.masonsquat_768}
        title="Big Al Strength & Conditioning"
      />
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
    </main>
  );
};
