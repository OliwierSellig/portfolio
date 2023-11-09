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

function Carousel({ list = [], iterator }) {
  return (
    <StyledCarousel>
      {list?.map((s, i) => (
        <CarouselItem key={i} $pos={i - iterator}>
          <img src={s} alt={`Image ${i + 1}`} />
        </CarouselItem>
      ))}
    </StyledCarousel>
  );
}

export default Carousel;
