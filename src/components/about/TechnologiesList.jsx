import styled from "styled-components";
import TechnologiesItem from "./TechnologiesItem";
import { tile } from "../../Mixins";

const technologies = [
  { icon: "/svg/html.svg", name: "HTML" },
  { icon: "/svg/css.svg", name: "CSS" },
  { icon: "/svg/js.svg", name: "JavaScript" },
  { icon: "/svg/react.svg", name: "React" },
  { icon: "/svg/sass.svg", name: "Sass" },
  { icon: "/svg/git.svg", name: "Git" },
  { icon: "/svg/github.svg", name: "GitHub" },
];

const StyledTechnologiesList = styled.ul`
  ${tile}
  grid-column: 1/-1;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
`;

function TechnologiesList() {
  return (
    <StyledTechnologiesList>
      {technologies.map((tech, i) => (
        <TechnologiesItem key={i} item={tech} />
      ))}
    </StyledTechnologiesList>
  );
}

export default TechnologiesList;
