import { Link } from "react-router-dom";
import { fadeHorizontal } from "../../styles/Animations";
import { absoluteFull, backgroundCenter } from "../../styles/Mixins";
import { useData } from "../../contexts/DataContext";
import styled, { css } from "styled-components";

const Container = styled.li`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: var(--border-radius-default);
  background-image: ${(props) => `url("${props.$cover.md}")`};
  ${backgroundCenter}
  transition: all 0.3s ease-in;
  animation: ${(props) =>
      css`
        ${fadeHorizontal(props.$number % 2 === 0 ? -10 : 10, 0)}
      `}
    1s;
  overflow: hidden;

  &::before {
    content: "";
    ${absoluteFull}
    z-index: 20;
    background-image: linear-gradient(
      180deg,
      rgba(31, 41, 55, 0.3) 0%,
      rgba(31, 41, 55, 0.4) 60%
    );
    transition: all 0.3s;
    opacity: 1;
  }

  &::after {
    content: "";
    ${absoluteFull}
    z-index: 20;
    background-image: linear-gradient(
      180deg,
      rgba(31, 41, 55, 0.7) 0%,
      rgba(31, 41, 55, 0.7) 60%
    );
    transition: all 0.3s;
    opacity: 0;
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

      @media only screen and (max-width: 1024px) {
        bottom: 10%;
      }

      @media only screen and (max-width: 768px) {
        bottom: 5%;
      }

      @media only screen and (max-width: 720px) {
        bottom: 20%;
      }

      @media only screen and (max-width: 380px) {
        bottom: 10%;
      }

      & h3 {
        border-bottom: 2px solid #9ca3af;
      }

      & ul {
        animation: ${fadeHorizontal(-10, 0)} 1s;
        opacity: 1;
        visibility: visible;
      }

      & nav {
        animation: ${fadeHorizontal(-10, 0)} 1.2s;
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    grid-column: 1/-1;
  }

  @media only screen and (max-width: 440px),
    only screen and (max-width: 800px) and (max-resolution: 191dpi) {
    background-image: ${(props) => `url("${props.$cover.sm}")`};
  }
`;

const ProjectBox = styled.div`
  position: absolute;
  bottom: -30%;
  left: 0;
  z-index: 40;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  width: 100%;
  height: max-content;
  padding: 2.4rem;
  transition: all 0.4s;

  @media only screen and (max-width: 768px) {
    bottom: -40%;
  }

  @media only screen and (max-width: 720px) {
    bottom: -20%;
  }

  @media only screen and (max-width: 380px) {
    bottom: -30%;
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 1.2rem;
  padding-bottom: 2px;
  border-bottom: 2px solid #4b5563;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 3.2rem;
  color: var(--color-text-white);
  letter-spacing: 0.3px;
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

const ProjectLink = styled(Link)`
  font-weight: 500;
  font-size: 2rem;
  color: var(--color-text-white);
  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #9ca3af;
    transform: scale(1.05);
  }
`;

function ProjectItem({ project, number }) {
  const { filterTechnologies } = useData();

  const techstack = filterTechnologies(project?.techstack);

  return (
    <Container tabIndex={0} $cover={project?.images.at(0)} $number={number}>
      <ProjectBox>
        <ProjectTitle>{project?.name}</ProjectTitle>
        <ProjectRow>
          {techstack?.map((tech, i) => (
            <TechItem key={i}>
              <img src={tech?.icon} alt={tech?.name} />
            </TechItem>
          ))}
        </ProjectRow>
        <ProjectRow as="nav">
          <ProjectLink as="a" href={project?.live_url || "/"} target="_blank">
            Live Preview
          </ProjectLink>
          <ProjectLink as={Link} to={project?.slug}>
            Check Details
          </ProjectLink>
        </ProjectRow>
      </ProjectBox>
    </Container>
  );
}

export default ProjectItem;
