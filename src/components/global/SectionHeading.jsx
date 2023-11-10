import { selectedAnimation, tile } from "../../styles/Mixins";
import styled from "styled-components";

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
  padding: 8px 3.2rem;
  ${tile}
  font-weight: 500;
  font-size: 2rem;
  letter-spacing: var(--letter-spacing-default);
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
