import styled from "styled-components";
import DarkMode from "./DarkMode";
import Navigation from "./Navigation";

const StyledHeader = styled.header`
  width: 100%;
  height: 10rem;
  padding: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <DarkMode />
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
