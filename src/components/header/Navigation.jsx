import { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../../Mixins";

const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: var(--border-radius-default);
  background-color: var(--color-grey-300);

  &::before {
    position: absolute;
    content: "";
    top: 8%;
    left: 5px;
    border-radius: var(--border-radius-default);
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
  letter-spacing: var(--letter-spacing-default);
  cursor: pointer;
  ${flexCenter}
  width: 14rem;
  height: 4.2rem;
  border-radius: var(--border-radius-default);
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
