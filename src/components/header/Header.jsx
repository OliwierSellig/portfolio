import styled from "styled-components";
import DarkMode from "./DarkMode";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import GoBackButton from "./GoBackButton";

const StyledHeader = styled.header`
  position: ${(props) => (props.$sticky ? "fixed" : "absolute")};
  width: 100%;
  max-width: 120rem;
  padding: ${(props) => (props.$sticky ? "4px 2.4rem" : "2.4rem")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 500;
  top: 0;
  left: 50%;
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

  console.log(location.pathname);

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
