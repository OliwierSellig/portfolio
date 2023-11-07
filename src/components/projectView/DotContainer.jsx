import styled from "styled-components";

const StyledDotContainer = styled.nav`
  position: absolute;
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  top: ${(props) => `${props.$top}%`};
  left: ${(props) => `${props.$left}%`};
  transform: ${(props) =>
    `translate(${props.$translateX}%, ${props.$translateY}%)`};
  transition: all 0.2s;
`;

const Dot = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid var(--color-text-white);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${(props) =>
    props.$active ? "var(--color-text-white)" : "transparent"};

  &:hover,
  &:focus {
    border: 2px solid var(--color-text-white-shade-1);
    background-color: ${(props) =>
      props.$active ? "var(--color-text-white-shade-1)" : "transparent"};
  }
`;

function DotContainer({
  list = [],
  iterator,
  setIterator,
  top = 0,
  left = 0,
  translateX = 0,
  translateY = 0,
}) {
  return (
    <StyledDotContainer
      $top={top}
      $left={left}
      $translateX={translateX}
      $translateY={translateY}
    >
      {Array.from({ length: list?.length || 0 }, (_, i) => (
        <Dot
          key={i}
          onClick={(e) => {
            e.stopPropagation();
            setIterator(i);
          }}
          $active={i === iterator}
        />
      ))}
    </StyledDotContainer>
  );
}

export default DotContainer;
