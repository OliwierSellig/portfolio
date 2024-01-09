import { fadeIn } from "../../styles/Animations";
import { absoluteFull } from "../../styles/Mixins";
import { useScreenshots } from "../../contexts/ScreenshotsContext";
import Carousel from "./Carousel";
import NavButton from "./NavButton";
import DotContainer from "./DotContainer";
import styled from "styled-components";
import { ScreenshotProp } from "../../lib/types";

const ScreenshotContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 95vw;
  max-width: 160rem;
  aspect-ratio: 16/9;
  border-radius: var(--border-radius-default);
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 0.3s;
  overflow: hidden;

  &::before {
    content: "";
    ${absoluteFull}
    z-index: 100;
    background-image: linear-gradient(
      0deg,
      rgba(63, 63, 70, 0.2) 0%,
      rgba(63, 63, 70, 0) 100%
    );
  }
`;

interface ScreenshotFullProps {
  list: ScreenshotProp[];
}

function ScreenshotFull({ list }: ScreenshotFullProps) {
  const { iterator, setIterator, canGoPrev, goPrev, canGoNext, goNext } =
    useScreenshots();

  return (
    <ScreenshotContainer>
      <Carousel list={list} iterator={iterator} full={true} />
      <NavButton
        prev={true}
        active={canGoPrev()}
        handleClick={goPrev}
        top={50}
        left={0}
        translateY={-50}
      />
      <NavButton
        prev={false}
        active={canGoNext(list)}
        handleClick={() => goNext(list)}
        top={50}
        left={100}
        translateX={-100}
        translateY={-50}
      />
      <DotContainer
        list={list}
        iterator={iterator}
        setIterator={setIterator}
        top={100}
        left={50}
        translateX={-50}
        translateY={-400}
      />
    </ScreenshotContainer>
  );
}

export default ScreenshotFull;
