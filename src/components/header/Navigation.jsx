import { Link } from "react-scroll";
import { flexCenter } from "../../styles/Mixins";
import { fadeHorizontal, fadeIn } from "../../styles/Animations";
import { useNavigation } from "../../contexts/NavigationContext";
import { useDarkMode } from "../../contexts/DarkModeContext";
import styled, { css } from "styled-components";

const StyledNavigation = styled.nav`
  position: relative;
  z-index: 300;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: var(--border-radius-default);
  background-color: var(--color-grey-300);
  animation: ${fadeHorizontal(10, 0)} 1s;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 8%;
    left: 5px;
    width: 14rem;
    height: 84%;
    border-radius: var(--border-radius-default);
    background-color: var(--color-nav-active);
    transform: ${(props) =>
      props.$active === 0
        ? "none"
        : props.$active === 1
        ? "translateX(100%)"
        : "translateX(200%)"};

    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 360px) {
      top: 0;
      left: 0;
      width: 100%;
      height: 6.4rem;
      transform: ${(props) =>
        props.$active === 0
          ? "none"
          : props.$active === 1
          ? "translateY(100%)"
          : "translateY(200%)"};
    }
  }

  @media only screen and (max-width: 360px) {
    position: absolute;
    top: 8px;
    right: 1.2rem;
    flex-direction: column;
    padding: 0;
    animation: ${(props) =>
      props.$open
        ? css`
            ${fadeIn} 0.3s
          `
        : "none"};
    opacity: ${(props) => (props.$open ? "1" : " 0")};
    visibility: ${(props) => (props.$open ? "visible" : "hidden")};

    &::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100vw;
      height: 100vh;
    }
  }
`;

const StyledLink = styled(Link)`
  z-index: 300;
  ${flexCenter}
  width: 14rem;
  height: 4.2rem;
  font-weight: 500;
  letter-spacing: var(--letter-spacing-default);
  border-radius: var(--border-radius-default);
  transition: background-color 0.4s;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;

  &:hover,
  &:focus {
    background-color: var(--navigation-hover-color);
  }

  @media only screen and (max-width: 360px) {
    width: 16rem;
    height: 6.4rem;
    font-size: 1.8rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  width: 6rem;
  height: 6rem;
  padding: 1.2rem;
  border-radius: 50%;
  background-color: var(--color-grey-300);

  @media only screen and (max-width: 360px) {
    display: block;
  }
`;

function Navigation() {
  const { inDarkMode } = useDarkMode();
  const { active, setActive, mobileMenuOpen, setMobileMenuOpen } =
    useNavigation();

  return (
    <>
      <StyledNavigation
        onClick={() => setMobileMenuOpen(false)}
        $open={mobileMenuOpen}
        $active={active}
      >
        <StyledLink
          href="/"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => {
            setActive(0);
            setMobileMenuOpen(false);
          }}
        >
          About
        </StyledLink>
        <StyledLink
          href="/"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => {
            setActive(1);
            setMobileMenuOpen(false);
          }}
        >
          Projects
        </StyledLink>
        <StyledLink
          href="/"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => {
            setActive(2);
            setMobileMenuOpen(false);
          }}
        >
          Contact
        </StyledLink>
      </StyledNavigation>
      <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
        <img
          src={inDarkMode ? "/svg/menu-dark.svg" : "/svg/menu-light.svg"}
          alt="Open Menu"
        />
      </MobileMenuButton>
    </>
  );
}

export default Navigation;
