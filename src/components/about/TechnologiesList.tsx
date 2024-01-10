import { tile } from "../../styles/Mixins";
import { useData } from "../../contexts/DataContext";
import TechnologiesItem from "./TechnologiesItem";
import styled from "styled-components";
import { fadeVertical } from "../../styles/Animations";

const StyledTechnologiesList = styled.ul`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  ${tile}
  animation: ${fadeVertical(5, 0)} 1s;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function TechnologiesList() {
  const { filterTechnologies, technologies } = useData();

  const techstack = filterTechnologies(
    [
      "html",
      "css",
      "javascript",
      "react",
      "typescript",
      "next",
      "tailwind",
      "sass",
      "styled-components",
      "git",
      "github",
      "supabase",
      "figma",
    ],
    { sort: true }
  );

  return (
    <>
      {technologies && (
        <StyledTechnologiesList>
          {techstack &&
            Array.isArray(techstack) &&
            techstack.map((tech, i) => (
              <TechnologiesItem key={i} item={tech} number={i} />
            ))}
        </StyledTechnologiesList>
      )}
    </>
  );
}

export default TechnologiesList;
