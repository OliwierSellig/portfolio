import { ReactNode } from "react";
import { selectedAnimation, tile } from "../../styles/Mixins";
import styled from "styled-components";
import { AnimationType } from "../../lib/types";

interface HeadingContainerProps {
  $animationType: AnimationType;
  $animationTime: number;
  $animationFadeFrom: number;
  $animationFadeTo: number;
  $justify: "center" | "start" | "end";
}

const HeadingContainer = styled.div<HeadingContainerProps>`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justify || "start"};
  ${(props) =>
    selectedAnimation(
      props.$animationType,
      props.$animationTime,
      props.$animationFadeFrom,
      props.$animationFadeTo
    )}
`;

const Heading = styled.h2`
  padding: 8px 3.2rem;
  ${tile}
  font-weight: 500;
  font-size: 2rem;
  letter-spacing: var(--letter-spacing-default);
`;

interface SectionHeadingProps {
  children: ReactNode;
  justify?: "center" | "start" | "end";
  animationType?: AnimationType;
  animationTime?: number;
  animationFadeCoords: number[];
}

function SectionHeading({
  children,
  justify = "center",
  animationType = "fadeIn",
  animationTime = 1,
  animationFadeCoords = [],
}: SectionHeadingProps) {
  return (
    <HeadingContainer
      $animationType={animationType}
      $animationTime={animationTime}
      $animationFadeFrom={animationFadeCoords?.at(0) || 0}
      $animationFadeTo={animationFadeCoords?.at(1) || 0}
      $justify={justify}
    >
      <Heading>{children}</Heading>
    </HeadingContainer>
  );
}

export default SectionHeading;
