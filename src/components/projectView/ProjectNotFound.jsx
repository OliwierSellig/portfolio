import styled from "styled-components";
import { absoluteFull, flexCenter } from "../../styles/Mixins";
import { useDarkMode } from "../../contexts/DarkModeContext";

const StyledContainer = styled.div`
  ${absoluteFull}
  ${flexCenter}
  gap: 1.2rem;
  text-align: center;
  flex-direction: column;
  padding: 2.4rem;

  & span {
    font-size: 3.2rem;
    font-weight: 500;
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
