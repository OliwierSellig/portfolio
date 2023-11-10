import { fadeIn } from "../../styles/Animations";
import { useData } from "../../contexts/DataContext";
import styled from "styled-components";

const TechHeading = styled.p`
  margin-bottom: 1.2rem;
  font-size: 2rem;
`;

const TechList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
  padding: 0 4px;
`;

const TechItem = styled.li`
  position: relative;
  height: 4rem;
  animation: ${fadeIn} 0.6s;

  &::before {
    content: "${(props) => props.$name}";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 300;
    padding: 8px 1.2rem;
    border-radius: 13px;
    background-color: var(--navigation-hover-color);
    font-weight: 500;
    transform: translate(80%, -80%);
    transition: all 0.2s;
    opacity: 0;
    visibility: hidden;
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
