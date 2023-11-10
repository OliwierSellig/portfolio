import { tile } from "../../styles/Mixins";
import { fadeVertical } from "../../styles/Animations";
import { useDarkMode } from "../../contexts/DarkModeContext";
import styled from "styled-components";

const StyledBox = styled.div`
  ${tile}
  padding: 3.6rem;
  animation: ${fadeVertical(15, 0)} 1.2s;

  @media only screen and (max-width: 840px) {
    grid-column: 1/-1;
  }
`;

const BoxHeading = styled.h3`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 8px;

  & span {
    font-weight: 600;
    font-size: 3.4rem;
    letter-spacing: var(--letter-spacing-default);
  }

  & img {
    width: 4rem;
    height: 4rem;
  }
`;

const BoxContent = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
`;

function ProjectTextBox({ heading, type, children }) {
  const { inDarkMode } = useDarkMode();

  return (
    <StyledBox>
      <BoxHeading>
        <span>{heading}</span>
        <img
          src={`/svg/${type === "about" ? "about" : "learned"}-${
            inDarkMode ? "dark" : "light"
          }.svg`}
          alt="Heading Icon"
        />
      </BoxHeading>
      <BoxContent>{children}</BoxContent>
    </StyledBox>
  );
}

export default ProjectTextBox;
