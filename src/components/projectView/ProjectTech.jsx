import styled from "styled-components";

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

function ProjectTech() {
  return (
    <>
      <TechHeading>Techstack:</TechHeading>
      <TechList>
        <TechItem tabIndex={0} $name={"HTML"}>
          <img src="/svg/html.svg" alt="Tech" />
        </TechItem>
        <TechItem tabIndex={0} $name={"Sass"}>
          <img src="/svg/sass.svg" alt="Tech" />
        </TechItem>
        <TechItem tabIndex={0} $name={"JavaScript"}>
          <img src="/svg/js.svg" alt="Tech" />
        </TechItem>
        <TechItem tabIndex={0} $name={"React"}>
          <img src="/svg/react.svg" alt="Tech" />
        </TechItem>
      </TechList>
    </>
  );
}

export default ProjectTech;
