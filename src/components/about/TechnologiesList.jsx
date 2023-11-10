import styled from "styled-components";
import TechnologiesItem from "./TechnologiesItem";
import { tile } from "../../styles/Mixins";

import { useData } from "../../contexts/DataContext";

const StyledTechnologiesList = styled.ul`
  ${tile}
  grid-column: 1/-1;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function TechnologiesList() {
  const { filterTechnologies } = useData();

  const techstack = filterTechnologies([
    "html",
    "css",
    "javascript",
    "react",
    "sass",
    "git",
    "github",
  ]);

  return (
    <>
      <StyledTechnologiesList>
        {techstack.map((tech, i) => (
          <TechnologiesItem
            key={i}
            item={tech}
            number={i < 4 ? i + 1 : 7 - i}
          />
        ))}
      </StyledTechnologiesList>
    </>
  );
}

export default TechnologiesList;
