import { absoluteFull, flexCenter } from "../../styles/Mixins";
import { useDarkMode } from "../../contexts/DarkModeContext";
import styled from "styled-components";

const StyledContainer = styled.div`
  ${absoluteFull}
  ${flexCenter}
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.4rem;
  text-align: center;

  & span {
    font-weight: 500;
    font-size: 3.2rem;
    letter-spacing: var(--letter-spacing-default);
  }

  & img {
    width: 7.2rem;
    height: 7.2rem;
  }
`;

function ProjectNotFound({ projectName = "" }) {
  const { inDarkMode } = useDarkMode();

  return (
    <StyledContainer>
      <span>Sorry, no project of name {projectName} has been found...</span>
      <img
        src={
          inDarkMode ? "/svg/noproject-dark.svg" : "/svg/noproject-light.svg"
        }
        alt="Sad face"
      />
    </StyledContainer>
  );
}

export default ProjectNotFound;
