import styled from "styled-components";
import { backgroundCenter, tile } from "../../styles/Mixins";
import { useState } from "react";

const StyledContainer = styled.div`
  position: relative;
  ${tile}
  aspect-ratio: 16/9;
  ${backgroundCenter}
  cursor: pointer;
  overflow: hidden;
`;

const NavButton = styled.button`
  position: absolute;
`;

const Carousel = styled.ul``;

const CarouselItem = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: ${(props) => `translateX(${props?.$pos * 100}%)`};
`;

function ProjectGallery() {
  const [iterator, setIterator] = useState(0);

  return (
    <StyledContainer>
      <NavButton />
      <Carousel>
        <CarouselItem $pos={0 - iterator}>
          <img src="/img/wbs.png" alt="GameSpace" />
        </CarouselItem>
        <CarouselItem $pos={1 - iterator}>
          <img src="/img/charlies.png" alt="Charlie's" />
        </CarouselItem>
        <CarouselItem $pos={2 - iterator}>
          <img src="/img/portfolio.png" alt="Portfolio" />
        </CarouselItem>
        <CarouselItem $pos={3 - iterator}>
          <img src="/img/deermood.png" alt="Deermood" />
        </CarouselItem>
      </Carousel>
      <NavButton />
    </StyledContainer>
  );
}

export default ProjectGallery;
