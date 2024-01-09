import styled from "styled-components";
import { ScreenshotProp } from "../../lib/types";

interface CarouselItemProps {
  $pos: number;
}

const CarouselItem = styled.li<CarouselItemProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: ${(props) => `translateX(${props?.$pos * 100}%)`};
  transition: all 0.3s ease-in-out;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface CarouselProps {
  list: ScreenshotProp[];
  iterator: number;
  full?: boolean;
}

function Carousel({ list = [], iterator, full = false }: CarouselProps) {
  return (
    <ul>
      {list?.map((s, i) => (
        <CarouselItem key={i} $pos={i - iterator}>
          <img
            srcSet={`${s.sm} 800w, ${s.md} 1400w, ${s.lg} 1800w`}
            sizes={full ? "95vw" : "(max-width: 800px) 95vw, 560px"}
            src={s.lg}
            alt={`Image ${i + 1}`}
          />
        </CarouselItem>
      ))}
    </ul>
  );
}

export default Carousel;
