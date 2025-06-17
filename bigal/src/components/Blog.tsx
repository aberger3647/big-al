import { Header } from "./Header";
import { images } from "../assets/optimized_photos";

export const Blog = () => {
  return (
    <main>
      <Header
        src1600={images.masonsquat_1600}
        src1200={images.masonsquat_1200}
        src768={images.masonsquat_768}
        title="Blog"
      />
    </main>
  );
};
