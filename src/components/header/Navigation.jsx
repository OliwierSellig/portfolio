import styled from "styled-components";
import { flexCenter } from "../../Mixins";
import { Link } from "react-scroll";
import { useNavigation } from "../../contexts/NavigationCotext";
import { useDarkMode } from "../../contexts/DarkModeContext";

const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: var(--border-radius-default);
  background-color: var(--color-grey-300);
  z-index: 300;

  &::before {
    position: absolute;
    content: "";
    top: 8%;
    left: 5px;
    border-radius: var(--border-radius-default);
    width: 14rem;
    height: 84%;
    background-color: var(--color-nav-active);
    transform: ${(props) =>
      props.$active === 0
        ? "none"
        : props.$active === 1
        ? "translateX(100%)"
        : "translateX(200%)"};

    transition: all 0.3s ease-in-out;
  }
`;

const StyledLink = styled(Link)`
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
    background-color: var(--navigation-hover-color);
  }
`;

function Navigation() {
  const { active, setActive } = useNavigation();
  const { inDarkMode } = useDarkMode();

  return (
    <StyledNavigation $active={active}>
      <StyledLink
        $darkMode={inDarkMode}
        href="/"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={() => setActive(0)}
      >
        About
      </StyledLink>
      <StyledLink
        $darkMode={inDarkMode}
        href="/"
        to="projects"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={() => setActive(1)}
      >
        Projects
      </StyledLink>
      <StyledLink
        $darkMode={inDarkMode}
        href="/"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={() => setActive(2)}
      >
        Contact
      </StyledLink>
    </StyledNavigation>
  );
}

export default Navigation;
