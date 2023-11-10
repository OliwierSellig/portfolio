import { Link } from "react-scroll";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${(props) => `${props.$gap}px`};
  padding: ${(props) =>
    `${props.$padding?.at(0)}rem ${props.$padding?.at(
      1
    )}rem ${props.$padding?.at(2)}rem ${props.$padding?.at(3)}rem`};
  background-color: ${(props) => props.$theme};
  box-shadow: ${(props) => props.$theme} 0 1rem 2rem -1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  letter-spacing: 0.3px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border-radius: var(--border-radius-default);
  font-size: ${(props) => `${props.$fontSize}rem`};
  font-weight: ${(props) => props.$fontWeight};
  letter-spacing: var(--letter-spacing-default);
  color: ${(props) => props.$color};

  &:focus,
  &:hover {
    background-color: ${(props) => props.$themeFocus};
    box-shadow: 0 2rem 4rem ${(props) => `rgba(${props.$themeFocusRGB}, 0.15)`};
    transform: scale(1.03);
  }

  & img {
    width: ${(props) => `${props.$iconSize}rem`};
    aspect-ratio: 1/1;
  }
`;

function CustomButton({
  isLink = false,
  dest = "/",
  interSiteLink = false,
  interSiteDest = "",
  theme,
  themeFocus,
  iconSize = 2.6,
  color = "var(--color-text-white)",
  fontWeight = 400,
  fontSize = 1.8,
  padding = [1.2, 2.4, 1.2, 2.4],
  children,
  gap = 8,
  handleClick,
}) {
  if (isLink && !interSiteLink)
    return (
      <StyledButton
        as="a"
        href={dest || "/"}
        $gap={gap}
        $padding={padding}
        $theme={theme}
        $themeFocus={themeFocus}
        target="_blank"
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        $color={color}
        $iconSize={iconSize}
      >
        {children}
      </StyledButton>
    );

  if (interSiteLink)
    return (
      <StyledButton
        as={Link}
        to={interSiteDest}
        href={dest || "/"}
        smooth={true}
        offset={0}
        duration={500}
        $gap={gap}
        $padding={padding}
        $theme={theme}
        $themeFocus={themeFocus}
        target="_blank"
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        $color={color}
        $iconSize={iconSize}
      >
        {children}
      </StyledButton>
    );

  return (
    <StyledButton
      onClick={() => handleClick?.()}
      $gap={gap}
      $padding={padding}
      $theme={theme}
      $themeFocus={themeFocus}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $color={color}
      $iconSize={iconSize}
    >
      {children}
    </StyledButton>
  );
}

export default CustomButton;
