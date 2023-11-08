import styled from "styled-components";
import { tile } from "../../styles/Mixins";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { fadeIn } from "../../styles/Animations";

const StyledBox = styled.div`
  ${tile}
  aspect-ratio: 4/3;
  padding: 3.6rem;
  animation: ${fadeIn} 2s;
`;

const BoxHeading = styled.h3`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 8px;

  & span {
    font-size: 3.4rem;
    font-weight: 600;
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
