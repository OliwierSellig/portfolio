import { useState } from "react";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  border: 30px;
  padding: 4px;
  border-radius: 30px;
  background-color: var(--color-grey-300);

  &::before {
    position: absolute;
    content: "";
    top: 8%;
    left: 5px;
    border-radius: 30px;
    width: 14rem;
    height: 84%;
    background-color: var(--color-grey-50);
    transform: ${(props) =>
      props.$active === 0
        ? "none"
        : props.$active === 1
        ? "translateX(100%)"
        : "translateX(200%)"};

    transition: all 0.3s ease-in-out;
  }
`;

const HeaderLink = styled.a`
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  display: flex;
  width: 14rem;
  height: 4.2rem;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  transition: background-color 0.4s;
  z-index: 10;
  user-select: none;
  -webkit-user-select: none;

  &:hover,
  &:focus {
    background-color: rgba(249, 250, 251, 0.6);
  }
`;

function Navigation() {
  const [active, setActive] = useState(0);

  return (
    <StyledNavigation $active={active}>
      <HeaderLink href="#" onClick={() => setActive(0)}>
        About
      </HeaderLink>
      <HeaderLink href="#" onClick={() => setActive(1)}>
        Projects
      </HeaderLink>
      <HeaderLink href="#" onClick={() => setActive(2)}>
        Contact
      </HeaderLink>
    </StyledNavigation>
  );
}

export default Navigation;
