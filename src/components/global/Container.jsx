import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
