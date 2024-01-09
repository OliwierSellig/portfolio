import {
  absoluteFull,
  backgroundCenter,
  flexCenter,
} from "../../styles/Mixins";
import { fadeVertical } from "../../styles/Animations";
import styled from "styled-components";

const Container = styled.li`
  position: relative;
  z-index: 50;
  ${flexCenter};
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: var(--border-radius-default);
  background: transparent;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 3rem;
  color: var(--color-text-white);
  letter-spacing: var(--letter-spacing-default);
  animation: ${fadeVertical(10, 0)} 0.7s;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    ${absoluteFull}
    z-index: -10;
    ${backgroundCenter}
    transform: scale(1.03);
    transition: opacity 0.3s;
    filter: blur(5px);
  }

  &::before {
    background-image: linear-gradient(
        180deg,
        rgba(39, 47, 58, 0.6) 0%,
        rgba(31, 41, 55, 0.6) 60%
      ),
      url("/img/tbm-l.webp");
    opacity: 1;

    @media only screen and (max-width: 600px) {
      background-image: linear-gradient(
          180deg,
          rgba(39, 47, 58, 0.6) 0%,
          rgba(31, 41, 55, 0.6) 60%
        ),
        url("/img/tbm-s.webp");
    }
  }

  &::after {
    background-image: linear-gradient(
        180deg,
        rgba(39, 47, 58, 0.3) 0%,
        rgba(31, 41, 55, 0.3) 60%
      ),
      url("/img/tbm-l.webp");
    opacity: 0;

    @media only screen and (max-width: 600px) {
      background-image: linear-gradient(
          180deg,
          rgba(39, 47, 58, 0.3) 0%,
          rgba(31, 41, 55, 0.3) 60%
        ),
        url("/img/tbm-s.webp");
    }
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
      filter: blur(3px);
    }
  }

  @media only screen and (max-width: 720px) {
    grid-column: 1/-1;
  }
`;

function ComingSoon() {
  return <Container tabIndex={0}>Coming Soon</Container>;
}

export default ComingSoon;
