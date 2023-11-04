import styled from "styled-components";
import { tile } from "../../Mixins";

const HeadingContainer = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justify || "start"};
`;

const Heading = styled.h2`
  font-weight: 500;
  letter-spacing: var(--letter-spacing-default);
  font-size: 2rem;
  padding: 8px 3.2rem;
  ${tile}
`;

function SectionHeading({ children, justify }) {
  return (
    <HeadingContainer $justify={justify}>
      <Heading>{children}</Heading>
    </HeadingContainer>
  );
}

export default SectionHeading;
