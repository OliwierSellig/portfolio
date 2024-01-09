import styled from "styled-components";
import { ScreenshotProp } from "../../lib/types";

interface StyledDotCotnainerProps {
  $top: number;
  $left: number;
  $translateX: number;
  $translateY: number;
}

const StyledDotContainer = styled.nav<StyledDotCotnainerProps>`
  position: absolute;
  top: ${(props) => `${props.$top}%`};
  left: ${(props) => `${props.$left}%`};
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  transform: ${(props) =>
    `translate(${props.$translateX}%, ${props.$translateY}%)`};
  transition: all 0.2s;
`;

interface DotProps {
  $active: boolean;
}

const Dot = styled.button<DotProps>`
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid var(--color-text-white);
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? "var(--color-text-white)" : "transparent"};
  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid var(--color-text-white-shade-1);
    background-color: ${(props) =>
      props.$active ? "var(--color-text-white-shade-1)" : "transparent"};
  }
`;

interface DotContainerProps {
  list: ScreenshotProp[];
  iterator: number;
  setIterator: React.Dispatch<React.SetStateAction<number>>;
  top: number;
  left: number;
  translateY: number;
  translateX: number;
}

function DotContainer({
  list,
  iterator,
  setIterator,
  top = 0,
  left = 0,
  translateX = 0,
  translateY = 0,
}: DotContainerProps) {
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.stopPropagation();
              setIterator(i);
            }
          }}
          $active={i === iterator}
          aria-label={`Set active image as ${i + 1}`}
        />
      ))}
    </StyledDotContainer>
  );
}

export default DotContainer;
