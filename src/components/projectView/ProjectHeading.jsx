import styled from "styled-components";
import { tile } from "../../styles/Mixins";
import ProjectTech from "./ProjectTech";
import { fadeHorizontal } from "../../styles/Animations";
import CustomButton from "../global/CustomButton";

const StyledContainer = styled.header`
  ${tile};
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 3.6rem 2.4rem;
  animation: ${fadeHorizontal(-20, 0)} 1s;

  @media only screen and (max-width: 840px) {
    grid-column: 1/-1;
    grid-row: 1/2;
    aspect-ratio: auto;
    flex-direction: row;
    align-items: center;
    gap: 3.6rem;
    justify-content: space-between;
  }

  @media only screen and (max-width: 440px) {
    & a {
      padding: 2rem;
      border-radius: 50%;
      justify-content: center;

      & span {
        display: none;
      }

      & img {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  font-size: 4.8rem;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  letter-spacing: 2.4px;
  margin-bottom: 1.2rem;
  padding-bottom: 2px;
  border-bottom: 3px solid var(--color-grey-400);
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  @media only screen and (max-width: 840px) {
    flex-direction: column;
  }
`;

function ProjectHeading({ heading, techstack, liveUrl, repoUrl }) {
  return (
    <StyledContainer>
      <ProjectInfo>
        <Heading>{heading}</Heading>
        <ProjectTech techstack={techstack} />
      </ProjectInfo>
      <Navigation>
        <CustomButton
          isLink={true}
          dest={liveUrl}
          padding={[1.2, 2.8, 1.2, 2.8]}
          theme="var(--color-blue-600)"
          themeFocus="var(--color-blue-500)"
        >
          <img src="/svg/globe.svg" alt="Globe" />
          <span>Live Server</span>
        </CustomButton>
        <CustomButton
          isLink={true}
          dest={repoUrl}
          padding={[1.2, 2.8, 1.2, 2.8]}
          theme="#28282B"
          themeFocus="#3e3e40"
        >
          <img src="/svg/github-mark.svg" alt="Github" />
          <span>Repository</span>
        </CustomButton>
      </Navigation>
    </StyledContainer>
  );
}

export default ProjectHeading;
