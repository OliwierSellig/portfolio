import styled from "styled-components";
import TechnologiesItem from "./TechnologiesItem";
import { tile } from "../../styles/Mixins";
import { technologyList } from "../../services/utils";

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
  return (
    <StyledTechnologiesList>
      {technologyList.map((tech, i) => (
        <TechnologiesItem key={i} item={tech} />
      ))}
    </StyledTechnologiesList>
  );
}

export default TechnologiesList;
