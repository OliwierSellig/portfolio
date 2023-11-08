import styled from "styled-components";
import TechnologiesItem from "./TechnologiesItem";
import { tile } from "../../styles/Mixins";
import { useTechnologies } from "../../hooks/useTechnologies";
import Loader from "../global/Loader";

const LoaderContainer = styled.div`
  ${tile}
  width: 100%;
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10.4rem;
`;

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
  const { isLoading, technologies } = useTechnologies([
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
        {(isLoading || technologies.length < 1) && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
        {!isLoading &&
          technologies.length > 0 &&
          technologies.map((tech, i) => (
            <TechnologiesItem key={i} item={tech} />
          ))}
      </StyledTechnologiesList>
    </>
  );
}

export default TechnologiesList;
