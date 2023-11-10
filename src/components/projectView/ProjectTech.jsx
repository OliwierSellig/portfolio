import styled from "styled-components";

import { fadeIn } from "../../styles/Animations";
import { useData } from "../../contexts/DataContext";

const TechHeading = styled.p`
  font-size: 2rem;
  margin-bottom: 1.2rem;
`;

const TechList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0 4px;
  margin-bottom: 2.4rem;
`;

const TechItem = styled.li`
  position: relative;
  height: 4rem;
  animation: ${fadeIn} 0.6s;

  &::before {
    position: absolute;
    content: "${(props) => props.$name}";
    top: 0;
    right: 0;
    transform: translate(80%, -80%);
    z-index: 300;
    padding: 8px 1.2rem;
    border-radius: 13px;
    font-weight: 500;
    background-color: var(--navigation-hover-color);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s;
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 1;
      visibility: visible;
    }
  }

  & img {
    width: 4rem;
    height: 4rem;
  }
`;

function ProjectTech({ techstack }) {
  const { filterTechnologies } = useData();
  const technologies = filterTechnologies(techstack);

  return (
    <>
      <TechHeading>Techstack:</TechHeading>
      <TechList>
        {technologies.map((tech, i) => (
          <TechItem tabIndex={0} $name={tech.name} key={i}>
            <img src={tech.icon} alt={tech.name} />
          </TechItem>
        ))}
      </TechList>
    </>
  );
}

export default ProjectTech;
