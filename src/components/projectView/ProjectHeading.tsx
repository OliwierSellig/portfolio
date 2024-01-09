import { TechnologyItem } from "../../lib/types";
import { fadeHorizontal } from "../../styles/Animations";
import { tile } from "../../styles/Mixins";
import CustomButton from "../global/CustomButton";
import ProjectTech from "./ProjectTech";
import styled from "styled-components";

const StyledContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  aspect-ratio: 16/9;
  padding: 3.6rem 2.4rem;
  ${tile};
  animation: ${fadeHorizontal(-20, 0)} 1s;

  @media only screen and (max-width: 840px) {
    grid-column: 1/-1;
    grid-row: 1/2;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3.6rem;
    aspect-ratio: auto;
  }

  @media only screen and (max-width: 440px) {
    & a {
      justify-content: center;
      padding: 2rem;
      border-radius: 50%;

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
  margin-bottom: 1.2rem;
  padding-bottom: 2px;
  border-bottom: 3px solid var(--color-grey-400);
  font-weight: 600;
  font-family: "Ubuntu", sans-serif;
  font-size: 4.8rem;
  letter-spacing: 2.4px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  @media only screen and (max-width: 840px) {
    flex-direction: column;
  }
`;

interface ProjectHeadingProps {
  heading: string;
  techstack: string[];
  liveUrl: string;
  repoUrl: string;
}

function ProjectHeading({
  heading,
  techstack,
  liveUrl,
  repoUrl,
}: ProjectHeadingProps) {
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
