import styled from "styled-components";
import { fadeFromLeft } from "../../Animations";
import { absoluteFull, backgroundCenter } from "../../Mixins";

const Container = styled.li`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: var(--border-radius-default);
  background-image: ${(props) => `url("${props.$cover}")`};
  ${backgroundCenter}
  transition: all 0.3s ease-in;
  overflow: hidden;

  &::before {
    content: "";
    ${absoluteFull}
    background-image: linear-gradient(
      180deg,
      rgba(31, 41, 55, 0.3) 0%,
      rgba(31, 41, 55, 0.4) 60%
    );
    z-index: 20;
    opacity: 1;
    transition: all 0.3s;
  }

  &::after {
    content: "";
    ${absoluteFull}
    background-image: linear-gradient(
      180deg,
      rgba(31, 41, 55, 0.7) 0%,
      rgba(31, 41, 55, 0.7) 60%
    );
    z-index: 20;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover,
  &:focus,
  &:focus-within {
    &::before {
      opacity: 0;
    }

    &::after {
      opacity: 1;
    }
    & div {
      bottom: 15%;

      & h3 {
        border-bottom: 2px solid var(--color-grey-400);
      }

      & ul {
        opacity: 1;
        visibility: visible;
        animation: ${fadeFromLeft} 1s;
      }

      & nav {
        opacity: 1;
        visibility: visible;
        animation: ${fadeFromLeft} 1.2s;
      }
    }
  }
`;

const ProjectBox = styled.div`
  position: absolute;
  bottom: -30%;
  left: 0;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  padding: 2.4rem;
  transition: all 0.4s;
  z-index: 40;
`;

const ProjectTitle = styled.h3`
  color: var(--color-grey-50);
  font-size: 3.2rem;
  letter-spacing: 0.3px;
  font-weight: 500;
  font-family: "Ubuntu", sans-serif;
  padding-bottom: 2px;
  border-bottom: 2px solid var(--color-grey-600);
  margin-bottom: 1.2rem;
  transition: all 0.3s;
`;

const ProjectRow = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0;
  visibility: hidden;
`;

const TechItem = styled.li`
  width: 3.8rem;
  height: 3.8rem;
`;

const ProjectLink = styled.a`
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-grey-50);
  cursor: pointer;
  transition: all 0.2s;

  &:hover,
  &:focus {
    color: var(--color-grey-400);
    transform: scale(1.05);
  }
`;

function ProjectItem({ project }) {
  return (
    <Container tabIndex={0} $cover={project?.cover}>
      <ProjectBox>
        <ProjectTitle>{project?.name}</ProjectTitle>
        <ProjectRow>
          {project?.stack.map((tech, i) => (
            <TechItem key={i}>
              <img src={tech} alt="Project Tech" />
            </TechItem>
          ))}
        </ProjectRow>
        <ProjectRow as="nav">
          <ProjectLink href={project?.url || "#"} target="_blank">
            Live Preview
          </ProjectLink>
          <ProjectLink href="https://gamespacelib.netlify.app/" target="_blank">
            Check Details
          </ProjectLink>
        </ProjectRow>
      </ProjectBox>
    </Container>
  );
}

export default ProjectItem;
