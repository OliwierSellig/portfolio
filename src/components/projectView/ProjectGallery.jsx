import styled from "styled-components";
import { absoluteFull, tile } from "../../styles/Mixins";
import Modal from "../global/Modal";
import ScreenshotFull from "./ScreenshotFull";
import DotContainer from "./DotContainer";
import NavButton from "./NavButton";
import Carousel from "./Carousel";
import { useScreenshots } from "../../contexts/ScreenshotsContext";
import { fadeHorizontal } from "../../styles/Animations";

const StyledContainer = styled.div`
  position: relative;
  ${tile}
  aspect-ratio: 16/9;
  cursor: pointer;
  overflow: clip;
  z-index: 50;
  animation: ${fadeHorizontal(20, 0)} 1s;
  width: 100%;

  & > button:first-of-type {
    transform: translate(-100%, -50%);
  }

  & > button:nth-of-type(2) {
    transform: translate(0%, -50%);
  }

  &:hover,
  &:focus,
  &:focus-within {
    &::before {
      opacity: 0;
    }

    &::after {
      opacity: 1;
    }

    & nav {
      transform: translate(-50%, -250%);
    }

    & > button:first-of-type {
      transform: translate(0, -50%);
    }

    & > button:nth-of-type(2) {
      transform: translate(-100%, -50%);
    }
  }

  &::before,
  &::after {
    content: "";
    ${absoluteFull}
    z-index: 100;
    transition: opacity 0.3s;
  }

  &::before {
    background-image: linear-gradient(
      0deg,
      rgba(63, 63, 70, 0.2) 0%,
      rgba(63, 63, 70, 0.2) 100%
    );
    opacity: 1;
  }

  &::after {
    background-image: linear-gradient(
      0deg,
      rgba(63, 63, 70, 0.4) 0%,
      rgba(63, 63, 70, 0.2) 100%
    );
    opacity: 0;
  }

  @media only screen and (max-width: 1040px) {
    aspect-ratio: auto;
  }

  @media only screen and (max-width: 840px) {
    grid-column: 1/-1;
    grid-row: 2/3;
    aspect-ratio: 16/9;
  }
`;

function ProjectGallery({ screenshots }) {
  const { iterator, setIterator, canGoPrev, goPrev, canGoNext, goNext } =
    useScreenshots();

  return (
    <Modal>
      <Modal.Open opens="screenshot">
        <StyledContainer>
          <Carousel list={screenshots} iterator={iterator} />
          <NavButton
            prev={true}
            active={canGoPrev}
            handleClick={goPrev}
            top={50}
            left={0}
            translateX={0}
            translateY={-50}
          />
          <NavButton
            prev={false}
            active={canGoNext}
            handleClick={() => goNext(screenshots)}
            top={50}
            left={100}
            translateX={-100}
            translateY={-50}
          />
          <DotContainer
            list={screenshots}
            iterator={iterator}
            setIterator={setIterator}
            top={100}
            left={50}
            translateX={-50}
            translateY={0}
          />
        </StyledContainer>
      </Modal.Open>
      <Modal.Window name="screenshot">
        <ScreenshotFull list={screenshots} />
      </Modal.Window>
    </Modal>
  );
}

export default ProjectGallery;
