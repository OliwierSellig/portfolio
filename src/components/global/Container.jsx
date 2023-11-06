import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  max-width: 120rem;
  margin: 0 auto;
  padding: 9.4rem 3.2rem 2.4rem;

  @media only screen and (max-width: 460px) {
    padding: 9.4rem 1.6rem 2.4rem;
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
