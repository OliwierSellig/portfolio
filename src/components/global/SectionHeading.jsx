import styled from "styled-components";
import { selectedAnimation, tile } from "../../styles/Mixins";

const HeadingContainer = styled.div`
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
  font-weight: 500;
  letter-spacing: var(--letter-spacing-default);
  font-size: 2rem;
  padding: 8px 3.2rem;
  ${tile}
`;

function SectionHeading({
  children,
  justify,
  animationType,
  animationTime = 1,
  animationFadeCoords = [],
}) {
  return (
    <HeadingContainer
      $animationType={animationType}
      $animationTime={animationTime}
      $animationFadeFrom={animationFadeCoords?.at(0)}
      $animationFadeTo={animationFadeCoords?.at(1)}
      $justify={justify}
    >
      <Heading>{children}</Heading>
    </HeadingContainer>
  );
}

export default SectionHeading;
