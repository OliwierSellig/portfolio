import styled from "styled-components";
import { absoluteFull, backgroundCenter, tile } from "../../styles/Mixins";
import { useState } from "react";
import Modal from "../global/Modal";
import ScreenshotFull from "./ScreenshotFull";
import DotContainer from "./DotContainer";
import NavButton from "./NavButton";
import Carousel from "./Carousel";
import { useScreenshots } from "../../contexts/ScreenshotsContext";

const StyledContainer = styled.div`
  position: relative;
  ${tile}
  aspect-ratio: 16/9;
  ${backgroundCenter}
  cursor: pointer;
  overflow: clip;
  z-index: 50;

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
`;

function ProjectGallery() {
  const screenshoots = [
    { url: "/img/wbs.png", name: "GameSpace" },
    { url: "/img/charlies-full.png", name: "Charlie's" },
    { url: "/img/portfolio.png", name: "Portfolio" },
    { url: "/img/deermood.png", name: "Deermood" },
  ];

  const { iterator, setIterator, canGoPrev, goPrev, canGoNext, goNext } =
    useScreenshots();

  return (
    <Modal>
      <Modal.Open opens="screenshot">
        <StyledContainer>
          <Carousel
            list={screenshoots}
            source="url"
            alt="name"
            iterator={iterator}
          />
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
            handleClick={() => goNext(screenshoots)}
            top={50}
            left={100}
            translateX={-100}
            translateY={-50}
          />
          <DotContainer
            list={screenshoots}
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
        <ScreenshotFull list={screenshoots} />
      </Modal.Window>
    </Modal>
  );
}

export default ProjectGallery;
