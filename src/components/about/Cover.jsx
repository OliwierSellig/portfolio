import styled from "styled-components";
import { backgroundCenter, tile } from "../../Mixins";

const StyledCover = styled.div`
  position: relative;
  grid-column: 1/2;
  ${tile}
  aspect-ratio: 1/1;
  background-image: url("/img/my-photo.jpg");
  ${backgroundCenter}
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
`;

const Hider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2.4rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: end;
  height: 50%;
  background-image: linear-gradient(
    0deg,
    rgba(68, 68, 68, 0.95) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  opacity: 0;
  transition: all 0.3s;
`;

const Me = styled.p`
  font-size: 2.6rem;
  font-weight: 500;
  font-family: "Playpen Sans", cursive;
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
