import styled from "styled-components";
import { absoluteFull, backgroundCenter, flexCenter } from "../../Mixins";

const Container = styled.li`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: var(--border-radius-default);
  overflow: hidden;
  z-index: 50;
  display: flex;
  ${flexCenter};
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 3rem;
  color: var(--color-text-white);
  letter-spacing: var(--letter-spacing-default);
  background: transparent;

  &::before,
  &::after {
    content: "";
    ${absoluteFull}
    ${backgroundCenter}
    z-index: -10;
    filter: blur(5px);
    transform: scale(1.03);
    transition: opacity 0.3s;
  }

  &::before {
    background-image: linear-gradient(
        180deg,
        rgba(39, 47, 58, 0.6) 0%,
        rgba(31, 41, 55, 0.6) 60%
      ),
      url("/img/soon.png");
    opacity: 1;
  }

  &::after {
    background-image: linear-gradient(
        180deg,
        rgba(39, 47, 58, 0.3) 0%,
        rgba(31, 41, 55, 0.3) 60%
      ),
      url("/img/soon.png");
    opacity: 0;
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
