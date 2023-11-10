import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import DarkMode from "./DarkMode";
import Navigation from "./Navigation";
import GoBackButton from "./GoBackButton";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: ${(props) => (props.$sticky ? "fixed" : "absolute")};
  top: 0;
  left: 50%;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 120rem;
  padding: ${(props) => (props.$sticky ? "4px 2.4rem" : "2.4rem")};
  transform: translateX(-50%);
  transition: all 0.2s;

  @media only screen and (max-width: 360px) {
    padding: 8px 2.4rem;
  }
`;

function Header() {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos && currentScrollPos) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <StyledHeader $sticky={isSticky}>
      <DarkMode />
      {location.pathname === "/" ? <Navigation /> : <GoBackButton />}
    </StyledHeader>
  );
}

export default Header;
