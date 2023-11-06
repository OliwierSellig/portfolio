import styled, { css } from "styled-components";
import { flexCenter } from "../../Mixins";
import { Link } from "react-scroll";
import { useNavigation } from "../../contexts/NavigationCotext";
import { useEffect, useState } from "react";
import { fadeIn } from "../../Animations";
import { useDarkMode } from "../../contexts/DarkModeContext";

const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: var(--border-radius-default);
  background-color: var(--color-grey-300);
  z-index: 300;
  overflow: hidden;

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
    top: ${(props) => (props.$open ? "8px" : "-8000px")};
    opacity: ${(props) => (props.$open ? "1" : " 0")};
    top: 8px;
    visibility: ${(props) => (props.$open ? "visible" : "hidden")};
    right: 1.2rem;
    flex-direction: column;
    padding: 0;
    animation: ${(props) =>
      props.$open
        ? css`
            ${fadeIn} 0.3s
          `
        : "none"};

    &::after {
      position: fixed;
      content: "";
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 100;
    }
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
  z-index: 300;
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
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: var(--color-grey-300);
  padding: 1.2rem;
  display: none;

  @media only screen and (max-width: 360px) {
    display: block;
  }
`;

function Navigation() {
  const { active, setActive } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { inDarkMode } = useDarkMode();

  useEffect(() => {
    function hideNav() {
      setMobileMenuOpen(false);
    }

    document.addEventListener("scroll", hideNav);

    return document.removeEventListener("scroll", hideNav);
  }, []);

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
