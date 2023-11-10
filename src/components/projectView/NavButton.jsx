import styled from "styled-components";
import { backgroundCenter } from "../../styles/Mixins";

const StyledNavButton = styled.button`
  position: absolute;
  z-index: 200;
  top: ${(props) => `${props.$top}%`};
  left: ${(props) => `${props.$left}%`};
  transform: ${(props) =>
    `translate(${props.$translateX}%, ${props.$translateY}%)`};
  width: 6rem;
  height: 6rem;
  background-image: ${(props) =>
    props.$direct === "next"
      ? "url('/svg/arrow-next-light.svg')"
      : "url('/svg/arrow-prev-light.svg')"};
  ${backgroundCenter}
  transition:  all 0.2s;
  opacity: ${(props) => (props.$active ? "1" : "0")};
  visibility: ${(props) => (props.$active ? "visible" : "hidden")};
  cursor: pointer;

  &:hover,
  &:focus {
    background-image: ${(props) =>
      props.$direct === "next"
        ? "url('/svg/arrow-next-hover-light.svg')"
        : "url('/svg/arrow-prev-hover-light.svg')"};
  }
`;

function NavButton({
  prev = true,
  handleClick,
  active = true,
  top = 0,
  left = 0,
  translateX = 0,
  translateY = 0,
}) {
  return (
    <StyledNavButton
      $direct={prev ? "prev" : "next"}
      onClick={(e) => {
        e.stopPropagation();
        handleClick?.();
      }}
      $active={active}
      $top={top}
      $left={left}
      $translateX={translateX}
      $translateY={translateY}
      aria-label={`Go ${prev ? "Prev" : "Next"}`}
    />
  );
}

export default NavButton;
