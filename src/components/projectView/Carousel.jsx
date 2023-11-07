import styled from "styled-components";

const StyledCarousel = styled.ul``;

const CarouselItem = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: ${(props) => `translateX(${props?.$pos * 100}%)`};
  transition: all 0.3s ease-in-out;
`;

function Carousel({ list = [], source, alt, iterator }) {
  return (
    <StyledCarousel>
      {list?.map((s, i) => (
        <CarouselItem key={i} $pos={i - iterator}>
          <img src={s[source]} alt={s[alt]} />
        </CarouselItem>
      ))}
    </StyledCarousel>
  );
}

export default Carousel;
