interface ImageProps {
  src1600: string;
  src1200: string;
  src768: string;
  alt?: string;
}
export const Image = ({ src1600, src1200, src768, alt = "" }: ImageProps) => {
  return (
    <picture>
      <source media="(min-width:1600px)" srcSet={src1600} />
      <source media="(min-width:1200px)" srcSet={src1200} />
      <source media="(min-width:768px)" srcSet={src768} />
     <img src={new URL(`${src768}`, import.meta.url).href} alt={alt} />
    </picture>
  )
}