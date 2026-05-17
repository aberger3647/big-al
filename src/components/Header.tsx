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
      <h1 className="ba-h1">{title}</h1>
      <div className=" w-full md:max-w-5xl">
        <Image src1600={src1600} src1200={src1200} src768={src768} className="mx-auto block"/>
      </div>
    </div>
  );
};
