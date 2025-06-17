import { images } from "../assets/optimized_photos";
import { Image } from "./Image";
import { InquiryForm } from "./InquiryForm";
import { Header } from "./Header";

export const Contact = () => {
  return (
    <main>
      <Header
        src1600={images.nikkishoulderpress_1600}
        src1200={images.nikkishoulderpress_1200}
        src768={images.nikkishoulderpress_768}
        title="Get in Touch"
      />
<div className="flex justify-center">

      <InquiryForm />
</div>

      <div className="m-4 gap-4 flex flex-col items-center">
        <div className="-mx-12">
          <Image
            src1600={images.joe_pullup_768}
            src1200={images.joe_pullup_1200}
            src768={images.joe_pullup_768}
          />
        </div>
      </div>
    </main>
  );
};
