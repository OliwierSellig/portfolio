import { backgroundCenter, tile } from "../../styles/Mixins";
import { fadeHorizontal } from "../../styles/Animations";
import styled from "styled-components";

const StyledCover = styled.div`
  position: relative;
  grid-column: 1/2;
  aspect-ratio: 1/1;
  ${tile}
  background-image: url("/img/photo-lg.webp");
  ${backgroundCenter}
  animation: ${fadeHorizontal(-15, 0)} 1s;
  overflow: hidden;

  &:hover,
  &:focus {
    & div {
      opacity: 1;
    }

    & p {
      transform: none;
    }
  }

  @media only screen and (max-width: 792px) {
    grid-column: 1/-1;
    aspect-ratio: 5/3;
  }

  @media only screen and (max-width: 500px) {
    aspect-ratio: 4/3;
  }

  @media only screen and (max-width: 400px) {
    background-image: url("/img/photo-sm.webp");
  }
`;

const Hider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 50%;
  padding: 2.4rem;
  background-image: linear-gradient(
    0deg,
    rgba(68, 68, 68, 0.95) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: all 0.3s;
  opacity: 0;
`;

const Me = styled.p`
  font-family: "Playpen Sans", cursive;
  font-weight: 500;
  font-size: 2.6rem;
  color: #f9fafb;
  transform: translateY(150%);
  transition: all 0.3s;
`;

function Cover() {
  return (
    <StyledCover>
      <Hider>
        <Me>Yup, that's me!</Me>
      </Hider>
    </StyledCover>
  );
}

export default Cover;
