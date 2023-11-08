import styled from "styled-components";
import { tile } from "../../styles/Mixins";
import ProjectTech from "./ProjectTech";
import { fadeHorizontal } from "../../styles/Animations";

const StyledContainer = styled.header`
  ${tile};
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 3.6rem 2.4rem;
  animation: ${fadeHorizontal(-20, 0)} 1s;
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
`;

const ProjectLink = styled.a`
  padding: 1.2rem 2.8rem;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: var(--border-radius-default);
  background-color: ${(props) =>
    props.$dest === "repo" ? "#28282B" : "var(--color-blue-500)"};
  box-shadow: 0 2rem 4rem
    ${(props) =>
      props.$dest === "repo"
        ? "rgba(40, 40, 43, 0.2)"
        : "rgba(59, 130, 246, 0.15)"};

  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  &:hover,
  &:focus {
    transform: scale(1.03);

    background-color: ${(props) =>
      props.$dest === "repo" ? "#3e3e40" : "var(--color-blue-400)"};
  }

  & span {
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: var(--letter-spacing-default);
    color: var(--color-text-white);
  }

  & img {
    width: 2.6rem;
    height: 2.6rem;
  }
`;

function ProjectHeading({ heading, techstack, liveUrl, repoUrl }) {
  return (
    <StyledContainer>
      <Heading>{heading}</Heading>
      <ProjectTech techstack={techstack} />
      <Navigation>
        <ProjectLink $dest="live" href={liveUrl} target="_blank">
          <img src="/svg/globe.svg" alt="Globe" />
          <span>Live Server</span>
        </ProjectLink>
        <ProjectLink $dest="repo" href={repoUrl} target="_blank">
          <img src="/svg/github-mark.svg" alt="Github" />
          <span>Repository</span>
        </ProjectLink>
      </Navigation>
    </StyledContainer>
  );
}

export default ProjectHeading;
