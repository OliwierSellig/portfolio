import styled from "styled-components";
import { fadeHorizontal } from "../../styles/Animations";
import { absoluteFull, backgroundCenter } from "../../styles/Mixins";
import { Link } from "react-router-dom";
import { useTechnologies } from "../../hooks/useTechnologies";
import Loader from "../global/Loader";
import ProjectLoader from "./ProjectLoader";

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
        opacity: 1;
        visibility: visible;
        animation: ${fadeHorizontal(-10, 0)} 1s;
      }

      & nav {
        opacity: 1;
        visibility: visible;
        animation: ${fadeHorizontal(-10, 0)} 1.2s;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    grid-column: 1/-1;
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
  color: var(--color-text-white);
  font-size: 3.2rem;
  letter-spacing: 0.3px;
  font-weight: 500;
  font-family: "Ubuntu", sans-serif;
  padding-bottom: 2px;
  border-bottom: 2px solid #4b5563;
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

const ProjectLink = styled(Link)`
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-text-white);
  cursor: pointer;
  transition: all 0.2s;

  &:hover,
  &:focus {
    color: #9ca3af;
    transform: scale(1.05);
  }
`;

function ProjectItem({ project, isLoading }) {
  const { technologies, isLoading: loadingTechnologies } = useTechnologies(
    project?.techstack
  );

  return !isLoading && project?.name ? (
    <Container tabIndex={0} $cover={project?.images.at(0)}>
      <ProjectBox>
        <ProjectTitle>{project?.name}</ProjectTitle>
        <ProjectRow>
          {(loadingTechnologies || technologies.length < 1) && (
            <Loader size={3.8} />
          )}
          {!loadingTechnologies &&
            technologies.length > 1 &&
            technologies?.map((tech, i) => (
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
  ) : (
    <ProjectLoader />
  );
}

export default ProjectItem;
