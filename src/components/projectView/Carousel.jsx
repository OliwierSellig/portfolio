import styled from "styled-components";

const StyledCarousel = styled.ul``;

const CarouselItem = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: ${(props) => `translateX(${props?.$pos * 100}%)`};
  transition: all 0.3s ease-in-out;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

function Carousel({ list = [], iterator, full = false }) {
  return (
    <StyledCarousel>
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
    </StyledCarousel>
  );
}

export default Carousel;
