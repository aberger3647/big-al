import { Image } from "./Image";

interface HeaderProps {
  src1600: string;
  src1200: string;
  src768: string;
  title: string;
}

export const Header = ({ src1600, src1200, src768, title }: HeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-6xl text-center m-4 mb-6">{title}</h1>
      <div className=" w-full md:max-w-5xl">
        <Image src1600={`images.${src1600}`} src1200={src1200} src768={src768} />
      </div>
    </div>
  );
};
